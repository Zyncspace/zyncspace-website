#!/usr/bin/env node
/** Basic SEO audit on exported HTML in out/ */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'out');
const errors = [];

function walk(dir) {
  if (!fs.existsSync(dir)) {
    errors.push('out/ directory not found — run build first');
    return;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_next')) walk(full);
    else if (entry.name.endsWith('.html')) checkHtml(full);
  }
}

function checkHtml(file) {
  const rel = path.relative(outDir, file);
  if (rel === '404.html') return;
  const html = fs.readFileSync(file, 'utf8');
  if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) errors.push(`${rel}: missing <title>`);
  if (!/<meta[^>]+name=["']description["']/i.test(html)) errors.push(`${rel}: missing meta description`);
  if (!/<link[^>]+rel=["']canonical["']/i.test(html) && !/<meta[^>]+property=["']og:url["']/i.test(html)) {
    errors.push(`${rel}: missing canonical or og:url`);
  }
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count === 0) errors.push(`${rel}: no h1`);
  if (h1Count > 1) errors.push(`${rel}: multiple h1 (${h1Count})`);
  const imgs = html.match(/<img[^>]*>/gi) || [];
  for (const img of imgs) {
    if (!/alt=["'][^"']*["']/i.test(img)) errors.push(`${rel}: img missing alt`);
  }
}

walk(outDir);
if (errors.length) {
  console.error('SEO audit failed:\n' + errors.slice(0, 50).join('\n'));
  if (errors.length > 50) console.error(`... and ${errors.length - 50} more`);
  process.exit(1);
}
console.log('SEO audit passed');
