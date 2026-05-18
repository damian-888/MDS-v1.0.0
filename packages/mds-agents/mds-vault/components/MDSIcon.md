---
title: MDSIcon
type: component
status: stable
source:
  - packages/mds-components/src/MDSIcon/MDSIcon.tsx
  - packages/mds-components/src/MDSIcon/MDSIcon.module.css
  - packages/mds-guidelines/src/stories/MDSIcon.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, icon, lazy, suspense]
related:
  - "[[MDSButton]]"
  - "[[index]]"
  - "[[icons/index]]"
  - "[[icons/size-rule]]"
  - "[[icons/lazy-loading]]"
  - "[[icons/registry]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSIcon

> A type-checked icon component backed by `@mds/icons`. Inherits colour from the parent via `currentColor` and is sized through a single CSS variable.

## Purpose

Render an icon by kebab-case name. The component name autocompletes to every available icon in the registry (1505 icons). Each icon is its own dynamic-import chunk — apps ship only what they reference.

## Use

- As a visual reinforcement of an adjacent text label.
- Inside a control (button, link, menu item) where space is limited and the action is well-known.
- In status indicators, list affordances, and dense data UI where a glyph reads faster than a word.
- Pair with text whenever the icon's meaning is not unambiguous to a first-time user.

## Avoid

- As the only label for a meaningful action without an `aria-label` or visually hidden text.
- Setting `width`/`height` directly — use the `size` prop or set `--MDSIcon-size` on a parent.
- Overriding `color` on the icon itself — set `color` on the parent so it cascades via `currentColor`.
- Picking a glyph metaphor that conflicts with its action (e.g. a heart icon for "delete").

## Import

```ts
import { MDSIcon } from '@mds/components';   // NOT from '@mds/icons'
import '@mds/components/MDSIcon/styles.css';
```

`@mds/icons` ships only the lazy registry + `MDSIconName` union type. The consumer-facing component lives in `@mds/components`.

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `name` | `MDSIconName` (literal union) | — required | Icon registry key from `@mds/icons`. Type-checked against the generated registry. |
| `size` | `'small' \| 'medium' \| 'large' \| number` | `'medium'` | Semantic (`small \| medium \| large`) maps to 16/24/32 px tokens. A number sets `--MDSIcon-size` directly. See [[icons/size-rule]]. |
| `title` | `string` | — | When set, the SVG renders an accessible title; otherwise `aria-hidden="true"`. |
| `titleId` | `string` | — | Optional id for the title element. Auto-generated via `useId` when `title` is set. |
| All `SVGProps<SVGSVGElement>` except `width`/`height`/`ref` | — | — | Width/height are controlled exclusively via `size`. |
| `className` | `string` | — | Composed with `.root`. |

## Variants

None — variation is purely by `name` (which icon) and `size` (how big).

## Sizes

| `size` | Resolved value | How it's applied |
|---|---|---|
| `'small'` | 16px (`--mds-number-ramp-16`) | `data-size="small"` attribute → CSS selector sets `--MDSIcon-size`. |
| `'medium'` (default) | 24px (`--mds-number-ramp-24`) | `data-size="medium"`. |
| `'large'` | 32px (`--mds-number-ramp-32`) | `data-size="large"`. |
| `<number>` | `<n>px` | Inline `style={{ '--MDSIcon-size': '<n>px' }}`. No `data-size` attribute. |

See [[icons/size-rule]] for the sourcing rule when implementing from Figma.

## States

`MDSIcon` has no interactive states. Inside Suspense pending, a same-sized `<span aria-hidden="true">` placeholder renders with the same className + style as the resolved icon — no layout shift.

## Behaviour

Each icon is a lazy-loaded SVG resolved through `iconRegistry`. While loading, a same-size placeholder span is rendered so layout never shifts. Colour flows from `currentColor`; the SVGs use `fill="currentColor"`.

## Accessibility

Icons are decorative by default. For meaningful icons (no adjacent label), set `role="img"` and `aria-label="…"` via the standard SVG props. Inside `MDSButton iconOnly`, the wrapper is already `aria-hidden` and the button itself owns the accessible name.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSIcon-size` | `var(--mds-number-ramp-24)` (medium) |

`color` is not exposed as a component var — it flows from the parent via `currentColor`. To recolour an icon, set `color` on any ancestor.

## Examples

```tsx
import { MDSIcon } from '@mds/components';

<MDSIcon name="chevron-down" size="small" />              // 16px
<MDSIcon name="warning" size="medium" title="Invalid input" />  // 24px, accessible
<MDSIcon name="heart" size="large" />                     // 32px
<MDSIcon name="dot" size={10} />                          // 10px (numeric escape hatch)

// Inherits color from parent
<div style={{ color: 'tomato' }}>
  <MDSIcon name="star" />                                 // renders tomato-coloured
</div>

// Inside a parent that sets --MDSIcon-size via the icon slot cascade
// (e.g. MDSButton, MDSBadge, MDSAccordion.Trigger) — no `size` prop needed.
```

## Gotchas

Numeric sizes are applied via inline `style` (`--MDSIcon-size: ${px}`). Semantic sizes are applied via `data-size`. Mixing both has no effect — the inline style wins. The `name` prop is type-checked against the generated registry; misspellings fail at compile time.

## Source

- [MDSIcon.tsx](packages/mds-components/src/MDSIcon/MDSIcon.tsx)
- [MDSIcon.module.css](packages/mds-components/src/MDSIcon/MDSIcon.module.css)
- [MDSIcon.stories.tsx](packages/mds-guidelines/src/stories/MDSIcon.stories.tsx)

## Related

- [[MDSButton]]
- [[index]]
- [[icons/index]]
- [[icons/size-rule]]
- [[icons/lazy-loading]]
- [[icons/registry]]
- [[conventions/component-contract]]
- [[conventions/cross-component-cascade]]
- [[conventions/storybook-vault-parity]]
