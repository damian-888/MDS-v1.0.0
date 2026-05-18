---
title: Mode
type: theming-axis
status: stable
source:
  - packages/mds-tokens/src/.mode/light.json
  - packages/mds-tokens/src/.mode/dark.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [theming, mode, light, dark, prefers-color-scheme]
related:
  - "[[index]]"
  - "[[section]]"
  - "[[scheme]]"
  - "[[chain-inheritance]]"
  - "[[consumer-api]]"
  - "[[foundation/colours]]"
---

# Mode

> Light vs. dark theme. Switched via `[data-mode]` attribute; auto-falls-back to `@media (prefers-color-scheme: dark)` when unset.

## Summary

`data-mode` selects the colour family for the current subtree. Two values: `light` (default), `dark`. The attribute can be set on `<html>` for page-level or on any descendant for sub-tree overrides.

## Values

| Value | Effect |
|---|---|
| `light` (default) | Light-mode colours. |
| `dark` | Dark-mode colours. |

When `[data-mode]` is **not** set, `@media (prefers-color-scheme: dark)` is consulted — so a page with no markup automatically respects OS preference. Setting `[data-mode]` explicitly **overrides** the OS.

## Selector

```
[data-mode="light"]
[data-mode="dark"]
@media (prefers-color-scheme: dark) { /* auto-dark when [data-mode] is unset */ }
```

The mode chunk is emitted as 4 blocks in this order:

1. `:root, [data-mode], [data-section], [data-scheme]` — default light values (re-declared on every override scope; see [[chain-inheritance]]).
2. `@media (prefers-color-scheme: dark) { [...] }` — dark values activate from OS preference.
3. `[data-mode="dark"]` selectors — explicit dark.
4. `[data-mode="light"]` selectors — explicit light (LAST so it beats the `@media` rule at the same specificity).

Source order picks the winner at equal specificity, so explicit `[data-mode="light"]` must come after the `@media` block. See the comment in [`style-dictionary.config.mjs`](packages/mds-tokens/style-dictionary.config.mjs).

## Source File

- [.mode/light.json](packages/mds-tokens/src/.mode/light.json)
- [.mode/dark.json](packages/mds-tokens/src/.mode/dark.json)

`mode.*` tokens reference `{section.<mode>.colours.*}` — the next layer down.

## Cascade Rules

- Mode is the **highest** axis in the colour chain that runtime-switches via `[data-*]`. Below it: section → scheme → palette → hex.
- Every layer re-declares its tokens on `:root, [data-mode], [data-section], [data-scheme]` so per-element overrides at any axis trigger the right resolution. See [[chain-inheritance]].
- An override on one axis does not lock the other axes — a `<div data-mode="dark">` inside `<html data-scheme="brand">` is dark-brand.

## Related

- [[index]]
- [[section]]
- [[scheme]]
- [[breakpoint]]
- [[chain-inheritance]]
- [[consumer-api]]
- [[foundation/colours]]
- [[architecture/token-pipeline]]
