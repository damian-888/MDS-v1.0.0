---
title: MDSBottomNavigation
type: component
status: stable
source:
  - packages/mds-components/src/MDSBottomNavigation/MDSBottomNavigation.tsx
  - packages/mds-components/src/MDSBottomNavigation/MDSBottomNavigation.module.css
  - packages/mds-guidelines/src/stories/MDSBottomNavigation.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, navigation, mobile, bottom-nav]
related:
  - "[[MDSBreadcrumb]]"
  - "[[MDSIcon]]"
  - "[[MDSBadge]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSBottomNavigation

> A horizontal navigation bar for the bottom of a mobile or compact viewport. Holds 2–5 items, each pairing an icon with an optional label and an optional "has updates" badge dot. The selected item shows a 4px accent bar at the top; hovered and pressed states reveal the same bar in subdued/dark variants.

## Purpose

Provide the primary, always-visible top-level navigation on mobile and compact viewports. Surfaces peer-level destinations as tap-sized icons + labels with an unambiguous selected affordance (the accent selection bar). Designed to scale 2 ↔ 5 items without changing the API.

## Use

- As the primary top-level navigation on mobile and compact viewports where ≤ 5 destinations need to remain reachable from any screen.
- When destinations are peer-level — bottom nav surfaces siblings, not hierarchy. Pair with `MDSBreadcrumb` or a top app bar for in-section navigation.
- For destinations that benefit from a recognisable icon — bottom-nav items are tap targets first and labels second. Icons must be meaningful on their own; the label is a reinforcement, not a replacement.
- With `showBadge` for "has unread / has updates" indicators where the count is not the message. For numeric counts, compose `MDSBadge` next to the icon instead.

## Avoid

- For more than 5 destinations — the bar becomes cramped, taps less accurate, and the visual hierarchy collapses. Use an overflow menu or rethink the IA.
- For one-off actions (compose, scan, capture). Bottom nav is for navigation. Use a FAB or contextual action surface for actions.
- As the only navigation surface on a long page — pair with breadcrumbs or section headers so the user knows where they are within the destination.
- Hiding labels by default. The icon-only mode (`hideLabel`) is a compact variant; reserve it for narrow viewports or expert users. Always pass `aria-label` on each item when hiding labels.

## Import

```ts
import { MDSBottomNavigation, MDSIcon } from '@mds/components';
import '@mds/components/MDSBottomNavigation/styles.css';
```

## API / Props

### `MDSBottomNavigation` (the `<nav>` root)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `aria-label` | `string` | — **required** | Accessible name of the navigation landmark. |
| `background` | `'standard' \| 'secondary'` | `'standard'` | `standard` = `--mds-colours-basic-background` · `secondary` = `--mds-colours-basic-accent-secondary`. |
| `children` | `React.ReactNode` | — **required** | `MDSBottomNavigation.Item` children. |
| `render` | Base UI `RenderProp` | `<nav />` | Polymorphism. |

### `MDSBottomNavigation.Item` (also exported as `MDSBottomNavigationItem`)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `icon` | `React.ReactNode` | — **required** | Typically `<MDSIcon name="..." />`. Wrapped in `aria-hidden`. |
| `children` | `React.ReactNode` | — | Visible label below the icon. |
| `hideLabel` | `boolean` | `false` | Hides the visible label; pass `aria-label` to keep the item accessible. |
| `showBadge` | `boolean` | `false` | Renders a 10px accent dot at the top-right of the icon. |
| `selected` | `boolean` | `false` | Marks the item as current page — adds `aria-current="page"` and shows the selection bar. |
| `href` | `string` | — | When set, the item renders as `<a>`; without it, as `<button type="button">`. |
| `render` | Base UI `RenderProp` | `<a />` or `<button />` | Polymorphism — swap in a router link, etc. |

## Variants

The container has one variant axis:

| `background` | Surface |
|---|---|
| `standard` (default) | `--mds-colours-basic-background` |
| `secondary` | `--mds-colours-basic-accent-secondary` |

The number of children (2–5) determines the layout density — children always take `flex: 1 0 0` so the bar fills its container width.

## States

| Attribute | Source | Visual |
|---|---|---|
| `data-selected` | `selected` prop | Accent selection bar at the top of the item; `cursor: default`. |
| `:hover` (unselected) | CSS pseudo-class | Selection bar appears in `--mds-colours-interaction-states-hovered-text-hovered`. |
| `:hover` (selected) | CSS pseudo-class | Selection bar swaps to `--mds-colours-interaction-states-hovered-accent-hovered`. |
| `:active` (unselected) | CSS pseudo-class | Selection bar appears in `--mds-colours-interaction-states-pressed-text-pressed`. |
| `:active` (selected) | CSS pseudo-class | Selection bar swaps to `--mds-colours-interaction-states-pressed-accent-pressed`. |
| `:disabled` / `[data-disabled]` | Native / Base UI | Text fades to `--mds-colours-interaction-states-disabled-text-disabled`; `cursor: not-allowed`. |

`data-pressed` is intentionally NOT used here — items are not Base UI `Button` primitives, so they don't emit it. Pressed visuals use the native CSS `:active` pseudo-class.

## Behaviour

Renders `<nav aria-label="...">` with each child as a direct flex sibling (`flex: 1 0 0`) so 2/3/4/5-item bars all distribute their items equally. Items render as `<a>` when given an `href` and `<button type="button">` otherwise; the polymorphism contract's `render` prop lets you swap in router-aware link components. The selection bar is always present in the DOM; CSS state (`[data-selected]`, `:hover`, `:active`) controls its colour — selected items use the accent, unselected items reveal the text colour on hover/press for a subtle affordance.

## Accessibility

Uses the `<nav>` landmark with a required `aria-label`. Items render as real `<a>`/`<button>` so keyboard focus, the focus ring, and assistive-tech announcements work without any extra wiring. The selected item is marked `aria-current="page"`. Each item honours the system's 48 px minimum tappable area on every side. Icons are wrapped with `aria-hidden`, so the label (or the per-item `aria-label` when `hideLabel` is set) is the sole accessible name. The badge dot is decorative (`aria-hidden`) — pair it with an item-level `aria-label` like "Inbox, 3 unread" when the indicator carries information.

## Animation

No animation on the bar itself — state changes (selection, hover, press) are instant colour swaps. `prefers-reduced-motion: reduce` is honoured (no transitions or animations declared).

## Styling Hooks

### Container (`.root`)

| Var | Default |
|---|---|
| `--MDSBottomNavigation-fill` | `var(--mds-colours-basic-background)` (overridden to `--mds-colours-basic-accent-secondary` when `data-background='secondary'`) |

### Item (`.item`)

| Var | Default |
|---|---|
| `--MDSBottomNavigationItem-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSBottomNavigationItem-accent-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSBottomNavigationItem-selection-bar-fill` | `transparent` (state-driven) |
| `--MDSBottomNavigationItem-selection-bar-height` | `var(--mds-number-ramp-4)` |
| `--MDSBottomNavigationItem-selection-bar-width` | `var(--mds-common-component-values-minimum-tappable-area)` |
| `--MDSBottomNavigationItem-min-size` | `var(--mds-common-component-values-minimum-tappable-area)` |
| `--MDSBottomNavigationItem-gap` | `var(--mds-common-component-values-gap)` |
| `--MDSBottomNavigationItem-padding` | `var(--mds-common-component-values-gap)` |
| `--MDSBottomNavigationItem-icon-size` | `var(--mds-number-ramp-24)` |
| `--MDSBottomNavigationItem-badge-size` | `var(--mds-number-ramp-10)` |
| `--MDSBottomNavigationItem-badge-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSBottomNavigationItem-badge-stroke` | `var(--mds-colours-basic-background)` |
| `--MDSBottomNavigationItem-focus-ring-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSBottomNavigationItem-focus-ring-width` | `var(--mds-strokes-2)` |

The icon container sets `--MDSIcon-size` so any `MDSIcon` (or other component reading the var) inside the slot picks up the 24 px bottom-nav size automatically.

## Examples

```tsx
import { MDSBottomNavigation, MDSIcon } from '@mds/components';

<MDSBottomNavigation aria-label="Primary">
  <MDSBottomNavigation.Item href="/" icon={<MDSIcon name="house" />} selected>
    Home
  </MDSBottomNavigation.Item>
  <MDSBottomNavigation.Item href="/search" icon={<MDSIcon name="magnifying-glass" />}>
    Search
  </MDSBottomNavigation.Item>
  <MDSBottomNavigation.Item href="/inbox" icon={<MDSIcon name="chat-circle" />} showBadge>
    Messages
  </MDSBottomNavigation.Item>
  <MDSBottomNavigation.Item href="/profile" icon={<MDSIcon name="user" />}>
    Profile
  </MDSBottomNavigation.Item>
</MDSBottomNavigation>
```

```tsx
// Icon-only / compact variant — every item needs its own aria-label.
<MDSBottomNavigation aria-label="Primary" background="secondary">
  <MDSBottomNavigation.Item href="/" icon={<MDSIcon name="house" />} hideLabel aria-label="Home" selected>
    Home
  </MDSBottomNavigation.Item>
  <MDSBottomNavigation.Item href="/profile" icon={<MDSIcon name="user" />} hideLabel aria-label="Profile">
    Profile
  </MDSBottomNavigation.Item>
</MDSBottomNavigation>
```

## Gotchas

The selection bar is rendered as a sibling slot (`data-slot="selection-bar"`) inside every item, not just the selected one — visibility is driven by CSS so consumers can override the appearance per state via `--MDSBottomNavigationItem-selection-bar-fill`. Items with `selected` set `cursor: default`; consumers wiring router-level navigation should still attach `onClick` and prevent the default navigation on the current item to avoid unnecessary route churn.

## Source

- [MDSBottomNavigation.tsx](packages/mds-components/src/MDSBottomNavigation/MDSBottomNavigation.tsx)
- [MDSBottomNavigation.module.css](packages/mds-components/src/MDSBottomNavigation/MDSBottomNavigation.module.css)
- [MDSBottomNavigation.stories.tsx](packages/mds-guidelines/src/stories/MDSBottomNavigation.stories.tsx)

## Related

- [[MDSBreadcrumb]]
- [[MDSIcon]]
- [[MDSBadge]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
