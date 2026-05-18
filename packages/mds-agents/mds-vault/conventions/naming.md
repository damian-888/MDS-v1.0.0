---
title: Naming
type: convention
status: stable
source:
  - packages/mds-tokens/src/
  - packages/mds-tokens/build/sd-setup.mjs
  - packages/mds-components/src/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [convention, naming, css-variables, tokens, components]
related:
  - "[[index]]"
  - "[[tokens-policy]]"
  - "[[component-contract]]"
  - "[[foundation/index]]"
---

# Naming

> Kebab-case, British spelling, `--mds-` prefix on token CSS variables, PascalCase + `--MDSX-` for component-scoped vars. Token path mirrors Tokens Studio path.

## Rule

### Universal

- **Case:** kebab-case only across tokens and non-component files.
- **Spelling:** British `colours`, not `colors`.

### Token CSS variables

- Every emitted token variable starts with `--mds-`. The `name/mds-prefix` custom transform in `packages/mds-tokens/build/sd-setup.mjs` enforces this.
- Variable path follows the Tokens Studio path. The top-level namespace in each source JSON becomes the first segment after the prefix.

| Layer | Pattern | Example |
|---|---|---|
| Core / palettes | `--mds-{namespace}-{path}` | `--mds-core-colours-blue-500`, `--mds-white-colours-basic-background`, `--mds-green-light-subtle-colours-basic-text` |
| Scheme | `--mds-scheme-{...}` (re-declared per `[data-scheme]`) | `--mds-scheme-light-normal-colours-basic-background` |
| Section | `--mds-section-{...}` (re-declared per `[data-section]`) | `--mds-section-light-colours-basic-background` |
| Mode | `--mds-mode-{...}` (re-declared per `[data-mode]` + `@media prefers-color-scheme: dark`) | `--mds-mode-colours-basic-accent` |
| Breakpoint | `--mds-breakpoint-{...}` (swapped per `@media min-width`) | `--mds-breakpoint-radius-full`, `--mds-breakpoint-typography-h1-font-size` |
| **Foundation (consumer-facing)** | `--mds-{domain}-{path}` (no namespace segment — domains live side-by-side) | `--mds-colours-basic-accent`, `--mds-radius-full`, `--mds-spacing-small`, `--mds-typography-h1-font-size` |

### Scale conventions

- **T-shirt sizes** where scale is semantic: `--mds-spacing-small`, `--mds-radius-full`.
- **Numeric scales** where scale is quantitative: `--mds-core-strokes-1..3`, `--mds-core-number-ramp-*`.

### Colour path

`colours-{group}-{role}[-{modifier}]`. Foundation example: `--mds-colours-basic-text-on-accent`.

### Interaction states (suffix-repeat)

`colours-interaction-states-{state}-{target}-{state}`. Example: `--mds-colours-interaction-states-hovered-accent-hovered`.

### Typography

Emitted as individual sub-property vars **plus** utility classes.

- Vars: `--mds-typography-body-font-family`, `--mds-typography-body-font-size`, `--mds-typography-body-font-weight`, `--mds-typography-body-line-height`, `--mds-typography-body-letter-spacing`, `--mds-typography-body-text-decoration`.
- Utility classes: `.mds-typography-h1`, `.mds-typography-h2`, `.mds-typography-h3`, `.mds-typography-body-large`, `.mds-typography-body`, `.mds-typography-body-bold`, `.mds-typography-body-underline`, `.mds-typography-microcopy`.

Components reference the sub-property vars directly in rule bodies (the documented exception to the two-layer indirection rule — see [[css-modules]]).

### Component-scoped CSS variables

Declared inside a component's CSS Module.

- Pattern: `--{ComponentName}-{figma-property}`.
- PascalCase component name.
- **Figma vocabulary** for the property name, not CSS vocabulary: `fill`, `stroke`, `corner-radius`, `padding-horizontal`, `item-spacing` — not `background`, `border-color`, `border-radius`, `padding-left`, `gap`.
- Variant and state styling cascades via `data-attribute` selectors that override the vars (`.root[data-variant='primary'] { --MDSButton-fill: ...; }`), not via additional `--variant-key-value` segments in the var name.
- Component vars are NOT prefixed with `mds-`. The `mds-` prefix is reserved for tokens.

Examples: `--MDSButton-fill`, `--MDSButton-stroke-width`, `--MDSButton-corner-radius`, `--MDSIcon-size`.

### React component identifiers

- Components: `MDS<Name>` PascalCase (`MDSButton`, `MDSIcon`).
- Variants and sizes: string-union types named `MDS<Name>Variant`, `MDS<Name>Size`.
- Props interface: `MDS<Name>Props`.

### Vault page names

- Component atom files: exact React identifier (`MDSButton.md`).
- Non-component atom files: kebab-case (`two-layer-styling.md`, `add-component.md`).

## Why

- **Predictable substitution.** A consumer who knows `--mds-colours-basic-accent` can find it in foundation tokens without reading the source.
- **Figma alignment.** Designers and engineers use the same word for the same thing. `fill` in Figma is `fill` in the CSS Module.
- **Disambiguation.** `mds-` prefix on tokens vs. unprefixed component vars makes it unambiguous at a glance which layer you're touching.
- **British spelling** is a one-line decision that prevents recurring `color/colour` bikeshedding in PRs.

## How to Apply

1. **Adding a token:** name it in Tokens Studio with the path that yields the right CSS var when prefixed and joined.
2. **Adding a component:** declare component vars at the top of `.root` using `--MDS{Name}-{figma-property}`.
3. **Adding a variant:** override the component var in a `.root[data-variant='...']` selector — do not encode the variant value into the var name.
4. **Naming a vault atom:** components keep their React identifier (`MDSButton.md`), everything else kebab-case.

## Examples

```css
/* MDSButton.module.css — canonical naming */
.root {
  --MDSButton-fill: var(--mds-colours-basic-accent-secondary);
  --MDSButton-text-fill: var(--mds-colours-basic-text-on-accent-secondary);
  --MDSButton-corner-radius: var(--mds-radius-full);
  --MDSButton-padding-horizontal: var(--mds-common-component-values-padding);
  background: var(--MDSButton-fill);
  color: var(--MDSButton-text-fill);
  border-radius: var(--MDSButton-corner-radius);
}

.root[data-variant='primary'] {
  --MDSButton-fill: var(--mds-colours-basic-accent);
  --MDSButton-text-fill: var(--mds-colours-basic-text-on-accent);
}
```

## Exceptions

- **Typography sub-property vars** are referenced directly in rule bodies (`font-family: var(--mds-typography-body-font-family);`) — see [[css-modules]] for the rationale.
- **British spelling exception:** when the upstream tooling uses American spelling (e.g., `data-color-scheme` from a third-party lib), keep the upstream spelling for compatibility.

## Related

- [[index]]
- [[tokens-policy]] — the rule that bans hex fallbacks; reinforces the naming as the single source.
- [[css-modules]] — where the two-layer indirection and Figma vocabulary live.
- [[component-contract]] — the broader contract every component follows.
- [[foundation/index]] — the token groups whose names this convention defines.
