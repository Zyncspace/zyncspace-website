# Website Structure & Experience Map

How the ZyncSpace site is organized, what each section feels like, and where content lives.

---

## Site architecture

```
ZyncSpace Website
├── HOME (/)                    ← Full enterprise journey (this doc)
├── SERVICES
│   ├── /services               Hub - capabilities + matrix
│   ├── /services/framework     8-phase delivery framework
│   ├── /services/technology    Tech stack filter grid
│   ├── /services/industries    Vertical cards with metrics
│   ├── /services/case-studies  Case study deep-dive
│   └── /services/pricing       Consulting tiers
├── PRODUCT
│   ├── /features               Product features (extracted HTML)
│   ├── /use-cases              Use cases
│   ├── /pricing                SaaS pricing
│   ├── /about                  Company story
│   ├── /careers                Jobs
│   └── /blogs                  Blog index + posts
├── /contact                    Contact + extended lorem sections
├── /privacy-policy
└── /terms-of-service
```

---

## Homepage flow (22 sections)

The homepage follows the **enterprise customer journey** from `.ai/guidelines/enterprise-design.md`.

| # | Section | Feel | Content source |
|---|---------|------|----------------|
| 1 | **Hero** | Dark cinematic, large serif headline, glass stat cards | `content/services.ts` - real |
| 2 | **Partners marquee** | Light band, infinite scroll enterprise names | Placeholder names - verify before legal use |
| 3 | **Value proposition** | 3 white cards, outcome stats (40%, 3×, 99.9%) | `content/enterprise-sections.ts` - lorem |
| 4 | **Capabilities** | Split grid, numbered feature list | Real service copy |
| 5 | **Capability matrix** | Terminal-style dark boxes, SLA 99.99% | Real |
| 6 | **Media showcase** | Dark section - video poster + product screenshots | Real product PNGs + placeholder video |
| 7 | **Framework pipeline** | Interactive 8-phase detail panel | Real stages |
| 8 | **Customer journey** | 6-step visual path (Problem → Contact) | Lorem descriptions |
| 9 | **Tech stack** | Filterable card grid | Real toolchain |
| 10 | **Industries** | Full-bleed image cards with metrics | Unsplash + real copy |
| 11 | **Case study** | Before/after banner, AeroGlobal story | Narrative placeholder client |
| 12 | **Portfolio grid** | 2×2 project cards with tags | Lorem + mixed images |
| 13 | **Testimonials** | 3 quote cards with avatars | **Placeholder** - disclaimer shown |
| 14 | **Trust & security** | Dark grid of 6 practice badges | Real practices, no fake certs |
| 15 | **Consulting pricing** | 3 tier cards, Scale recommended | Real pricing structure |
| 16 | **Product showcase** | Split layout + hero screenshot | Real ZyncSpace product copy |
| 17 | **Team** | 4-column leadership grid | **Placeholder** profiles |
| 18 | **Insights** | 3 blog-style cards | Real-style editorial titles |
| 19 | **Resources** | Whitepapers / webinars cards | Lorem + Unsplash |
| 20 | **FAQ** | Accordion + contact CTA | Mix real + lorem |
| 21 | **CTA band** | Centered dual-button strip | Real |
| 22 | **Contact** | Dark partner form + office list | Real form + placeholder offices |

---

## Visual rhythm (how it *feels*)

```
DARK  ████ Hero
LIGHT ░░░░ Partners
LIGHT ░░░░ Value props
LIGHT ░░░░ Capabilities + Matrix
DARK  ████ Media showcase
LIGHT ░░░░ Framework
LIGHT ░░░░ Journey
LIGHT ░░░░ Tech stack
LIGHT ░░░░ Industries
LIGHT ░░░░ Case study
LIGHT ░░░░ Portfolio
LIGHT ░░░░ Testimonials
DARK  ████ Trust & security
LIGHT ░░░░ Pricing
LIGHT ░░░░ Product showcase
LIGHT ░░░░ Team
LIGHT ░░░░ Insights + Resources
LIGHT ░░░░ FAQ
LIGHT ░░░░ CTA band
DARK  ████ Contact
```

Alternating **dark anchor sections** (hero, media, trust, contact) with **light content bands** creates enterprise pacing - breathing room, premium contrast, clear section breaks.

---

## Typography feel

- **Serif headlines** (Playfair) on H1/H2 - editorial, established
- **Sans body & H3+** (Inter) - modern, readable
- **Mono accents** (JetBrains) - tech credibility in stack/terminal blocks
- **Uppercase labels** - enterprise overlines on every major section

See `.ai/design-system/typography.md`.

---

## Media assets

| Asset | Location | Used in |
|-------|----------|---------|
| Product screenshots | `/assets/images/*.png` | Media showcase, product section |
| Hero dashboard | `hero-dashboard.png` | Video poster, OG image |
| Industry photos | Unsplash URLs | Industries, portfolio |
| Team/testimonial avatars | Unsplash URLs | Placeholder people |
| Demo video | YouTube embed (placeholder) | Media showcase - **replace** |

---

## Content: real vs placeholder

| Type | Status |
|------|--------|
| Hero stats, capabilities, framework, tech stack | ✅ Real (approved metrics in services.ts) |
| Product features & signup CTAs | ✅ Real |
| Consulting pricing tiers | ✅ Real structure |
| Blog insights titles | ✅ Editorial (verify authors) |
| Partner marquee logos | ⚠️ Visual placeholders |
| Case study client name | ⚠️ Fictional - replace or anonymize |
| Testimonials | ⚠️ Lorem + placeholder companies |
| Team bios | ⚠️ Placeholder names/photos |
| Office addresses (contact) | ⚠️ Placeholder - use real or remove |
| Portfolio project names | ⚠️ Lorem - replace with approved case studies |
| Resources downloads | ⚠️ Links to /blogs until PDFs exist |

---

## File map

| Purpose | File |
|---------|------|
| Core consulting content | `content/services.ts` |
| New homepage sections | `content/enterprise-sections.ts` |
| Service page lorem body | `content/service-pages.ts` |
| Section components (core) | `components/services/sections.tsx` |
| Section components (enterprise) | `components/services/EnterpriseSections.tsx` |
| Homepage assembly | `components/services/HomePageContent.tsx` |
| Enterprise section styles | `styles/enterprise-sections.css` |

---

## Definition of done

Every new section must pass `.ai/guidelines/definition-of-done.md` before replacing placeholders with production content.
