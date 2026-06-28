import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Metadata } from 'next';
import {
  buildMetadata,
  buildSiteMetadata,
  breadcrumbSchema,
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
    assert.equal(meta.alternates?.canonical, `${SITE_URL}/features`);
    assert.equal(meta.openGraph?.url, `${SITE_URL}/features`);
    const twitter = meta.twitter as Metadata['twitter'] & { card?: string };
    assert.equal(twitter?.card, 'summary_large_image');
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
    assert.equal(og?.publishedTime, '2026-01-01');
  });

  it('sets noindex when requested', () => {
    const meta = buildMetadata({
      title: '404',
      description: 'Not found',
      path: '/404',
      noIndex: true,
    });
    const robots = meta.robots as Metadata['robots'] & { index?: boolean };
    assert.equal(robots?.index, false);
  });
});

describe('buildSiteMetadata', () => {
  it('includes RSS alternate and default robots', () => {
    const meta = buildSiteMetadata();
    assert.equal(meta.alternates?.types?.['application/rss+xml'], `${SITE_URL}/feed.xml`);
    const robots = meta.robots as Metadata['robots'] & {
      googleBot?: { 'max-image-preview'?: string };
    };
    assert.equal(robots?.googleBot?.['max-image-preview'], 'large');
  });
});

describe('structured data helpers', () => {
  it('builds breadcrumb list with absolute urls', () => {
    const schema = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]);
    assert.equal(schema['@type'], 'BreadcrumbList');
    const items = schema.itemListElement as unknown as Array<{ item?: string }>;
    assert.equal(items[1]?.item, `${SITE_URL}/services`);
  });

  it('combines nodes into @graph', () => {
    const graph = jsonLdGraph(
      organizationSchema(),
      webPageSchema({
        title: 'Home',
        description: 'Desc',
        path: '/',
      })
    );
    assert.equal(graph['@context'], 'https://schema.org');
    assert.equal(graph['@graph'].length, 2);
  });
});
