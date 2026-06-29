/** Central SEO constants — single source for metadata, sitemap, and audits */

import { SITE_URL } from '@/lib/site-url';

export {
  IS_PRODUCTION,
  IS_STAGING,
  PRODUCTION_SITE_URL,
  SITE_URL,
  STAGING_SITE_URL,
} from '@/lib/site-url';

export const SITE_NAME = 'ZyncSpace';

export const SITE_DESCRIPTION =
  'AI-driven technology consulting and unified team workspace — chat, tasks, calendar, and AI in one platform.';

export const DEFAULT_KEYWORDS = [
  'technology consulting',
  'AI consulting',
  'software engineering',
  'digital transformation',
  'team workspace',
  'SaaS development',
  'cloud engineering',
  'custom software',
  'ZyncSpace',
].join(', ');

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/hero-dashboard.png`;

export const SOCIAL = {
  twitter: '@zyncspace',
  linkedin: 'https://linkedin.com/company/zyncspace',
  twitterUrl: 'https://twitter.com/zyncspace',
  github: 'https://github.com/zyncspace',
  youtube: 'https://www.youtube.com/@zyncspace',
} as const;

export const THEME_COLOR = '#4F46E5';

export type SeoRoute = {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

export const SEO_ROUTES: SeoRoute[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/services/framework', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/technology', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/industries', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/case-studies', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/pricing', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/features', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/use-cases', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/trust-center', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/blogs', priority: 0.9, changeFrequency: 'weekly' },
];

export const AI_CRAWLER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'Bytespider',
  'cohere-ai',
] as const;
