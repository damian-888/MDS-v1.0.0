---
title: MDSDropdownSelect
type: component
status: stable
source:
  - packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.tsx
  - packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.module.css
  - packages/mds-guidelines/src/stories/MDSDropdownSelect.stories.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [component, select, dropdown, form, compound, base-ui]
related:
  - "[[MDSFlyout]]"
  - "[[MDSInputField]]"
  - "[[MDSMenu]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSDropdownSelect

> A compound dropdown built on Base UI Select. The Trigger renders the floating-label pill (label slides + shrinks when the popup opens or a value is selected); the Popup ships the same shell as MDSFlyout; each Item is a 48 px pill with a check indicator on selection.

Mirrors Figma frames "Dropdown Select" (#6104:13920) and "Dropdown Item" (#621:4768, Type=Selection variant).

## Purpose

The design-system single-select picker. Built on Base UI’s Select primitive — MDS owns the visual chrome (trigger pill with floating label, dropdown popup, item rows with check indicator). Keyboard navigation, focus management, type-to-select, and portalling are inherited from Base UI for free.

## Use

- For single-select pickers with 4–~20 options that fit comfortably in a popup (countries, statuses, categories).
- With `MDSDropdownSelect.Trigger required` when the field must be answered before form submission — the trigger renders a visual `*`.
- With `error` on the Trigger when validation fails — the stroke flips to the destructive palette and the surrounding form should surface a message.
- Inside a form where keyboard navigation and `Esc`/`Enter` semantics matter — Base UI Select wires those for free.
- With `items={{ key: 'Human Label', … }}` on the Trigger when the underlying value is a non-display key (e.g. `"us"`); the Value row renders the human label instead of the raw value.

## Avoid

- For tag input or multi-select lists with hundreds of options. Use a combobox or a dedicated multi-select instead.
- When the option labels need rich content (icons, descriptions, dividers). The Item slot is plain-text by contract; promote to `MDSMenu` if needed.
- Stacking two MDSDropdownSelect popups on a tight viewport — the portalled popups will overlap. Space the triggers vertically with the form gap tokens.
- Overriding the trigger chrome with custom CSS that breaks the floating-label states. The component reads `data-popup-open` and `data-filled` to swap typography automatically.

## Import

```ts
import {
  MDSDropdownSelect,
  MDSDropdownSelectTrigger,
  MDSDropdownSelectPopup,
  MDSDropdownSelectItem,
} from '@mds/components';
import '@mds/components/MDSDropdownSelect/styles.css';
```

Both `<MDSDropdownSelect.Trigger>` and `<MDSDropdownSelectTrigger>` resolve to the same component (same for `Popup` and `Item`).

## API / Props

### `MDSDropdownSelect` (Root)

Re-exports Base UI’s `Select.Root` directly — see [Base UI Select Root](https://base-ui.com/react/components/select#root). Most-used props: `value`, `defaultValue`, `onValueChange`, `disabled`, `name`, `required`, `multiple`.

### `MDSDropdownSelect.Trigger`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `label` | `React.ReactNode` | — | Required. Floating label. |
| `placeholder` | `React.ReactNode` | `''` | Shown in the value row when nothing is selected. |
| `items` | `Record<string, React.ReactNode>` | — | Optional value→label map. The Value renders the matched label instead of the raw value. |
| `chevron` | `React.ReactNode` | `<MDSIcon name="chevron-down" />` | Override for the trailing chevron. The default flips on open. |
| `required` | `boolean` | `false` | Visual `*`. |
| `error` | `boolean` | `false` | Paints the trigger border in the destructive palette (4 px stroke). |
| `disabled` | `boolean` | — | Disables the trigger. Stamps `data-disabled`. |
| All Base UI `Select.Trigger` props | — | — | Spread. |
| `className` | `string` | — | Composed with `.trigger`. |

### `MDSDropdownSelect.Popup`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `positionerProps` | Base UI `Select.Positioner` props | `{ sideOffset: 4 }` | Forwarded onto the positioner. Configure `side`, `align`, etc. |
| `inline` | `boolean` | `false` | Render the popup without a portal. Use in tests or when portalling breaks layout. |
| All Base UI `Select.Popup` props | — | — | Spread. |
| `className` | `string` | — | Composed with `.popup`. |

### `MDSDropdownSelect.Item`

Re-exports Base UI’s `Select.Item` with the row styling and a check indicator wired in. Pass `value` per Base UI; the `children` render in the row label.

## Variants

The trigger has two visual axes (driven by Base UI state attributes):
- `data-popup-open` — popup is mounted/visible.
- `data-filled` — a non-empty value is selected.

Both collapse the floating label into microcopy and reveal the value row.

## Sizes

None. Trigger height is fixed at `--mds-common-component-values-height-large` (60 px) per Figma.

## States

Trigger:

| Attribute | When |
|---|---|
| `data-error` | `error={true}` on the Trigger. |
| `data-filled` | A value is set on the Root. |
| `data-popup-open` | Base UI sets this while the popup is mounted. |
| `data-disabled` | Base UI sets this when `disabled={true}` is on the Root. |
| `data-readonly` | Base UI sets this when `readOnly={true}` is on the Root. |

Item:

| Attribute | When |
|---|---|
| `data-highlighted` | Base UI sets this on the keyboard-active row — the CSS reads it for hover styling. |
| `data-selected` | Base UI sets this on the row whose value matches the current selection — the check indicator renders. |
| `data-disabled` | Base UI sets this on disabled rows. |

## Behaviour

Selecting an item closes the popup and stamps the Trigger with `data-filled` (via the render-prop reading `state.value`). The floating label collapses to microcopy as soon as either `data-popup-open` is set or a value exists. The Popup uses `Select.Positioner` with `sideOffset={4}` so the flyout floats just below the trigger.

## Accessibility

Base UI’s Select.Trigger renders as a real `<button role="combobox">`. Items carry `role="option"`. Keyboard nav (`↑/↓`, `Home/End`, type-to-select, `Esc` to close) is built in. The Trigger picks up `aria-invalid` automatically when `error` is true via the wrapper’s `data-error` attribute.

## Animation

The chevron rotates 180° when the popup opens (150 ms). The content area is a flex column with `align-items: flex-start` and `justify-content: center` — matching Figma's "Content" auto-layout frame. The label is a normal flex child that animates `font-size` and `line-height` from body-bold (20 px) to microcopy (12 px) over 200 ms with a `cubic-bezier(0.4, 0, 0.2, 1)` ease. The value row animates its `height` from 0 to the body-bold line-height (matches Figma's 22 px "Input" min-height within a 2 px breathing margin) over the same 200 ms. As the value row grows the column re-centers itself, producing the visual "label slides up" effect. All transitions suppress under `prefers-reduced-motion: reduce`.

## Styling Hooks

### Trigger

| Var | Default |
|---|---|
| `--MDSDropdownSelect-fill` | `var(--mds-colours-basic-background)` |
| `--MDSDropdownSelect-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSDropdownSelect-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSDropdownSelect-corner-radius` | `var(--mds-common-component-values-radius)` |
| `--MDSDropdownSelect-min-height` | `var(--mds-common-component-values-height-large)` |
| `--MDSDropdownSelect-padding-left` | `var(--mds-common-component-values-padding)` |
| `--MDSDropdownSelect-padding-right` | `var(--mds-number-ramp-16)` |
| `--MDSDropdownSelect-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSDropdownSelect-label-fill` | `var(--mds-colours-basic-text-secondary)` |
| `--MDSDropdownSelect-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSDropdownSelect-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

When `[data-error]` is set, the trigger references `--mds-red-light-colours-basic-stroke` directly so the trigger's own background stays white (using `data-scheme="error"` on the trigger would swap basic-background to pink).

### Popup

| Var | Default |
|---|---|
| `--MDSDropdownSelectPopup-fill` | `var(--mds-colours-basic-background)` |
| `--MDSDropdownSelectPopup-stroke` | `var(--mds-colours-basic-stroke)` |
| `--MDSDropdownSelectPopup-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSDropdownSelectPopup-corner-radius` | `var(--mds-common-component-values-radius)` |

### Item

See [MDSDropdownSelect.module.css](packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.module.css) for item-scoped vars.

## Examples

### Uncontrolled

```tsx
<MDSDropdownSelect defaultValue="de">
  <MDSDropdownSelect.Trigger
    label="Country"
    items={{ de: 'Germany', us: 'United States', uk: 'United Kingdom' }}
  />
  <MDSDropdownSelect.Popup>
    <MDSDropdownSelect.Item value="de">Germany</MDSDropdownSelect.Item>
    <MDSDropdownSelect.Item value="us">United States</MDSDropdownSelect.Item>
    <MDSDropdownSelect.Item value="uk">United Kingdom</MDSDropdownSelect.Item>
  </MDSDropdownSelect.Popup>
</MDSDropdownSelect>
```

### Controlled

```tsx
const [country, setCountry] = useState<string>('de');

<MDSDropdownSelect value={country} onValueChange={(v) => setCountry(v as string)}>
  <MDSDropdownSelect.Trigger label="Country" items={COUNTRY_LABELS} />
  <MDSDropdownSelect.Popup>{/* items */}</MDSDropdownSelect.Popup>
</MDSDropdownSelect>
```

### Error

```tsx
<MDSDropdownSelect>
  <MDSDropdownSelect.Trigger label="Country" error required />
  <MDSDropdownSelect.Popup>{/* items */}</MDSDropdownSelect.Popup>
</MDSDropdownSelect>
```

## Gotchas

The popup is portalled by default — pass `<MDSDropdownSelect.Popup inline>` for tests or any context where portalling breaks layout. Custom positioning is forwarded via `positionerProps`.

The `data-scheme="error"` swap from MDSCheckbox would turn this trigger pink if applied to its root because the trigger IS the rendered chrome (no separate wrapper to host a non-error background). The component instead references `--mds-red-light-colours-basic-stroke` directly under `[data-error]` so the white background stays intact.

## Source

- [MDSDropdownSelect.tsx](packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.tsx)
- [MDSDropdownSelect.module.css](packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.module.css)
- [MDSDropdownSelect.stories.tsx](packages/mds-guidelines/src/stories/MDSDropdownSelect.stories.tsx)

## Related

- [[MDSFlyout]] — the popup uses the same shell vocabulary.
- [[MDSInputField]] — shares the floating-label chrome (label slides + shrinks on activation).
- [[MDSMenu]] — sibling compound for the “Link” variant of the dropdown row.
- [[index]]
- [[conventions/component-contract]]
- [[libraries/base-ui]] — Select primitive that pairs with this shell.
