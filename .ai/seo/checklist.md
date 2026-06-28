# SEO Checklist

## Per-page requirements

- [ ] Unique `title` (via `buildMetadata()` or `generateProductMetadata()`)
- [ ] Meta `description` (120–160 characters)
- [ ] `keywords` where relevant
- [ ] Canonical URL = `{SITE_URL}{path}`
- [ ] OpenGraph: title, description, url, image (1200×630)
- [ ] Twitter Card: `summary_large_image`
- [ ] JSON-LD: minimum WebPage + BreadcrumbList on inner pages
- [ ] Single `<h1>`
- [ ] Logical H2–H6 with target keywords in headings where natural
- [ ] All `<img>` have meaningful `alt`
- [ ] Internal links to related services/product pages

## Site-wide (generated at build)

| File | Source |
|------|--------|
| `sitemap.xml` | `app/sitemap.ts` |
| `robots.txt` | `app/robots.ts` |
| `feed.xml` | `scripts/generate-seo-files.mjs` |
| `llms.txt` | `scripts/generate-seo-files.mjs` |
| `manifest.webmanifest` | `app/manifest.ts` |

## Environment URLs

| Environment | URL | Set via |
|-------------|-----|---------|
| Staging | `https://zyncspace.in` | `NEXT_PUBLIC_SITE_URL` or GitHub `SITE_URL` var |
| Production | `https://zyncspace.com` | Same |

All canonical, sitemap, robots, JSON-LD, and llms.txt URLs must match the build environment.

## Schema types by page

| Page | Schema |
|------|--------|
| Layout (global) | Organization + WebSite `@graph` |
| Home | WebPage + ProfessionalService |
| Services hub | Service + BreadcrumbList |
| Service detail | Service + BreadcrumbList + WebPage |
| Product pages | WebPage + BreadcrumbList (+ custom from product JSON) |
| Blog index | CollectionPage |
| Blog post | Article + BreadcrumbList |
| Contact | WebPage + BreadcrumbList |

## Verification

```bash
NEXT_PUBLIC_SITE_URL=https://zyncspace.in npm run build
# Includes SEO audit — must pass before deploy
```

## Optional env vars

- `NEXT_PUBLIC_GA_ID` — Google Analytics
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`

## Deploy content-types

Deploy script `scripts/upload-seo-assets.sh` sets:

- `robots.txt` → `text/plain`
- `sitemap.xml` → `application/xml`
- `feed.xml` → `application/rss+xml`
- `llms.txt` → `text/plain`

## Code references

- `lib/metadata.tsx` — `buildMetadata()`, schema helpers
- `lib/seo-config.ts` — routes, keywords, social
- `lib/site-url.ts` — URL resolution
- `scripts/seo-audit.mjs` — post-build validation
