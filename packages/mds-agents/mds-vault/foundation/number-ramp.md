---
title: Number Ramp
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.core.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, number-ramp, dimensions]
related:
  - "[[index]]"
  - "[[spacing]]"
  - "[[conventions/naming]]"
---

# Number Ramp

> Quantitative size scale. 25 discrete pixel values from 0 to 120. Use when a precise pixel value is needed and the semantic t-shirt scale doesn't fit.

## Token List

```
0 1 2 4 6 8 10 12 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 100 120
```

Each emits as `--mds-number-ramp-{n}` (e.g. `--mds-number-ramp-24` resolves to `24px`).

## Usage

Number-ramp values are the **fallback** when the semantic scales (`spacing`, `radius`, `common-component-values`) don't have a fit. They're also used to size icons (16 / 24 / 32 for `MDSIcon`'s t-shirt sizes).

```css
.iconSlot {
  --MDSIcon-size: var(--mds-number-ramp-24);
  width: var(--MDSIcon-size);
  height: var(--MDSIcon-size);
}
```

```css
/* MDSButton min-width */
.root {
  --MDSButton-min-width: var(--mds-number-ramp-100);
  min-width: var(--MDSButton-min-width);
}
```

Prefer the semantic scales (`spacing-medium`, `radius-large`) when their meaning fits; reach for number-ramp only when you need a specific pixel.

## Layer

`foundation.number-ramp.*` → `{core.number-ramp.*}` (numeric primitive). Numeric values pass through the `mds/value/number-to-px` transform to become valid CSS dimensions.

## Naming Pattern

`--mds-number-ramp-{n}` where `n` is the numeric value (no unit). Numeric scale — the name carries the value.

## Source

- [foundation.json — number-ramp](packages/mds-tokens/src/foundation.json)
- [.core.json — number-ramp primitives](packages/mds-tokens/src/.core.json)

## Related

- [[index]]
- [[spacing]] — prefer t-shirt sizes for semantic spacing.
- [[radius]] — prefer t-shirt sizes for semantic corners.
- [[conventions/naming]] — when to use t-shirt vs numeric naming.
- [[icons/size-rule]] — icon sizes use number-ramp values for t-shirt names.
