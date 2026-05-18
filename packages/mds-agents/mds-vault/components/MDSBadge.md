---
title: MDSBadge
type: component
status: stable
source:
  - packages/mds-components/src/MDSBadge/MDSBadge.tsx
  - packages/mds-components/src/MDSBadge/MDSBadge.module.css
  - packages/mds-guidelines/src/stories/MDSBadge.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, badge, status-indicator]
related:
  - "[[MDSIcon]]"
  - "[[MDSButton]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[theming/scheme]]"
  - "[[theming/section]]"
---

# MDSBadge

> A circular status indicator. Three semantic types (number, success, error) × three sizes (10/24/32 px). At the smallest size it degrades to a solid coloured dot.

## Purpose

A compact visual indicator for status (success / error) or count (`number`). Renders as a circle (or pill when content is wider than tall). The API is discriminated: `type='number'` renders `children`; `type='success'` and `type='error'` render a built-in glyph and require `aria-label`.

## Use

- Showing an unread count, new-item indicator, or short numeric metric on a list item or navigation entry.
- Marking a row, field, or section as successful, errored, or pending — pair with adjacent label text so the badge reinforces, not replaces, meaning.
- As a status dot on avatars, cards, or table cells where space is tight — use `size="small"` for a colour-only signal.
- Combined with `MDSText` or list items for "n unread", "saved", or "needs attention" patterns.

## Avoid

- As the only carrier of meaning. Colour and a glyph alone are not accessible — provide an `aria-label` for `success`/`error` and avoid relying on the colour cue alone.
- Numbers larger than 2–3 characters — the badge has a fixed minimum width but is not designed to grow. Truncate with "99+" in the consumer.
- For long messages or rich content. Use `MDSNotification` or `MDSText` for anything that needs a sentence.
- Using the small size for any badge that needs to communicate a count — the digit is hidden at 10 px.

## Import

```ts
import { MDSBadge } from '@mds/components';
import '@mds/components/MDSBadge/styles.css';
```

## API / Props

`MDSBadgeProps` is a discriminated union keyed on `type`:

### When `type='number'`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `type` | `'number'` | — required | Renders children (typically a digit). |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` | `large` = 32px · `medium` = 24px · `small` = 10px (always a solid dot — content and icons are hidden). |
| `children` | `React.ReactNode` | — | The number / label. Ignored at `size="small"`. |
| `aria-label` | `string` | — | Optional for `number` — the rendered digit carries meaning. |
| `render` | Base UI `RenderProp` | `<span />` | Polymorphism. |

### When `type='success' | 'error'` (icon-only)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `type` | `'success' \| 'error'` | — required | `success` renders a check glyph; `error` renders a warning glyph. |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` | Same scale as `number`. |
| `aria-label` | `string` | — **required** | Enforced at the type level. Provides the accessible name for the icon-only badge. |
| `children` | — | — | **Forbidden** (icon is fixed). |
| `render` | Base UI `RenderProp` | `<span />` | |

## Variants

| `type` | Visual |
|---|---|
| `number` | Inherits parent `data-scheme`. Children render as label. |
| `success` | Sets `data-scheme="success"`. Renders a `check` icon. |
| `error` | Sets `data-scheme="error"`. Renders a `warning` icon. |

`success`/`error` also set `data-section="subtle"` at `medium` / `large` sizes (the surface becomes pale and the glyph becomes saturated — per Figma).

## Sizes

| Size | Min-size | Stroke | Padding | Typography | Content |
|---|---|---|---|---|---|
| `small` | 10px | 0 | 0 | — | label/icon hidden — solid coloured dot only |
| `medium` | 24px | 1px | 4px | `microcopy` (12px) | label or icon |
| `large` (default) | 32px | 1px | 4px | `body` (16px) | label or icon |

## States

`data-type` and `data-size` are the visible state attributes; no Base UI runtime state attributes (badge is static).

## Behaviour

Renders a `<span>` (with `role="status"` is intentionally NOT applied — `role="img"` is used for icon-only types so the badge announces as a labelled image, not a live region). Colours flow from `data-scheme="brand|success|error"` plus `data-section="subtle"` on the root — at `medium`/`large`, success and error use a paler background with a saturated glyph; at `small` they switch to a solid coloured dot.

## Accessibility

Discriminated TypeScript union enforces `aria-label` on icon-only types — an inaccessible success/error badge cannot compile. The icon wrapper is `aria-hidden` so the label is the sole accessible name. Number badges use the rendered digit as their accessible name.

## Animation

No motion. Hover and pressed states are not surfaced — badges are passive indicators. `prefers-reduced-motion` is honoured (no transitions or animations declared).

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSBadge-fill` | `var(--mds-colours-basic-accent)` |
| `--MDSBadge-text-fill` | `var(--mds-colours-basic-text-on-accent)` |
| `--MDSBadge-stroke` | `var(--mds-colours-basic-background)` |
| `--MDSBadge-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSBadge-corner-radius` | `var(--mds-radius-full)` |
| `--MDSBadge-min-size` | `var(--mds-number-ramp-32)` (overridden per size) |
| `--MDSBadge-padding-horizontal` | `var(--mds-number-ramp-4)` |
| `--MDSBadge-icon-fill` | `var(--mds-colours-basic-accent)` |

Sub-section override (`[data-section='subtle']`) flips `--MDSBadge-fill` to the background colour so the surface becomes pale.

## Examples

```tsx
import { MDSBadge } from '@mds/components';

// Number badges — children allowed, aria-label optional
<MDSBadge type="number">3</MDSBadge>
<MDSBadge type="number" size="medium" aria-label="3 unread notifications">3</MDSBadge>

// Status badges — aria-label REQUIRED, children FORBIDDEN
<MDSBadge type="success" aria-label="Operation succeeded" />
<MDSBadge type="error" aria-label="Validation failed" />
<MDSBadge type="error" size="small" aria-label="Error" />   // solid coloured dot
```

## Gotchas

`size="small"` hides children and icons via CSS `display: none`, so React still renders them — useful for accessibility (the label is still in the DOM tree if needed) but easy to forget when debugging styles. The number variant's `aria-label` is optional but recommended when the digit is decorative (e.g. step indicators).

## Source

- [MDSBadge.tsx](packages/mds-components/src/MDSBadge/MDSBadge.tsx)
- [MDSBadge.module.css](packages/mds-components/src/MDSBadge/MDSBadge.module.css)
- [MDSBadge.stories.tsx](packages/mds-guidelines/src/stories/MDSBadge.stories.tsx)

## Related

- [[MDSIcon]]
- [[MDSButton]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
- [[theming/scheme]]
- [[theming/section]]
