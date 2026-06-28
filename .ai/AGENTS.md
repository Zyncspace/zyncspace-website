# Agent Instructions — ZyncSpace Website

You are working on the **ZyncSpace** B2B marketing site (Next.js 15 static export): **Products + Services** for an enterprise technology company.

## Before you code

1. Read `.ai/guidelines/definition-of-done.md` for page requirements.
2. Read `.ai/design-system/typography.md` before changing fonts or headings.
3. Read `.ai/content/ai-content-rules.md` — never invent customers, metrics, or certifications.

## Non-negotiables

- **Typography**: H1/H2 = Playfair serif; H3–H6/UI/body = Inter sans; code = JetBrains mono. Use tokens from `styles/tokens.css`.
- **Messaging**: Outcomes and ROI, not feature lists, on marketing pages.
- **SEO**: Every page needs title, description, canonical, OG, JSON-LD. Site URL from `NEXT_PUBLIC_SITE_URL`.
- **Staging**: `https://www.zyncspace.in` · **Production**: `https://www.zyncspace.com`
- **One H1 per page**. Meaningful `alt` on all images.
- **Do not** add fake testimonials, logos, awards, or project counts.

## Project layout

```
app/           → Next.js routes (pages, sitemap, robots)
components/    → React components (layout/, services/, product/, seo/)
content/       → JSON/MDX content (services.ts, blog/, pages/)
styles/        → tokens.css, typography.css, aetheris.css, product.css
lib/           → metadata, site-url, seo-config
scripts/       → build, SEO file generation, deploy helpers
.ai/           → design & business guidelines (this folder)
```

## When adding a page

1. Create route in `app/`
2. Add `buildMetadata()` with title, description, path
3. Add JSON-LD (breadcrumbs + WebPage minimum)
4. Add route to `lib/seo-config.ts` SEO_ROUTES
5. Follow customer journey: Problem → Impact → Solution → Proof → CTA
6. Run `npm run build` (includes SEO audit)

## CSS rules

- Never hardcode font-family except in `styles/typography.css`
- Use design tokens (`--text-*`, `--space-*`, `--accent-brand`)
- Prefer CSS classes over inline styles
- Import order: tokens → typography → aetheris → product (via `globals.css`)

## Full docs

See `.ai/README.md` for the complete index.
