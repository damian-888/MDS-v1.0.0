---
title: MDSLink
type: component
status: stable
source:
  - packages/mds-components/src/MDSLink/MDSLink.tsx
  - packages/mds-components/src/MDSLink/MDSLink.module.css
  - packages/mds-guidelines/src/stories/MDSLink.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, link, anchor, polymorphic]
related:
  - "[[MDSButton]]"
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSLink

> An underlined, polymorphic anchor with a 16 px trailing icon and the brand link palette. Renders an `<a>` by default; swap the element via `render` for framework routers.

## Purpose

The design-system text-link primitive. A solid underline plus a 16 px trailing icon (defaulting to `arrow-right`) signals navigation; the four interaction colours (basic, hovered, pressed, visited) provide state feedback. Polymorphism via Base UI’s `useRender` lets consumers swap the underlying element for framework router primitives or a `<button>` when the affordance fires JS instead of navigating.

## Use

- For inline or block navigation actions where the affordance is “go elsewhere”.
- Inside body copy, footer, or settings rows when the visible label IS the destination.
- With `render={<NextLink … />}` (or any other framework primitive) to delegate the actual navigation while keeping the visual contract.
- With `icon={null}` when the surrounding sentence already implies direction (avoid double-meaning).

## Avoid

- For buttons. Links navigate; buttons act. If the action submits a form or toggles state, use `MDSButton`.
- Without an underline. The underline is the single source of “linkness” — never override `text-decoration` away.
- Stacking many links vertically with default `min-height` (48 px tappable area). For dense lists, use `MDSFlyout.Item` or `MDSMenu.Item` instead.
- Custom trailing glyphs that imply a different action (a close `x`, a checkmark). Stick to direction or external-link affordances.

## Import

```ts
import { MDSLink } from '@mds/components';
import '@mds/components/MDSLink/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Required. Visible label. |
| `alignment` | `'left' \| 'center' \| 'right'` | `'left'` | Cross-axis position inside the tappable area. Exposed as `data-alignment`. |
| `icon` | `React.ReactNode \| null` | `<MDSIcon name="arrow-right" size="small" />` | Trailing icon. `null` removes the slot. |
| `render` | Base UI `RenderProp` | `<a />` | Polymorphism — pass `render={<button type="button" />}` or `render={<Link to="…" />}`. |
| All `AnchorHTMLAttributes<HTMLAnchorElement>` | — | — | Spread. |
| `className` | `string` | — | Composed with `.root`. |

## Variants

`alignment: 'left' \| 'center' \| 'right'`. The values map to the `data-alignment` attribute and drive the flex `align-items` rule. No additional variants — link styling is intentionally narrow.

## Sizes

None. Text size is fixed at body-bold per Figma.

## States

| Pseudo-class / attribute | Effect |
|---|---|
| `:hover:not([aria-disabled='true'])` | Text + underline switch to `--MDSLink-text-fill-hovered`. Underline thickness doubles to 2 px. |
| `:active:not([aria-disabled='true'])` | Text + underline switch to `--MDSLink-text-fill-pressed`. Underline thickness stays at 2 px. |
| `:visited` | Text + underline switch to `--MDSLink-text-fill-visited`. Browser-controlled — colour only. |
| `[aria-disabled='true']` | Text + underline switch to the disabled-text token, `pointer-events: none`, `cursor: not-allowed`. |
| `:focus-visible` | 2 px accent outline with a 2 px offset and 4 px border-radius. |

## Behaviour

Renders an `<a>` by default. Polymorphism is handled by Base UI’s `useRender` — pass `render={<button />}`, `render={<Link to="…" />}`, etc. The trailing icon is a small 16 px slot that picks up the link colour.

## Accessibility

Carries the implicit `link` role when rendered as an `<a>`. The default trailing icon is `aria-hidden`. Disabled state opts in via `aria-disabled`; `pointer-events: none` is applied to match. Focus uses a 2 px accent outline.

## Animation

The underline thickens on hover/active (1 px → 2 px). Under `prefers-reduced-motion: reduce` the transition is suppressed.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSLink-text-fill` | `var(--mds-colours-basic-link)` |
| `--MDSLink-text-fill-hovered` | `var(--mds-colours-interaction-states-hovered-link-hovered)` |
| `--MDSLink-text-fill-pressed` | `var(--mds-colours-interaction-states-pressed-link-pressed)` |
| `--MDSLink-text-fill-visited` | `var(--mds-colours-interaction-states-visited-link-visited)` |
| `--MDSLink-min-height` | `var(--mds-common-component-values-minimum-tappable-area)` |
| `--MDSLink-gap` | `var(--mds-number-ramp-4)` |
| `--MDSLink-underline-thickness` | `var(--mds-strokes-1)` |
| `--MDSLink-underline-thickness-hovered` | `var(--mds-strokes-2)` |
| `--MDSLink-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSLink-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

## Examples

### Inline

```tsx
<MDSLink href="/learn-more">Learn more</MDSLink>
```

### As a button

```tsx
<MDSLink render={<button type="button" onClick={openModal} />}>
  Show details
</MDSLink>
```

### As a framework router primitive

```tsx
import Link from 'next/link';
<MDSLink render={<Link href="/blog/[slug]" as="/blog/case-study" />}>
  Case study
</MDSLink>
```

### Without trailing icon

```tsx
<MDSLink href="#" icon={null}>Read the docs</MDSLink>
```

## Gotchas

`:visited` is colour-only by browser policy — the spec asks for the visited palette and that’s exactly what we apply. Hover/active overrides visited so a returning user still gets the right pressed colour on click.

## Source

- [MDSLink.tsx](packages/mds-components/src/MDSLink/MDSLink.tsx)
- [MDSLink.module.css](packages/mds-components/src/MDSLink/MDSLink.module.css)
- [MDSLink.stories.tsx](packages/mds-guidelines/src/stories/MDSLink.stories.tsx)

## Related

- [[MDSButton]]
- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
