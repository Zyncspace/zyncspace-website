#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeXml, getBlogPosts } from './blog-posts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITE_URL = 'https://zyncspace.com';

const posts = getBlogPosts(ROOT);
const items = posts
  .map(
    (p) => `<item>
  <title>${escapeXml(p.title)}</title>
  <link>${SITE_URL}/blogs/${p.slug}</link>
  <guid>${SITE_URL}/blogs/${p.slug}</guid>
  <description>${escapeXml(p.description)}</description>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`,
  )
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>ZyncSpace Blog</title>
  <link>${SITE_URL}/blogs</link>
  <description>Insights on workplace communication and team collaboration.</description>
  <language>en-us</language>
${items}
</channel>
</rss>`;

const outDir = path.join(ROOT, 'out');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'feed.xml'), rss);
console.log(`Generated feed.xml with ${posts.length} posts`);
