---
title: Foundation
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/foundation/
  - packages/mds-tokens/src/foundation.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, foundation, tokens]
related:
  - "[[README]]"
  - "[[theming/index]]"
  - "[[conventions/index]]"
---

# Foundation

> Public-API semantic tokens — what consumers reference. One file per token group. Foundation tokens chain through mode, section, scheme, and breakpoint to resolve to a hex / number at render time.

## Atoms

| File | Summary |
|---|---|
| [[colours]] | 12 semantic roles (`basic-*`) + 4 interaction states. Theme-aware. |
| [[typography]] | 8 styles. Sub-property vars + `.mds-typography-*` utility classes. Breakpoint-aware. |
| [[spacing]] | 5 t-shirt-sized spacing tokens. Breakpoint-aware. |
| [[radius]] | 7 t-shirt-sized corner radii. Breakpoint-aware. |
| [[strokes]] | Numeric stroke widths (1, 2, 4). |
| [[breakpoints]] | 4 viewport variants (mobile, tablet, laptop, desktop). Defines what each axis swaps. |
| [[common-component-values]] | Shared component chrome defaults — heights, padding, gap, minimum-tappable-area. |
| [[number-ramp]] | 25 quantitative pixel values (0..120). Use when t-shirt scales don't fit. |
| [[layout-and-grid]] | Page-level layout primitives — viewport width, column tracks, grid margins/gutters. |
| [[palettes]] | 24 base + functional palette files. The bottom of the colour chain. |
| [[js-exports]] | JS/TS API for inline styles, `matchMedia`, chart libs. Components don't use this. |

## Related folders

- [[theming/index]] — the four runtime axes that swap foundation values.
- [[conventions/index]] — naming and tokens-policy rules.
- [[architecture/token-pipeline]] — how these tokens are built.
- [[figma/index]] — Tokens Studio source and sync.
