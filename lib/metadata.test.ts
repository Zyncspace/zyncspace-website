import type { Metadata } from 'next';
import { describe, expect, it } from 'vitest';
import {
  breadcrumbSchema,
  buildMetadata,
  buildSiteMetadata,
  jsonLdGraph,
  organizationSchema,
  SITE_URL,
  webPageSchema,
} from '@/lib/metadata';

describe('buildMetadata', () => {
  it('sets canonical, openGraph url, and twitter card', () => {
    const meta = buildMetadata({
      title: 'Features',
      description: 'Product features',
      path: '/features',
    });
    expect(meta.alternates?.canonical).toBe(`${SITE_URL}/features`);
    expect(meta.openGraph?.url).toBe(`${SITE_URL}/features`);
    const twitter = meta.twitter as Metadata['twitter'] & { card?: string };
    expect(twitter?.card).toBe('summary_large_image');
  });

  it('includes article publishedTime when type is article', () => {
    const meta = buildMetadata({
      title: 'Blog Post',
      description: 'Desc',
      path: '/blogs/test',
      type: 'article',
      publishedTime: '2026-01-01',
    });
    const og = meta.openGraph as Metadata['openGraph'] & { publishedTime?: string };
    expect(og?.publishedTime).toBe('2026-01-01');
  });

  it('sets noindex when requested', () => {
    const meta = buildMetadata({
      title: '404',
      description: 'Not found',
      path: '/404',
      noIndex: true,
    });
    const robots = meta.robots as Metadata['robots'] & { index?: boolean };
    expect(robots?.index).toBe(false);
  });
});

describe('buildSiteMetadata', () => {
  it('includes RSS alternate and default robots', () => {
    const meta = buildSiteMetadata();
    expect(meta.alternates?.types?.['application/rss+xml']).toBe(`${SITE_URL}/feed.xml`);
    const robots = meta.robots as Metadata['robots'] & {
      googleBot?: { 'max-image-preview'?: string };
    };
    expect(robots?.googleBot?.['max-image-preview']).toBe('large');
  });
});

describe('structured data helpers', () => {
  it('builds breadcrumb list with absolute urls', () => {
    const schema = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]);
    expect(schema['@type']).toBe('BreadcrumbList');
    const items = schema.itemListElement as unknown as Array<{ item?: string }>;
    expect(items[1]?.item).toBe(`${SITE_URL}/services`);
  });

  it('combines nodes into @graph', () => {
    const graph = jsonLdGraph(
      organizationSchema(),
      webPageSchema({
        title: 'Home',
        description: 'Desc',
        path: '/',
      }),
    );
    expect(graph['@context']).toBe('https://schema.org');
    expect(graph['@graph']).toHaveLength(2);
  });
});
