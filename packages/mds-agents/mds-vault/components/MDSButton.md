---
title: MDSButton
type: component
status: stable
source:
  - packages/mds-components/src/MDSButton/MDSButton.tsx
  - packages/mds-components/src/MDSButton/MDSButton.module.css
  - packages/mds-guidelines/src/stories/MDSButton.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, button, base-ui]
related:
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/cross-component-cascade]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSButton

> A clickable control that triggers an action. Built on Base UI Button with token-driven variants and sizes.

`MDSButton` is **forwardRef-enabled** — a deliberate exception to the contract's "no forwardRef" rule. It is frequently used as a Base UI `render` target (e.g. `<MDSMenu.Trigger render={<MDSButton />}>`) where Base UI's cloneElement-based ref attachment requires the rendered element type to forward refs. See [[conventions/component-contract]] §5 for the rationale.

## Purpose

A button is a control that triggers an action. `MDSButton` is the only button component in the system. For navigation that looks like a button, use the `render` prop to swap the root element to `<a>`.

## Use

- Triggering an action that happens in place — save, delete, submit, send.
- When the affordance needs a clear accessible name and keyboard activation.
- Exactly one `primary` button per screen, marking the most important action.
- Use `secondary` for important supporting actions and `outline`/`ghost` for tertiary or repeated actions in dense UI.

## Avoid

- Navigating between pages or to an external URL — use a link instead.
- Multiple `primary` buttons on the same screen — it dilutes hierarchy.
- Icon-only buttons without an `aria-label` — they are unreadable to assistive tech.
- Disabling without explanation — if the action cannot run, tell the user why.

## Import

```ts
import { MDSButton } from '@mds/components';
import '@mds/components/MDSButton/styles.css';   // or import the package-wide styles.css
```

Consumers must also import `@mds/tokens/tokens.css` at app root — see [[architecture/dependency-graph]].

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'secondary'` | Visual treatment. One per screen for `primary`. |
| `size` | `'small' \| 'large'` | `'large'` | `large` for primary actions, `small` for dense UI. |
| `iconOnly` | `boolean` | `false` | Discriminated. When `true`, `icon` and `aria-label` are required and `children` is forbidden. |
| `icon` | `React.ReactNode` | — | Optional trailing icon when `iconOnly: false`; **required** when `iconOnly: true`. |
| `aria-label` | `string` | — | **Required when `iconOnly: true`** (enforced at the type level). In icon-only mode, this string is the accessible name. |
| `children` | `React.ReactNode` | — | Button label. Forbidden when `iconOnly: true`. |
| `disabled` | `boolean` | `false` | Native disabled state. Surface a reason nearby when used. |
| `render` | Base UI `RenderProp` | — | Polymorphism — e.g. `render={<a href="..." />}`. |
| `className` | `string` | — | Composed with `.root`. |

All other props spread to Base UI's `Button` primitive.

### Type-level a11y enforcement

`MDSButtonProps` is a discriminated union — an icon-only button without `aria-label` is a compile error. An inaccessible button cannot ship.

## Variants

| Variant | Visual |
|---|---|
| `primary` | Solid accent fill, text on accent. |
| `secondary` (default) | Solid secondary accent fill. |
| `outline` | Transparent fill with 2 px `basic-stroke` border. Figma spec is 1.6 px — rounded up to the closest available `--mds-strokes-2` token per the token-fallback policy. |
| `ghost` | No fill, no stroke. |

## Sizes

| Size | Min-height | Default icon size |
|---|---|---|
| `small` | shorter chrome | 16px |
| `large` (default) | full-height chrome | 24px |

Icon size is set via [[conventions/cross-component-cascade]] — `MDSButton`'s `data-size` sets `--MDSIcon-size` on `.iconSlot`, so `<MDSIcon>` inside the slot picks up the right size automatically.

## States

Base UI's `Button` primitive emits these runtime data-attrs:

| Attribute | Source |
|---|---|
| `data-pressed` | Set during active press (specific to Base UI's standalone `Button` — see [[conventions/component-contract]] caveat). |
| `data-disabled` | Set when `disabled` is true. |

Plus the MDS-set attributes:

| Attribute | Source |
|---|---|
| `data-variant` | From the `variant` prop. |
| `data-size` | From the `size` prop. |
| `data-icon-only` | `true` only when `iconOnly: true` (else absent). |

## Behaviour

Renders a real `<button>` via Base UI. Click and Enter/Space activate it. Hover, pressed, and disabled states are driven by `data-*` attributes and resolve through `--mds-colours-interaction-states-*` tokens.

## Accessibility

Uses native button semantics — focus ring is `--mds-colours-basic-accent` with a 2px outline at a 2px offset. In `iconOnly` mode, `aria-label` is required at the type level; the inner icon slot is `aria-hidden`. Disabled state is announced by the platform.

## Animation

Hover/pressed transitions are short and respect `prefers-reduced-motion: reduce` (no transitions or animations).

## Styling Hooks

Component-scoped vars declared on `.root`. Override on any ancestor.

| Var | Default |
|---|---|
| `--MDSButton-fill` | `var(--mds-colours-basic-accent-secondary)` |
| `--MDSButton-text-fill` | `var(--mds-colours-basic-text-on-accent-secondary)` |
| `--MDSButton-stroke` | `transparent` |
| `--MDSButton-stroke-width` | `0` |
| `--MDSButton-corner-radius` | `var(--mds-radius-full)` |
| `--MDSButton-padding-horizontal` | `var(--mds-common-component-values-padding)` |
| `--MDSButton-min-height` | `var(--mds-common-component-values-height-large)` |
| `--MDSButton-min-width` | `var(--mds-number-ramp-100)` |
| `--MDSButton-item-spacing` | `var(--mds-number-ramp-8)` |
| `--MDSButton-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSButton-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

Variants override `--MDSButton-fill`, `--MDSButton-text-fill`, `--MDSButton-stroke`, `--MDSButton-stroke-width` only.

## Examples

```tsx
import { MDSButton, MDSIcon } from '@mds/components';

<MDSButton>Save</MDSButton>
<MDSButton variant="primary">Confirm</MDSButton>
<MDSButton variant="outline" size="small">Cancel</MDSButton>
<MDSButton variant="ghost">Reset</MDSButton>

// With trailing icon
<MDSButton icon={<MDSIcon name="arrow-right" />}>Continue</MDSButton>

// Icon-only — TypeScript REQUIRES icon + aria-label, FORBIDS children
<MDSButton iconOnly icon={<MDSIcon name="x" />} aria-label="Close" />

// Polymorphic — render as a link
<MDSButton render={<a href="/docs" />}>Documentation</MDSButton>
```

## Gotchas

The `iconOnly` prop is a discriminated union — it forbids `children` and requires both `icon` and `aria-label` at compile time. The `small` size switches to the `body-bold` type style (different family), not just a smaller `body-large`.

## Source

- [MDSButton.tsx](packages/mds-components/src/MDSButton/MDSButton.tsx)
- [MDSButton.module.css](packages/mds-components/src/MDSButton/MDSButton.module.css)
- [MDSButton.stories.tsx](packages/mds-guidelines/src/stories/MDSButton.stories.tsx)

## Related

- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/cross-component-cascade]] — how MDSButton determines MDSIcon's size.
- [[conventions/css-modules]]
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]]
