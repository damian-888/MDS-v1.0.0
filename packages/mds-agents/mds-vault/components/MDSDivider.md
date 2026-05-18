---
title: MDSDivider
type: component
status: stable
source:
  - packages/mds-components/src/MDSDivider/MDSDivider.tsx
  - packages/mds-components/src/MDSDivider/MDSDivider.module.css
  - packages/mds-guidelines/src/stories/MDSDivider.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, divider, separator, base-ui]
related:
  - "[[MDSCard]]"
  - "[[MDSFlyout]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSDivider

> A presentational 1 px line or column. Wraps Base UI’s `Separator` so it ships with the correct ARIA role and orientation.

## Purpose

A thin visual rule that separates sibling content. Wraps Base UI's `Separator` primitive — the role and ARIA orientation are managed there, MDS owns the colour, thickness, and pill-radius shape.

## Use

- Between sibling content blocks that share a parent container (sidebar sections, list groups, card body regions).
- In flex/grid layouts where you need a thin rule that stretches to the cross-axis size of the row.
- Inside compound components (MDSCard.Body, MDSFlyout) when the visual hierarchy needs a soft break without extra padding.

## Avoid

- Using as a page heading underline — typography already carries the hierarchy. Pair instead with `MDSText`.
- Decorating it with custom colours via inline styles. If the consumer needs a non-stroke colour, override `--MDSDivider-fill` on an ancestor.
- Stacking multiple dividers in a row. If your content needs more separation, increase the surrounding padding instead.

## Import

```ts
import { MDSDivider } from '@mds/components';
import '@mds/components/MDSDivider/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Axis the divider runs along. Vertical needs a sized parent. |
| `className` | `string` | — | Composed with `.root`. |
| All Base UI `Separator` props | — | — | Spread. |

## Variants

`orientation: 'horizontal' \| 'vertical'` — exposed as `data-orientation` for styling hooks.

## Sizes

None — sizes to its parent (100 % of the inline-axis when horizontal, 100 % of the block-axis when vertical).

## States

None. The component has no interactive state.

## Behaviour

Horizontal dividers stretch to 100 % of the parent’s inline-axis. Vertical dividers stretch to 100 % of the parent’s block-axis via `align-self: stretch`. The two-layer indirection means a consumer can re-declare `--MDSDivider-fill` or `--MDSDivider-thickness` on any ancestor without touching the component.

## Accessibility

Rendered as Base UI’s `Separator`, which emits `role="separator"` plus `aria-orientation` when vertical. The horizontal variant omits `aria-orientation` (it’s the default per WAI-ARIA) but always carries `data-orientation` for styling hooks.

## Animation

No motion. Under `prefers-reduced-motion: reduce` the (already none) transitions stay suppressed.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSDivider-fill` | `var(--mds-colours-basic-stroke)` |
| `--MDSDivider-thickness` | `var(--mds-strokes-1)` |
| `--MDSDivider-corner-radius` | `var(--mds-radius-full)` |

## Examples

### Horizontal

```tsx
<MDSDivider />
```

### Vertical (inside a sized flex row)

```tsx
<div style={{ display: 'inline-flex', height: 32, gap: 16, alignItems: 'center' }}>
  <span>Left</span>
  <MDSDivider orientation="vertical" />
  <span>Right</span>
</div>
```

## Gotchas

Vertical dividers need a parent that gives them a height — typically `align-self: stretch` inside a flex row. A standalone `<MDSDivider orientation="vertical" />` outside a sized container will collapse to 0 px height.

## Source

- [MDSDivider.tsx](packages/mds-components/src/MDSDivider/MDSDivider.tsx)
- [MDSDivider.module.css](packages/mds-components/src/MDSDivider/MDSDivider.module.css)
- [MDSDivider.stories.tsx](packages/mds-guidelines/src/stories/MDSDivider.stories.tsx)

## Related

- [[MDSCard]]
- [[MDSFlyout]]
- [[index]]
- [[conventions/component-contract]]
- [[libraries/base-ui]]
