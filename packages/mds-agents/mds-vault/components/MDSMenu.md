---
title: MDSMenu
type: component
status: stable
source:
  - packages/mds-components/src/MDSMenu/MDSMenu.tsx
  - packages/mds-components/src/MDSMenu/MDSMenu.module.css
  - packages/mds-guidelines/src/stories/MDSMenu.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, menu, dropdown, compound, base-ui]
related:
  - "[[MDSBreadcrumb]]"
  - "[[MDSFlyout]]"
  - "[[MDSDropdownSelect]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSMenu

> A compound navigation/action dropdown built on Base UI Menu. Rows match Figma’s "Dropdown Item" Link variant — label plus a trailing `caret-right`. Use `icon={null}` for plain rows or swap in any 16 px glyph.

## Purpose

The design-system action / navigation dropdown. Built on Base UI’s Menu primitive — MDS owns the popup shell and the item row styling (the “Link” variant of Figma’s “Dropdown Item”, with the trailing `caret-right`). Selection state is not maintained — for picker UIs use `MDSDropdownSelect` instead.

## Use

- For action menus opened from a button — “More options”, overflow menus, profile menus.
- For navigation menus where each row is a real link. Pair with `render={<a href="…" />}` on `MDSMenu.Item` to render a true anchor while keeping keyboard navigation.
- When you need divider sections — pair multiple `MDSMenu.Popup` regions inside a parent layout, or use `BaseMenu.Separator` between groups.
- Inside `MDSBreadcrumb` overflow scenarios (Base UI Menu plus the MDSFlyout shell already exists there — MDSMenu is the equivalent standalone API).

## Avoid

- As a substitute for `MDSDropdownSelect`. Menu rows don’t maintain a “selected” state — there is no check indicator. If the consumer needs to pick exactly one value, use `MDSDropdownSelect`.
- With long, scrolling lists (>10 items). Open a dialog or popover with a list-view instead — menus are for short, opinionated action sets.
- With non-action rows (descriptive labels, headings). Items must be activatable. Use `MDSMenu.Item disabled` for a non-actionable row that still belongs in the keyboard tab order.
- Stacking icons on both ends without breathing room. Use `leftIcon` OR `icon`, rarely both — they cap the row to one affordance per side.

## Import

```ts
import {
  MDSMenu,
  MDSMenuTrigger,
  MDSMenuPopup,
  MDSMenuItem,
} from '@mds/components';
import '@mds/components/MDSMenu/styles.css';
```

Both `<MDSMenu.Trigger>` and `<MDSMenuTrigger>` resolve to the same component (same for `Popup` and `Item`).

## API / Props

### `MDSMenu` (Root)

Re-exports Base UI’s `Menu.Root` directly — see [Base UI Menu Root](https://base-ui.com/react/components/menu#root). Most-used props: `defaultOpen`, `open`, `onOpenChange`, `modal`, `disabled`.

### `MDSMenu.Trigger`

Renders Base UI's `Menu.Trigger` unstyled by default — the consumer supplies the visual. The canonical pattern is `render={<MDSButton variant="secondary">Open menu</MDSButton>}` (works because [[MDSButton]] uses `forwardRef` per [[conventions/component-contract]] §5 exception). Other valid options: `render={<a … />}`, or a styled `<button>` via `className` / inline `style`.

| Prop | Type | Default | Notes |
|---|---|---|---|
| All Base UI `Menu.Trigger` props | — | — | Spread. |
| `className` | `string` | — | Composed with `.trigger`. |

### `MDSMenu.Popup`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `positionerProps` | Base UI `Menu.Positioner` props | `{ sideOffset: 4 }` | Forwarded onto the positioner. Configure `side`, `align`, etc. |
| `inline` | `boolean` | `false` | Render the popup without a portal. |
| All Base UI `Menu.Popup` props | — | — | Spread. |
| `className` | `string` | — | Composed with `.popup`. |

### `MDSMenu.Item`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `leftIcon` | `React.ReactNode` | — | Optional 16 px leading icon. |
| `icon` | `React.ReactNode \| null` | `<MDSIcon name="caret-right" size="small" />` | Trailing icon. `null` removes the slot. |
| `render` | Base UI `RenderProp` | `<button />` | Polymorphism — pass `render={<a href="…" />}` for a real anchor. |
| All Base UI `Menu.Item` props | — | — | Spread. `disabled` is supported. |
| `className` | `string` | — | Composed with `.item`. |
| `children` | `React.ReactNode` | — | Label. |

## Variants

None at the type level. The default trailing `caret-right` can be replaced or omitted per item; the visual contract has no other variants.

## Sizes

None. Item height is fixed at `--mds-common-component-values-minimum-tappable-area` (48 px).

## States

| Attribute | When |
|---|---|
| `data-highlighted` (Item) | Base UI sets this on the keyboard-active row — drives the hover background. |
| `:active` (Item) | Pointer pressed on the row — paints the pressed background. |
| `data-disabled` (Item) | The item is disabled — greys the label, blocks interaction. |
| `data-popup-open` (Trigger) | Base UI sets this on the trigger while the popup is mounted. |

## Behaviour

Built on Base UI Menu — trigger emits the open/close handshake, keyboard nav covers `↑/↓`, `Home/End`, type-to-select, and `Esc` to close. Items render as `role="menuitem"`. The popup is portalled by default.

## Accessibility

Trigger inherits any underlying element’s role (typically `<button>`). Items carry the appropriate ARIA, focus rings render on `:focus-visible` with a 2 px accent outline offset inwards to match the pill radius. Default trailing chevron is `aria-hidden`.

## Animation

No transition on row state changes; the highlighted row swaps background instantly to match keyboard responsiveness. Under `prefers-reduced-motion: reduce` no animation is applied.

## Styling Hooks

### Popup

| Var | Default |
|---|---|
| `--MDSMenuPopup-fill` | `var(--mds-colours-basic-background)` |
| `--MDSMenuPopup-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSMenuPopup-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSMenuPopup-corner-radius` | `var(--mds-common-component-values-radius)` |

### Item

See [MDSMenu.module.css](packages/mds-components/src/MDSMenu/MDSMenu.module.css) for the item-scoped vars.

## Examples

### Action menu

```tsx
<MDSMenu>
  <MDSMenu.Trigger>Options</MDSMenu.Trigger>
  <MDSMenu.Popup>
    <MDSMenu.Item>Rename</MDSMenu.Item>
    <MDSMenu.Item>Duplicate</MDSMenu.Item>
    <MDSMenu.Item icon={null}>Delete</MDSMenu.Item>
  </MDSMenu.Popup>
</MDSMenu>
```

### Navigation menu (items as anchors)

```tsx
<MDSMenu>
  <MDSMenu.Trigger>Account</MDSMenu.Trigger>
  <MDSMenu.Popup>
    <MDSMenu.Item render={<a href="/profile" />}>Profile</MDSMenu.Item>
    <MDSMenu.Item render={<a href="/settings" />}>Settings</MDSMenu.Item>
    <MDSMenu.Item render={<a href="/logout" />}>Sign out</MDSMenu.Item>
  </MDSMenu.Popup>
</MDSMenu>
```

### Plain rows (no trailing chevron)

```tsx
<MDSMenu.Popup>
  <MDSMenu.Item icon={null}>One</MDSMenu.Item>
  <MDSMenu.Item icon={null}>Two</MDSMenu.Item>
  <MDSMenu.Item icon={null}>Three</MDSMenu.Item>
</MDSMenu.Popup>
```

## Gotchas

The popup uses Base UI’s `Menu.Positioner` — pass alignment/offset via the `positionerProps` prop on `MDSMenu.Popup`. Use `<MDSMenu.Popup inline>` to render without a portal when testing.

`MDSMenu.Trigger` ships unstyled — the consumer supplies the visual via `render={<MDSButton />}`, `render={<a … />}`, or a styled className. Among MDS components, only [[MDSButton]] currently has `forwardRef` and so is the only one safe to pass as a Base UI `render` target. Other MDS components without `forwardRef` (`MDSChipDismissible`, `MDSChipToggle`, etc.) would break popup-element tracking when used the same way.

## Source

- [MDSMenu.tsx](packages/mds-components/src/MDSMenu/MDSMenu.tsx)
- [MDSMenu.module.css](packages/mds-components/src/MDSMenu/MDSMenu.module.css)
- [MDSMenu.stories.tsx](packages/mds-guidelines/src/stories/MDSMenu.stories.tsx)

## Related

- [[MDSBreadcrumb]] — composes Base UI Menu with the MDSFlyout shell for its overflow scenario.
- [[MDSFlyout]] — shares the popup shell vocabulary.
- [[MDSDropdownSelect]] — sibling compound for picker UIs.
- [[index]]
- [[conventions/component-contract]]
- [[libraries/base-ui]] — Menu primitive that pairs with this shell.
