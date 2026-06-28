import type { Metadata } from 'next';
import type { WithContext, Organization, WebSite, Article, BreadcrumbList } from 'schema-dts';

export const SITE_URL = 'https://zyncspace.com';
export const SITE_NAME = 'ZyncSpace';

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${SITE_NAME} | AI-Driven Technology Consulting`, template: `%s | ${SITE_NAME}` },
    description: 'AI-driven technology consulting and unified team workspace platform.',
    icons: {
      icon: '/assets/images/favicon/favicon.ico',
      apple: '/assets/images/favicon/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
  };
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const url = `${SITE_URL}${input.path === '/' ? '' : input.path}`;
  const image = input.image || `${SITE_URL}/assets/images/hero-dashboard.png`;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: input.type || 'website',
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@zyncspace',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

export function organizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/zyncspace-logo.png`,
    sameAs: [
      'https://twitter.com/zyncspace',
      'https://linkedin.com/company/zyncspace',
    ],
  };
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blogs/${post.slug}`,
    datePublished: post.datePublished,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/zyncspace-logo.png` },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// Re-export for legacy imports
export { buildMetadata as buildPageMetadata };
