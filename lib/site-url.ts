/** Build-time site URL — set NEXT_PUBLIC_SITE_URL before `next build` */

export const PRODUCTION_SITE_URL = 'https://www.zyncspace.com';
export const STAGING_SITE_URL = 'https://www.zyncspace.in';

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, '');
}

/** Resolved once at build time from NEXT_PUBLIC_SITE_URL */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return normalizeSiteUrl(env);
  return PRODUCTION_SITE_URL;
}

/** Ensure apex domains redirect target uses www for zyncspace TLDs */
export function canonicalSiteUrl(url: string): string {
  const normalized = normalizeSiteUrl(url);
  if (normalized === 'https://zyncspace.in') return STAGING_SITE_URL;
  if (normalized === 'https://zyncspace.com') return PRODUCTION_SITE_URL;
  return normalized;
}

export const SITE_URL = canonicalSiteUrl(getSiteUrl());
export const IS_PRODUCTION = SITE_URL === PRODUCTION_SITE_URL;
export const IS_STAGING = SITE_URL === STAGING_SITE_URL;
