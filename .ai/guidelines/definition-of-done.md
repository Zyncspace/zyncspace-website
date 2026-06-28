# Definition of Done — Page Checklist

A page is **complete** only when all items below are satisfied.

## Business & content

- [ ] Clearly explains **business value** (not just features)
- [ ] Answers: who we are, what problem we solve, why us, why now
- [ ] Follows customer journey stage (problem → proof → CTA)
- [ ] Has a **primary CTA** above the fold or end of section
- [ ] Claims are **evidence-backed** or marked as placeholder
- [ ] Products vs Services distinction is clear (if applicable)
- [ ] Copy targets executives — outcomes, ROI, risk reduction

## Trust & social proof

- [ ] Relevant proof on page (metrics, logos, case study link, testimonial)
- [ ] No fabricated customers, awards, or statistics
- [ ] Partner/client names only if authorized

## Design & UX

- [ ] Uses design tokens (`styles/tokens.css`) — no random spacing/colors
- [ ] Typography follows system (see `design-system/typography.md`)
- [ ] Mobile responsive (test 375px and 1440px)
- [ ] Sticky nav does not obscure content (`scroll-margin-top`)
- [ ] Breadcrumbs on nested pages (visual + JSON-LD)
- [ ] Focus states visible for interactive elements
- [ ] Respects `prefers-reduced-motion`

## SEO

- [ ] Unique `<title>` (50–60 chars ideal)
- [ ] Meta description (120–160 chars)
- [ ] Canonical URL matches `NEXT_PUBLIC_SITE_URL`
- [ ] OpenGraph + Twitter Card
- [ ] JSON-LD structured data
- [ ] Single `<h1>`; logical H2–H6 hierarchy
- [ ] All images have meaningful `alt`
- [ ] Route in `lib/seo-config.ts` SEO_ROUTES (if indexable)
- [ ] `npm run build` SEO audit passes

## Performance & accessibility

- [ ] Lighthouse performance ≥ 90 (target 95+)
- [ ] No layout shift from images (width/height set)
- [ ] Semantic HTML (`header`, `main`, `section`, `nav`, `footer`)
- [ ] Color contrast WCAG AA
- [ ] Keyboard navigable

## Engineering

- [ ] TypeScript clean (`npm run typecheck`)
- [ ] No inline styles for typography (use CSS classes)
- [ ] Content in `content/` where possible (not hardcoded in components)
- [ ] Metadata via `buildMetadata()` or `generateProductMetadata()`

## Before merge

- [ ] Reviewed on staging URL (`zyncspace.in`) if deploying there
- [ ] Internal links work (no broken hrefs)
- [ ] CTA links point to correct destination (`/contact`, signup URL, etc.)
