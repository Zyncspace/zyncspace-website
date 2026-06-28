import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/content';
import { SITE_URL } from '@/lib/metadata';

export const dynamic = 'force-static';

const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/services/framework', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/technology', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/industries', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/case-studies', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/pricing', priority: 0.85, changeFrequency: 'monthly' as const },
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...blogEntries];
}
