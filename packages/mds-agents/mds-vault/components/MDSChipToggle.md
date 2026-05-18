---
title: MDSChipToggle
type: component
status: stable
source:
  - packages/mds-components/src/MDSChipToggle/MDSChipToggle.tsx
  - packages/mds-components/src/MDSChipToggle/MDSChipToggle.module.css
  - packages/mds-guidelines/src/stories/MDSChipToggle.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, chip, toggle, base-ui]
related:
  - "[[MDSChipDismissible]]"
  - "[[MDSChipFilter]]"
  - "[[MDSIcon]]"
  - "[[MDSImage]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSChipToggle

> A two-state selectable pill. Unselected shows a stroked, light surface; selected fills with the basic accent and exposes a trailing check glyph.

## Purpose

A persistent two-state pill — the chip remembers whether it is on or off. Built on Base UI `Toggle`. Controlled via `selected` + `onSelectedChange`; uncontrolled via `defaultSelected`.

## Use

- Single boolean preferences ("Available now", "Vegetarian", "Show only open").
- Multi-select chip groups where each option can be on/off independently of the others.
- Compact yes/no choices that benefit from a label rather than a switch.

## Avoid

- Single-choice (radio) selection — use a different component or convert to a real toggle group with mutual exclusion at the consumer level.
- Triggering one-off actions — use `MDSButton`.
- Opening menus — use `MDSChipFilter`.

## Import

```ts
import { MDSChipToggle } from '@mds/components';
import '@mds/components/MDSChipToggle/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — required | Visible chip label. |
| `selected` | `boolean` | — | Controlled selected state. Maps to Base UI's `pressed`. |
| `defaultSelected` | `boolean` | `false` | Uncontrolled initial selected state. |
| `onSelectedChange` | `(selected, eventDetails) => void` | — | Fired when the chip is toggled. |
| `avatar` | `React.ReactNode` | — | Optional 40 px round avatar slot rendered before the label; switches the chip's leading padding from 16 px to 4 px. |
| `disabled` | `boolean` | `false` | Native disabled state. |

All other props spread to Base UI's `Toggle` primitive.

## Variants

| Selected × Avatar | Visual |
|---|---|
| `false`, no avatar | White surface, basic-stroke border. |
| `false`, avatar | White surface, basic-stroke border, leading avatar. |
| `true`, no avatar | Accent fill, white text, trailing check glyph. |
| `true`, avatar | Accent fill, white text, leading avatar, trailing check glyph. |

## Sizes

Single size — fixed `--mds-common-component-values-height-small` (48 px).

## States

| Attribute | Source |
|---|---|
| `data-pressed` | Emitted by Base UI's `Toggle` when selected. Drives the accent fill and reveals the check icon. |
| `data-disabled` | Emitted by Base UI when `disabled` is true. |
| `data-has-avatar` | Set by MDS when an `avatar` is provided. |

## Behaviour

Wraps Base UI Toggle. Uncontrolled via `defaultSelected`; controlled via `selected` + `onSelectedChange`. Base UI sets `data-pressed` while selected, which drives the accent fill and reveals the trailing check icon via CSS.

## Accessibility

Renders a real `<button>` with `aria-pressed`. Keyboard activation (Enter / Space) toggles selection. Focus ring follows the standard 2 px accent outline.

## Animation

Background colour transitions on hover and active states. `prefers-reduced-motion` removes them.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSChipToggle-fill` | `var(--mds-colours-basic-background)` |
| `--MDSChipToggle-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSChipToggle-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSChipToggle-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSChipToggle-corner-radius` | `var(--mds-radius-full)` |
| `--MDSChipToggle-min-height` | `var(--mds-common-component-values-height-small)` |
| `--MDSChipToggle-padding-horizontal` | `var(--mds-common-component-values-padding)` |
| `--MDSChipToggle-padding-with-avatar` | `var(--mds-number-ramp-4)` |
| `--MDSChipToggle-item-spacing` | `var(--mds-number-ramp-4)` |
| `--MDSChipToggle-avatar-size` | `var(--mds-number-ramp-40)` |
| `--MDSChipToggle-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSChipToggle-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

Selected state overrides `--MDSChipToggle-fill` and `--MDSChipToggle-text-fill` to the accent colour and the on-accent text colour.

## Examples

```tsx
import { MDSChipToggle, MDSImage } from '@mds/components';

// Uncontrolled
<MDSChipToggle defaultSelected onSelectedChange={(s) => console.log(s)}>
  Berlin
</MDSChipToggle>

// Controlled
const [selected, setSelected] = useState(false);
<MDSChipToggle selected={selected} onSelectedChange={setSelected}>
  Berlin
</MDSChipToggle>

// With an avatar
<MDSChipToggle
  avatar={<MDSImage src="/jamie.jpg" alt="" aspectRatio="1 / 1" />}
  defaultSelected
>
  Jamie
</MDSChipToggle>

// Disabled
<MDSChipToggle disabled>Unavailable</MDSChipToggle>
```

## Gotchas

The check glyph is rendered into the DOM in every state and only revealed by CSS when the chip is selected. This avoids a layout shift on toggle but means assistive tech sees the icon node; the icon is `aria-hidden`. The avatar slot tightens the chip's leading padding so the 40 px disc sits flush — the inter-element gap shrinks from 8 px to 4 px to match Figma.

## Source

- [MDSChipToggle.tsx](packages/mds-components/src/MDSChipToggle/MDSChipToggle.tsx)
- [MDSChipToggle.module.css](packages/mds-components/src/MDSChipToggle/MDSChipToggle.module.css)
- [MDSChipToggle.stories.tsx](packages/mds-guidelines/src/stories/MDSChipToggle.stories.tsx)

## Related

- [[MDSChipDismissible]]
- [[MDSChipFilter]]
- [[MDSIcon]]
- [[MDSImage]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]]
