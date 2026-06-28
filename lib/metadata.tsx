import type { Metadata } from 'next';
import type {
  WithContext,
  Organization,
  WebSite,
  Article,
  BreadcrumbList,
  WebPage,
  Service,
  ProfessionalService,
  CollectionPage,
  FAQPage,
} from 'schema-dts';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SOCIAL,
  THEME_COLOR,
} from '@/lib/seo-config';
import { siteContact } from '@/content/site';

export { SITE_URL, SITE_NAME } from '@/lib/seo-config';

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
};

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

function buildVerification(): Metadata['verification'] {
  const verification: NonNullable<Metadata['verification']> = {};
  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
    verification.other = {
      ...(verification.other ?? {}),
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    };
  }
  if (process.env.NEXT_PUBLIC_YANDEX_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  }
  return Object.keys(verification).length ? verification : undefined;
}

const defaultRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  locale: 'en_US',
  url: SITE_URL,
  siteName: SITE_NAME,
  title: `${SITE_NAME} | AI-Driven Technology Consulting`,
  description: SITE_DESCRIPTION,
  images: [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} — AI-driven technology consulting and team workspace`,
    },
  ],
};

const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  site: SOCIAL.twitter,
  creator: SOCIAL.twitter,
  title: `${SITE_NAME} | AI-Driven Technology Consulting`,
  description: SITE_DESCRIPTION,
  images: [DEFAULT_OG_IMAGE],
};

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: 'technology',
    referrer: 'origin-when-cross-origin',
    formatDetection: { email: false, address: false, telephone: false },
    title: {
      default: `${SITE_NAME} | AI-Driven Technology Consulting`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    robots: defaultRobots,
    alternates: {
      canonical: SITE_URL,
      languages: { 'en-US': SITE_URL, 'x-default': SITE_URL },
      types: { 'application/rss+xml': `${SITE_URL}/feed.xml` },
    },
    openGraph: defaultOpenGraph,
    twitter: defaultTwitter,
    verification: buildVerification(),
    icons: {
      icon: [
        { url: '/assets/images/favicon/favicon.ico' },
        { url: '/assets/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: '/assets/images/favicon/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
    appleWebApp: { capable: true, title: SITE_NAME, statusBarStyle: 'default' },
    other: {
      'msapplication-TileColor': THEME_COLOR,
    },
  };
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path);
  const image = input.image || DEFAULT_OG_IMAGE;
  const robots = input.noIndex ? { index: false, follow: false } : defaultRobots;

  const openGraph: NonNullable<Metadata['openGraph']> = {
    title: input.title,
    description: input.description,
    url,
    type: input.type || 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [{ url: image, width: 1200, height: 630, alt: input.title }],
    ...(input.type === 'article' && input.publishedTime
      ? {
          publishedTime: input.publishedTime,
          modifiedTime: input.modifiedTime || input.publishedTime,
          authors: [SITE_NAME],
          section: input.section || 'Blog',
        }
      : {}),
  };

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords || DEFAULT_KEYWORDS,
    robots,
    alternates: {
      canonical: url,
      languages: { 'en-US': url, 'x-default': url },
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      site: SOCIAL.twitter,
      creator: SOCIAL.twitter,
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
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/images/zyncspace-logo.png`,
      width: '512',
      height: '512',
    },
    description: SITE_DESCRIPTION,
    email: siteContact.email,
    sameAs: [SOCIAL.twitterUrl, SOCIAL.linkedin],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteContact.supportEmail,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteContact.email,
        availableLanguage: ['English'],
      },
    ],
  };
}

export function websiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
}

export function webPageSchema(page: {
  title: string;
  description: string;
  path: string;
}): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-US',
  };
}

export function professionalServiceSchema(): WithContext<ProfessionalService> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professional-service`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: [
      'AI Consulting',
      'Software Engineering',
      'Cloud Architecture',
      'Digital Transformation',
      'UX Design',
      'DevOps & Security',
    ],
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    ...(service.serviceType ? { serviceType: service.serviceType } : {}),
  };
}

export function collectionPageSchema(page: {
  title: string;
  description: string;
  path: string;
}): WithContext<CollectionPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(page.path)}#collection`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-US',
  };
}

export function faqSchema(items: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  wordCount?: number;
}): WithContext<Article> {
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'en-US',
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    image: post.image || DEFAULT_OG_IMAGE,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/zyncspace-logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': `${SITE_URL}/#website` },
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
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

/** Combine multiple schema.org nodes in a single @graph document */
export function jsonLdGraph(...nodes: object[]): { '@context': string; '@graph': object[] } {
  const graph = nodes.map((node) => {
    const { '@context': _, ...rest } = node as Record<string, unknown>;
    return rest;
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export { buildMetadata as buildPageMetadata };
