---
title: Radius
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.breakpoint/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, radius, corners]
related:
  - "[[index]]"
  - "[[breakpoints]]"
  - "[[conventions/naming]]"
---

# Radius

> T-shirt corner-radius scale. Seven steps from `zero` to `full`. Breakpoint-aware.

## Token List

| Token | Purpose |
|---|---|
| `--mds-radius-zero` | Square corners (0px). |
| `--mds-radius-extra-small` | Subtle rounding. |
| `--mds-radius-small` | Small radius. |
| `--mds-radius-medium` | Default radius. |
| `--mds-radius-large` | Large radius. |
| `--mds-radius-extra-large` | Larger radius. |
| `--mds-radius-full` | Pill / circle (clamped to `9999px` or similar). |

The desktop breakpoint also includes `extra-extra-large` for the largest viewport.

## Usage

```css
.root {
  --MDSButton-corner-radius: var(--mds-radius-full);
  border-radius: var(--MDSButton-corner-radius);
}
```

## Layer

`foundation.radius.*` → `{breakpoint.radius.*}` → numeric primitive.

## Naming Pattern

- T-shirt scale: `--mds-radius-{zero|extra-small|small|medium|large|extra-large|full}`.
- `full` is the conventional name for pill / circular treatments — implementations resolve it to a very large pixel value rather than `50%` so it composes with non-square aspect ratios.

## Source

- [foundation.json — radius](packages/mds-tokens/src/foundation.json)
- [.breakpoint/](packages/mds-tokens/src/.breakpoint/)

## Related

- [[index]]
- [[breakpoints]] — what determines the active radius value.
- [[common-component-values]] — `--mds-common-component-values-radius` ties radius to component height.
- [[conventions/naming]]
