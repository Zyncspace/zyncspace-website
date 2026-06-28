import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, PageContent } from './types';

const ROOT = process.cwd();

export function getPageContent(slug: string): PageContent {
  const file = path.join(ROOT, 'content/pages', `${slug}.json`);
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

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(ROOT, 'content/blog');
  if (!fs.existsSync(dir)) return [];

  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title || slug),
        description: String(data.description || ''),
        keywords: String(data.keywords || ''),
        datePublished: String(data.datePublished || ''),
        ogImage: String(data.ogImage || 'https://zyncspace.com/assets/images/hero-dashboard.png'),
        jsonLd: (data.jsonLd as Record<string, unknown>) || null,
        content,
        styles: '',
      } satisfies BlogPost;
    });

  return posts.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  return getAllBlogPosts().find((p) => p.slug === slug) ?? null;
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}

export const SITE_URL = 'https://zyncspace.com';

export const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/use-cases', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/careers', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/blogs', priority: 0.9, changeFrequency: 'weekly' as const },
];
