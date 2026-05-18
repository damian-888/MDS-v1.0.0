---
title: Breakpoints
type: token-group
status: stable
source:
  - packages/mds-tokens/src/.core.json
  - packages/mds-tokens/src/.breakpoint/mobile.json
  - packages/mds-tokens/src/.breakpoint/tablet.json
  - packages/mds-tokens/src/.breakpoint/laptop.json
  - packages/mds-tokens/src/.breakpoint/desktop.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, breakpoints, viewports, responsive]
related:
  - "[[index]]"
  - "[[typography]]"
  - "[[radius]]"
  - "[[spacing]]"
  - "[[common-component-values]]"
  - "[[theming/breakpoint]]"
---

# Breakpoints

> Four breakpoint variants — mobile (default), tablet (768px+), laptop (1040px+), desktop (1440px+). Swap typography, radius, spacing, layout, grid, and common-component-values per viewport. Mobile-first.

## Token List

### Viewport thresholds (from `.core.json`)

| Viewport | Min-width | Notes |
|---|---|---|
| `mobile` | (no min) | `:root` default. |
| `tablet` | 768px | First step up. |
| `laptop` | 1040px | |
| `desktop` | 1440px | |
| `large-desktop` | 1680px | Defined in core; no dedicated breakpoint file. |
| `tv` | 1920px | Defined in core; no dedicated breakpoint file. |

The four `.breakpoint/<name>.json` files are: `mobile`, `tablet`, `laptop`, `desktop`.

### What each breakpoint swaps

Each `.breakpoint/<name>.json` redeclares the following groups for that viewport:

- `typography` (8 styles, each with font-size, line-height, letter-spacing, paragraph-spacing, font-family, font-weight, text-decoration)
- `radius` (7-8 t-shirt sizes)
- `common-component-values` (height-small, height-large, padding, gap, radius, minimum-tappable-area)
- `layout` (viewport + 1-columns through 12-columns)
- `spacing` (5 t-shirt sizes)
- `grid` (margins, gutters, columns)

## Usage

Consumers don't reference breakpoint tokens directly — they reference foundation tokens (`--mds-typography-h1-font-size`, etc.), and the active breakpoint determines which value resolves at render time.

```css
.root {
  /* This font-size will be different on mobile vs. desktop. */
  font-size: var(--mds-typography-h1-font-size);
}
```

For programmatic responsive logic in JS, use the `breakpoints` export from `@mds/tokens`:

```ts
import { breakpoints } from '@mds/tokens';
window.matchMedia(`(min-width: ${breakpoints.tablet}px)`);   // 768
```

## Layer

Breakpoint is the **lowest** layer of the four runtime-switchable axes. It swaps values via `@media (min-width)` rather than `[data-*]` attributes — there's no consumer setup required, viewports auto-respond.

See [[theming/breakpoint]] for the runtime details.

## Naming Pattern

- Source file: `.breakpoint/<viewport>.json` — variant name kebab-case.
- Resolved CSS var (intermediate, not consumer-facing): `--mds-breakpoint-{domain}-{path}` — re-declared per `@media`.

## Source

- [.core.json — viewports](packages/mds-tokens/src/.core.json)
- [.breakpoint/mobile.json](packages/mds-tokens/src/.breakpoint/mobile.json)
- [.breakpoint/tablet.json](packages/mds-tokens/src/.breakpoint/tablet.json)
- [.breakpoint/laptop.json](packages/mds-tokens/src/.breakpoint/laptop.json)
- [.breakpoint/desktop.json](packages/mds-tokens/src/.breakpoint/desktop.json)

## Related

- [[index]]
- [[typography]]
- [[radius]]
- [[spacing]]
- [[common-component-values]]
- [[theming/breakpoint]]
- [[theming/index]]
- [[architecture/token-pipeline]]
