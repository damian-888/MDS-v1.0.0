---
title: MDSFlyout
type: component
status: stable
source:
  - packages/mds-components/src/MDSFlyout/MDSFlyout.tsx
  - packages/mds-components/src/MDSFlyout/MDSFlyout.module.css
  - packages/mds-guidelines/src/stories/MDSFlyout.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, flyout, popover, dropdown, base-ui]
related:
  - "[[MDSBreadcrumb]]"
  - "[[MDSIcon]]"
  - "[[MDSText]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSFlyout

> A presentational popup card. Combine with Base UI Menu / Popover for real floating behaviour. Ships an MDSFlyout.Item subcomponent that matches Figma's "Dropdown Item" pill.

## Purpose

A floating panel that holds a list of options or content. Most commonly composed with Base UI's `Menu.Popup` via the `render` prop — `MDSFlyout` provides the visual shell, Base UI provides the popup positioning, focus management, and keyboard semantics.

## Use

- As the visual shell for menus, dropdowns, or any anchored card surfaces — e.g. MDSBreadcrumb's overflow popup, future Select / Combobox menus, or custom Popover content.
- With MDSFlyout.Item for dropdown rows that share the design-system pill, hover, and 48px tappable area.
- With `maxHeight` when the content list might grow long — the browser renders a styled scrollbar matching the Figma "Show Scrollbar=true" frame.
- Composed via `render={<Menu.Popup />}` (or `<Popover.Popup />`, etc.) so the flyout styling layers cleanly on Base UI primitives.

## Avoid

- Building floating behaviour from scratch — let Base UI Menu / Popover own the trigger, positioning, focus management, and click-outside.
- Using the flyout as a generic Card. Cards are full-width surfaces; flyouts are anchored, transient overlays.
- Hardcoding widths — let the consumer size the flyout (via inline `style` or className) so it can match its trigger.
- Stacking dropdown items inside the flyout without using MDSFlyout.Item — the pill shape, hover state, focus ring, and minimum-tappable-area are part of the contract.

## Import

```ts
import { MDSFlyout, MDSFlyoutItem } from '@mds/components';
import '@mds/components/MDSFlyout/styles.css';
```

Both `<MDSFlyout.Item>` and `<MDSFlyoutItem>` resolve to the same component.

## API / Props

### `MDSFlyout` (Root)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `maxHeight` | `React.CSSProperties['maxHeight']` | — | Cap the flyout height and enable internal scrolling. Accepts any CSS length (number for px, or strings like `"50vh"`). Sets `data-scrollable` and renders a styled scrollbar. |
| `render` | Base UI `RenderProp` | `<div />` | Polymorphism — most common: `render={<Menu.Popup />}`. |
| All `HTMLAttributes<HTMLDivElement>` | — | — | Spread. |
| `className` | `string` | — | Composed with `.root`. |
| `style` | `React.CSSProperties` | — | Merged with the `maxHeight` inline style when scrollable. |

### `MDSFlyout.Item`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `icon` | `React.ReactNode` | — | Optional 16px trailing icon (per Figma "Dropdown Item"). |
| `render` | Base UI `RenderProp` | `<button type="button" />` | Polymorphism — common: `render={<Menu.Item />}` or `render={<a href="..." />}`. |
| All `ButtonHTMLAttributes<HTMLButtonElement>` | — | — | Spread. |
| `className` | `string` | — | Composed with `.item`. |
| `children` | `React.ReactNode` | — | Label. |

## Variants

None at the type level. The `data-scrollable` mode (when `maxHeight` is set) is the only visual variant.

## Sizes

None — sizes to content (or to `maxHeight` when scrollable).

## States

| Attribute | When |
|---|---|
| `data-scrollable` | Present (empty value) when `maxHeight` is set. The CSS Module uses this to enable scrollable behaviour. |

When rendered with `Menu.Popup`, Base UI's Menu state attrs apply to the inner popup element (handled by Base UI).

## Behaviour

MDSFlyout is presentational — a `<div>` with the shell styling and a `render` prop for polymorphism. MDSFlyout.Item is a polymorphic `<button>` with a leading label and a 16px trailing icon slot; pass `icon={<MDSIcon …/>}` to fill the slot. Both subcomponents forward arbitrary HTML attributes onto the rendered element via `useRender`, so consumers can attach IDs, ARIA props, event handlers, or Base UI render props.

## Accessibility

MDSFlyout itself has no implicit role — it inherits the role of whatever it renders as (`<div>` by default, `<Menu.Popup>` when composed). MDSFlyout.Item renders a real `<button type="button">` by default, with a visible focus ring (2px accent outline). The CSS responds to `[data-highlighted]` so Base UI Menu's keyboard navigation lights up the same hover background.

## Animation

No motion on the shell itself. When composed with Base UI Menu / Popover, the parent owns the open/close animation via `data-starting-style` / `data-ending-style`. All transitions are suppressed under `prefers-reduced-motion: reduce`.

## Styling Hooks

### Root

| Var | Default |
|---|---|
| `--MDSFlyout-fill` | `var(--mds-colours-basic-background)` |
| `--MDSFlyout-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSFlyout-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSFlyout-corner-radius` | `var(--mds-common-component-values-radius)` |

When `data-scrollable` is set: `overflow-y: auto`, `scrollbar-width: thin`, `scrollbar-color: var(--mds-colours-basic-scrim) transparent`. Webkit scrollbar pseudo-elements styled to match Figma (8px wide, scrim thumb).

See [MDSFlyout.module.css](packages/mds-components/src/MDSFlyout/MDSFlyout.module.css) for the item-scoped vars.

## Examples

### Standalone (no popup)

```tsx
import { MDSFlyout } from '@mds/components';

<MDSFlyout>
  <MDSFlyout.Item>Option 1</MDSFlyout.Item>
  <MDSFlyout.Item>Option 2</MDSFlyout.Item>
  <MDSFlyout.Item>Option 3</MDSFlyout.Item>
</MDSFlyout>
```

### As a Base UI Menu Popup (canonical usage)

```tsx
import { Menu } from '@base-ui-components/react/menu';
import { MDSFlyout, MDSIcon } from '@mds/components';

<Menu.Root>
  <Menu.Trigger>Options</Menu.Trigger>
  <Menu.Portal>
    <Menu.Positioner sideOffset={0} align="start">
      <MDSFlyout render={<Menu.Popup />}>
        <MDSFlyout.Item render={<Menu.Item />} icon={<MDSIcon name="copy" />}>
          Copy
        </MDSFlyout.Item>
        <MDSFlyout.Item render={<Menu.Item />}>Cut</MDSFlyout.Item>
        <MDSFlyout.Item render={<Menu.Item />}>Paste</MDSFlyout.Item>
      </MDSFlyout>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>
```

### Scrollable

```tsx
<MDSFlyout maxHeight="240px" render={<Menu.Popup />}>
  {/* 50 items — list scrolls inside the 240px-tall flyout */}
  {options.map((opt) => (
    <MDSFlyout.Item key={opt.id} render={<Menu.Item />}>
      {opt.label}
    </MDSFlyout.Item>
  ))}
</MDSFlyout>
```

### Item as link

```tsx
<MDSFlyout.Item render={<a href="/docs" />}>Documentation</MDSFlyout.Item>
```

## Gotchas

The card is purely presentational. It does not anchor itself to a trigger, manage focus, or handle escape-to-close — pair it with Base UI Menu or Popover for that. The styled scrollbar only renders when `maxHeight` is set; otherwise the flyout grows to fit its content with `overflow: hidden`. When portalled (e.g. inside `<Menu.Portal>`), component-scoped vars must be declared on the flyout element itself — the portal escapes any ancestor `.root` cascade.

## Source

- [MDSFlyout.tsx](packages/mds-components/src/MDSFlyout/MDSFlyout.tsx)
- [MDSFlyout.module.css](packages/mds-components/src/MDSFlyout/MDSFlyout.module.css)
- [MDSFlyout.stories.tsx](packages/mds-guidelines/src/stories/MDSFlyout.stories.tsx)

## Related

- [[MDSBreadcrumb]] — uses `MDSFlyout` as the shell for its overflow menu (via `Menu.Portal`).
- [[MDSIcon]]
- [[MDSText]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]] — Menu primitive that pairs with this shell.
