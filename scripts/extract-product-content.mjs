#!/usr/bin/env node
/** Copies content/pages/*.json to content/product/ and emits typed TS modules */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  const slug = file.replace(/\.json$/, '');
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
  const ts = `import type { PageContent } from '@/lib/types';
import data from './${file}';

const page = data as PageContent;
export default page;
`;
  fs.writeFileSync(path.join(dest, `${slug}.ts`), ts);
}

const index = `${files
  .map((f) => f.replace(/\.json$/, ''))
  .map((slug) => `export { default as ${slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Page } from './${slug}';`)
  .join('\n')}\n`;
fs.writeFileSync(path.join(dest, 'index.ts'), index);

console.log(`Extracted ${files.length} product pages to content/product/`);
