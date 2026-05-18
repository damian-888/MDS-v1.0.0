---
title: MDSChipDismissible
type: component
status: stable
source:
  - packages/mds-components/src/MDSChipDismissible/MDSChipDismissible.tsx
  - packages/mds-components/src/MDSChipDismissible/MDSChipDismissible.module.css
  - packages/mds-guidelines/src/stories/MDSChipDismissible.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, chip, dismiss, filter]
related:
  - "[[MDSChipToggle]]"
  - "[[MDSChipFilter]]"
  - "[[MDSIcon]]"
  - "[[MDSImage]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSChipDismissible

> A persistent, filled pill with a close button. Used to represent an active filter, an applied tag, or any chunk of user state the user can remove.

## Purpose

A filled chip that always shows a trailing close affordance — the dismiss button. Used to surface "this is currently applied" state with a one-click escape hatch. The chip itself is not interactive; only the close button is.

## Use

- Showing active filters above a list — clicking the × removes that filter.
- Representing user-added tags, recipients, attachments, or keywords with one-click removal.
- Anywhere the user has explicitly opted in to something and needs an obvious way to opt out.

## Avoid

- Toggling selection on/off — use `MDSChipToggle` for that.
- Opening a dropdown of choices — use `MDSChipFilter`.
- Single-action chips without removal affordance — use `MDSButton` or another component.

## Import

```ts
import { MDSChipDismissible } from '@mds/components';
import '@mds/components/MDSChipDismissible/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — required | Visible chip label. |
| `avatar` | `React.ReactNode` | — | Optional 40 px round avatar slot rendered before the label; switches the chip's leading padding from 16 px to 4 px so the disc sits flush. |
| `onDismiss` | `(event) => void` | — | Called when the user activates the dismiss button. |
| `dismissLabel` | `string` | `'Dismiss'` | Accessible name for the dismiss button. Override to describe the specific action ("Remove Berlin filter"). |
| `render` | Base UI `RenderProp` | `<span />` | Polymorphism — switch to `<li>` inside an ordered list of filters. |
| `className` | `string` | — | Composed with `.root`. |

All other props spread to the root element.

## Variants

| Has Avatar | Visual |
|---|---|
| No (default) | Pill with label + close button. Leading padding = 16 px. |
| Yes | Pill with 40 px round avatar, label, close button. Leading padding tightens to 4 px so the disc is flush. |

## Sizes

Single size — fixed `--mds-common-component-values-height-small` (48 px). The chip grows with its content; only the height is fixed.

## States

| Attribute | Source |
|---|---|
| `data-has-avatar` | Present when an `avatar` is provided. |

The dismiss button uses native `:hover` / `:active` to tint its own background — the chip body itself does not respond to pointer state.

## Behaviour

Renders a `<span>` wrapping a label and a real `<button>` for dismissal. Clicking or activating the button fires `onDismiss`; the consumer decides what to do (remove from a list, etc.).

## Accessibility

The dismiss button is a real `<button>` with `aria-label` (default: `"Dismiss"`). Override `dismissLabel` to describe the specific action. Focus ring follows the standard MDS pattern (2 px `basic-accent` outline at a 2 px offset).

## Animation

Hover/pressed tints on the close-button background only. Honours `prefers-reduced-motion`.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSChipDismissible-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSChipDismissible-text-fill` | `var(--mds-colours-basic-text-on-accent)` |
| `--MDSChipDismissible-corner-radius` | `var(--mds-radius-full)` |
| `--MDSChipDismissible-min-height` | `var(--mds-common-component-values-height-small)` |
| `--MDSChipDismissible-padding-horizontal` | `var(--mds-common-component-values-padding)` |
| `--MDSChipDismissible-padding-with-avatar` | `var(--mds-number-ramp-4)` |
| `--MDSChipDismissible-item-spacing` | `var(--mds-common-component-values-gap)` |
| `--MDSChipDismissible-avatar-size` | `var(--mds-number-ramp-40)` |
| `--MDSChipDismissible-dismiss-size` | `var(--mds-number-ramp-16)` |
| `--MDSChipDismissible-dismiss-fill` | `transparent` (hover/active set tinted backgrounds) |
| `--MDSChipDismissible-dismiss-corner-radius` | `var(--mds-radius-extra-small)` |
| `--MDSChipDismissible-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSChipDismissible-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

## Examples

```tsx
import { MDSChipDismissible, MDSImage } from '@mds/components';

// Plain filter chip
<MDSChipDismissible onDismiss={() => removeFilter('berlin')}>
  Berlin
</MDSChipDismissible>

// With a custom accessible name
<MDSChipDismissible
  onDismiss={() => removeFilter('berlin')}
  dismissLabel="Remove Berlin filter"
>
  Berlin
</MDSChipDismissible>

// With an avatar — the 40 px round disc sits flush against the bubble edge
<MDSChipDismissible
  avatar={<MDSImage src="/jamie.jpg" alt="" aspectRatio="1 / 1" />}
  onDismiss={() => removeAttendee('jamie')}
>
  Jamie
</MDSChipDismissible>
```

## Gotchas

The avatar slot consumes the chip's leading padding — when an avatar is provided, the chip switches from 16 px to 4 px left padding so the 40 px disc sits flush against the bubble edge. The dismiss button itself owns the only pointer-reactive surface; the chip body does not respond to hover or active states.

## Source

- [MDSChipDismissible.tsx](packages/mds-components/src/MDSChipDismissible/MDSChipDismissible.tsx)
- [MDSChipDismissible.module.css](packages/mds-components/src/MDSChipDismissible/MDSChipDismissible.module.css)
- [MDSChipDismissible.stories.tsx](packages/mds-guidelines/src/stories/MDSChipDismissible.stories.tsx)

## Related

- [[MDSChipToggle]]
- [[MDSChipFilter]]
- [[MDSIcon]]
- [[MDSImage]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
