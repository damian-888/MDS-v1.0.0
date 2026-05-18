---
title: MDSCheckbox
type: component
status: stable
source:
  - packages/mds-components/src/MDSCheckbox/MDSCheckbox.tsx
  - packages/mds-components/src/MDSCheckbox/MDSCheckbox.module.css
  - packages/mds-guidelines/src/stories/MDSCheckbox.stories.tsx
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [component, checkbox, base-ui, form]
related:
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[theming/scheme]]"
  - "[[libraries/base-ui]]"
---

# MDSCheckbox

> A two-state (or three-state, with indeterminate) ticker built on Base UI Checkbox. 32 px square with a 6 px corner radius; selected and indeterminate states fill with the basic accent.

## Purpose

A standard binary form control with an optional indeterminate third state. Discriminated API: a labelled checkbox or an icon-only square (the latter requires `aria-label`).

## Use

- Multi-select lists where each row is an independent on/off.
- Boolean form fields ("I agree to…", "Send me updates").
- Tri-state group headers — set `indeterminate` when some but not all children are checked.

## Avoid

- Single-choice selection — use a radio group.
- Triggering immediate actions — use a switch or button.
- As a visual checkmark with no interaction — use `MDSIcon name="check"` directly.

## Import

```ts
import { MDSCheckbox } from '@mds/components';
import '@mds/components/MDSCheckbox/styles.css';
```

## API / Props

`MDSCheckboxProps` is a discriminated union — `iconOnly: true` requires `aria-label` and forbids `children`; the default branch allows a visible label via `children`.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `iconOnly` | `boolean` | `false` | Discriminator. When `true`, no label is rendered and `aria-label` is required. |
| `children` | `React.ReactNode` | — | Visible label (forbidden when `iconOnly: true`). |
| `aria-label` | `string` | — | **Required when `iconOnly: true`**. |
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial state. |
| `indeterminate` | `boolean` | `false` | Three-state mixed indicator (renders a `minus` glyph). |
| `onCheckedChange` | `(checked, eventDetails) => void` | — | Fired when the box is toggled. |
| `disabled` | `boolean` | `false` | Native disabled state. |
| `error` | `boolean` | `false` | Sets `data-scheme="error"` on the wrapper so the box adopts the red palette, and thickens the unchecked stroke to 4 px. |

All other props spread to Base UI's `Checkbox.Root` primitive.

## Variants

| State | Visual |
|---|---|
| Unchecked | White box, 1 px basic-stroke. |
| Checked | Basic-accent fill, white check glyph. |
| Indeterminate | Basic-accent fill, white minus glyph. |
| Error, unchecked | White box, 4 px error-palette stroke. |
| Error, checked / indeterminate | Filled, error-palette stroke. |
| Disabled | Disabled-background fill; disabled-text-disabled glyph if checked. |

## Sizes

Single size — fixed 32 px square (`--mds-number-ramp-32`). With a label, the wrapper has a `min-height` of 48 px (the standard tappable height) and 8 px block padding; `iconOnly` mode collapses both.

## States

| Attribute | Source |
|---|---|
| `data-checked` | Emitted by Base UI's `Checkbox.Root` when checked. |
| `data-indeterminate` | Emitted by Base UI when `indeterminate` is true. |
| `data-disabled` | Emitted by Base UI when `disabled` is true. |
| `data-error` | Set by MDS from the `error` prop. |
| `data-scheme="error"` | Set by MDS from the `error` prop — swaps the box into the red palette. |
| `data-icon-only` | Set by MDS in icon-only mode. |

## Behaviour

Wraps Base UI `Checkbox.Root` + `Checkbox.Indicator`. Indeterminate state shows a minus glyph; checked shows a tick. Both use the basic accent fill. The icon-only variant collapses the wrapper to the box's intrinsic 32 px so it can sit alone in a dense layout.

## Accessibility

Discriminated TypeScript API — `iconOnly` requires `aria-label`. The label-mode wraps the box and label in a `<label>` element so clicking the label toggles the box. The error mode sets `data-scheme="error"` so the stroke (and any subsequent error visuals) inherit the red palette — never hardcode the red.

## Animation

No transitions on the box fill — the check/minus icon appears immediately on toggle. `prefers-reduced-motion` is honoured.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSCheckbox-box-fill` | `var(--mds-colours-basic-background)` |
| `--MDSCheckbox-box-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSCheckbox-box-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSCheckbox-box-corner-radius` | `var(--mds-radius-extra-small)` |
| `--MDSCheckbox-box-size` | `var(--mds-number-ramp-32)` |
| `--MDSCheckbox-indicator-fill` | `var(--mds-colours-basic-text-on-accent)` |
| `--MDSCheckbox-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSCheckbox-item-spacing` | `var(--mds-number-ramp-12)` |
| `--MDSCheckbox-min-height` | `var(--mds-common-component-values-height-large)` |
| `--MDSCheckbox-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSCheckbox-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

Checked / indeterminate states override `--MDSCheckbox-box-fill` and `--MDSCheckbox-box-stroke` to the accent colour. Error state thickens the stroke to `--mds-strokes-4` on the unchecked box.

## Examples

```tsx
import { MDSCheckbox } from '@mds/components';

// Labelled, uncontrolled
<MDSCheckbox defaultChecked onCheckedChange={(c) => console.log(c)}>
  I agree to the terms
</MDSCheckbox>

// Indeterminate group header
<MDSCheckbox checked indeterminate onCheckedChange={selectAll}>
  Select all
</MDSCheckbox>

// Error state
<MDSCheckbox error>Please confirm</MDSCheckbox>

// Icon-only — TypeScript REQUIRES aria-label
<MDSCheckbox iconOnly aria-label="Pick option A" />
```

## Gotchas

When `disabled` and `checked`/`indeterminate` are both true, the box stays filled in the disabled-background colour and the glyph adopts the disabled-text colour — matching Figma's "disabled, selected" frame. Don't rely on an "error" scheme for `success`-style affirmation — the error prop swaps the entire box scheme to red. The check icon is rendered at 24 px inside the 32 px box (4 px padding from each edge); the minus icon uses the same canvas.

## Source

- [MDSCheckbox.tsx](packages/mds-components/src/MDSCheckbox/MDSCheckbox.tsx)
- [MDSCheckbox.module.css](packages/mds-components/src/MDSCheckbox/MDSCheckbox.module.css)
- [MDSCheckbox.stories.tsx](packages/mds-guidelines/src/stories/MDSCheckbox.stories.tsx)

## Related

- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[theming/scheme]]
- [[libraries/base-ui]]
