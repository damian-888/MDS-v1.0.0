---
title: Scheme
type: theming-axis
status: stable
source:
  - packages/mds-tokens/src/.scheme/neutral.json
  - packages/mds-tokens/src/.scheme/brand.json
  - packages/mds-tokens/src/.scheme/functional.json
  - packages/mds-tokens/src/.functional/blue.json
  - packages/mds-tokens/src/.functional/green.json
  - packages/mds-tokens/src/.functional/orange.json
  - packages/mds-tokens/src/.functional/red.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [theming, scheme, brand, functional, neutral]
related:
  - "[[index]]"
  - "[[mode]]"
  - "[[section]]"
  - "[[chain-inheritance]]"
  - "[[consumer-api]]"
  - "[[foundation/colours]]"
  - "[[foundation/palettes]]"
---

# Scheme

> Colour identity for the current subtree. Six runtime values: `neutral`, `brand`, `success`, `error`, `warning`, `info`. Functional schemes (success/error/warning/info) bake their leaf palette at build time — the runtime API is a single attribute.

## Summary

`data-scheme` selects which palette family the subtree resolves to. Use it for status surfaces (an error banner), brand-tinted regions, or any subtree that needs a different identity.

## Values

| Value | Source palette family | Notes |
|---|---|---|
| `neutral` (default) | `white` / `black` (mode-driven) | Default for the whole page. |
| `brand` | `brand light` / `brand dark` | Brand-tinted surfaces. |
| `success` | `green light` / `green dark` | Functional — baked from `.functional/green.json`. |
| `error` | `red light` / `red dark` | Functional — baked from `.functional/red.json`. |
| `warning` | `orange light` / `orange dark` | Functional — baked from `.functional/orange.json`. |
| `info` | `blue light` / `blue dark` | Functional — baked from `.functional/blue.json`. |

Three source files in `.scheme/`: `neutral.json`, `brand.json`, `functional.json`. The four functional values are emitted as separate runtime schemes via the `.functional/<colour>.json` files — they bind the generic `functional.*` path to a specific colour at build time, so the runtime API stays single-attribute.

## Selector

```
[data-scheme="neutral"]
[data-scheme="brand"]
[data-scheme="success"]
[data-scheme="error"]
[data-scheme="warning"]
[data-scheme="info"]
```

Re-declared on the standard override scope (`:root, [data-mode], [data-section], [data-scheme]`).

## Source File

- [.scheme/neutral.json](packages/mds-tokens/src/.scheme/neutral.json)
- [.scheme/brand.json](packages/mds-tokens/src/.scheme/brand.json)
- [.scheme/functional.json](packages/mds-tokens/src/.scheme/functional.json)
- [.functional/blue.json](packages/mds-tokens/src/.functional/blue.json)
- [.functional/green.json](packages/mds-tokens/src/.functional/green.json)
- [.functional/orange.json](packages/mds-tokens/src/.functional/orange.json)
- [.functional/red.json](packages/mds-tokens/src/.functional/red.json)

## Cascade Rules

- Scheme is the **deepest** of the colour-axis overrides — below mode and section in the chain.
- Six emitted runtime values from three source schemes + four functional bindings.
- Composes with mode and section: `<aside data-scheme="error">` inside `<html data-mode="dark">` resolves to error-in-dark-mode without manual binding.

## Examples

```html
<html data-scheme="neutral" data-mode="light">
  <button class="..." data-scheme="error">Delete</button>
  <!--
    Inherits light mode + normal section from <html>.
    Overrides scheme to "error" — resolves to red-light-normal palette.
  -->
</html>
```

## Related

- [[index]]
- [[mode]]
- [[section]]
- [[breakpoint]]
- [[chain-inheritance]]
- [[consumer-api]]
- [[foundation/colours]]
- [[foundation/palettes]] — the leaf palettes the schemes bind to.
