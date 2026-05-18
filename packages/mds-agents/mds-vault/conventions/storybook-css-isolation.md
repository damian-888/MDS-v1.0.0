---
title: Storybook CSS Isolation
type: convention
status: stable
source:
  - packages/mds-guidelines/.storybook/preview.css
  - packages/mds-guidelines/.storybook/preview.ts
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [convention, storybook, preview, isolation, scope, section]
related:
  - "[[index]]"
  - "[[css-modules]]"
  - "[[storybook-vault-parity]]"
  - "[[theming/section]]"
---

# Storybook CSS Isolation

> Bidirectional CSS isolation contract between Storybook chrome/docs and rendered components. preview.css is bounded by `@scope` to docs-content and excludes `.sb-story`. Component CSS Modules never use bare tag selectors. Storybook's own `.sb-unstyled` class on `.sb-story` already excludes story descendants from emotion's prose styling.

## Summary

Storybook's docs page wraps everything in `<div class="sbdocs sbdocs-content">`, and each rendered story sits inside `<div class="sb-story sb-unstyled">`. Three rules combined keep CSS from leaking in either direction:

1. **`@scope` boundary.** Everything in `preview.css` that styles docs prose or docs chrome is wrapped in `@scope (.sbdocs.sbdocs-content) to (.sb-story) { ... }`. Native CSS scoping halts at the story boundary — none of our rules can match an element inside `.sb-story`.
2. **`.sb-unstyled` is Storybook's own escape hatch.** Storybook's emotion-injected prose CSS uses `.css-XXXX :where(X:not(.sb-anchor, .sb-unstyled, .sb-unstyled X))` — the `:not(.sb-unstyled X)` clause excludes any element that is a descendant of `.sb-unstyled`. `.sb-story` carries `.sb-unstyled`, so emotion never reaches into a rendered component either.
3. **Component CSS uses only class selectors.** Per [[css-modules]], components never use bare tag selectors. Their CSS can't leak outward and can't conflict with the scoped preview rules.

## Rule

### `preview.css` structure

```
/* Outside @scope — iframe surface only. */
:root { color-scheme: light dark; }
body  { background-color: var(--mds-colours-basic-background); margin: 0; ... }
*, *::before, *::after { box-sizing: border-box; }
img, picture, svg { display: block; max-width: 100%; }
.sbdocs-preview .sb-story { padding-block: var(--mds-spacing-large) !important; }

/* Everything else — docs-content scope, halts at .sb-story. */
@scope (.sbdocs.sbdocs-content) to (.sb-story) {
  :scope:scope h1 { ... }
  :scope:scope h2 { ... }
  /* ... */
  .sbdocs-preview { ... }
  .docblock-source { ... }
  /* ... */
}

/* [data-mode] rules — outside @scope because they anchor at <html>. */
[data-mode="dark"] .sbdocs.sbdocs-content pre.prismjs { ... }
```

### The `:scope:scope X` pattern

Selectors inside `@scope` need higher specificity than Storybook's class-scoped emotion rules. Emotion's prose selector specificity is `(0,1,1)` (one class for the docs-content wrapper + one for the prose tag inside a zero-specificity `:where()`):

```css
.css-XXXX :where(p:not(.sb-anchor, .sb-unstyled, .sb-unstyled p)) { font-family: ... }
```

Three approaches that **don't work**:

- **`& X` (Chrome's `&` inside `@scope` is zero-specificity).** Verified in Chromium 148 via CDP: `& h1` reports specificity `(0,0,1)`. Loses to emotion's `(0,1,1)`.
- **`.sbdocs.sbdocs-content X` (interpreted as scope-relative).** Inside `@scope`, bare class selectors are nested. `.sbdocs.sbdocs-content h1` looks for *another* `.sbdocs.sbdocs-content` element *inside* the scope root — which doesn't exist, so no match.
- **`:scope X` (specificity `(0,1,1)` — ties emotion).** Source-order tiebreaker favours whichever loads later. Emotion injects at runtime, after preview.css loads at module-eval time, so emotion wins ties.

The approach that **does work**:

- **`:scope:scope X`** — doubled `:scope` contributes `(0,2,0)` specificity. Combined with the tag selector, the rule has specificity `(0,2,1)`, deterministically beating emotion's `(0,1,1)`.

### What goes inside `@scope` vs outside

Inside `@scope`:

- All prose typography (`h1`–`h4`, `p`, `li`, `a`, `code`, `ul`, `ol`).
- All docs-chrome theming (`.sbdocs-preview`, `.docblock-source`, `.docblock-argstable`, `.docblock-code-toggle`).
- Boolean toggle, args-table form controls, code panel surfaces.

Outside `@scope`:

- Iframe surface: `:root { color-scheme }`, `body { background }`, `* { box-sizing }`, `img/picture/svg` defaults.
- `.sbdocs-preview .sb-story { padding-block }` — `.sb-story` is the scope BOUNDARY; the element itself is excluded from the scope so it can't be styled from inside.
- `[data-mode="dark"]` and `[data-mode="light"]` rules that combine with the `<html>` mode attribute. These anchor at `<html>` which sits outside `.sbdocs.sbdocs-content`. All chained class selectors target docs-page classes (`.sbdocs.sbdocs-content`, `pre.prismjs`, `.docblock-source`) that don't exist inside `.sb-story`, so they cannot leak.

### Banned patterns inside `@scope`

- No bare tag selectors that compete with emotion: `h1 { ... }`, `p { ... }` etc. inside `@scope` have specificity `(0,0,1)` and lose to emotion's `(0,1,1)`. Use `:scope:scope X` instead.
- No `.sbdocs.sbdocs-content X` selectors — they are interpreted as scope-relative and don't match.
- No `& X` selectors — `&` is zero-specificity inside `@scope`; the rule still loses to emotion.

### Banned patterns outside `@scope`

- No bare tag selectors at any level: `h1 { ... }`, `p { ... }`, `button { ... }`, etc. — these would reach into every story. The two exceptions (`*` for box-sizing, `body` for surface, `img/picture/svg` for block display) target elements that don't exist inside stories or for which the global rule is intentional.

## Why

- **Bidirectional isolation by construction.** The `@scope` boundary plus Storybook's own `.sb-unstyled` opt-out plus component-side class-only CSS gives three independent walls. Even if one wall has a gap, the others catch it.
- **No `:not(.sb-story *)` repetition.** Pre-`@scope` versions of `preview.css` repeated the exclusion on every rule. Easy to forget on new rules (and historically forgotten on `h*`/`ul`/`ol`, causing real margin bleed into `MDSAccordion` and `MDSBreadcrumb`). `@scope` makes the boundary structural and unmissable.
- **Deterministic specificity.** `:scope:scope X` always beats emotion's class-scoped prose. No source-order races.

## How to Apply

### Adding a new docs-chrome rule

1. Decide where it goes:
   - Targets a docs-content descendant (`.sbdocs-preview`, `.docblock-*`) → inside `@scope`.
   - Anchors at `<html>` (e.g., `[data-mode]`) and the rest of the selector is class-only → outside `@scope`.
   - Iframe-surface (`body`, `:root`, `*` reset) → outside `@scope`.
2. If the rule targets a prose tag (`p`, `h*`, `li`, `a`, `code`, etc.) and needs to beat emotion: use `:scope:scope X`.
3. If the rule targets a docs-chrome class (`.docblock-*`, `.sbdocs-*`): use the bare class — `@scope`'s implicit nesting makes it scope-relative, which is what we want.
4. Never use bare tag selectors — even inside `@scope`. The exception is the `* { box-sizing }` reset outside `@scope`, which is a deliberate global reset.

### Adding a new prose tag to docs

If MDX/JSX prose adds a new tag we want to style (e.g., `<blockquote>`):

1. Add a rule inside `@scope` using `:scope:scope blockquote { ... }`.
2. Use `@mds/tokens` for all values; no hex fallbacks, no hardcoded fonts (except the monospace stack for code).
3. Use logical properties (`margin-block-*`, `padding-inline-*`, `border-block-*`) — never `margin-top`/`padding-left`/`border-bottom`.

### Verifying isolation

The harness at `packages/mds-guidelines/scripts/visual-baseline.mjs` captures full-page screenshots of every docs page in light + dark mode, hiding `.sb-story` regions during capture. Run:

```bash
pnpm --filter @mds/guidelines visual-baseline:before  # baseline pre-change
pnpm --filter @mds/guidelines visual-baseline:after   # capture post-change
pnpm --filter @mds/guidelines visual-baseline:diff    # pixelmatch comparison
```

The chrome+prose diff should be empty for any change that is supposed to be isolation-preserving. Story-area changes are expected when fixing a leak.

## Examples

### Correct: rules inside `@scope`

```css
@scope (.sbdocs.sbdocs-content) to (.sb-story) {
  /* prose — :scope:scope for emotion-beating specificity */
  :scope:scope h1 { font-family: var(--mds-typography-h1-font-family); }
  :scope:scope p  { color: var(--mds-colours-basic-text); }

  /* chrome — class-only is enough; @scope provides the boundary */
  .sbdocs-preview { border-radius: var(--mds-radius-medium) !important; }
  .docblock-source { background: var(--mds-colours-basic-background) !important; }
}
```

### Incorrect: bare tag inside @scope

```css
/* WRONG — h2 specificity (0,0,1) loses to emotion (0,1,1).
   The rule will be ignored on every docs h2. */
@scope (.sbdocs.sbdocs-content) to (.sb-story) {
  h2 { font-family: var(--mds-typography-h2-font-family); }
}
```

### Incorrect: explicit ancestor inside @scope

```css
/* WRONG — interpreted as scope-relative.
   Looks for `.sbdocs.sbdocs-content` INSIDE the scope root, doesn't exist. */
@scope (.sbdocs.sbdocs-content) to (.sb-story) {
  .sbdocs.sbdocs-content h2 { ... }  /* never matches */
}
```

### Correct: chrome rule outside @scope

```css
/* .sb-story is the scope boundary; its descendants are excluded but
   the element itself is also excluded. Style it outside @scope. */
.sbdocs-preview .sb-story {
  padding-block-start: var(--mds-spacing-large) !important;
  padding-block-end: var(--mds-spacing-large) !important;
}
```

## Exceptions

- **`*, *::before, *::after { box-sizing: border-box }`** — applied globally outside `@scope`. Safe because (a) every MDS component CSS Module sets its own `box-sizing` on `.root`, so the global is a no-op for them; (b) most third-party CSS expects this baseline.
- **`body { margin: 0; background-color: var(...); color: var(--mds-colours-basic-text); }`** — applied globally for iframe surface. The `color` is set from the mode-aware token so components that intentionally inherit `color` (MDSText via its typography utility class, MDSIcon via `currentColor`, MDSAccordion's panel content) render against the active `data-mode`. Without it, `color-scheme: light dark` lets the browser fall back to OS `prefers-color-scheme` for `canvastext`, which can disagree with our explicit `data-mode` (e.g. light-mode Storybook on a dark-mode OS) — text comes out white on white. Components that set their own `color` (MDSButton, MDSCard, MDSChipDismissible, …) still win via the closer rule. `font-family` and `font-size` remain unset so components are the sole source of those.
- **`img, picture, svg { display: block; max-width: 100% }`** — sensible defaults that components rely on. Applied globally.

## Preview-frame backdrop (section axis)

The framed preview card around each story on the docs page (`.sbdocs-preview`) renders against a **subtle** section backdrop so primary (white-fill) components stand out. The mechanism uses the section theming axis, not a new token.

1. `preview.css` drives the frame's `background-color` from `var(--mds-colours-basic-background)` (inside `@scope`), replacing the static hex emotion would otherwise inject from `theme.ts`.
2. `preview.ts` runs a `MutationObserver` that stamps `data-section="subtle"` on every `.sbdocs-preview` in the docs iframe. With the override applied, `--mds-colours-basic-background` re-resolves to the subtle palette (e.g. `#F1F1F1` in light/neutral, `#262626` in dark/neutral). No-op in the canvas iframe where `.sbdocs-preview` doesn't exist.
3. A **global decorator** in `preview.ts` wraps every rendered story in `<div data-section="normal" style="display:contents">`. This re-anchors the section axis inside the `.sb-story` subtree so components consuming `basic.background` (e.g. `MDSCard`) resolve to the normal palette (white in light, black in dark) — visible contrast against the subtle frame. `display:contents` keeps the wrapper transparent to layout.

Per-story overrides on individual components still work — a story that sets `data-section="subtle"` on a card flips that one element back to the subtle palette.

**Edge case — subtle component on a subtle frame:** if a story renders a card with `data-section="subtle"` on its root (e.g. MDSCard's `SecondaryBackground` story uses `background='secondary'`, which does exactly this), the card would otherwise collide with the subtle frame. The MutationObserver supports a per-story opt-out: a story decorator wraps its content in `<div data-frame-section="normal" style="display:contents">`, and the observer reads that sentinel inside each `.sbdocs-preview` to stamp the **frame** as `normal` instead of `subtle`. Result for that one frame: frame=normal (white in light/neutral), card=subtle (grey) — relationship inverted so the variant remains visible.

## Related

- [[index]]
- [[css-modules]] — the component-side half of the isolation contract: no bare tag selectors in component CSS.
- [[storybook-vault-parity]] — prose narrative in stories vs. vault atoms; orthogonal to CSS isolation but in the same area.
- [[theming/section]] — the section axis that drives the preview-frame backdrop.
