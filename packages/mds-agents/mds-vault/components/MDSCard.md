---
title: MDSCard
type: component
status: stable
source:
  - packages/mds-components/src/MDSCard/MDSCard.tsx
  - packages/mds-components/src/MDSCard/MDSCard.module.css
  - packages/mds-guidelines/src/stories/MDSCard.stories.tsx
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [component, card, surface, media, compound]
related:
  - "[[MDSImage]]"
  - "[[MDSButton]]"
  - "[[MDSText]]"
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSCard

> A flexible card surface for grouping media and content. Five variant axes (background, image alignment, outline, interactive, selected) and compound `.Header` / `.Body` / `.Actions` parts cover the documented Figma matrix without forking the API.

## Purpose

A first-class surface for media-led content blocks. Pairs an `MDSImage` (or any media node) with content composed from the compound `Header` / `Body` / `Actions` parts — or any free-form children when the consumer needs a different content shape. The "Preferred Content" promo layout from Figma is realised by composing the compound parts in stories and consumer code; there is no separate component for it (intentionally).

**Content modes.** MDSCard accepts content in two interchangeable modes:

- **Default option** — compose `MDSCard.Header` + `MDSCard.Body` + `MDSCard.Actions` for the DS-blessed promo layout. These compound parts are the canonical "preferred content" shape; there is intentionally no separate `MDSPreferredCardContent` component.
- **Custom slot** — pass arbitrary `children` for any non-standard shape.

## Use

- For media-led blocks where an image and a body of content read as one unit — promo tiles, article cards, product summaries.
- With `MDSCard.Header` + `MDSCard.Body` + `MDSCard.Actions` for the DS-blessed promo layout — consumers wire their own buttons and text into the action and header slots.
- As an interactive surface (`interactive` + `render={<a href />}`) when the entire card is the navigation target. Compose with `MDSImage` for the media slot.
- In selection lists (`selected` + `interactive` + `aria-pressed`) where each option carries an image and a label.

## Avoid

- As a plain visual container — use a simple `<section>` or a layout primitive. Cards imply a coherent unit; do not stretch the metaphor.
- For dense data — tables, lists with many fields, or grids of metrics deserve their own primitive. Cards are content-first.
- For navigation surfaces where only a single element is interactive. Either make the whole card interactive or keep all internal elements clickable on their own — do not nest interactive elements.
- Setting `outline` and `selected` together expecting two visible strokes — they share the border slot. The selected accent wins.

## Import

```ts
import { MDSCard, MDSImage, MDSButton } from '@mds/components';
import '@mds/components/MDSCard/styles.css';
```

## API / Props

### `MDSCard` (root)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Card content. Compose with `.Header` / `.Body` / `.Actions` or any custom node. |
| `media` | `React.ReactNode` | — | Media slot. Typically `<MDSImage />`. Sets `data-has-media`. |
| `imageAlignment` | `'top' \| 'right' \| 'left'` | `'top'` | Position of the media. `top` is full-width; `right`/`left` are a fixed 136 × 136 square well (`--MDSCard-media-side-width` defaults to `136px`; locked to `aspect-ratio: 1 / 1`). |
| `background` | `'standard' \| 'secondary'` | `'standard'` | `standard` keeps the card on the active section. `secondary` switches the card subtree to `data-section="subtle"` so its background contrasts with a `normal`-section page — text, accent, and stroke roles stay identical (only background and its interaction states differ). See [[theming/section]]. |
| `outline` | `boolean` | `false` | 1 px `--mds-colours-basic-stroke` border. |
| `interactive` | `boolean` | `false` | Hover/pressed/focus-visible affordance. Auto-`tabIndex={0}` on the default `<div>`. |
| `selected` | `boolean` | `false` | 2 px accent stroke; sets `aria-pressed="true"` when also interactive. |
| `overlay` | `React.ReactNode` | — | Absolute scrim above the media (e.g. play button). Rendered only when media is also set. |
| `render` | Base UI `RenderProp` | `<div />` | Polymorphism — swap for `<a>`, `<button>`, router `<Link>`. |

### `MDSCard.Header` (also exported as `MDSCardHeader`)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `children` | `React.ReactNode` | — **required** | Headline text. |
| `tag` | `React.ReactNode` | — | Optional pill above the headline. |
| `onClose` | `(e) => void` | — | Renders the `×` close button when set. |
| `closeLabel` | `string` | `'Close'` | Accessible name for the close button. |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | Heading level for the headline. |

### `MDSCard.Body` (also exported as `MDSCardBody`)

Plain `<div>` wrapper that renders its children inside an `MDSText` body variant. Spread-through for all `<div>` attributes.

### `MDSCard.Actions` (also exported as `MDSCardActions`)

Plain `<div>` wrapper for buttons. With 2+ children the row stretches each child to equal flex width (`flex: 1 1 0`, `min-width: 100px`); with a single child the action keeps its natural size (One-Button promo variant). Spread-through for all `<div>` attributes.

## Variants

| Axis | Values |
|---|---|
| `background` | `standard` (default), `secondary` |
| `imageAlignment` | `top` (default), `right`, `left` |
| `outline` | `false` (default), `true` |
| `interactive` | `false` (default), `true` |
| `selected` | `false` (default), `true` |

## States

| Attribute | Source | Visual |
|---|---|---|
| `data-has-media` | Presence of `media` prop | Layout flips: root padding/gap → 0, content slot picks up the padding. |
| `data-interactive` | `interactive` prop | `cursor: pointer`; enables hover/pressed fills; auto `tabIndex={0}` on default `<div>`. |
| `:hover` (interactive) | CSS pseudo-class | Fill swaps to `--mds-colours-interaction-states-hovered-background-hovered`. |
| `:active` (interactive) | CSS pseudo-class | Fill swaps to `--mds-colours-interaction-states-pressed-background-pressed`. |
| `data-selected` | `selected` prop | 2 px accent stroke. `aria-pressed="true"` when also interactive. |
| `:focus-visible` (interactive) | CSS pseudo-class | 2 px accent outline with 2 px offset. |
| `data-section="subtle"` | `background='secondary'` | Card's region uses the subtle palette — softer background; hover/pressed states follow. |

## Behaviour

Renders a `<div>` by default (overridable via `render`). The root is a vertical flex stack with `--mds-spacing-extra-small` gap and `--mds-common-component-values-padding` padding. When `media` is provided, `data-has-media` flips the layout: the root padding/gap drop to zero and `imageAlignment` chooses `flex-direction: column` (top), `row-reverse` (right), or `row` (left); the content area gains its own padding/gap so the image sits flush against the card edges. For `imageAlignment='right' | 'left'`, the media well is locked to a 136 × 136 square (`aspect-ratio: 1 / 1; width: 136px`) and `align-self: stretch` so it grows vertically when content makes the card taller. The inner MDSImage should use `fill` (or pass `aspectRatio="1/1"`) so it fills the square. The `overlay` slot, when set, renders an absolute-positioned scrim above the media for chrome (play button, brand glyph). Interactive cards swap their fill on `:hover` / `:active` from `--mds-colours-interaction-states-hovered-background-hovered` and `--mds-colours-interaction-states-pressed-background-pressed`. The `.Actions` slot stretches its children to equal flex when it contains 2+ items (via `:has(> :nth-child(2))`), and lets a single child keep its natural width.

The `background='secondary'` variant sets `data-section="subtle"` on the root. The card's `--mds-colours-basic-background` re-resolves through the subtle palette; hover and pressed fills follow automatically because the subtle palette also defines those interaction-state values.

## Accessibility

`interactive` cards default to `tabIndex={0}` so the bare `<div>` is keyboard-focusable; for production use, swap the root via `render={<a href />}` or `render={<button type="button" />}` so it announces correctly and accepts `Enter`/`Space` natively. When the card is interactive and `selected`, `aria-pressed="true"` is set. `MDSCard.Header` renders the headline as a real heading (`<h2>` by default, overridable via `as`) so the document outline is correct. The header close button is a real `MDSButton` with the configurable `closeLabel` as its required `aria-label`. The `overlay` is purely decorative chrome — wrap interactive content inside it explicitly with `aria-label` / `role` as needed.

## Animation

State changes are immediate background-fill swaps. `prefers-reduced-motion: reduce` is honoured.

## Styling Hooks

### Root (`.root`)

| Var | Default |
|---|---|
| `--MDSCard-fill` | `var(--mds-colours-basic-background)` (re-resolves through `data-section="subtle"` when `background='secondary'`; swaps to `--mds-colours-interaction-states-hovered-background-hovered` / `pressed-background-pressed` when `data-interactive`) |
| `--MDSCard-stroke` | `transparent` (becomes `--mds-colours-basic-stroke` with `data-outline`, or `--mds-colours-basic-accent` with `data-selected`) |
| `--MDSCard-stroke-width` | `0` (becomes `--mds-strokes-1` with `data-outline`, `--mds-strokes-2` with `data-selected`) |
| `--MDSCard-corner-radius` | `var(--mds-common-component-values-radius)` |
| `--MDSCard-padding` | `var(--mds-common-component-values-padding)` |
| `--MDSCard-content-gap` | `var(--mds-spacing-extra-small)` |
| `--MDSCard-focus-ring-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSCard-focus-ring-width` | `var(--mds-strokes-2)` |
| `--MDSCard-media-side-width` | `136px` |

### Compound parts

| Var | Scope | Default |
|---|---|---|
| `--MDSCardHeader-gap` | `.header` | `var(--mds-common-component-values-gap)` |
| `--MDSCardHeader-text-gap` | `.headerText` | `var(--mds-number-ramp-8)` |
| `--MDSCardHeader-text-padding-y` | `.headerText` | `var(--mds-number-ramp-4)` |
| `--MDSCardHeader-tag-fill` | `.tag` | `var(--mds-colours-basic-background)` |
| `--MDSCardHeader-tag-text-fill` | `.tag` | `var(--mds-colours-basic-text)` |
| `--MDSCardHeader-tag-corner-radius` | `.tag` | `var(--mds-radius-extra-small)` |
| `--MDSCardHeader-tag-padding-x` | `.tag` | `var(--mds-number-ramp-4)` |
| `--MDSCardHeader-tag-padding-y` | `.tag` | `var(--mds-number-ramp-2)` |
| `--MDSCardActions-gap` | `.actions` | `var(--mds-common-component-values-gap)` |
| `--MDSCardActions-padding-top` | `.actions` | `var(--mds-spacing-extra-small)` |
| `--MDSCardActions-item-min-width` | `.actions` (when 2+) | `100px` |

## Examples

```tsx
import { MDSCard, MDSImage, MDSButton, MDSIcon } from '@mds/components';

// Two-Button promo (Figma's "Preferred Content")
<MDSCard media={<MDSImage src="/hero.jpg" alt="..." aspectRatio="16/9" />}>
  <MDSCard.Header tag="New" onClose={dismiss}>
    Try our new feature
  </MDSCard.Header>
  <MDSCard.Body>Lorem ipsum dolor sit amet.</MDSCard.Body>
  <MDSCard.Actions>
    <MDSButton variant="secondary">Learn more</MDSButton>
    <MDSButton variant="primary">Buy</MDSButton>
  </MDSCard.Actions>
</MDSCard>

// One-Button handoff (single action — stays natural width via `:has`)
<MDSCard
  imageAlignment="left"
  media={<MDSImage src="/step2.jpg" alt="..." fill />}
>
  <MDSCard.Header>Next step</MDSCard.Header>
  <MDSCard.Body>Tap through to continue.</MDSCard.Body>
  <MDSCard.Actions>
    <MDSButton
      variant="outline"
      iconOnly
      aria-label="Continue"
      icon={<MDSIcon name="arrow-right" />}
    />
  </MDSCard.Actions>
</MDSCard>

// Selectable list option (interactive + custom render)
<MDSCard
  interactive
  selected={isSelected}
  imageAlignment="left"
  render={<button type="button" onClick={onPick} />}
  media={<MDSImage src="/thumb.jpg" alt={product.name} fill />}
>
  <MDSCard.Header>{product.name}</MDSCard.Header>
</MDSCard>

// Custom content (no compound parts)
<MDSCard>
  <p>Anything the consumer needs.</p>
</MDSCard>
```

## Gotchas

`interactive` without a `render` prop leaves the card as a `<div>` with `tabIndex={0}` — keyboard activation does NOT fire `onClick` on a div, so always pass `render={<a />}` or `render={<button />}` in production. The `.Actions` row only stretches when 2+ children are present; a single action keeps its natural width by design (matches Figma's One-Button variant). The `overlay` slot is ignored when no `media` is provided — overlays only make sense above an image.

## Source

- [MDSCard.tsx](packages/mds-components/src/MDSCard/MDSCard.tsx)
- [MDSCard.module.css](packages/mds-components/src/MDSCard/MDSCard.module.css)
- [MDSCard.stories.tsx](packages/mds-guidelines/src/stories/MDSCard.stories.tsx)

## Related

- [[MDSImage]]
- [[MDSButton]]
- [[MDSText]]
- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
