#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITE_URL = 'https://zyncspace.com';
const blogDir = path.join(ROOT, 'content/blog');

function getPosts() {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const titleMatch = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
      const descMatch = raw.match(/^description:\s*["']?(.+?)["']?\s*$/m);
      const dateMatch = raw.match(/^datePublished:\s*["']?(.+?)["']?\s*$/m);
      const slug = file.replace(/\.mdx$/, '');
      return {
        slug,
        title: titleMatch?.[1] || slug,
        description: descMatch?.[1] || '',
        date: dateMatch?.[1] || new Date().toISOString(),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const posts = getPosts();
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

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
