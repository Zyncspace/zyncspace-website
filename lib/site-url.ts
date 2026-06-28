/** Build-time site URL — set NEXT_PUBLIC_SITE_URL before `next build` */

export const PRODUCTION_SITE_URL = 'https://zyncspace.com';
export const STAGING_SITE_URL = 'https://zyncspace.in';

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, '');
}

/** Resolved once at build time from NEXT_PUBLIC_SITE_URL */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return normalizeSiteUrl(fromEnv);
  return PRODUCTION_SITE_URL;
}

export const SITE_URL = getSiteUrl();
export const IS_PRODUCTION = SITE_URL === PRODUCTION_SITE_URL;
export const IS_STAGING = SITE_URL === STAGING_SITE_URL;
