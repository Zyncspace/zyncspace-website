import fs from 'fs';
import path from 'path';
import type { PageContent } from '@/lib/types';

const ROOT = process.cwd();

export function getProductPage(slug: string): PageContent {
  const tsPath = path.join(ROOT, 'content/product', `${slug}.json`);
  const pagesPath = path.join(ROOT, 'content/pages', `${slug}.json`);
  const file = fs.existsSync(tsPath) ? tsPath : pagesPath;
  if (!fs.existsSync(file)) throw new Error(`Product page not found: ${slug}`);
  return JSON.parse(fs.readFileSync(file, 'utf8')) as PageContent;
}

export const PRODUCT_SLUGS = [
  'features',
  'use-cases',
  'pricing',
  'about',
  'careers',
  'contact',
  'privacy-policy',
  'terms-of-service',
  'blogs',
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];
