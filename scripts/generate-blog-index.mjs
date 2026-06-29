/**
 * Build content/blog-index.ts from blogs.json listing metadata.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const blogsJson = JSON.parse(
  await readFile(join(process.cwd(), 'content/pages/blogs.json'), 'utf8'),
);

function extractCards(html) {
  const cards = [];

  const featured = html.match(/<div class="featured-blog[\s\S]*?<h2><a href="blogs\/([^"]+)\.html">([^<]+)<\/a><\/h2>[\s\S]*?<p class="blog-excerpt">([^<]+)<\/p>/);
  if (featured) {
    const meta = html.match(/featured-blog[\s\S]*?<span class="blog-category">([^<]+)<\/span>[\s\S]*?<time datetime="([^"]+)">[^<]*<\/time>[\s\S]*?<span>(\d+ min read)<\/span>/);
    const img = html.match(/featured-blog[\s\S]*?<img src="([^"]+)"/)?.[1];
    cards.push({
      slug: featured[1],
      title: featured[2],
      excerpt: featured[3],
      category: meta?.[1] || 'Featured',
      datePublished: meta?.[2] || '2026-02-18',
      readTime: meta?.[3] || '10 min read',
      thumbnail: img,
      featured: true,
    });
  }

  const articleRe =
    /<article class="card blog-card[\s\S]*?<img src="([^"]+)" alt="([^"]*)">[\s\S]*?<span class="blog-category">([^<]+)<\/span>[\s\S]*?<time datetime="([^"]+)">[\s\S]*?<h3><a href="blogs\/([^"]+)\.html">([^<]+)<\/a><\/h3>[\s\S]*?<p class="blog-excerpt">([^<]+)<\/p>/g;

  for (const m of html.matchAll(articleRe)) {
    cards.push({
      slug: m[5],
      title: m[6],
      excerpt: m[7],
      category: m[3],
      datePublished: m[4],
      readTime: null,
      thumbnail: m[1],
      featured: false,
    });
  }

  return cards;
}

const cards = extractCards(blogsJson.content);

// evolution post exists in MDX but not blogs.json — add if missing
if (!cards.find((c) => c.slug === 'evolution-of-workplace-communication')) {
  cards.push({
    slug: 'evolution-of-workplace-communication',
    title: 'The Evolution of Workplace Communication',
    excerpt: 'How workplace communication has transformed from memos to modern collaboration platforms.',
    category: 'Team Communication',
    datePublished: '2025-12-10',
    readTime: null,
    thumbnail: '/assets/images/stock/workplace-tech.webp',
    featured: false,
  });
}

const out = `/** Auto-generated from content/pages/blogs.json — run: node scripts/generate-blog-index.mjs */
export type BlogIndexCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublished: string;
  readTime: string | null;
  thumbnail: string;
  featured: boolean;
};

export const blogIndexCards: BlogIndexCard[] = ${JSON.stringify(cards, null, 2)};

export const blogCategories = [
  'All Posts',
  'Team Communication',
  'Leadership',
  'Remote Work',
  'Productivity',
] as const;
`;

await writeFile(join(process.cwd(), 'content/blog-index.ts'), out);
console.log(`Generated blog-index.ts with ${cards.length} cards`);
