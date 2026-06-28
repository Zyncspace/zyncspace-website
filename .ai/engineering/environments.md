# Environments — Staging vs Production

## URLs

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Staging** | https://zyncspace.in | Current live preview / QA |
| **Production** | https://zyncspace.com | Production when ready |

## How it works

Site URL is **baked in at build time** via `NEXT_PUBLIC_SITE_URL`.

All of these update automatically:

- Canonical tags
- OpenGraph URLs
- JSON-LD `@id` and `url` fields
- `robots.txt` Host + Sitemap
- `sitemap.xml` loc entries
- `feed.xml` and `llms.txt`

## Local development

Copy `.env.example` → `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://zyncspace.in
```

## GitHub Actions deploy

Priority order (`.github/workflows/deploy-to-s3.yml`):

1. Manual workflow input `site_url`
2. Repository variable `SITE_URL`
3. Branch default: `main` → `zyncspace.com`, other branches → `zyncspace.in`

### Staging deploy (now)

Set repository variable:

```
SITE_URL = https://zyncspace.in
```

### Production cutover

```
SITE_URL = https://zyncspace.com
```

Redeploy. Update DNS/S3 bucket if switching hosts.

## Code reference

```typescript
// lib/site-url.ts
export const SITE_URL = getSiteUrl(); // from NEXT_PUBLIC_SITE_URL
export const PRODUCTION_SITE_URL = 'https://zyncspace.com';
export const STAGING_SITE_URL = 'https://zyncspace.in';
```

## Verify after deploy

```bash
curl -s https://zyncspace.in/robots.txt | grep Sitemap
curl -sI https://zyncspace.in/sitemap.xml | grep content-type
# Canonical on homepage should match deployed domain
```

## Product app (separate)

Team workspace signup lives at `https://chat.zyncspace.com` — not environment-switched; always production app URL in CTAs.
