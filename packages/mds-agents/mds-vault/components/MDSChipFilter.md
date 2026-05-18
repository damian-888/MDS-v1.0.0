---
title: MDSChipFilter
type: component
status: stable
source:
  - packages/mds-components/src/MDSChipFilter/MDSChipFilter.tsx
  - packages/mds-components/src/MDSChipFilter/MDSChipFilter.module.css
  - packages/mds-guidelines/src/stories/MDSChipFilter.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, chip, filter, menu, base-ui, compound]
related:
  - "[[MDSChipToggle]]"
  - "[[MDSChipDismissible]]"
  - "[[MDSFlyout]]"
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSChipFilter

> A pill chip that opens a flyout of selectable items below it. The chip itself reflects whether any filters are active; the items inside hold their own multi-select state.

## Purpose

A two-part component: a chip-shaped trigger and a dropdown of `Menu.CheckboxItem`s. The trigger surfaces an "active filters" visual state (accent fill); each item carries its own `checked` / `onCheckedChange` and announces as a `menuitemcheckbox`.

## Use

- Filter bars above a list of results — each chip opens a category of options.
- Multi-select dropdowns where the trigger needs to communicate "filters applied" at a glance.
- Anywhere the chip pattern is shorter than a labelled select but the user still needs a popup of choices.

## Avoid

- Single-action triggers — use `MDSButton`.
- Two-state toggles — use `MDSChipToggle`.
- Removable filters once applied — pair this with `MDSChipDismissible` in the result bar.

## Import

```ts
import { MDSChipFilter, MDSChipFilterItem } from '@mds/components';
import '@mds/components/MDSChipFilter/styles.css';
```

## API / Props

### `MDSChipFilter`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `React.ReactNode` | — required | Visible chip label. |
| `selected` | `boolean` | `false` | "Filters active" visual state — fills the chip with accent. Coordinate with the items' `checked` props. |
| `disabled` | `boolean` | `false` | Disables the trigger. |
| `children` | `React.ReactNode` | — required | `MDSChipFilter.Item` children rendered inside the dropdown. |
| `open` | `boolean` | — | Controlled open state (forwarded to Base UI `Menu.Root`). |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `onOpenChange` | `(open, eventDetails) => void` | — | Fired when the dropdown opens or closes. |
| `modal` | `boolean` | `false` | Forwarded to `Menu.Root` — defaults to non-modal. |
| `aria-label` | `string` | — | Override the trigger's accessible name when `label` is non-text. |

### `MDSChipFilter.Item` (alias `MDSChipFilterItem`)

Wraps Base UI's `Menu.CheckboxItem`. All Menu.CheckboxItem props are accepted, plus:

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — required | Item label. |
| `checked` | `boolean` | — | Controlled checked state. |
| `onCheckedChange` | `(checked) => void` | — | Called when toggled. |

## Variants

| Selected × Open | Visual |
|---|---|
| `false`, closed | White surface, basic-stroke border, caret-down. |
| `false`, open | Same trigger; flyout open below. Caret rotates 180° to caret-up. |
| `true`, closed | Accent fill, white text, caret-down. |
| `true`, open | Accent fill, white text; flyout open below. Caret rotated. |

## Sizes

Single size — fixed `--mds-common-component-values-height-small` (48 px).

## States

| Attribute | Source |
|---|---|
| `data-selected` | Set by MDS from the `selected` prop. Drives the accent fill on the trigger. |
| `data-popup-open` | Emitted by Base UI's `Menu.Trigger` while the dropdown is open. Drives the caret rotation. |
| `data-disabled` | Emitted by Base UI when `disabled` is true. |
| `aria-haspopup="menu"` / `aria-expanded` | Set by Base UI automatically. |

## Behaviour

Built on Base UI Menu. The trigger renders as a chip (with a rotating caret indicator). Items wrap `Menu.CheckboxItem` so each is independently checkable; the consumer controls each item's `checked` and `onCheckedChange`. Pass `selected` to the root when one or more items are active so the chip surfaces in the accent fill.

## Accessibility

Trigger is a real `<button>` with `aria-haspopup` / `aria-expanded` set by Base UI. The popup uses the `menu` role; items use `menuitemcheckbox` with `aria-checked`. The popup is portalled — `@scope`-isolated styles per the MDS storybook isolation rules.

## Animation

The caret rotates 180° when the menu opens. The popup appears in place per Base UI defaults. `prefers-reduced-motion` removes the caret transition.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSChipFilter-fill` | `var(--mds-colours-basic-background)` |
| `--MDSChipFilter-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSChipFilter-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSChipFilter-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSChipFilter-corner-radius` | `var(--mds-radius-full)` |
| `--MDSChipFilter-min-height` | `var(--mds-common-component-values-height-small)` |
| `--MDSChipFilter-padding-horizontal` | `var(--mds-common-component-values-padding)` |
| `--MDSChipFilter-padding-vertical` | `var(--mds-number-ramp-8)` |
| `--MDSChipFilter-item-spacing` | `var(--mds-common-component-values-gap)` |
| `--MDSChipFilter-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSChipFilter-focus-ring-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSChipFilter-caret-transition-duration` | `200ms` |

Selected state overrides `--MDSChipFilter-fill` and `--MDSChipFilter-text-fill` to the accent colour and the on-accent text colour.

## Examples

```tsx
import { useState } from 'react';
import { MDSChipFilter } from '@mds/components';

const [checked, setChecked] = useState<Record<string, boolean>>({});
const count = Object.values(checked).filter(Boolean).length;

<MDSChipFilter label={count ? `Brand · ${count}` : 'Brand'} selected={count > 0}>
  <MDSChipFilter.Item
    checked={!!checked.apple}
    onCheckedChange={(c) => setChecked((p) => ({ ...p, apple: c }))}
  >
    Apple
  </MDSChipFilter.Item>
  <MDSChipFilter.Item
    checked={!!checked.banana}
    onCheckedChange={(c) => setChecked((p) => ({ ...p, banana: c }))}
  >
    Banana
  </MDSChipFilter.Item>
</MDSChipFilter>
```

## Gotchas

The chip's `selected` prop and the items' `checked` props are separate concerns: `selected` is the trigger's visual "filters active" state, and `checked` is each item's individual selection. Coordinate them in your state (count selected items → set `selected={count > 0}`). The popup is portalled outside the trigger, so component-scoped vars declared on the trigger do not cascade to it — re-declare them on the popup if you need to override.

## Source

- [MDSChipFilter.tsx](packages/mds-components/src/MDSChipFilter/MDSChipFilter.tsx)
- [MDSChipFilter.module.css](packages/mds-components/src/MDSChipFilter/MDSChipFilter.module.css)
- [MDSChipFilter.stories.tsx](packages/mds-guidelines/src/stories/MDSChipFilter.stories.tsx)

## Related

- [[MDSChipToggle]]
- [[MDSChipDismissible]]
- [[MDSFlyout]]
- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]]
