---
title: Tokens Policy
type: convention
status: stable
source:
  - packages/mds-components/src/MDSButton/MDSButton.module.css
  - packages/mds-tokens/src/foundation.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [convention, tokens, css-variables, no-fallbacks]
related:
  - "[[index]]"
  - "[[naming]]"
  - "[[css-modules]]"
  - "[[foundation/index]]"
---

# Tokens Policy

> Components reference tokens with clean `var(--name)` only. Never `var(--name, <fallback>)`. If a token isn't emitted, the component renders unstyled — that surfaces the gap.

## Rule

1. **No hex fallbacks anywhere.** Component CSS Modules reference foundation tokens with `var(--mds-…)` only.
2. **No second source of truth.** If a token is missing, fix the gap in `@mds/tokens` (re-export from Tokens Studio + rebuild). Do not add a literal hex / px in the component CSS.
3. **No JS-imported tokens in components.** Components consume tokens through CSS variable names. The `tokens.js` / `tokens.d.ts` exports exist for app-level code that needs ref strings (inline styles, CSS-in-JS) or numeric primitives (`matchMedia`, chart libraries) — not for component styling.

## Why

A hex fallback `var(--mds-colours-basic-accent, #ff0000)` looks defensive but hides the bug:

- The component renders styled, so reviewers don't notice the missing token.
- Now there are two sources of truth for the colour. They will drift.
- A theme change that flips the token won't flip the hex — the component silently disagrees with the system.

A clean `var(--mds-colours-basic-accent)` resolves to the empty string when the token is missing, and the component renders without that property. The breakage is loud and motivates the fix in the right place: `@mds/tokens`.

## How to Apply

1. **Writing a component CSS Module:** every value references a token. `0`, `transparent`, and CSS keyword values are the only literals allowed.
2. **Missing a token?** Add it to `@mds/tokens` from Tokens Studio. Don't work around it in the component.
3. **Needing a token in JS** (inline style, `matchMedia`, chart lib)? Import from `@mds/tokens`:
   ```ts
   import { colours, breakpoints, palettes } from '@mds/tokens';
   <div style={{ background: colours.basic.accent }} />        // "var(--mds-colours-basic-accent)" string
   window.matchMedia(`(min-width: ${breakpoints.tablet}px)`)   // 768
   ```

## Examples

✅ **Correct** — clean `var()` reference, no fallback:

```css
.root {
  --MDSButton-fill: var(--mds-colours-basic-accent);
  background: var(--MDSButton-fill);
}
```

❌ **Wrong** — hex fallback creates a second source of truth:

```css
.root {
  --MDSButton-fill: var(--mds-colours-basic-accent, #e20074);
  background: var(--MDSButton-fill);
}
```

❌ **Wrong** — bare hex bypasses the token system entirely:

```css
.root {
  background: #e20074;
}
```

## Exceptions

When Figma uses a literal value that has no exact match in `@mds/tokens` (e.g. an outline variant's 1.6px stroke), use the closest available token with an inline comment naming the original Figma value and the deviation:

```css
/* Figma value 1.6px → closest token (2px) per token-fallback policy */
--MDSButton-stroke-width: var(--mds-strokes-2);
```

This preserves the no-hex policy while accepting tiny visual deltas. The comment is mandatory so the deviation is reviewable.

## Related

- [[index]]
- [[naming]] — token naming patterns this policy assumes.
- [[css-modules]] — the two-layer indirection that consumes tokens through component vars.
- [[foundation/index]] — the token surface this policy applies to.
