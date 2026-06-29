#!/usr/bin/env node
/** Copies content/pages/*.json to content/product/ for static product page loaders */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const src = path.join(ROOT, 'content/pages');
const dest = path.join(ROOT, 'content/product');

if (!fs.existsSync(src)) {
  console.log('No content/pages to extract.');
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });
const files = fs.readdirSync(src).filter((f) => f.endsWith('.json'));

for (const file of files) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
}

console.log(`Extracted ${files.length} product pages to content/product/`);
