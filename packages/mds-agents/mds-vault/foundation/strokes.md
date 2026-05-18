---
title: Strokes
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.core.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, strokes, borders]
related:
  - "[[index]]"
  - "[[conventions/naming]]"
---

# Strokes

> Numeric stroke-width scale. Three values: 1px, 2px, 4px.

## Token List

| Token | Resolved value |
|---|---|
| `--mds-strokes-1` | 1px |
| `--mds-strokes-2` | 2px |
| `--mds-strokes-4` | 4px |

(Note: `--mds-core-strokes-1..3` exist as the underlying primitives. The foundation layer exposes the consumer-facing subset.)

## Usage

```css
.root {
  --MDSButton-stroke-width: var(--mds-strokes-2);
  border: var(--MDSButton-stroke-width) solid var(--MDSButton-stroke);
}
```

## Layer

`foundation.strokes.*` → `{core.strokes.*}` (numeric primitive).

## Naming Pattern

- **Numeric scale** where the scale is quantitative, not semantic: `--mds-strokes-1`, `--mds-strokes-2`, `--mds-strokes-4`.
- This is the opposite convention from t-shirt-named scales like spacing/radius — the value carries the meaning here.

## Source

- [foundation.json — strokes](packages/mds-tokens/src/foundation.json)
- [.core.json — strokes primitives](packages/mds-tokens/src/.core.json)

## Related

- [[index]]
- [[conventions/naming]] — when to use t-shirt vs numeric naming.
