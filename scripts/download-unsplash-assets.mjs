/**
 * One-time migration: download Unsplash images into assets/ and rewrite references.
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const ASSETS = join(ROOT, 'assets');

/** photo slug (from Unsplash URL) → path under assets/ */
const PHOTO_FILES = {
  'photo-1551288049-bebda4e38f71': 'images/stock/analytics-dashboard.webp',
  'photo-1556742049-0cfed4f6a45d': 'images/stock/payment-retail.webp',
  'photo-1576091160399-112ba8d25d1d': 'images/stock/healthcare-edtech.webp',
  'photo-1586528116311-ad8dd3c8310d': 'images/stock/logistics-warehouse.webp',
  'photo-1565793298595-6a879b1d9492': 'images/stock/manufacturing-factory.webp',
  'photo-1557804506-669a67965ba0': 'images/stock/marketing-team.webp',
  'photo-1579684385127-1ef15d508118': 'images/stock/healthcare-team.webp',
  'photo-1677442136019-21780ecad995': 'images/stock/ai-technology.webp',
  'photo-1542744173-8e7e53415bb0': 'images/stock/office-meeting.webp',
  'photo-1460925895917-afdab827c52f': 'images/stock/laptop-analytics.webp',
  'photo-1552664730-d307ca884978': 'images/stock/team-planning.webp',
  'photo-1560439514-4e9645039924': 'images/stock/non-verbal-gestures.webp',
  'photo-1504711434969-e33886168f5c': 'images/stock/crisis-news.webp',
  'photo-1529156069898-49953e39b3ac': 'images/stock/team-trust.webp',
  'photo-1522202176988-66273c2fd55f': 'images/stock/diverse-team.webp',
  'photo-1573497019940-1c28c88b4f3e': 'images/stock/professional-woman.webp',
  'photo-1531482615713-2afd69097998': 'images/stock/team-workshop.webp',
  'photo-1517842645767-c639042777db': 'images/stock/laptop-writing.webp',
  'photo-1475721027785-f74eccf877e2': 'images/stock/presentation-audience.webp',
  'photo-1596526131083-e8c633c948d2': 'images/stock/email-mobile.webp',
  'photo-1516321318423-f06f85e504b3': 'images/stock/workplace-tech.webp',
  'photo-1600880292089-90a7e086ee0c': 'images/stock/professional-discussion.webp',
  'photo-1497366216548-37526070297c': 'images/stock/empty-meeting-room.webp',
  'photo-1553877522-43269d4ea984': 'images/stock/performance-review.webp',
  'photo-1573164713988-8665fc963095': 'images/stock/inclusive-team.webp',
  'photo-1551434678-e076c223a692': 'images/stock/developers-office.webp',
  'photo-1587560699334-cc4ff634909a': 'images/stock/remote-work.webp',
  'photo-1559136555-9303baea8ebd': 'images/stock/startup-collaboration.webp',
  'photo-1531415074968-036ba1b575da': 'images/stock/active-listening.webp',
  'photo-1486312338219-ce68d2c6f44d': 'images/stock/laptop-coffee.webp',
};

const UNSplash_RE = /https:\/\/images\.unsplash\.com\/(photo-[^/?\s"']+)[^"'\s]*/g;
const SCAN_DIRS = ['content'];
const SKIP_FILES = new Set(['content/pages/blogs.json', 'content/product/blogs.json']);

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, files);
      continue;
    }
    if (/\.(ts|tsx|mdx|json|md)$/.test(entry.name)) {
      const rel = relative(ROOT, full);
      if (!SKIP_FILES.has(rel)) files.push(full);
    }
  }
  return files;
}

function photoSlugFromUrl(url) {
  const match = url.match(/photo-[^/?\s"']+/);
  return match?.[0] ?? null;
}

async function downloadPhoto(slug, relPath) {
  const dest = join(ASSETS, relPath);
  await mkdir(join(dest, '..'), { recursive: true });

  const sourceUrl = `https://images.unsplash.com/${slug}?w=1400&q=85&auto=format&fit=crop`;
  const res = await fetch(sourceUrl);
  if (!res.ok) {
    throw new Error(`Failed to download ${slug}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const optimized = await sharp(buffer)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();
  await writeFile(dest, optimized);
  return { dest, bytes: optimized.length };
}

async function main() {
  const slugsNeeded = new Set(Object.keys(PHOTO_FILES));

  // Scan for any extra Unsplash URLs not in map
  const sourceFiles = [];
  for (const dir of SCAN_DIRS) {
    await walk(join(ROOT, dir), sourceFiles);
  }

  const urlToLocal = new Map();
  for (const [slug, relPath] of Object.entries(PHOTO_FILES)) {
    urlToLocal.set(slug, `/assets/${relPath}`);
  }

  for (const file of sourceFiles) {
    const text = await readFile(file, 'utf8');
    for (const match of text.matchAll(UNSplash_RE)) {
      const slug = photoSlugFromUrl(match[0]);
      if (slug && !PHOTO_FILES[slug]) {
        console.warn(`Unmapped Unsplash photo in ${relative(ROOT, file)}: ${slug}`);
      }
      if (slug) slugsNeeded.add(slug);
    }
  }

  console.log(`Downloading ${slugsNeeded.size} images…`);
  for (const slug of [...slugsNeeded].sort()) {
    const relPath = PHOTO_FILES[slug];
    if (!relPath) continue;
    const { bytes } = await downloadPhoto(slug, relPath);
    console.log(`  ✓ ${relPath} (${(bytes / 1024).toFixed(1)} KB)`);
  }

  let patchedFiles = 0;
  let replacements = 0;

  for (const file of sourceFiles) {
    let text = await readFile(file, 'utf8');
    const original = text;

    text = text.replace(UNSplash_RE, (url) => {
      const slug = photoSlugFromUrl(url);
      const local = slug ? urlToLocal.get(slug) : null;
      if (!local) return url;
      replacements += 1;
      return local;
    });

    if (text !== original) {
      await writeFile(file, text, 'utf8');
      patchedFiles += 1;
      console.log(`Updated ${relative(ROOT, file)}`);
    }
  }

  console.log(`\nDone: ${replacements} URL(s) replaced across ${patchedFiles} file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
