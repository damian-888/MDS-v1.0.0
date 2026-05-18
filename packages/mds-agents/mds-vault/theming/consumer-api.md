---
title: Consumer API
type: theming-axis
status: stable
source:
  - packages/mds-tokens/style-dictionary.config.mjs
  - packages/mds-tokens/dist/tokens.css
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [theming, consumer-api, data-attributes, runtime]
related:
  - "[[index]]"
  - "[[mode]]"
  - "[[section]]"
  - "[[scheme]]"
  - "[[breakpoint]]"
  - "[[chain-inheritance]]"
  - "[[foundation/index]]"
---

# Consumer API

> How consumers switch themes at runtime. Three data-attributes on `<html>` or any descendant + viewport-driven `@media` for breakpoints.

## Summary

Consumers control three axes via HTML data-attributes; the fourth axis (breakpoint) auto-responds to viewport width. All four axes compose orthogonally — they do not have to agree.

## Values

| Attribute | Values | Default | Effect |
|---|---|---|---|
| `data-mode` | `light` \| `dark` | OS preference, else `light` | Light/dark colour family. Setting it explicitly overrides `@media (prefers-color-scheme)`. |
| `data-section` | `normal` \| `subtle` | `normal` | Default vs. subtle palette intensity within the active scheme. |
| `data-scheme` | `neutral` \| `brand` \| `success` \| `error` \| `warning` \| `info` | `neutral` | Colour identity / status family. |
| *breakpoint* (no attr) | `mobile` \| `tablet` \| `laptop` \| `desktop` | `mobile` | Auto-responds via `@media (min-width: 768/1040/1440px)`. |

## Selector

Page-level (most common): set attributes on `<html>`.

```html
<html data-mode="dark" data-section="normal" data-scheme="brand">
  ...
</html>
```

Sub-tree overrides: set the attribute on any descendant.

```html
<html data-mode="dark" data-scheme="brand">
  <main>...</main>
  <aside data-section="subtle">
    Subtle palette here. Still dark, still brand.
  </aside>
  <div data-scheme="error">
    Error scheme here. Still dark, still normal section.
  </div>
</html>
```

## Source File

The selectors are emitted by the layered Style Dictionary chunks (mode, section, scheme) into [`dist/tokens.css`](packages/mds-tokens/dist/tokens.css). The chain-inheritance fix in [`style-dictionary.config.mjs`](packages/mds-tokens/style-dictionary.config.mjs) makes per-element overrides work — see [[chain-inheritance]].

## Cascade Rules

### Composition is orthogonal

All four axes compose without coupling. A consumer can override one axis without re-declaring the others. The chain-inheritance fix ensures foundation tokens re-resolve at every override scope.

### Defaults

A page with `<html>` and **no** token-related markup renders correctly with `light` / `normal` / `neutral` defaults — or auto-dark if the OS prefers it.

### OS preference vs. explicit `data-mode`

When `data-mode` is unset, `@media (prefers-color-scheme: dark)` drives the mode. Setting `data-mode="light"` or `data-mode="dark"` on `<html>` (or any ancestor of the consumer element) overrides the OS preference for that subtree.

### Breakpoint independence

Viewports auto-respond to `@media (min-width)` — no consumer setup. Breakpoint changes typography, radius, spacing, layout, grid, common-component-values. It does not affect colour.

## Examples

### Minimal page (defaults)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="/node_modules/@mds/tokens/fonts.css" />
    <link rel="stylesheet" href="/node_modules/@mds/tokens/tokens.css" />
    <link rel="stylesheet" href="/node_modules/@mds/tokens/typography.css" />
  </head>
  <body>
    <!-- light + normal + neutral; mobile breakpoint until viewport ≥ 768px -->
  </body>
</html>
```

### Force dark mode

```html
<html data-mode="dark"> ... </html>
```

### Tinted sub-tree

```html
<html data-mode="dark" data-scheme="brand">
  <article data-scheme="info">Linked information panel.</article>
</html>
```

### Programmatic theme toggling

```ts
// Pseudo-code — adjust to framework
document.documentElement.dataset.mode = 'dark';     // set
delete document.documentElement.dataset.mode;       // revert to OS preference
```

## Related

- [[index]]
- [[mode]]
- [[section]]
- [[scheme]]
- [[breakpoint]]
- [[chain-inheritance]]
- [[foundation/colours]]
- [[foundation/breakpoints]]
- [[architecture/token-pipeline]]
