---
title: CSS Modules
type: convention
status: stable
source:
  - packages/mds-components/src/MDSButton/MDSButton.module.css
  - packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.module.css
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [convention, css-modules, two-layer-indirection, data-attributes]
related:
  - "[[index]]"
  - "[[naming]]"
  - "[[tokens-policy]]"
  - "[[cross-component-cascade]]"
  - "[[component-contract]]"
  - "[[storybook-css-isolation]]"
---

# CSS Modules

> CSS Modules are MDS's only styling mechanism. Two-layer indirection: component-scoped `--MDSX-*` vars at the top of `.root` consume tokens; rule bodies only consume component vars.

## Rule

### Two-layer indirection (strict)

Inside a component's CSS Module:

1. Component-scoped vars declared at the top of `.root` reference token vars.
2. Every rule body consumes only the component vars.

This applies to every painted/measured property — colours, backgrounds, borders, spacing, sizing, radii, focus rings, transitions. **A rule body must never reference `--mds-*` token vars directly.**

### File structure

```
src/MDS<Component>/
├── MDS<Component>.tsx
├── MDS<Component>.module.css   (omitted for MDSText — see Exceptions)
├── MDS<Component>.test.tsx
└── index.ts
```

### Section ordering inside `.module.css`

Canonical order — use `/* ---- Section ---- */` dividers:

```
Base (.root + element classes like .label, .iconSlot)
Variants
Sizes
Mode toggles (e.g. [data-icon-only])
Disabled
Focus
Cross-cutting (prefers-reduced-motion, forced-colors)
```

See [`MDSButton.module.css`](packages/mds-components/src/MDSButton/MDSButton.module.css) for the canonical layout.

### Class naming

- **camelCase**, not BEM. `MDSButton.tsx` references `styles.root`, `styles.label`, `styles.iconSlot`; the CSS file declares them as `.root`, `.label`, `.iconSlot`.
- CSS Modules scope class names at build time so collisions across components are not possible.

### Component-scoped vars

- Declared at the top of `.root`.
- Pattern: `--{ComponentName}-{figma-property}` (PascalCase component, Figma vocabulary for property — see [[naming]]).
- Variant / size / state selectors override the vars only — single-property cascades, no specificity wars.

### Logical properties

Use logical properties (`padding-inline`, `padding-block`, `border-inline-start`, etc.) for free RTL support.

### No hex fallbacks

Every value references an `@mds/tokens` foundation token. See [[tokens-policy]].

### Cross-cutting boilerplate (mandatory)

Every CSS Module must include:

1. A `prefers-reduced-motion` rule disabling transitions/animations.
2. A `forced-colors` rule keeping the component visible under Windows High Contrast / equivalent OS forced-colors modes.

```css
/* Always-mandatory: motion */
@media (prefers-reduced-motion: reduce) {
  .root { transition: none; animation: none; }
}

/* MDSButton — has a fill + border, so a 1px CanvasText border guarantees an outline */
@media (forced-colors: active) {
  .root { border: 1px solid CanvasText; }
}

/* MDSIcon — is a glyph; force the system foreground colour so the icon stays visible */
@media (forced-colors: active) {
  .root { color: CanvasText; }
}
```

The rule is "stay visible under forced-colors"; pick the property that matches the component's primary visual mechanism (fill+border for chrome, `color` for glyphs).

## Why

- **Override surface.** Component-scoped vars are the consumer override API. A consumer can re-declare `--MDSButton-fill` on any ancestor node without touching tokens. Reaching past component vars to token vars in a rule body kills that surface.
- **Single-property cascades.** Variant / size / state selectors set vars only; the rule body that consumes them is written once. No specificity arms race.
- **CSS Modules scope safely.** No global class collisions; renaming a class only affects the one component.
- **Logical properties** make RTL free.
- **Cross-cutting boilerplate** ensures accessibility regressions can't ship — motion and forced-colors are not optional.

## How to Apply

When writing a CSS Module:

1. Declare all component vars at the top of `.root`. Reference tokens with clean `var(--mds-…)`.
2. In the `.root` rule body, only reference `--MDSX-*` component vars.
3. Override vars in `.root[data-variant='…']`, `.root[data-size='…']`, `.root[data-icon-only]`, etc. Never repeat the rule body.
4. Use camelCase class names referenced via `styles.<name>` in TSX.
5. Use logical properties (`padding-inline`, `padding-block`, etc.).
6. Add `prefers-reduced-motion` and `forced-colors` rules at the bottom — section-divider `/* ---- Cross-cutting ---- */`.
7. **Portal-rendered sub-parts** (Base UI's `Menu.Popup`, `Dialog`, etc.) escape the `.root` cascade — declare component-scoped vars on the portalled element itself, not on `.root`. See [`MDSBreadcrumb.module.css`](packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.module.css) for the canonical pattern (`--MDSBreadcrumb-overflow-*` lives on `.overflowPopup`).

## Examples

```css
/* MDSButton.module.css */
.root {
  /* Component-scoped vars — defaults (Large + Secondary) */
  --MDSButton-fill: var(--mds-colours-basic-accent-secondary);
  --MDSButton-text-fill: var(--mds-colours-basic-text-on-accent-secondary);
  --MDSButton-stroke: transparent;
  --MDSButton-stroke-width: 0;
  --MDSButton-corner-radius: var(--mds-radius-full);
  --MDSButton-padding-horizontal: var(--mds-common-component-values-padding);
  --MDSButton-min-height: var(--mds-common-component-values-height-large);

  background: var(--MDSButton-fill);
  color: var(--MDSButton-text-fill);
  border: var(--MDSButton-stroke-width) solid var(--MDSButton-stroke);
  border-radius: var(--MDSButton-corner-radius);
  padding-inline: var(--MDSButton-padding-horizontal);
  min-height: var(--MDSButton-min-height);
}

.root[data-variant='primary'] {
  --MDSButton-fill: var(--mds-colours-basic-accent);
  --MDSButton-text-fill: var(--mds-colours-basic-text-on-accent);
}
```

## Exceptions

### MDSText has no CSS Module

The eight `.mds-typography-*` utility classes from `@mds/tokens/typography.css` are MDSText's entire styling surface. There's no scope to declare, so the two-layer indirection rule does not apply. See [[components/MDSText]].

### Typography sub-property vars

Components reference `--mds-typography-<style>-{font-family,font-size,font-weight,line-height,letter-spacing,text-decoration}` directly in rule bodies. Wrapping each sub-property in a component var would multiply declarations five-fold without buying a useful override surface. This exception applies ONLY to `--mds-typography-*` tokens.

### Portal-rendered popups escape the `.root` cascade

Base UI's `Menu.Popup` and `Dialog` are appended to `<body>` via Portal, outside the component's `.root` element. Component-scoped vars declared on `.root` never cascade to them. Declare them on the portalled element directly. Canonical example: [[components/MDSBreadcrumb]] (`--MDSBreadcrumb-overflow-*` on `.overflowPopup`).

## Related

- [[index]]
- [[naming]] — component-var naming pattern.
- [[tokens-policy]] — the no-hex-fallback rule that the two-layer system depends on.
- [[cross-component-cascade]] — how a parent component sets a child's component var via the DOM cascade.
- [[component-contract]] — the full contract every component implements.
