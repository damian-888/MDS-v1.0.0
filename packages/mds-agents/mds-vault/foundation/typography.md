---
title: Typography
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.breakpoint/mobile.json
  - packages/mds-tokens/src/.breakpoint/tablet.json
  - packages/mds-tokens/src/.breakpoint/laptop.json
  - packages/mds-tokens/src/.breakpoint/desktop.json
  - packages/mds-tokens/dist/typography.css
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, typography, fonts]
related:
  - "[[index]]"
  - "[[breakpoints]]"
  - "[[architecture/font-pipeline]]"
  - "[[components/MDSText]]"
  - "[[conventions/css-modules]]"
---

# Typography

> Eight typography styles, each emitted as both individual sub-property vars and a utility class. Styles are breakpoint-aware (font-size etc. swap per viewport). Documented exception to the two-layer indirection rule.

## Token List

### Styles (8)

| Style | Foundation key | Utility class |
|---|---|---|
| Heading 1 | `typography.h1` | `.mds-typography-h1` |
| Heading 2 | `typography.h2` | `.mds-typography-h2` |
| Heading 3 | `typography.h3` | `.mds-typography-h3` |
| Body Large | `typography.body-large` | `.mds-typography-body-large` |
| Body | `typography.body` | `.mds-typography-body` |
| Body Bold | `typography.body-bold` | `.mds-typography-body-bold` |
| Body Underline | `typography.body-underline` | `.mds-typography-body-underline` |
| Microcopy | `typography.microcopy` | `.mds-typography-microcopy` |

### Sub-property vars (per style)

Every style emits six sub-property variables. Example for `body`:

| Var | Type |
|---|---|
| `--mds-typography-body-font-family` | text |
| `--mds-typography-body-font-size` | dimension (px) |
| `--mds-typography-body-font-weight` | text (numeric string after `font-weight-name-to-number` transform) |
| `--mds-typography-body-line-height` | dimension (px) |
| `--mds-typography-body-letter-spacing` | dimension (px) |
| `--mds-typography-body-text-decoration` | text |

Plus `paragraph-spacing` where defined.

Multiply by 8 styles = 48+ vars. All emitted to `dist/typography.css`.

## Usage

### Inside a component CSS Module — direct sub-var references

This is the **documented exception** to the two-layer indirection rule (see [[conventions/css-modules]]). Components reference typography sub-vars directly:

```css
.root {
  font-family: var(--mds-typography-body-large-font-family);
  font-size: var(--mds-typography-body-large-font-size);
  font-weight: var(--mds-typography-body-large-font-weight);
  line-height: var(--mds-typography-body-large-line-height);
}
```

Why direct: typography tokens are atomic (no compound `text` shorthand). Wrapping each sub-property in a component var would multiply declarations five-fold without buying a useful override surface.

### In app code — utility classes

```html
<h1 class="mds-typography-h1">Title</h1>
<p class="mds-typography-body">Paragraph.</p>
```

### Via MDSText component

Polymorphic typography utility. `variant` prop maps to a utility class.

```tsx
import { MDSText } from '@mds/components';
<MDSText variant="h1">Title</MDSText>;
<MDSText variant="body-large" render={<p />}>Paragraph.</MDSText>;
```

See [[components/MDSText]].

## Layer

Foundation typography references `breakpoint.typography.*`. Sub-properties swap per viewport:

```
foundation.typography.h1.font-size  →  breakpoint.typography.h1.font-size  →  core.typography.font-sizes.40
```

Breakpoint files for `mobile`, `tablet`, `laptop`, `desktop` redeclare typography sub-properties under `@media (min-width)`. See [[breakpoints]].

## Naming Pattern

- Sub-property: `--mds-typography-{style}-{sub-property}` — e.g. `--mds-typography-body-large-font-size`.
- Utility class: `.mds-typography-{style}` — e.g. `.mds-typography-body-large`.

## Fonts

The current bundled font stack includes Akkurat Pro and Manyone. See [[architecture/font-pipeline]] for the build pipeline.

Consumers must import `@mds/tokens/fonts.css` before `tokens.css` for fonts to resolve.

## Source

- [foundation.json — typography](packages/mds-tokens/src/foundation.json)
- [.breakpoint/mobile.json](packages/mds-tokens/src/.breakpoint/mobile.json)
- [.breakpoint/tablet.json](packages/mds-tokens/src/.breakpoint/tablet.json)
- [.breakpoint/laptop.json](packages/mds-tokens/src/.breakpoint/laptop.json)
- [.breakpoint/desktop.json](packages/mds-tokens/src/.breakpoint/desktop.json)

## Related

- [[index]]
- [[breakpoints]]
- [[architecture/font-pipeline]]
- [[components/MDSText]]
- [[conventions/css-modules]]
- [[conventions/naming]]
