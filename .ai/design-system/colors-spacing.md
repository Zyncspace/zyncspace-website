# Colors & Spacing

## Colors (`styles/tokens.css`)

### Backgrounds

- **Light page**: `--light-bg` (#f3f2eb) - default body
- **Dark sections**: `--dark-bg` (#0d0d0c) - hero, nav (scrolled), footer

### Text

- **Primary**: `--light-text` (#1a1a1a)
- **On dark**: `--dark-text` (#ffffff)
- **Muted**: `--muted-text` (#666666)

### Borders

- **Light sections**: `--border-light`
- **Dark sections**: `--border-dark`

### Brand

- **Accent**: `--accent-brand` (#4f46e5) - CTAs, links, focus rings
- **Theme color** (PWA): same as accent

## Spacing scale

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Icon gaps |
| `--space-4` | 16px | Card padding inner |
| `--space-6` | 24px | Form groups |
| `--space-8` | 32px | Grid gaps |
| `--space-12` | 48px | Section sub-spacing |
| `--space-section` | 120px | `.section-padding` vertical |

## Layout

| Token | Value |
|-------|-------|
| `--container-max` | 1400px |
| `--container-padding` | 40px (reduce on mobile in media queries) |
| `--nav-height` | 90px (scroll-margin for anchors) |

## Whitespace principles

- Enterprise B2B = generous section padding (`--space-section`)
- Group related content; separate sections with border or background shift
- Hero: max-width ~900px for headline block
- Body paragraphs: max-width 640–700px for readability on dark hero

## Dark vs light sections

| Section type | Background | Text | Label color |
|--------------|------------|------|-------------|
| Hero / dark header | `--dark-bg` gradient | white / #ccc | #aaa |
| Content sections | `--light-bg` | `--light-text` | `--muted-text` |
| Footer | `--dark-bg` | white / #888 | #888 |

## Adding new tokens

1. Add to `styles/tokens.css`
2. Use in CSS - never hardcode hex in components
3. Document here if it's a new semantic color (e.g. `--success`, `--error`)
