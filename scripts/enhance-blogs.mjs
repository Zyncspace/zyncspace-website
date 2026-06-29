/**
 * Apply SEO enhancements, data callouts, and FAQs to all blog MDX files.
 * Run: node scripts/enhance-blogs.mjs
 */

import { execFile } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { promisify } from 'node:util';
import matter from 'gray-matter';

const execFileAsync = promisify(execFile);

const BLOG_DIR = join(process.cwd(), 'content/blog');
const IMAGE_BASE = '/assets/images/blog';

const { stdout } = await execFileAsync('npx', ['tsx', 'scripts/load-blog-enhancements.ts'], {
  cwd: process.cwd(),
  encoding: 'utf8',
});
const blogEnhancements = JSON.parse(stdout);

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildDataCallout(points) {
  const items = points.map((p) => `        <li>${escapeHtml(p)}</li>`).join('\n');
  return `
<div class="blog-data-callout" role="note" aria-label="Key data points">
  <h3>Key data points</h3>
  <ul>
${items}
  </ul>
</div>`;
}

function buildFaqSection(faqs) {
  if (!faqs?.length) return '';
  const items = faqs
    .map(
      (f) => `    <details class="blog-faq-item">
      <summary>${escapeHtml(f.question)}</summary>
      <p>${escapeHtml(f.answer)}</p>
    </details>`,
    )
    .join('\n');
  return `
<div class="blog-faq" aria-label="Frequently asked questions">
  <h2>Frequently asked questions</h2>
${items}
</div>`;
}

function stripExistingEnhancements(html) {
  return html
    .replace(/<div class="blog-data-callout"[\s\S]*?<\/div>\s*/g, '')
    .replace(/<div class="blog-faq"[\s\S]*?<\/div>\s*/g, '');
}

function injectEnhancements(bodyHtml, enhancement) {
  let body = stripExistingEnhancements(bodyHtml);
  const callout = buildDataCallout(enhancement.dataPoints);
  const faq = buildFaqSection(enhancement.faqs);

  if (body.match(/<p class="lead">/)) {
    body = body.replace(/(<p class="lead">[\s\S]*?<\/p>)/, `$1\n${callout}`);
  } else {
    body = `${callout}\n${body}`;
  }

  if (body.match(/<h2>Conclusion<\/h2>/i)) {
    body = body.replace(/<h2>Conclusion<\/h2>/i, `${faq}\n\n            <h2>Conclusion</h2>`);
  } else {
    body = `${body}\n${faq}`;
  }

  return body;
}

function updateImagePath(content, slug, title) {
  const imagePath = `${IMAGE_BASE}/${slug}.webp`;
  return content
    .replace(
      /<img[^>]+class="blog-image"[^>]*>/,
      `<img src="${imagePath}" alt="${title.replace(/"/g, '&quot;')}" class="blog-image" width="1200" height="675" loading="lazy">`,
    )
    .replace(/src="\/assets\/images\/[^"]+"/g, (m) => {
      if (m.includes('blog-image') || m.includes('blog/')) return m;
      return `src="${imagePath}"`;
    });
}

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'));
  let updated = 0;

  for (const file of files) {
    const slug = file.replace('.mdx', '');
    const enhancement = blogEnhancements[slug];
    if (!enhancement) {
      console.warn(`No enhancement for ${slug}`);
      continue;
    }

    const filePath = join(BLOG_DIR, file);
    const raw = await readFile(filePath, 'utf8');
    const { data, content } = matter(raw);

    const imagePath = `${IMAGE_BASE}/${slug}.webp`;
    data.description = enhancement.description;
    data.keywords = enhancement.keywords;
    data.ogImage = imagePath;
    data.thumbnail = imagePath;
    if (data.jsonLd) {
      data.jsonLd.description = enhancement.description;
      data.jsonLd.headline = data.title || data.jsonLd.headline;
    }

    let newContent = content;
    const bodyMatch = content.match(
      /<div class="blog-body">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/,
    );
    if (bodyMatch) {
      const enhancedBody = injectEnhancements(bodyMatch[1], enhancement);
      newContent = content.replace(bodyMatch[1], enhancedBody);
    }

    newContent = updateImagePath(newContent, slug, String(data.title || slug));

    await writeFile(filePath, matter.stringify(newContent, data));
    updated += 1;
    console.log(`Enhanced ${slug}`);
  }

  // Update blog-index thumbnails
  const indexPath = join(process.cwd(), 'content/blog-index.ts');
  let indexSrc = await readFile(indexPath, 'utf8');
  for (const slug of Object.keys(blogEnhancements)) {
    const imagePath = `${IMAGE_BASE}/${slug}.webp`;
    const re = new RegExp(`("slug": "${slug}"[\\s\\S]*?"thumbnail": ")[^"]+(")`, 'm');
    indexSrc = indexSrc.replace(re, `$1${imagePath}$2`);
    const excerptRe = new RegExp(`("slug": "${slug}"[\\s\\S]*?"excerpt": ")[^"]+(")`, 'm');
    const excerpt = blogEnhancements[slug].description.slice(0, 155).replace(/"/g, '\\"');
    if (indexSrc.match(excerptRe)) {
      indexSrc = indexSrc.replace(excerptRe, `$1${excerpt}$2`);
    }
  }
  await writeFile(indexPath, indexSrc);

  console.log(`\nDone: ${updated} posts enhanced.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
