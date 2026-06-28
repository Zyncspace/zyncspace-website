/** Shared site URL for Node build scripts (matches lib/site-url.ts) */
const PRODUCTION = 'https://zyncspace.com';

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  return PRODUCTION;
}
