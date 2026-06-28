# UI Components

## Navigation (`components/layout/Navbar.tsx`)

- Fixed top, transparent → solid dark on scroll
- Logo: image only, `alt="ZyncSpace logo"`
- Dropdowns: Services + Product
- Mobile: hamburger menu
- Primary CTA: Contact / Book Consultation

## Hero (`components/services/sections.tsx` → `HeroSection`)

- Dark background, `.hero` / `.hero-bg`
- Overline: `.hero-label`
- H1: serif display (`--text-display`)
- Lead: `.text-lead` weight light
- CTAs: `.btn-white`, `.btn-outline-dark`
- Stats: `.hero-stat-card` with `.stat-num` + `.stat-label`

## Section pattern

```html
<section class="section-padding">
  <div class="container">
    <span class="label">Overline</span>
    <h2>Section Title</h2>
    <p>Description</p>
    ...
  </div>
</section>
```

## Buttons (`.btn` variants)

| Class | Use |
|-------|-----|
| `.btn-white` | Primary on dark backgrounds |
| `.btn-outline-dark` | Secondary on dark |
| `.btn-dark` | Primary on light |
| `.btn-outline-light` | Secondary on light |
| `.btn-full` | Full-width forms |

## Cards

- `.pricing-card` — consulting pricing
- `.insight-card` — blog previews
- `.hero-stat-card` — metrics
- `.terminal-box` — tech credibility blocks

## Forms (`ContactSection`)

- `.form-box` container
- `.form-box-title` for H3 headings (sans, `--text-2xl`)
- `.aetheris-contact-form` for fields
- `.label` for field groups

## Footer (`components/layout/Footer.tsx`)

- Dark background, 4 columns + brand
- Column titles: H4 sans uppercase
- Social links: external, `rel="noopener noreferrer"`

## Service pages

- `ServicePageHeader` — dark header, label + H1 + description
- `ServicePageExtended` — long-form lorem/content sections
- `PageJsonLd` — breadcrumbs + schema

## Product pages

- `ProductPageShell` — hero from extracted HTML content
- `ProductPage` — metadata + JSON-LD wrapper

## SEO components

- `components/seo/Analytics.tsx` — GA4 when `NEXT_PUBLIC_GA_ID` set
- `components/seo/PageJsonLd.tsx` — structured data helpers

## CTA placement rules

Every major section should end with or include:

- Link to `/contact`
- Link to `/services/case-studies`
- Product signup (`siteContact.signupUrl`) on product pages

Primary CTA copy (prefer in order):

1. Book Discovery Call / Start Your Project
2. Schedule Demo
3. View Case Studies
4. Contact Sales
