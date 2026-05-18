---
title: MDSBreadcrumb
type: component
status: stable
source:
  - packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.tsx
  - packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.module.css
  - packages/mds-guidelines/src/stories/MDSBreadcrumb.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, breadcrumb, compound, navigation, base-ui]
related:
  - "[[MDSText]]"
  - "[[MDSIcon]]"
  - "[[MDSFlyout]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/css-modules]]"
  - "[[conventions/storybook-vault-parity]]"
  - "[[libraries/base-ui]]"
---

# MDSBreadcrumb

> A breadcrumb trail showing where the user is in a hierarchy. The last item is automatically marked as the current page; longer trails collapse middle items into an overflow menu.

## Purpose

The trail of links that shows where the current page sits in a site hierarchy. The WAI-ARIA Breadcrumb Pattern: a navigation landmark containing an ordered list of items, last item marked `aria-current="page"`.

## Use

- On pages deeper than two levels in a hierarchy where the user needs an at-a-glance "you are here" plus a fast way to step back up.
- For products, content libraries, file managers, or admin consoles where parent context is meaningful and reachable.
- When the trail is short and stable — let `maxItems` collapse the middle when paths get longer.
- Pair with the document `<h1>` rather than replace it — breadcrumb is supplemental wayfinding, not the page title.

## Avoid

- On flat sites or top-level marketing pages where there is no meaningful hierarchy to surface.
- As primary navigation — the trail is a record of where the user has been, not a list of where they can go.
- Replacing the page title — keep both. The breadcrumb provides context; the heading provides identity.
- Hiding the last (current) item — the WAI-ARIA Breadcrumb Pattern requires the current page to remain in the trail and be marked `aria-current="page"`.

## Import

```ts
import { MDSBreadcrumb, MDSBreadcrumbItem } from '@mds/components';
import '@mds/components/MDSBreadcrumb/styles.css';
import '@mds/tokens/typography.css';   // MDSBreadcrumb uses MDSText internally
```

Both APIs are valid: `<MDSBreadcrumb.Item>` and `<MDSBreadcrumbItem>` resolve to the same component.

## API / Props

### `MDSBreadcrumb` (Root)

| Prop | Type | Default | Notes |
|---|---|---|---|
| `maxItems` | `number` | `4` | Visible item budget. When the rendered count exceeds this, middle items collapse into the overflow menu. Clamped to a minimum of 2. |
| `aria-label` | `string` | `'Breadcrumb'` | Accessible name of the navigation landmark. |
| `render` | Base UI `RenderProp` | `<nav />` | Polymorphism. |
| `children` | `React.ReactNode` | — required | One or more `MDSBreadcrumb.Item` children. |
| `className` | `string` | — | Composed with `.root`. |

### `MDSBreadcrumb.Item`

| Prop | Type | Default | Notes |
|---|---|---|---|
| `href` | `string` | — | When set, the item renders as `<a>`. When omitted (or when the item is the last one), it renders as a non-link `<span>`. |
| `target` / `rel` / `download` / `referrerPolicy` | anchor attrs | — | Forwarded when `href` is set. |
| `children` | `React.ReactNode` | — required | The item label. |

The **last** `MDSBreadcrumb.Item` is automatically marked `aria-current="page"` and rendered as non-link text regardless of `href`. The parent manages this; consumers don't need to think about it.

## Variants

None — overflow behaviour replaces variants.

## Sizes

None — the breadcrumb sizes to its content.

## States

`data-current="true"` is set on the last item (visible CSS hook). Otherwise no Base UI runtime state attributes apply to the items themselves.

The overflow menu uses Base UI's `Menu`, which emits state attrs on its trigger and items — see [Base UI Menu](https://base-ui.com/react/components/menu).

## Behaviour

Renders `<nav aria-label="Breadcrumb"><ol/></nav>` with `/` separators between items. The last `MDSBreadcrumb.Item` is automatically the current page — rendered as a `<span aria-current="page">` regardless of `href`. Items with `href` render as `<a>`; items without `href` render as a non-link `<span>` (useful for unreachable crumbs). When `Children.count(children) > maxItems` AND there is at least one item to collapse, the component renders `[first] / [overflow] / [second-to-last] / [last]` — middle items go inside a Base UI Menu popup activated by a `dots-three` trigger.

## Accessibility

Follows the WAI-ARIA Breadcrumb Pattern: a `<nav>` landmark with a labelled `<ol>`, each item in an `<li>`, current page marked with `aria-current="page"`. Separators are `aria-hidden`. The overflow trigger is a real `<button>` with an explicit `aria-label="Show collapsed breadcrumbs"`; Base UI Menu adds the `aria-haspopup` / `aria-expanded` / `aria-controls` wiring automatically. Each item cell honours the system's 48 px minimum tappable area.

## Animation

No motion on the trail itself. The overflow popup uses Base UI Menu's open/close animation — opacity + transform via `data-starting-style` / `data-ending-style`. All transitions are suppressed under `prefers-reduced-motion: reduce`.

## Styling Hooks

Component-scoped vars live in `MDSBreadcrumb.module.css`. Note the **portal-popup pattern**: vars for the overflow popup are declared on the portalled element (`.overflowPopup`) directly, NOT on `.root`, because the popup escapes the `.root` cascade through `Menu.Portal`. See [[conventions/css-modules]] Exceptions.

Key vars (consult the CSS Module for the full set):

| Var (scope) | Purpose |
|---|---|
| `--MDSBreadcrumb-*` on `.root` | Trail-level styling. |
| `--MDSBreadcrumb-overflow-*` on `.overflowPopup` | Overflow menu styling — must be declared on the portalled element. |

## Examples

```tsx
import { MDSBreadcrumb } from '@mds/components';

// 3 items — no overflow
<MDSBreadcrumb>
  <MDSBreadcrumb.Item href="/">Home</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item href="/docs">Docs</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item>Getting Started</MDSBreadcrumb.Item>     {/* current — auto-marked */}
</MDSBreadcrumb>

// 6 items, maxItems=4 — overflow into menu
<MDSBreadcrumb maxItems={4}>
  <MDSBreadcrumb.Item href="/">Home</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item href="/a">A</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item href="/a/b">B</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item href="/a/b/c">C</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item href="/a/b/c/d">D</MDSBreadcrumb.Item>
  <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
</MDSBreadcrumb>
// → Home / … / D / Current     (… opens a menu listing A, B, C)
```

## Gotchas

`maxItems` is clamped to a minimum of 2 — passing `0` or `1` is treated as `2`. The overflow only fires when there is at least one item to collapse, so a 3-item trail with `maxItems={2}` renders flat (no degenerate empty menu). The `current` prop on `MDSBreadcrumb.Item` is internal — the parent sets it based on position; you cannot opt out of last-item-current behaviour by passing `current` yourself.

## Source

- [MDSBreadcrumb.tsx](packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.tsx)
- [MDSBreadcrumb.module.css](packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.module.css)
- [MDSBreadcrumb.stories.tsx](packages/mds-guidelines/src/stories/MDSBreadcrumb.stories.tsx)

## Related

- [[MDSText]]
- [[MDSIcon]]
- [[MDSFlyout]] — the visual shell of the overflow menu (rendered through `Menu.Portal`).
- [[index]]
- [[conventions/component-contract]]
- [[conventions/css-modules]] — portal popup styling rule lives here.
- [[conventions/storybook-vault-parity]]
- [[libraries/base-ui]]
