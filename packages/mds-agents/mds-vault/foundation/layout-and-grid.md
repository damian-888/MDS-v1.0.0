---
title: Layout and Grid
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.breakpoint/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, layout, grid, columns, viewport]
related:
  - "[[index]]"
  - "[[breakpoints]]"
  - "[[conventions/naming]]"
---

# Layout and Grid

> Page-level layout primitives — viewport width, column-count helpers (1–12), grid margins and gutters. Breakpoint-aware.

## Token List

### Layout (`foundation.layout.*`)

| Token | Purpose |
|---|---|
| `--mds-layout-viewport` | Width of the active viewport (resolves to a breakpoint-specific value). |
| `--mds-layout-1-columns` | Width of a 1-column track at the active breakpoint. |
| `--mds-layout-2-columns` | Width of a 2-column track. |
| `--mds-layout-3-columns` | … |
| `--mds-layout-12-columns` | Width of a 12-column track (full row). |

### Grid (`foundation.grid.*`)

| Token | Purpose |
|---|---|
| `--mds-grid-margins` | Outer page margins (breakpoint-specific). |
| `--mds-grid-gutters` | Spacing between columns. |
| `--mds-grid-columns` | Number of columns at the active viewport. |

## Usage

```css
.pageContainer {
  max-width: var(--mds-layout-viewport);
  padding-inline: var(--mds-grid-margins);
  display: grid;
  grid-template-columns: repeat(var(--mds-grid-columns), 1fr);
  column-gap: var(--mds-grid-gutters);
}
```

These tokens are typically referenced once at page-shell level, not inside individual components. Components size themselves with `spacing`, `number-ramp`, or `common-component-values`.

## Layer

`foundation.layout.*` / `foundation.grid.*` → `{breakpoint.layout.*}` / `{breakpoint.grid.*}` → numeric primitive.

## Naming Pattern

- Column tracks: `--mds-layout-{n}-columns` for `n` in 1..12.
- Grid surface: `--mds-grid-{margins|gutters|columns}`.

## Source

- [foundation.json — layout + grid](packages/mds-tokens/src/foundation.json)
- [.breakpoint/](packages/mds-tokens/src/.breakpoint/)

## Related

- [[index]]
- [[breakpoints]]
- [[conventions/naming]]
