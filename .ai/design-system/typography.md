# Typography System

## Font stack

Loaded via `next/font/google` in `app/layout.tsx`:

| Role | Font | CSS variable | Used for |
|------|------|--------------|----------|
| **Serif** | Playfair Display | `--font-serif` | Display, H1, H2, hero stats numbers |
| **Sans** | Inter | `--font-sans` | H3–H6, body, nav, buttons, forms, labels, footer |
| **Mono** | JetBrains Mono | `--font-mono` | Code, tech stack, terminal blocks, feature icons |

Wiring in `app/globals.css`:

```css
:root {
  --font-sans: var(--font-inter), 'Inter', system-ui, sans-serif;
  --font-serif: var(--font-playfair), 'Playfair Display', Georgia, serif;
  --font-mono: var(--font-jetbrains), 'JetBrains Mono', ui-monospace, monospace;
}
```

## Heading hierarchy

| Element | Font | Weight | Size token |
|---------|------|--------|------------|
| H1 / `.text-display` | Serif | 400 | `--text-display` |
| H2 / `.text-h2` | Serif | 400 | `--text-4xl` |
| H3 / `.text-h3` | Sans | 500 | `--text-2xl` |
| H4 / `.text-h4` | Sans | 500 | `--text-xl` |
| H5 / `.text-h5` | Sans | 500 | `--text-lg` |
| H6 / `.text-h6` | Sans | 600 | `--text-base` |

**Rule:** Never use serif for H3 and below. Never use sans for H1/H2 on marketing pages.

## Body copy

| Class / usage | Size | Weight | Line height |
|---------------|------|--------|-------------|
| Body default | `--text-base` (16px) | 400 | `--leading-normal` (1.6) |
| `.text-lead` | `--text-lg` | 300 | `--leading-relaxed` |
| `.text-small` | `--text-sm` | 400 | 1.6 |
| `.text-caption` | `--text-xs` | 400 | 1.6 |

## Labels & overlines

Use `.label` or `.hero-label` (always **sans**, uppercase, wide tracking):

- Section overlines ("Capabilities", "Framework")
- Form step labels
- Footer column headers (`.footer-col h4`)

## Stats & metrics

- Number: `.stat-num` / `.text-stat` → **serif**
- Label below: `.stat-label` → **sans**, uppercase, small

## Code & technical

- `.text-mono`, `code`, `pre`, `.terminal-box`, `.feature-icon` → **mono**

## Utility classes

Defined in `styles/typography.css`:

```
.text-display  .text-h1 … .text-h6
.text-body     .text-lead   .text-small   .text-caption
.text-overline  .text-stat   .text-mono
.serif-italic
```

## Examples

```tsx
{/* Hero — serif display */}
<h1>We Build Digital Businesses That Scale.</h1>

{/* Section title — serif */}
<h2>Comprehensive Digital Architecture</h2>

{/* Card title — sans */}
<h3>AI & Cognitive Automation</h3>

{/* Overline — sans label */}
<span className="label">Software Engineering & AI Consulting</span>

{/* Form heading — sans */}
<h3 className="form-box-title">Tell us about your project</h3>
```

## Anti-patterns

❌ `style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem' }}`  
✅ `className="form-box-title"`

❌ Mixing serif on H3 card titles  
✅ Sans for H3+, serif only for H1/H2/display

❌ Hardcoding `Playfair Display` or `Inter` in CSS  
✅ Always `var(--font-serif)` / `var(--font-sans)`

## Adding new text styles

1. Add size token to `styles/tokens.css` if needed
2. Add class to `styles/typography.css`
3. Document here
4. Do **not** add one-off font rules in component files
