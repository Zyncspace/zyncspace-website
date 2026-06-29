# ZyncSpace AI Guidelines

This folder is the **single source of truth** for how we design, write, build, and ship the ZyncSpace website. All AI agents and contributors should read relevant docs before making changes.

## Quick start

| Task | Read first |
|------|------------|
| New page or section | [definition-of-done.md](./guidelines/definition-of-done.md) → [enterprise-design.md](./guidelines/enterprise-design.md) |
| Copy / messaging | [content/messaging.md](./content/messaging.md) → [content/ai-content-rules.md](./content/ai-content-rules.md) |
| CSS / fonts / layout | [design-system/typography.md](./design-system/typography.md) → [engineering/fonts-and-css.md](./engineering/fonts-and-css.md) |
| SEO changes | [seo/checklist.md](./seo/checklist.md) |
| Deploy staging vs production | [engineering/environments.md](./engineering/environments.md) |
| Products vs services pages | [content/products-vs-services.md](./content/products-vs-services.md) |
| Full homepage structure & feel | [structure/website-structure.md](./structure/website-structure.md) |

## Folder structure

```
.ai/
├── README.md                 ← you are here
├── AGENTS.md                 ← condensed instructions for AI agents
├── guidelines/
│   ├── enterprise-design.md  ← full enterprise B2B guidelines
│   └── definition-of-done.md ← page completion checklist
├── design-system/
│   ├── README.md
│   ├── typography.md         ← font roles, scale, usage rules
│   ├── colors-spacing.md     ← tokens, palette, spacing
│   └── components.md         ← UI patterns (nav, hero, CTA, cards)
├── content/
│   ├── messaging.md          ← tone, outcomes-first copy
│   ├── products-vs-services.md
│   └── ai-content-rules.md   ← no fake claims
├── seo/
│   └── checklist.md
└── engineering/
    ├── project-structure.md
    ├── environments.md       ← zyncspace.in vs zyncspace.com
    └── fonts-and-css.md      ← how CSS is organized
└── structure/
    └── website-structure.md  ← full homepage map & content status
```

## Design principles (summary)

1. **Sell outcomes, not technology** - business value for executives.
2. **Trust over hype** - evidence-backed claims only; placeholders until real data exists.
3. **Products + Services** - clearly separated; show how products accelerate services.
4. **Consistent typography** - serif for display/H1/H2; sans for UI and body; mono for code.
5. **Every page has a CTA** - discovery call, demo, contact, or case studies.
6. **SEO + accessibility + performance** - non-negotiable on every ship.

## Code locations

| Concern | Path |
|---------|------|
| Design tokens | `styles/tokens.css` |
| Typography system | `styles/typography.css` |
| Consulting theme | `styles/aetheris.css` |
| Product pages theme | `styles/product.css` |
| Font loading | `app/layout.tsx` |
| Global CSS entry | `app/globals.css` |
| Site URL (staging/prod) | `lib/site-url.ts`, `.env.example` |
| SEO metadata | `lib/metadata.tsx`, `lib/seo-config.ts` |

## Cursor rules

Project rules in `.cursor/rules/` reference this folder and enforce key constraints automatically.
