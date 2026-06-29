import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { blogIndexCards } from '@/content/blog-index';
import { assertSafeSlug } from '@/lib/safe-slug';
import { SITE_URL } from '@/lib/site-url';
import type { BlogPost, PageContent } from './types';

const ROOT = process.cwd();
const indexBySlug = new Map(blogIndexCards.map((c) => [c.slug, c]));

export function getPageContent(slug: string): PageContent {
  const safeSlug = assertSafeSlug(slug, 'page slug');
  // nosemgrep: javascript.lang.security.audit.path-traversal.path-join-resolve-traversal
  const file = path.join(ROOT, 'content/pages', `${safeSlug}.json`);
  return JSON.parse(fs.readFileSync(file, 'utf8')) as PageContent;
}

export function getAllPageSlugs(): string[] {
  const dir = path.join(ROOT, 'content/pages');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));
}

function parseBlogFile(slug: string): BlogPost {
  const safeSlug = assertSafeSlug(slug, 'blog slug');
  // nosemgrep: javascript.lang.security.audit.path-traversal.path-join-resolve-traversal
  const file = path.join(ROOT, 'content/blog', `${safeSlug}.mdx`);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const card = indexBySlug.get(slug);
  const aliases = Array.isArray(data.aliases) ? data.aliases.map(String) : [];

  return {
    slug,
    title: String(data.title || card?.title || slug),
    description: String(data.description || card?.excerpt || ''),
    keywords: String(data.keywords || ''),
    datePublished: String(card?.datePublished || data.datePublished || ''),
    ogImage: String(
      data.ogImage || card?.thumbnail || `${SITE_URL}/assets/images/hero-dashboard.png`,
    ),
    thumbnail: String(
      data.thumbnail || card?.thumbnail || data.ogImage || '/assets/images/hero-dashboard.png',
    ),
    category: String(card?.category || 'Team Communication'),
    readTime: card?.readTime ?? null,
    featured: card?.featured ?? false,
    aliases,
    jsonLd: (data.jsonLd as Record<string, unknown>) || null,
    content,
    styles: '',
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(ROOT, 'content/blog');
  if (!fs.existsSync(dir)) return [];

  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => parseBlogFile(file.replace('.mdx', '')));

  return posts.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const direct = getAllBlogPosts().find((p) => p.slug === slug);
  if (direct) return direct;
  return getAllBlogPosts().find((p) => p.aliases.includes(slug)) ?? null;
}

export function getCanonicalBlogSlug(slug: string): string | null {
  const post = getBlogPost(slug);
  return post?.slug ?? null;
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}

export function getAllBlogRoutes(): string[] {
  const routes = new Set<string>();
  for (const post of getAllBlogPosts()) {
    routes.add(post.slug);
    for (const alias of post.aliases) routes.add(alias);
  }
  return [...routes];
}

export { SEO_ROUTES as STATIC_ROUTES } from '@/lib/seo-config';
export { SITE_URL } from '@/lib/site-url';
