import fs from 'node:fs';
import path from 'node:path';

export function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Read blog post frontmatter from MDX files under content/blog. */
export function getBlogPosts(root) {
  const blogDir = path.join(root, 'content/blog');
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.mdx'))
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
