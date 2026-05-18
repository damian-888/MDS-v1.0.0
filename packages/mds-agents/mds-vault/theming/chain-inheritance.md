---
title: Chain Inheritance
type: theming-axis
status: stable
source:
  - packages/mds-tokens/style-dictionary.config.mjs
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [theming, css-variables, cascade, inheritance, specificity]
related:
  - "[[index]]"
  - "[[mode]]"
  - "[[section]]"
  - "[[scheme]]"
  - "[[foundation/colours]]"
  - "[[architecture/token-pipeline]]"
---

# Chain Inheritance

> The non-obvious CSS substitution behavior that the token pipeline works around to make per-element axis overrides actually re-resolve foundation tokens.

## Summary

CSS custom properties are **substituted at the element where they're declared**, then inherited as a literal value. Naively declaring foundation tokens once at `:root` means per-element overrides of `--mds-mode-*` would not affect `--mds-colours-*` on descendants — the foundation token has already been resolved at `:root` to a literal hex.

The fix: every layer's default block uses the **selector list** `:root, [data-mode], [data-section], [data-scheme]` so the layer is re-declared on every override scope. Override blocks (e.g. `[data-scheme="error"]`) extend to descendants of OTHER axes via `:where(parent) [data-otherAxis]` — the `:where()` zeroes the parent's specificity contribution so source order decides the winner across axes.

## Values

This is structural, not a token group — there are no "values" per se. But two patterns are emitted from the config:

| Pattern | Where it's used |
|---|---|
| `:root, [data-mode], [data-section], [data-scheme]` | Default blocks for every layer (mode, section, scheme, foundation). |
| `[data-axis="value"], :where(parent) [data-other-axis]` | Override blocks. The `:where()` keeps every override at specificity `(0,0,1,0)` so source order wins. |

## Selector

The two structural patterns above.

## Source File

- [`packages/mds-tokens/style-dictionary.config.mjs`](packages/mds-tokens/style-dictionary.config.mjs) — search for `overrideSelector` and `ALL_OVERRIDE_SCOPES`.

The relevant comment block in the source:

> Custom property inheritance in CSS substitutes var() chains at the element where the property is declared, so to make per-element overrides compose with parent overrides at other layers, every layer must redeclare its tokens on every override scope.
>
> Spec subtlety: `[data-scheme="neutral"] [data-mode]` has specificity (0,0,2,0) which would beat a per-element `[data-scheme="error"]` (0,0,1,0) — wrong. Wrapping the parent term in `:where()` zeroes its specificity contribution, so every block stays at (0,0,1,0) and source order picks the winner.

## Cascade Rules

### Why the multi-selector default list

Without `:root, [data-mode], [data-section], [data-scheme]`:

```css
:root {
  --mds-mode-colours-basic-background: #fff;          /* substituted to #fff at :root */
  --mds-colours-basic-background: var(--mds-mode-colours-basic-background);
  /* foundation token already resolved to literal #fff; descendants inherit "#fff", not the var chain */
}

[data-mode="dark"] {
  --mds-mode-colours-basic-background: #000;
  /* foundation token NOT re-declared here → still resolves to #fff */
}
```

The fix re-declares foundation on every axis scope:

```css
:root,
[data-mode],
[data-section],
[data-scheme] {
  --mds-colours-basic-background: var(--mds-mode-colours-basic-background);
}
```

Now any element setting `data-mode`, `data-section`, or `data-scheme` re-resolves the chain at that element.

### Why `:where()` for cross-axis override blocks

Consider:

```css
[data-scheme="neutral"] [data-mode] { /* specificity (0,0,2,0) */ }
[data-scheme="error"]   { /* specificity (0,0,1,0) */ }
```

A per-element `[data-scheme="error"]` deeper in the tree would lose to the (0,0,2,0) selector above it. Wrapping with `:where()` zeroes the parent's contribution:

```css
:where([data-scheme="neutral"]) [data-mode] { /* specificity (0,0,1,0) */ }
[data-scheme="error"]   { /* specificity (0,0,1,0) — equal, source order decides */ }
```

Equal specificity + source order means nested overrides like `<aside data-scheme="error">` inside `<html data-mode="dark">` resolve to error-in-dark-mode without per-element redeclaration.

## Examples

```html
<html data-mode="dark" data-section="normal" data-scheme="brand">
  <main>
    <!-- Brand-dark-normal palette, resolved at :root. -->
  </main>
  <aside data-scheme="error">
    <!-- Error scheme overrides at this element. Mode + section still inherit from <html>. -->
    <!-- Foundation token re-resolves here because the foundation block was emitted with
         the selector list `:root, [data-mode], [data-section], [data-scheme]`. -->
  </aside>
  <div data-section="subtle">
    <!-- Subtle section overrides. Mode + scheme still inherit from <html>. -->
  </div>
</html>
```

## Related

- [[index]]
- [[mode]]
- [[section]]
- [[scheme]]
- [[foundation/colours]]
- [[architecture/token-pipeline]]
