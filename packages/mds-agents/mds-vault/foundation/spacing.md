---
title: Spacing
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.breakpoint/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, spacing]
related:
  - "[[index]]"
  - "[[number-ramp]]"
  - "[[breakpoints]]"
  - "[[conventions/naming]]"
---

# Spacing

> T-shirt-sized spacing scale. Five steps from `extra-small` to `extra-large`. Breakpoint-aware (values swap per viewport).

## Token List

| Token | Purpose |
|---|---|
| `--mds-spacing-extra-small` | Smallest gap. |
| `--mds-spacing-small` | Small gap. |
| `--mds-spacing-medium` | Default gap. |
| `--mds-spacing-large` | Large gap. |
| `--mds-spacing-extra-large` | Largest gap. |

Numeric values resolve through `{breakpoint.spacing.*}` to `{core.number-ramp.*}`.

## Usage

Inside a component CSS Module, route spacing through a component-scoped var (two-layer indirection — see [[conventions/css-modules]]):

```css
.root {
  --MDSCard-padding: var(--mds-spacing-medium);
  --MDSCard-item-spacing: var(--mds-spacing-small);
  padding: var(--MDSCard-padding);
  gap: var(--MDSCard-item-spacing);
}
```

For numeric/quantitative values (specific pixel sizes outside the t-shirt scale), see [[number-ramp]].

## Layer

`foundation.spacing.*` → `{breakpoint.spacing.*}` → `{core.number-ramp.*}` (numeric primitive).

## Naming Pattern

- T-shirt sizes: `--mds-spacing-{xs|sm|md|lg|xl}`.
- The name encodes scale **semantics**, not absolute size — a `medium` spacing on mobile is smaller than on desktop.

## Source

- [foundation.json — spacing](packages/mds-tokens/src/foundation.json)
- [.breakpoint/](packages/mds-tokens/src/.breakpoint/)

## Related

- [[index]]
- [[number-ramp]] — quantitative scale for non-semantic values.
- [[breakpoints]] — what determines the active spacing value.
- [[common-component-values]] — opinionated component-level spacing.
- [[conventions/naming]]
- [[conventions/css-modules]]
