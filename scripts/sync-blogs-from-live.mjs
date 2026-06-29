/**
 * Sync blog MDX from live zyncspace.com HTML (body only — no site header/footer).
 */
import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { assertSafeSlug } from './safe-path.mjs';

const ROOT = join(process.cwd());
const BLOG_DIR = join(ROOT, 'content/blog');
const LIVE_BASE = 'https://www.zyncspace.com/blogs';

/** Primary slug → extra paths for tracking (canonical remains primary). */
const SLUG_ALIASES = {
  'building-inclusive-communication': ['inclusive-communication-guide'],
  'performance-review-conversations': ['performance-reviews-guide'],
  'crisis-communication-guide': ['crisis-communication'],
  'ai-in-workplace-communication': ['ai-workplace-communication'],
  'team-collaboration-strategies': ['team-collaboration-guide'],
  'presentation-skills-guide': ['presentation-skills'],
  'feedback-frameworks-for-growth': ['feedback-frameworks'],
  'cross-cultural-communication': ['global-team-communication'],
  'email-writing-that-get-results': ['email-writing-guide'],
  'non-verbal-communication-techniques': ['non-verbal-communication'],
  'clear-communication-team-success': ['clear-team-communication'],
  'psychology-of-effective-communication': ['communication-psychology'],
  'remote-work-communication': ['remote-team-communication'],
  'written-communication-digital-age': ['digital-written-communication'],
  'top-communication-tools': ['communication-tools-2026'],
  'building-trust-through-communication': ['trust-and-communication'],
  'meeting-culture-problem': ['async-meeting-culture'],
  'active-listening': ['active-listening-skills'],
  'navigating-difficult-conversations': ['difficult-conversations-guide'],
  'future-workplace-communication': ['workplace-communication-trends-2026'],
  'evolution-of-workplace-communication': ['workplace-communication-evolution'],
  'the-best-free-slack-alternative-for-training-teams-in-2025-and-why-we-built-zyncspace-copy': [
    'why-we-built-zyncspace',
  ],
  'top-free-alternatives-for-slack': ['slack-alternative-training-teams'],
  'the-future-of-workplace-messaging': ['workplace-messaging-future'],
  'communication-models-workplace': ['workplace-communication-models'],
};

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractMeta(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]+content="([^"]*)"`, 'i');
  const alt = new RegExp(`<meta[^>]+content="([^"]*)"[^>]+(?:name|property)="${name}"`, 'i');
  return decodeHtml(html.match(re)?.[1] || html.match(alt)?.[1] || '');
}

function extractTitle(html) {
  const raw = html.match(/<title>([^<]+)<\/title>/i)?.[1] || '';
  return decodeHtml(raw.replace(/\s*[-|].*ZyncSpace.*$/i, '').trim());
}

function extractBlogBody(html) {
  const legacySection = html.match(/<section class="blog-content">([\s\S]*?)<\/section>/i)?.[1];
  if (legacySection) {
    const body = legacySection.match(/<div class="blog-body">([\s\S]*?)<\/div>/i)?.[1];
    if (body) return body.trim().replace(/<header class="blog-header">[\s\S]*?<\/header>/gi, '');
  }

  const postContent = html.match(
    /<div class="blog-post-content">([\s\S]*?)<\/div>\s*<div class="blog-post-tags"/i,
  )?.[1];
  if (postContent) return postContent.trim();

  return null;
}

function extractHeroImage(html) {
  const legacy = html.match(/<section class="blog-content">[\s\S]*?<img[^>]+src="([^"]+)"/i)?.[1];
  if (legacy) return decodeHtml(legacy);
  const og = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)?.[1];
  return og ? decodeHtml(og) : '';
}

function extractDate(html) {
  const time = html.match(/<time[^>]+datetime="([^"]+)"/i)?.[1];
  if (time) return time.slice(0, 10);
  return '';
}

function toLocalAsset(url) {
  if (!url || url.startsWith('/assets/')) return url;
  const file = url.split('/').pop()?.split('?')[0] || '';
  if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
    return `/assets/images/stock/${file}`;
  }
  // Map common live paths
  if (url.includes('hero-dashboard')) return '/assets/images/hero-dashboard.png';
  return url;
}

function normalizeImages(html) {
  return html.replace(/src="([^"]+)"/g, (_, src) => `src="${toLocalAsset(src)}"`);
}

function buildFrontmatter({ slug, title, description, keywords, datePublished, ogImage, aliases }) {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: >-`,
    `  ${description}`,
    `keywords: >-`,
    `  ${keywords}`,
    `slug: ${slug}`,
    `datePublished: '${datePublished}'`,
    `ogImage: '${ogImage}'`,
    `thumbnail: '${ogImage}'`,
  ];
  if (aliases?.length) {
    lines.push('aliases:');
    for (const a of aliases) lines.push(`  - ${a}`);
  }
  lines.push(
    'jsonLd:',
    "  '@context': 'https://schema.org'",
    "  '@type': Article",
    `  headline: ${JSON.stringify(title)}`,
    '  description: >-',
    `    ${description}`,
    `  url: 'https://www.zyncspace.com/blogs/${slug}'`,
    `  datePublished: '${datePublished}'`,
    '  author:',
    "    '@type': Organization",
    '    name: ZyncSpace',
    '  publisher:',
    "    '@type': Organization",
    '    name: ZyncSpace',
    "    logo: 'https://www.zyncspace.com/assets/images/zyncspace-logo.png'",
    '---',
    '',
  );
  return lines.join('\n');
}

async function syncSlug(slug) {
  const url = `${LIVE_BASE}/${slug}.html`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  skip ${slug}: HTTP ${res.status}`);
    return false;
  }
  const html = await res.text();
  const title = extractTitle(html);
  const description = extractMeta(html, 'description')
    .replace(/\s*-\s*ZyncSpace.*$/i, '')
    .trim();
  const keywords = extractMeta(html, 'keywords');
  const datePublished = extractDate(html) || '2026-01-01';
  const heroImage = toLocalAsset(extractHeroImage(html));
  const ogImage =
    toLocalAsset(extractMeta(html, 'og:image')) || heroImage || '/assets/images/hero-dashboard.png';
  let body = extractBlogBody(html);
  if (!body) {
    console.warn(`  skip ${slug}: no blog-body`);
    return false;
  }
  body = normalizeImages(body);
  const aliases = SLUG_ALIASES[slug] || [];
  const mdx = `${buildFrontmatter({
    slug,
    title,
    description,
    keywords,
    datePublished,
    ogImage,
    aliases,
  })}<section class="blog-content">\n  <div class="container">\n    ${heroImage ? `<img src="${heroImage}" alt="${title.replace(/"/g, '&quot;')}" class="blog-image">` : ''}\n    <div class="blog-body">\n${body}\n    </div>\n  </div>\n</section>\n`;

  const safeSlug = assertSafeSlug(slug);
  await writeFile(join(BLOG_DIR, `${safeSlug}.mdx`), mdx, 'utf8');
  return true;
}

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'));
  const slugs = files.map((f) => f.replace(/\.mdx$/, ''));
  let ok = 0;
  for (const slug of slugs.sort()) {
    process.stdout.write(`Syncing ${slug}… `);
    const success = await syncSlug(slug);
    console.log(success ? 'ok' : 'failed');
    if (success) ok += 1;
  }
  console.log(`\nSynced ${ok}/${slugs.length} posts.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
