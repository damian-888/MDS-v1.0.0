---
title: Breakpoint
type: theming-axis
status: stable
source:
  - packages/mds-tokens/src/.breakpoint/mobile.json
  - packages/mds-tokens/src/.breakpoint/tablet.json
  - packages/mds-tokens/src/.breakpoint/laptop.json
  - packages/mds-tokens/src/.breakpoint/desktop.json
  - packages/mds-tokens/src/.core.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [theming, breakpoint, viewport, responsive, media-query]
related:
  - "[[index]]"
  - "[[mode]]"
  - "[[section]]"
  - "[[scheme]]"
  - "[[consumer-api]]"
  - "[[foundation/breakpoints]]"
---

# Breakpoint

> Viewport-driven axis. Swaps typography, radius, spacing, layout, grid, and common-component-values per viewport. Switched via `@media (min-width)` — no consumer setup, viewports auto-respond. Mobile-first.

## Summary

Breakpoint is the **only** of the four axes that switches via `@media` instead of `[data-*]`. It applies to whole viewports — there is no "this subtree is at tablet width" override. Mobile is the `:root` default.

## Values

| Value | Min-width | Notes |
|---|---|---|
| `mobile` | (no min) | `:root` default — mobile-first. |
| `tablet` | 768px | Defined in `.core.json` as `core.viewports.tablet`. |
| `laptop` | 1040px | |
| `desktop` | 1440px | |

Thresholds come from `core.viewports.*` in `.core.json`. `large-desktop` (1680) and `tv` (1920) are defined in core for reference but have no dedicated `.breakpoint/<name>.json` files — the four files above are the runtime variants.

## Selector

```
:root { /* mobile (default) */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1040px) { /* laptop */ }
@media (min-width: 1440px) { /* desktop */ }
```

Each `@media` block emits `--mds-breakpoint-*` re-declarations for typography, radius, common-component-values, layout, spacing, and grid.

## Source File

- [.breakpoint/mobile.json](packages/mds-tokens/src/.breakpoint/mobile.json)
- [.breakpoint/tablet.json](packages/mds-tokens/src/.breakpoint/tablet.json)
- [.breakpoint/laptop.json](packages/mds-tokens/src/.breakpoint/laptop.json)
- [.breakpoint/desktop.json](packages/mds-tokens/src/.breakpoint/desktop.json)

Foundation tokens like `--mds-typography-h1-font-size` reference `{breakpoint.typography.h1.font-size}`, which resolves differently per `@media` block.

## Cascade Rules

- Breakpoint is **independent** of mode / section / scheme. The three colour axes compose orthogonally with breakpoint.
- Mobile values live in `:root` (no media query) so they're the universal fallback.
- Breakpoint values never need re-declaration on the colour-axis override scopes — `@media` already applies globally.

## Examples

```css
/* MDSButton at any viewport: */
.root {
  min-height: var(--mds-common-component-values-height-large);
  /* mobile → tablet → laptop → desktop values resolve from the active @media */
}
```

```ts
// JS-side equivalent for matchMedia
import { breakpoints } from '@mds/tokens';
window.matchMedia(`(min-width: ${breakpoints.laptop}px)`);   // 1040
```

## Related

- [[index]]
- [[mode]]
- [[section]]
- [[scheme]]
- [[consumer-api]]
- [[foundation/breakpoints]]
- [[foundation/typography]]
- [[foundation/radius]]
