/** Build-time site URL - set NEXT_PUBLIC_SITE_URL before `next build` */

const PRODUCTION_SITE_URL = 'https://www.zyncspace.com';
const STAGING_SITE_URL = 'https://www.zyncspace.in';

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, '');
}

function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return normalizeSiteUrl(env);
  return PRODUCTION_SITE_URL;
}

function canonicalSiteUrl(url: string): string {
  const normalized = normalizeSiteUrl(url);
  if (normalized === 'https://zyncspace.in') return STAGING_SITE_URL;
  if (normalized === 'https://zyncspace.com') return PRODUCTION_SITE_URL;
  return normalized;
}

export const SITE_URL = canonicalSiteUrl(getSiteUrl());
