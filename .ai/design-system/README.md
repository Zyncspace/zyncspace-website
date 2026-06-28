# Design System Overview

ZyncSpace uses a **token-based design system** with two visual contexts:

| Context | Stylesheet | Used for |
|---------|------------|----------|
| Consulting / marketing | `styles/aetheris.css` | Home, `/services/*`, contact |
| Product pages | `styles/product.css` | `/features`, `/pricing`, `/about`, blogs |

Both share the same **tokens** and **typography** foundation.

## Files

```
styles/
├── tokens.css       ← colors, type scale, spacing (source of truth)
├── typography.css   ← font roles, heading hierarchy, utilities
├── aetheris.css     ← consulting layout & components
└── product.css      ← product page overrides

app/globals.css      ← imports + Next.js font variable wiring
app/layout.tsx       ← loads Inter, Playfair Display, JetBrains Mono
```

## Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `--dark-bg` | `#0d0d0c` | Hero, nav scrolled, dark sections |
| `--light-bg` | `#f3f2eb` | Page background |
| `--light-text` | `#1a1a1a` | Body text |
| `--muted-text` | `#666666` | Secondary text, labels |
| `--accent-brand` | `#4f46e5` | Links, focus, brand accents |
| `--border-light` | `#dcdbce` | Section dividers |

## Spacing

Use `--space-*` tokens. Section padding = `--space-section` (120px).

## Components

See [components.md](./components.md).

## Do not

- Add new colors without adding a token
- Hardcode `font-family` outside `typography.css`
- Use inline styles for font size/weight (use classes or tokens)
