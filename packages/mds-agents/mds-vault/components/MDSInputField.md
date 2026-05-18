---
title: MDSInputField
type: component
status: stable
source:
  - packages/mds-components/src/MDSInputField/MDSInputField.tsx
  - packages/mds-components/src/MDSInputField/MDSInputField.module.css
  - packages/mds-guidelines/src/stories/MDSInputField.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, input, form, field, base-ui]
related:
  - "[[MDSButton]]"
  - "[[MDSCheckbox]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSInputField

> The design-system text field. A floating label sits vertically centred when the field is empty and inactive, then slides to the top and shrinks to microcopy when the field is focused or filled. Hover/focus/error/disabled/read-only states are covered, plus optional leading icons, prefix/suffix, status icon, or a trailing action slot.

Mirrors Figma frames "Input Field" (#6104:13647) and "Input Field + Button" (#6095:7914) — the `action` prop covers the latter.

## Purpose

A single-line text field built around a native `<input>`. The wrapper owns the floating-label chrome, focus / hover / error / disabled / read-only state machine, and a slot system that accepts a leading icon, prefix glyph, suffix glyph, status icon, and (optionally) a trailing action button. The Figma matrix “Input Field” + “Input Field + Button” is covered by the single component via the `action` prop.

## Use

- For any single-line text capture — name, email, search, currency, weight, etc.
- With `prefix`/`suffix` for unit affordances (€, Kg) — they render in body type and stay inside the field.
- With `action={<MDSButton iconOnly icon={…} />}` for inline-action fields (“Add”, “Apply”, “Search”). The right padding tightens to 6 px so the button sits flush.
- With `error` + `errorMessage` together — the component links them via `aria-describedby` and applies `data-scheme="error"` to the field element so the border flips to the destructive palette.

## Avoid

- Multi-line capture. Use a `<textarea>`-backed component instead — MDSInputField renders a single `<input>`.
- Hardcoding widths inside the field. Size the wrapper (the consumer’s grid/flex) — the input stretches to fill.
- Mixing `rightIcon` and `action` simultaneously. `action` always wins; choose one slot per field.
- Putting a button inside a read-only or disabled input. The trailing slot stays visible but the rest of the chrome hints the field is non-editable, which creates conflicting affordances.

## Import

```ts
import { MDSInputField } from '@mds/components';
import '@mds/components/MDSInputField/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `React.ReactNode` | — | Required. Floating label. |
| `error` | `boolean` | `false` | Paints the field border in the destructive scheme (4 px stroke). Pairs with `aria-invalid` on the input. |
| `errorMessage` | `React.ReactNode` | — | Surfaced beneath the field when `error` is true. Linked via `aria-describedby`. |
| `leftIcon` | `React.ReactNode` | — | Optional 16 px leading icon inside the value row. |
| `prefix` | `React.ReactNode` | — | Optional text prefix (€, $, …). Body type, text-secondary fill. |
| `suffix` | `React.ReactNode` | — | Optional text suffix (Kg, mi, …). Body type, text-secondary fill. |
| `rightIcon` | `React.ReactNode` | — | Optional 24 px status icon. Replaced by `action` when both are passed. |
| `action` | `React.ReactNode` | — | Optional trailing action (typically an icon-only `MDSButton`). Stamps `data-has-action`. |
| `required` | `boolean` | `false` | Visual `*` plus native `required`. |
| All `InputHTMLAttributes<HTMLInputElement>` | — | — | Spread onto the inner `<input>` (except `size` and `prefix`, which are commandeered). |
| `className` | `string` | — | Composed with `.root`. |

## Variants

None as enum props — visual variants are state-driven via data attributes (see States).

## Sizes

None. Field height is fixed at `--mds-common-component-values-height-large` (60 px) per Figma.

## States

| Attribute | When |
|---|---|
| `data-filled` | The input has a non-empty value. Collapses the floating label into microcopy. |
| `data-focused` | The input has focus. Collapses the floating label into microcopy and tightens the border. |
| `data-error` | `error={true}`. The field renders the 4 px destructive border (red-800). |
| `data-disabled` | The input is disabled. Greys the chrome and changes the cursor. |
| `data-readonly` | The input is read-only. Same chrome as a filled field with a default cursor. |
| `data-has-action` | An `action` is rendered. Tightens the right padding to 6 px so the trailing button sits flush. |
| `data-has-trailing` | A `rightIcon` or `action` is present. Used by CSS to allocate the trailing slot. |

The error border colour comes from `--mds-red-light-colours-basic-stroke` referenced directly under `[data-error]` — there is intentionally no `data-scheme="error"` cascade on the field, so the trailing slot (status icon or action button) keeps its normal palette.

## Behaviour

The wrapper tracks the value in state (controlled or uncontrolled) and stamps `data-filled` when a value is present and `data-focused` while the input has focus. CSS reads those attributes to collapse the floating label into microcopy and reveal the value row beneath. The `action` slot stamps `data-has-action`, which tightens the right padding to 6 px to match the Figma “Input Field + Button” frame.

## Accessibility

The visible floating label is a real `<label>` associated with the input via `htmlFor`/`id`. `aria-invalid` and `aria-describedby` are wired automatically when `error` is true. Focus rings render on the field chrome, not the input — a 2 px accent outline with a 2 px offset that respects forced-colors mode.

## Animation

The content area is a flex column with `align-items: flex-start` and `justify-content: center` — matching Figma's "Content" auto-layout frame. The label is a normal flex child that animates `font-size` and `line-height` from body-bold (20 px) to microcopy (12 px) over 200 ms with a `cubic-bezier(0.4, 0, 0.2, 1)` ease. The value row animates its `height` from 0 to the body-bold line-height (matches Figma's 22 px "Input" min-height within a 2 px breathing margin) over the same 200 ms. As the value row grows the column re-centers itself, producing the visual "label slides up" effect with no absolute positioning required. Border and background colour transitions are 120 ms. Under `prefers-reduced-motion: reduce` every transition is suppressed.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSInputField-fill` | `var(--mds-colours-basic-background)` |
| `--MDSInputField-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSInputField-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSInputField-corner-radius` | `var(--mds-common-component-values-radius)` |
| `--MDSInputField-min-height` | `var(--mds-common-component-values-height-large)` |
| `--MDSInputField-padding-left` | `var(--mds-common-component-values-padding)` |
| `--MDSInputField-padding-right` | `var(--mds-number-ramp-16)` |
| `--MDSInputField-gap` | `var(--mds-common-component-values-gap)` |
| `--MDSInputField-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSInputField-label-fill` | `var(--mds-colours-basic-text-secondary)` |
| `--MDSInputField-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSInputField-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

When `data-error` is set on `.root`, the field element re-declares `--MDSInputField-stroke: var(--mds-colours-basic-stroke)` inside its own `data-scheme="error"` context so the basic-stroke token resolves to the destructive palette (red-800) without swapping the wrapper's white background.

## Examples

### Standard

```tsx
<MDSInputField label="Email" placeholder="you@example.com" />
```

### Error with message

```tsx
<MDSInputField
  label="Email"
  error
  errorMessage="That doesn’t look like an email."
  defaultValue="invalid@@"
/>
```

### With trailing action button

```tsx
<MDSInputField
  label="Add item"
  placeholder="Type and add"
  action={
    <MDSButton
      iconOnly
      icon={<MDSIcon name="plus" size="small" />}
      aria-label="Add item"
      size="small"
    />
  }
/>
```

### With prefix + suffix

```tsx
<MDSInputField label="Weight" prefix="≈" suffix="Kg" defaultValue="74.2" />
```

## Gotchas

The floating label and value row use the floating effect that requires the label to live inside the field chrome. Pass the visible label via the `label` prop, not as `children` — the `children` slot is reserved for native `<input>` props you might want to spread.

The error border colour references `--mds-red-light-colours-basic-stroke` directly under `.root[data-error] .field` rather than relying on a `data-scheme="error"` cascade. Applying `data-scheme="error"` to the field would cascade into the trailing slot and paint the action button (`<MDSButton iconOnly />`) in the destructive palette — which contradicts Figma's "Input Field + Button" error variant where the button keeps its normal colours.

## Source

- [MDSInputField.tsx](packages/mds-components/src/MDSInputField/MDSInputField.tsx)
- [MDSInputField.module.css](packages/mds-components/src/MDSInputField/MDSInputField.module.css)
- [MDSInputField.stories.tsx](packages/mds-guidelines/src/stories/MDSInputField.stories.tsx)

## Related

- [[MDSButton]] — common partner inside the `action` slot.
- [[MDSCheckbox]] — sibling form-control with the same error scheme convention.
- [[index]]
- [[conventions/component-contract]]
