---
title: MDSAccordion
type: component
status: stable
source:
  - packages/mds-components/src/MDSAccordion/MDSAccordion.tsx
  - packages/mds-components/src/MDSAccordion/MDSAccordion.module.css
  - packages/mds-guidelines/src/stories/MDSAccordion.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, accordion, compound, base-ui]
related:
  - "[[MDSText]]"
  - "[[MDSIcon]]"
  - "[[MDSButton]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSAccordion

> A compound accordion built on Base UI. Group state, keyboard navigation, ARIA wiring, and panel animation are handled by the primitive; MDSAccordion supplies the tokens, type styles, and chevron-rotation polish.

## Purpose

A collapsible list. Each item has a header (containing the trigger) and a panel. Single-expansion by default — opening one item closes the others — per the recommended a11y pattern for FAQ-style accordions. Five parts: `Root`, `Item`, `Header`, `Trigger`, `Panel`.

## Use

- Disclosing groups of related content where only one or two sections are usually needed at a time — FAQs, account settings sections, dense filter panels.
- When vertical space is constrained and progressive disclosure improves scannability.
- For navigable groups where keyboard reachability and arrow-key flow are required — Base UI handles `ArrowDown` / `ArrowUp` / `Home` / `End` correctly.
- Combined with `MDSText` for trigger labels and any layout primitives for panel content — panels render flush with no implicit padding.

## Avoid

- For primary navigation between pages — use a navigation pattern instead.
- When the user must see all sections at once (comparison, dashboards) — accordion hides content behind interaction.
- For single-section content with no peer items — a disclosure (`<details>`) or a plain expandable card is lighter.
- Nesting accordions inside accordions — keyboard semantics get confusing and the WAI-ARIA Accordion Pattern does not cover this case.

## Import

```ts
import {
  MDSAccordion,
  MDSAccordionItem,
  MDSAccordionHeader,
  MDSAccordionTrigger,
  MDSAccordionPanel,
} from '@mds/components';
import '@mds/components/MDSAccordion/styles.css';
import '@mds/tokens/typography.css';   // MDSAccordion.Trigger uses MDSText
```

Both APIs are valid: `<MDSAccordion.Item>` and `<MDSAccordionItem>` resolve to the same component.

## API / Props

### `MDSAccordion` (Root)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `openMultiple` | `boolean` | `false` | Allow more than one item to be open at the same time. Maps to Base UI's `multiple` prop. Default `false` (single-item exclusive expansion). |
| All Base UI `Accordion.Root` props (except `multiple`) | — | — | Pass through unchanged — `value` / `defaultValue` / `onValueChange` (full `(value, eventDetails)` signature), `disabled`, `orientation`. |
| `className` | `string` | — | Composed with `.root`. |

### `MDSAccordion.Item`, `.Header`, `.Panel`

Spread to the corresponding Base UI primitive. Add the matching MDS class.

### `MDSAccordion.Trigger`

| Prop | Type | Notes |
|---|---|---|
| `children` | `React.ReactNode` | Label — rendered inside an `<MDSText variant="body-bold">`. |
| All Base UI `Accordion.Trigger` props | — | Spread. |

A `chevron-down` icon is always rendered after the label.

## Variants

None — visual is fixed.

## Sizes

None at the component level. Trigger min-height is fixed (`var(--mds-number-ramp-60)`).

## States

Base UI's `Accordion.Trigger` emits:

| Attribute | When |
|---|---|
| `data-panel-open` | Item is currently expanded. |
| `data-disabled` | Item is disabled. |

**Caveat:** `Accordion.Trigger` does **not** emit `data-pressed` (that's `Button`-specific). For accordion-style pressed visuals use the native CSS `:active` pseudo-class. See [[conventions/component-contract]].

## Behaviour

Wraps Base UI's `Accordion.Root` / `Item` / `Header` / `Trigger` / `Panel`. Default expansion mode is single-item exclusive (`openMultiple={false}`). Pass `openMultiple` to allow multiple items open at once, `value` + `onValueChange` for controlled state, or `defaultValue` for uncontrolled. The chevron icon rotates 180° via CSS when Base UI emits `data-panel-open` on the trigger.

## Accessibility

Each `MDSAccordion.Header` renders as an `<h3>` by default (override with the `render` prop). The trigger is a real `<button>` with `aria-expanded` and `aria-controls` wired by Base UI. Keyboard support follows the WAI-ARIA Accordion Pattern: `Tab` moves between triggers and `Enter` / `Space` toggles. When `orientation="vertical"` (the default), arrow keys cycle through triggers. Disabled items surface `data-disabled` and the native `disabled` attribute.

## Animation

Panel height interpolates between `var(--accordion-panel-height)` (open) and `0px` (closed) using `--MDSAccordion-panel-transition-duration` (200ms). Chevron rotation uses `--MDSAccordion-chevron-transition-duration` (200ms). All transitions are suppressed under `prefers-reduced-motion: reduce`.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSAccordion-item-gap` | `var(--mds-common-component-values-gap)` |
| `--MDSAccordion-trigger-fill` | `transparent` |
| `--MDSAccordion-trigger-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSAccordion-trigger-corner-radius` | `var(--mds-common-component-values-radius)` |
| `--MDSAccordion-trigger-min-height` | `var(--mds-number-ramp-60)` |
| `--MDSAccordion-trigger-padding-horizontal` | `var(--mds-common-component-values-padding)` |
| `--MDSAccordion-trigger-padding-right` | `var(--mds-number-ramp-16)` |
| `--MDSAccordion-trigger-gap` | `var(--mds-common-component-values-gap)` |
| `--MDSAccordion-trigger-transition-duration` | `150ms` |
| `--MDSAccordion-panel-transition-duration` | `200ms` |
| `--MDSAccordion-chevron-transition-duration` | `200ms` |
| `--MDSAccordion-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSAccordion-focus-ring-fill` | `var(--mds-colours-basic-accent)` |

The `ms` literals are direct values — `@mds/tokens` has no motion duration tokens yet. Deviation noted in the CSS Module comment.

## Examples

```tsx
import { MDSAccordion } from '@mds/components';

<MDSAccordion>
  <MDSAccordion.Item value="one">
    <MDSAccordion.Header>
      <MDSAccordion.Trigger>What is MDS?</MDSAccordion.Trigger>
    </MDSAccordion.Header>
    <MDSAccordion.Panel>A design system.</MDSAccordion.Panel>
  </MDSAccordion.Item>
  <MDSAccordion.Item value="two">
    <MDSAccordion.Header>
      <MDSAccordion.Trigger>How do I install?</MDSAccordion.Trigger>
    </MDSAccordion.Header>
    <MDSAccordion.Panel>pnpm install @mds/components @mds/tokens</MDSAccordion.Panel>
  </MDSAccordion.Item>
</MDSAccordion>

// Allow multiple open simultaneously
<MDSAccordion openMultiple>
  ...
</MDSAccordion>

// Top-level named exports also work
import { MDSAccordionItem, MDSAccordionTrigger } from '@mds/components';
```

## Gotchas

MDSAccordion renames Base UI's `multiple` prop to `openMultiple` and flips the default from `true` to `false`. If you want the Base UI default behaviour (multiple open by default), set `openMultiple` explicitly. The `MDSAccordion.Panel` has NO built-in padding — wrap children in your own layout primitive (as the stories below do) when you need internal spacing.

## Source

- [MDSAccordion.tsx](packages/mds-components/src/MDSAccordion/MDSAccordion.tsx)
- [MDSAccordion.module.css](packages/mds-components/src/MDSAccordion/MDSAccordion.module.css)
- [MDSAccordion.stories.tsx](packages/mds-guidelines/src/stories/MDSAccordion.stories.tsx)

## Related

- [[MDSText]]
- [[MDSIcon]]
- [[MDSButton]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]]
