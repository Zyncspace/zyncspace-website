/** Shared site URL for Node build scripts (matches lib/site-url.ts) */
const PRODUCTION = 'https://www.zyncspace.com';

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    const normalized = fromEnv.replace(/\/$/, '');
    if (normalized === 'https://zyncspace.in') return 'https://www.zyncspace.in';
    if (normalized === 'https://zyncspace.com') return 'https://www.zyncspace.com';
    return normalized;
  }
  return PRODUCTION;
}
