import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/content';
import { SITE_URL } from '@/lib/metadata';
import { SEO_ROUTES } from '@/lib/seo-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  const staticEntries = SEO_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: buildTime,
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
