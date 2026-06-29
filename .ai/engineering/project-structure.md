# Project Structure

```
zyncspace-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, fonts, nav, footer
│   ├── page.tsx              # Homepage
│   ├── globals.css           # CSS entry (tokens → typography → themes)
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # robots.txt
│   ├── manifest.ts           # PWA manifest
│   ├── viewport.ts           # Theme color, viewport
│   ├── services/             # Consulting pages
│   └── (product)/            # Product route group
│       ├── features/
│       ├── pricing/
│       ├── blogs/
│       └── ...
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── services/             # Home sections, service components
│   ├── product/              # Product page shell
│   └── seo/                  # Analytics, PageJsonLd
├── content/
│   ├── services.ts           # All consulting section copy
│   ├── service-pages.ts      # Extended service page content
│   ├── site.ts               # Contact, routes, company info
│   ├── blog/*.mdx            # Blog posts
│   └── product/*.json        # Extracted product pages
├── lib/
│   ├── site-url.ts           # Staging/production URL
│   ├── seo-config.ts         # SEO routes & constants
│   ├── metadata.tsx          # Metadata + JSON-LD builders
│   └── content.ts            # Blog/page loaders
├── styles/
│   ├── tokens.css            # Design tokens
│   ├── typography.css        # Font system
│   ├── aetheris.css          # Consulting theme
│   └── product.css           # Product theme
├── scripts/
│   ├── generate-seo-files.mjs
│   ├── seo-audit.mjs
│   └── upload-seo-assets.sh
├── .ai/                      # Guidelines (this folder)
├── .cursor/rules/            # Cursor agent rules
└── public/assets/            # Static images, favicons
```

## Node.js & runtime

- **Node.js:** `22.13.1` (`.nvmrc` - run `nvm use` locally)
- **Next.js:** 16.x (latest)
- **React:** 19

```bash
nvm use
npm ci
npm run dev
```

## Key commands

```bash
npm run dev          # Local dev (clears stale .next)
npm run build        # Static export + SEO files + audit
npm run check:seo    # Audit out/ only
npm test             # Metadata unit tests
```

## Route map

See `.ai/content/products-vs-services.md` for Products vs Services routes.

## Legacy (do not extend)

- `css/` at repo root - legacy static site
- `blogs/*.html` - removed; use Next.js `/blogs`
- `js/main.js` - legacy
