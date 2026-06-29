# Fonts & CSS Architecture

## Import order (`app/globals.css`)

```css
@import '../styles/tokens.css';      /* 1. Design tokens */
@import '../styles/typography.css';  /* 2. Font roles & base type */
@import '../styles/aetheris.css';     /* 3. Consulting components */
@import '../styles/product.css';     /* 4. Product page styles */

:root {
  /* 5. Next.js font → design system stacks */
  --font-sans: var(--font-inter), ...;
  --font-serif: var(--font-playfair), ...;
  --font-mono: var(--font-jetbrains), ...;
}
```

## Font loading (`app/layout.tsx`)

```tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });
```

Applied to `<html className={inter.variable + playfair.variable + jetbrains.variable}>`.

## Rules

1. **One place for font-family roles** → `styles/typography.css`
2. **One place for sizes** → `styles/tokens.css` (`--text-*`)
3. **Component CSS** → only layout/color/spacing; not font-family overrides (exceptions: already in typography.css)
4. **No inline typography** in TSX - use classes like `.form-box-title`, `.label`

## Migrating legacy CSS

If you find hardcoded fonts in `aetheris.css` or `product.css`:

1. Check if `typography.css` already covers it
2. If not, add utility class to `typography.css`
3. Remove duplicate `font-family` from component CSS

## Tailwind

Project uses Tailwind 4 for some utilities but **marketing typography is CSS-token driven**. Do not mix arbitrary Tailwind font classes on consulting pages without updating this system.

## Full typography reference

See `.ai/design-system/typography.md`.
