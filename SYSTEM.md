# MDS React — System Reference

Living technical reference for the MDS design system's React implementation. Architecture, conventions, and day-to-day workflows. Keep this current as the system evolves.

---

## Architecture

**Monorepo** — pnpm workspaces. Four published packages, independent versioning via Changesets.

```
packages/
├── mds-tokens/      # @mds/tokens  — DTCG JSON → CSS vars + TS types
├── mds-icons/       # @mds/icons   — SVGs → per-icon chunks + lazy registry
├── mds-components/  # @mds/components   — UI components (MDS-prefixed), depends on tokens + icons
└── mds-agents/      # @mds/agents  — LLM context + design-system knowledge base
```

**Dependency graph:** `@mds/components` → `@mds/tokens` + `@mds/icons`. Tokens and icons do not depend on each other. The consumer-facing `MDSIcon` component lives in `@mds/components`, not `@mds/icons` — `@mds/icons` ships only the lazy icon registry that `MDSIcon` consumes.

**Source of truth:** Figma. Tokens authored in Figma Tokens Studio. Icons authored as components on a dedicated icons page. Components authored in the Figma components library.

**`@mds/components` component layer:** components are built on [Base UI](https://base-ui.com) (MUI team) as the sole headless primitive layer — imported as a runtime dependency. [shadcn/ui](https://ui.shadcn.com) (Base UI flavor) is used as a copy-paste recipe source during scaffolding, not a runtime dependency. Styling is CSS Modules referencing `@mds/tokens` CSS variables — no CSS-in-JS, no Tailwind. Variants and states are expressed via data-attributes on the component root (`data-variant`, `data-size`, plus Base UI's runtime attrs `data-pressed`, `data-disabled`, etc.).

---

## Token system

### Layer architecture (1:1 with Figma Tokens Studio)

The token system is a **layered cascade of CSS variables with four runtime-switchable axes**: mode, section, scheme, and breakpoint. Each axis has multiple variants; consumers pick the active variant per-element via HTML data attributes (or `@media` for breakpoint).

**Layers (reference-resolution order, bottom-up):**

1. **Core + palettes** — raw primitive scales (colour ramps, viewports, font-families) and the leaf colour palettes (white/black/brand-light/brand-dark + functional green/red/orange/blue, each in light/dark × normal/subtle variants). `:root`. Source: `packages/mds-tokens/src/.core.json` + `src/base/*.json` + `src/base/functional/*.json`.
2. **Scheme** — picks which palette family to use. `[data-scheme="<name>"]`. Source: `src/.scheme/{neutral,brand,functional}.json` + `src/.functional/{green,red,orange,blue}.json` (the latter binds the generic functional path to a specific colour). Six runtime values: `neutral` (default), `brand`, `success`, `error`, `warning`, `info`. Functional schemes are baked at build (chain-through-files) so the runtime API is one attribute.
3. **Section** — picks normal vs. subtle within the active scheme. `[data-section="<name>"]`. Source: `src/.section/{normal,subtle}.json`. Two values.
4. **Mode** — picks light vs. dark within the active section/scheme. `[data-mode="<name>"]` + `@media (prefers-color-scheme: dark)` for OS auto-detection. Source: `src/.mode/{light,dark}.json`. Two values. Explicit `[data-mode]` overrides the OS preference.
5. **Breakpoint** — per-viewport values for typography, radius, layout, grid, common-component-values. Switched via `@media (min-width: 768/1040/1440px)` (mobile is the `:root` default — mobile-first). Source: `src/.breakpoint/{mobile,tablet,laptop,desktop}.json`.
6. **Foundation** — public-API semantic tokens. `:root` + every `[data-mode|section|scheme]` element (re-declared on each override scope; see chain-inheritance note below). Source: `src/foundation.json`. References `{mode.*}` and `{breakpoint.*}` only. **What consumers use.**

**Cross-layer references are preserved as `var(...)` at runtime** (Style Dictionary `outputReferences: true`). Foundation tokens chain `foundation → mode → section → scheme → palette → hex` — five hops resolved by the browser at render time.

### Chain-inheritance fix (non-obvious)

CSS custom properties are *substituted at the element where they're declared*, then inherited as a literal. So `:root { --mds-colours-basic-background: var(--mds-mode-colours-basic-background) }` resolves at `:root` and propagates the literal hex down — per-element overrides of `--mds-mode-*` would not affect `--mds-colours-*` on descendants.

Fix: every layer's default block uses the selector list `:root, [data-mode], [data-section], [data-scheme]` so the layer is re-declared on every override scope. Override blocks (e.g. `[data-scheme="error"]`) extend to descendants of OTHER axes via `:where(parent) [data-otherAxis]` — the `:where()` zeroes the parent's specificity so source order picks the winner across axes. This makes nested overrides like `<aside data-scheme="error">` inside `<html data-mode="dark">` resolve to error-in-dark-mode without per-element redeclaration.

### Token-policy: NO fallbacks

Components reference tokens with **clean `var(--name)` only**. Never `var(--name, <fallback>)`. If a token isn't emitted by `@mds/tokens`, the component renders unstyled — this surfaces the gap and motivates the token sync. Adding a hex fallback hides the gap and creates a second source of truth that drifts.

If a component needs a token that doesn't exist, the fix is in `@mds/tokens` (re-export from Tokens Studio + rebuild), not in the component CSS.

Exception: when Figma uses a literal value that has no exact match in `@mds/tokens` (e.g. the Outline variant's 1.6px stroke), use the closest available token with an inline comment naming the original Figma value and the deviation (`/* Figma value 1.6px → closest token (2px) per token-fallback policy */`). This preserves the no-hex policy while accepting tiny visual deltas.

### Naming conventions

- **Case:** kebab-case only.
- **Spelling:** British `colours`, not `colors`.
- **Prefix:** every emitted CSS variable starts with `--mds-`. Set by a custom `name/mds-prefix` transform in `build/sd-setup.mjs`.
- **Var names follow the Tokens Studio path.** The top-level namespace in each source file becomes the path's first segment after the prefix:
  - Core / palettes: `--mds-core-colours-blue-500`, `--mds-white-colours-basic-background`, `--mds-green-light-subtle-colours-basic-text`.
  - Scheme: `--mds-scheme-light-normal-colours-basic-background` (re-declared per `[data-scheme]`).
  - Section: `--mds-section-light-colours-basic-background` (re-declared per `[data-section]`).
  - Mode: `--mds-mode-colours-basic-accent` (re-declared per `[data-mode]` + `@media prefers-color-scheme: dark`).
  - Breakpoint: `--mds-breakpoint-radius-full`, `--mds-breakpoint-typography-h1-font-size` (swapped per `@media min-width`).
  - **Foundation (consumer-facing):** `--mds-colours-basic-accent`, `--mds-radius-full`, `--mds-common-component-values-padding`, `--mds-layout-12-columns`, `--mds-spacing-small`, `--mds-typography-h1-font-size`. The foundation prefix is just `--mds-` because foundation has multiple top-level domains (colours, radius, spacing, typography, …).
- **T-shirt sizes** where scale is semantic: `--mds-spacing-small`, `--mds-radius-full`.
- **Numeric scales** where scale is quantitative: `--mds-core-strokes-1..3`, `--mds-core-number-ramp-*`.
- **Colour path:** `colours-{group}-{role}[-{modifier}]`. Foundation example: `--mds-colours-basic-text-on-accent`.
- **Interaction states** (suffix-repeat): `colours-interaction-states-{state}-{target}-{state}` — e.g., `--mds-colours-interaction-states-hovered-accent-hovered`.
- **Typography** is emitted as individual sub-property vars (not a composite shorthand) PLUS utility classes:
  - Vars: `--mds-typography-body-font-family`, `--mds-typography-body-font-size`, `--mds-typography-body-font-weight`, `--mds-typography-body-line-height`, `--mds-typography-body-letter-spacing`, `--mds-typography-body-text-decoration`.
  - Utility classes: `.mds-typography-h1`, `.mds-typography-h2`, `.mds-typography-h3`, `.mds-typography-body-large`, `.mds-typography-body`, `.mds-typography-body-bold`, `.mds-typography-body-underline`, `.mds-typography-microcopy`.
  - Components reference sub-property vars directly (`font-family: var(--mds-typography-body-font-family); font-size: var(--mds-typography-body-font-size); ...`).
- **Component-scoped vars** (inside a component's CSS Module): `--{ComponentName}-{figma-property}`. PascalCase component name, Figma vocabulary property names (e.g. `fill`, `stroke`, `corner-radius`, `padding-horizontal`, `item-spacing` — not CSS property names like `background`, `border-color`). Variant and state styling cascades via data-attribute selectors (`.root[data-variant='primary'] { --MDSButton-fill: ...; }`), not via additional `--variant-key-value` segments in the var name. Component vars are NOT prefixed with `mds-` — that prefix is reserved for tokens. Example: `--MDSButton-fill`, `--MDSButton-stroke-width`, `--MDSButton-corner-radius`.

### Token pipeline

**Source** (Tokens Studio export in `packages/mds-tokens/src/`):
- `.core.json` — primitives (colour ramps, viewports, font-families, etc.)
- `foundation.json` — public-API semantic layer
- `base/{.white,.black,.brand light,.brand dark}.json` + their `* subtle.json` siblings — neutral and brand palettes
- `base/functional/.{green,red,orange,blue} {light,dark}{,subtle}.json` — 16 functional palettes
- `.scheme/{neutral,brand,functional}.json` — scheme variants
- `.section/{normal,subtle}.json` — section variants
- `.mode/{light,dark}.json` — mode variants
- `.functional/{green,red,orange,blue}.json` — binds the generic `functional.*` path to a specific palette
- `.breakpoint/{mobile,tablet,laptop,desktop}.json` — breakpoint variants
- `$themes.json`, `$metadata.json` — Tokens Studio meta (informational; not loaded as tokens)

**Build** (`packages/mds-tokens/style-dictionary.config.mjs`):

Source modules:
- `build/sd-setup.mjs` — registers parsers, transform groups (`mds/css`, `mds/js`), and custom formats (`typography/classes`, `css/variables-no-selector`). Also registers two custom value transforms described below.
- `build/build-layer.mjs` — wraps a Style Dictionary instance into a one-shot helper that returns a CSS body string for a single source-file variant.
- `style-dictionary.config.mjs` — orchestrates 17 SD instances, post-processes their outputs into 6 chunk files, bundles into `tokens.css`, emits typography + JS/TS exports.
- `verify-build.mjs` — post-build assertion script (10 checks); runs as the last step of `pnpm --filter @mds/tokens build`.

SD instance count is forced by path collisions — `mode/light.json` and `mode/dark.json` both define `mode.*`, so each variant needs its own instance. Counts: 1 core + 6 schemes + 2 sections + 2 modes + 4 breakpoints + 1 foundation + 1 typography = 17.

All instances use `outputReferences: true` so the var() chain is preserved end-to-end. `log.errors.brokenReferences: 'throw'` enforces ref correctness at build time — any unresolved `{ref}` fails the build with a stack trace.

Custom parser (`rewrite-broken-refs`) handles two source quirks: legacy Tokens Studio `"value":` keys are normalised to DTCG `"$value":` (so files in either format coexist), and a malformed missing-brace ref in `foundation.json` (`"{breakpoint.radius.full"`) is auto-closed.

**Custom value transforms** (registered in `build/sd-setup.mjs`):

- `mds/value/number-to-px` — appends `px` to any token with `type: "number"`. The source `.core.json` uses `type: "number"` for all dimensional values (number ramp, strokes, font sizes, line heights). Tokens Studio's built-in `ts/size/px` transform only fires on `dimension`/`sizing` types, so it doesn't catch these — without this transform, dimensional tokens would emit as bare numbers (`width: 24`) which is invalid CSS.
- `mds/value/font-weight-name-to-number` — maps human-readable weight names (`"Regular"` → `"400"`, `"Bold"` → `"700"`, etc.) to CSS-valid numeric strings. The source uses `type: "text", value: "Regular"` for font-weight tokens; browsers reject non-numeric font-weight values.

**Output** (`packages/mds-tokens/dist/`, gitignored):
```
dist/
├── tokens.css            # bundled cascade — primary consumer entry
├── typography.css        # :root vars + .mds-typography-* utility classes
├── chunks/               # the 6 layer files concatenated into tokens.css; loadable individually if you want to skip layers
│   ├── core.css
│   ├── schemes.css
│   ├── sections.css
│   ├── modes.css
│   ├── breakpoints.css
│   └── foundation.css
├── tokens.js             # CSS var refs (foundation) + numeric primitives (palettes, breakpoints)
├── tokens.d.ts           # nested TS types matching tokens.js
├── fonts.css             # @font-face declarations — emitted ONLY when fonts/ has files (currently empty)
└── fonts/                # copied font files — emitted ONLY when fonts/ has files (currently empty)
```

Cascade order in `tokens.css`: core → schemes → sections → modes → breakpoints → foundation. Foundation must come last because it references the layers above.

Consumed by `@mds/components` components via CSS var names (no JS import needed) and by consuming apps via `import '@mds/tokens/tokens.css'` once at root.

### JS / TS exports

Optional — for places where CSS vars don't fit (inline styles, `matchMedia`, chart libraries, SSR). `dist/tokens.js` exposes the following named exports:

- **Foundation refs (theme-aware, resolve at runtime via `var(...)`):** `colours`, `radius`, `spacing`, `strokes`, `grid`, `layout`, `numberRamp`, `commonComponentValues`, `typography`.
- **Build-resolved primitives:** `palettes`, `breakpoints`.

Object keys are camelCase JS-friendly transforms of the kebab-case CSS var paths (e.g. CSS `--mds-colours-basic-text-on-accent` → JS `colours.basic.textOnAccent`).

```ts
import { colours, breakpoints, palettes } from '@mds/tokens';

// Foundation tokens are CSS var ref strings (theme-aware at runtime)
<div style={{ background: colours.basic.accent }} />          // → "var(--mds-colours-basic-accent)"

// Numeric primitives (resolved at build, not theme-aware)
window.matchMedia(`(min-width: ${breakpoints.tablet}px)`)     // 768
const successHex = palettes['green light'].colours.basic.accent;
```

`tokens.d.ts` is generated by a custom `ts/foundation-types` format that mirrors the `tokens.js` shape exactly (nested objects, `string` leaves for refs, typed `palettes` and `breakpoints`). TS strict mode is supported.

### Fonts

The `@mds/tokens` build supports a drop-in fonts pipeline, but **no font files are checked in at the moment** — the pipeline is dormant until a `packages/mds-tokens/fonts/` directory with files is added. `dist/fonts.css` and `dist/fonts/` are not currently emitted.

When fonts are added, the following applies:

- **Location:** `packages/mds-tokens/fonts/`. Supported formats: `.woff2` (preferred), `.woff`, `.otf`, `.ttf`.
- **Filename convention:** `{Family}-{Style}.{ext}`. Example: `AkkuratPro-Regular.otf` → family "Akkurat Pro" (PascalCase split with spaces), weight 400, style normal. Supported style tokens: `Thin/Hairline`, `ExtraLight/UltraLight`, `Light`, `Regular/Normal/Book`, `Medium`, `SemiBold/DemiBold`, `Bold`, `ExtraBold/UltraBold/Heavy`, `Black`. Append `Italic` to set `font-style: italic` (e.g., `Manyone-RegularItalic.otf`).
- **Build:** `packages/mds-tokens/scripts/build-fonts.mjs` scans `fonts/`, copies each file to `dist/fonts/`, and emits `dist/fonts.css` with one `@font-face` per file (all `font-display: swap`). Runs as the first step of `pnpm --filter @mds/tokens build`.
- **Consumption:** the package exports `./fonts.css` and `./fonts/*` already, so `import '@mds/tokens/fonts.css'` works once files are added; load it at the app root before `tokens.css`.

### Theming (consumer API)

Set data attributes on `<html>` for page-level defaults; set them on any descendant for sub-tree overrides. All four axes compose orthogonally.

```html
<html data-mode="dark" data-scheme="brand" data-section="normal">
  ...
  <aside data-section="subtle">Sidebar in subtle palette, still dark + brand</aside>
  <div data-scheme="error">Alert in red, still dark + normal</div>
</html>
```

| Attribute | Values | Effect |
|---|---|---|
| `data-mode` | `light` (default) \| `dark` | Light/dark theme. Auto-falls-back to `@media (prefers-color-scheme: dark)` when unset. Setting `[data-mode]` explicitly overrides the OS. |
| `data-section` | `normal` (default) \| `subtle` | Default vs. subtle palette variant within the active scheme. |
| `data-scheme` | `neutral` (default) \| `brand` \| `success` \| `error` \| `warning` \| `info` | Colour identity. Functional schemes (success/error/warning/info) bake their leaf palette at build time; the runtime API is a single attribute. |

Breakpoints auto-respond to viewport via `@media (min-width: 768/1040/1440px)` — no consumer setup. Thresholds are derived from `core.viewports.*` in `.core.json`.

A page with `<html>` and no token-related markup renders correctly with light/normal/neutral defaults (or auto-dark if the OS prefers it).

---

## Icon system

**Public API: one component, one import.** Consumers use `<MDSIcon name="..." />` from `@mds/components`. The `name` prop autocompletes to every available icon name (kebab-case).

```tsx
import { MDSIcon } from '@mds/components';

<MDSIcon name="chevron-down" size="small" />             // 16px
<MDSIcon name="warning" size="medium" title="Invalid input" />  // 24px, accessible
<MDSIcon name="heart" size="large" />                    // 32px
<MDSIcon name="dot" size={10} />                         // 10px (numeric escape hatch)
```

**Icons are lazy-loaded per name.** The `@mds/icons` package ships per-icon modules plus a lazy registry (`iconRegistry`) that maps kebab-case names to `React.lazy(() => import('./Acorn'))` entries. `MDSIcon` wraps the resolved component in `<Suspense>`; consumer bundlers see real dynamic imports and code-split each icon into its own chunk. Apps using 20 icons ship 20 icon chunks, not the full registry.

#### Size rule (mandatory when sourcing from Figma)

`size?: 'small' | 'medium' | 'large' | number`. T-shirt sizes map to `16 | 24 | 32` px. Numeric values pass through verbatim.

When implementing a component from Figma, **read the icon's pixel size from the Figma node first**, then:

1. If the size **matches** 16 / 24 / 32 → use the corresponding t-shirt name (`small` / `medium` / `large`).
2. If the size **doesn't match** any of the three → pass the number directly (`size={10}`).

This rule applies inside the component's render code AND inside any consumer wiring. T-shirt names are preferred when applicable so the semantic scale stays meaningful; numeric values are the documented escape hatch for off-spec sizes Figma actually uses.

### Pipeline

1. **Sync from Figma** (`pnpm --filter @mds/icons sync`) — Node script hits the Figma REST API and exports every `COMPONENT` / `COMPONENT_SET` on the configured icons page as SVG, writing to `packages/mds-icons/src/svg/<kebab-case-name>.svg`. Requires `.env` with `FIGMA_TOKEN`, `FIGMA_FILE_KEY`, `FIGMA_ICONS_PAGE_ID`. Invoked via `node --env-file=.env` so `.env` loads automatically. Batches icon-id requests (100 per call) to stay under CloudFront URL limits. Downloads run at concurrency 10 with per-file retry + exponential backoff; re-runs are resumable (existing SVGs are skipped).
2. **Generate** (`pnpm --filter @mds/icons generate`) — for each SVG: run SVGO (strip `width`/`height`, add `currentColor` to fills/strokes, keep `viewBox`), then SVGR with a custom template producing `forwardRef` React components. Outputs:
   - `src/generated/<PascalCase>.tsx` — one per icon (internal building block; also the per-consumer chunk target)
   - `src/generated/registry.ts` — lazy registry: `{ 'kebab-name': lazy(() => import('./PascalCase')), ... }` plus the `MDSIconName` literal union type
   - `src/generated/index.ts` — barrel exporting `iconRegistry`, `MDSIconName`, `MDSIconProps`
3. **Build** (`pnpm --filter @mds/icons build`) — runs `generate`, then Vite lib mode builds with `preserveModules: true` so each icon lands at `dist/<PascalCase>.js` as a separate chunk (required for the dynamic imports to code-split in consumers). Registry + barrel are emitted alongside.

### MDSIcon props (in `@mds/components`)

- `name: MDSIconName` — required. Kebab-case literal union covering every registered icon; full autocomplete.
- `size?: 'small' | 'medium' | 'large' | number` — default `'medium'`. T-shirt names map to `16 | 24 | 32` px and emit a `data-size` attribute the CSS Module uses to set `--MDSIcon-size`. A numeric value is written to `--MDSIcon-size` via inline `style` instead. See [Size rule](#size-rule-mandatory-when-sourcing-from-figma) above for when to use which.
- All other props extend `MDSIconProps` from `@mds/icons` (which is `SVGProps<SVGSVGElement>` with `width`/`height` omitted, plus optional `title` / `titleId`). Anything spread on `<MDSIcon>` lands on the inner `<svg>` once the lazy chunk resolves; `width`/`height` are controlled exclusively via `size`.
- Colour via `currentColor` — no `color` declaration in the CSS Module. Icons inherit `color` from the parent automatically (each generated icon component uses `fill="currentColor"`).
- The component is a plain function component, not `forwardRef`. If you need a ref to the underlying SVG, attach it through props passthrough or wrap an icon component imported individually from `@mds/icons`.

**Placeholders.** During the Suspense boundary the fallback is a same-sized `<span aria-hidden="true">` carrying the same `.root` class as the resolved icon, so there is no layout shift. There is no separate "unknown name" branch — `name: MDSIconName` is type-checked at compile time, so an unknown name cannot reach runtime.

### How to add an icon

1. Add the icon to the Figma icons library as a component.
2. Run `pnpm --filter @mds/icons sync` (pulls the new SVG into `src/svg/`).
3. Run `pnpm --filter @mds/icons build` (regenerates per-icon chunks + registry).
4. Use in code: `<MDSIcon name="<kebab-case-name>" />` (imported from `@mds/components`).

---

## Component system

### Roster

Two components ship today. Both are MDS-prefixed and live under [`packages/mds-components/src/`](packages/mds-components/src/):

- **`MDSButton`** — 4 variants (`primary | secondary | outline | ghost`), 2 sizes (`small | large`), `iconOnly` boolean, optional trailing `icon` slot. Defaults: variant=`secondary`, size=`large`. Wraps Base UI's `Button` primitive.
- **`MDSIcon`** — see [Icon system](#icon-system) above.

No other components exist yet. A `workspace-level` `src/css-modules.d.ts` ambient declaration enables TypeScript to recognise `*.module.css` imports.

### Component contract

- `'use client'` directive at the top of every component file.
- `displayName` set on every component.
- Plain function components — no `forwardRef`. (Base UI's primitive handles ref forwarding through its own `render` mechanism if a consumer ever needs it.)
- Variant and size are string-union React props rendered as `data-variant` / `data-size` data-attributes on the root element. CSS Modules target those attributes.
- Base UI's runtime state attributes (`data-pressed`, `data-disabled`, etc.) are set automatically by the primitive — they are not React props.
- `data-icon-only={iconOnly || undefined}` pattern: present only when true, so `[data-icon-only]` selector matches only the truthy case.
- Polymorphism via Base UI's `render` prop (not `asChild`, not a custom `as`). Example: `<MDSButton render={<a href="..." />}>Link</MDSButton>`.
- `className` prop accepted, composed with `.root` via `[styles.root, className].filter(Boolean).join(' ')`.
- All extra props spread to the Base UI primitive.
- Named exports only; no default exports.
- Accessibility constraints that can be expressed at the type level **must** be expressed there — e.g. MDSButton's discriminated `MDSButtonProps` requires both `icon: React.ReactNode` and `'aria-label': string` when `iconOnly: true`, so an inaccessible icon-only button cannot compile. Runtime `console.warn` / `console.error` guards are reserved for cases TypeScript can't catch and are not used in the current roster — adopt them only when type-level enforcement isn't possible.

### Two-layer styling indirection (strict, applies to ALL properties)

Inside a component's CSS Module:

1. Component-scoped vars declare actual values by referencing token vars.
2. Rules consume only the component vars.

**This applies to every painted/measured property — colours, backgrounds, borders, spacing, sizing, radii, typography, focus rings, and transitions.** A rule body must never reference `--mds-*` token vars directly. Token references live only inside `--MDSX-*` declarations.

```css
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

Consumers can override any `--MDSButton-*` var on any node without touching tokens. Never reach past component vars to token vars directly in a rule.

### Cross-component CSS-variable cascade

Component-scoped variables can flow from a parent component to a child when the parent's variant or size determines the child's appearance. The canonical case: an icon inside a button should be 16px in small buttons and 24px in large ones.

```css
/* MDSButton.module.css — parent sets the variable on its icon slot */
.root[data-size='small'] .iconSlot {
  --MDSIcon-size: var(--mds-number-ramp-16);
}

/* MDSIcon.module.css — child reads the variable */
.root {
  width: var(--MDSIcon-size);
  height: var(--MDSIcon-size);
}
```

The DOM cascade does the rest — `MDSIcon` inside `MDSButton`'s icon slot picks up the right size automatically. Neither component has direct knowledge of the other; the CSS variable is the contract. This pattern is specified in §3.2a of the component architecture design.

### File layout per component

```
src/MDS<Component>/
├── MDS<Component>.tsx
├── MDS<Component>.module.css
├── MDS<Component>.test.tsx
└── index.ts
```

No stories file in `@mds/components`. Stories live in a future `@mds/guidelines` package.

### CSS Module conventions

- **Section ordering** inside the `.module.css` (canonical): `Base` (`.root` + element classes like `.label`, `.iconSlot`) → `Variants` → `Sizes` → mode toggles (e.g. `[data-icon-only]`) → `Disabled` → `Focus` → `Cross-cutting`. Use `/* ---- Section ---- */` dividers — see `MDSButton.module.css` for the canonical layout.
- **Element classes are camelCase**, not BEM. `MDSButton.tsx` references `styles.root`, `styles.label`, and `styles.iconSlot`; the CSS file declares them as `.root`, `.label`, `.iconSlot`. CSS Modules scope them at build time so collisions across components are not possible.
- **Component-scoped vars at the top of `.root`.** Variant/size/state selectors override the vars only — single-property cascades, no specificity wars.
- **Figma vocabulary property names** for component-scoped vars: `fill`, `text-fill`, `stroke`, `stroke-width`, `corner-radius`, `padding-horizontal`, `padding-vertical`, `item-spacing`, `shadow`, `opacity`, `width`, `height`, `min-width`, `max-width`. Per-side padding: `padding-top`, `padding-right`, `padding-bottom`, `padding-left` (mapped to logical CSS properties: `padding-block-start`, etc.).
- **No hex fallbacks.** Every value references an `@mds/tokens` foundation token.
- **Logical properties** (`padding-inline`, `padding-block`, `border-inline-start`, etc.) for free RTL support.
- **Cross-cutting boilerplate** (mandatory in every CSS Module): a `prefers-reduced-motion` rule that disables transitions/animations, and a `forced-colors` rule that keeps the component visible under Windows High Contrast / equivalent OS forced-colors modes. The exact `forced-colors` strategy depends on the component's visual identity:

  ```css
  /* MDSButton — has a fill + border, so a 1px CanvasText border guarantees an outline */
  @media (forced-colors: active) {
    .root { border: 1px solid CanvasText; }
  }

  /* MDSIcon — is a glyph; force the system foreground colour so the icon stays visible */
  @media (forced-colors: active) {
    .root { color: CanvasText; }
  }

  /* Always-mandatory: motion */
  @media (prefers-reduced-motion: reduce) {
    .root { transition: none; animation: none; }
  }
  ```

  The rule is "stay visible under forced-colors"; pick the property that matches the component's primary visual mechanism.

### How to add a component

1. Scaffold the folder: `src/MDS<Component>/MDS<Component>.tsx`, `MDS<Component>.module.css`, `MDS<Component>.test.tsx`, `index.ts`.
2. (Optional) `npx shadcn add <component> --primitive=base-ui` to get a Base UI recipe — strip Tailwind classes / CVA, replace with CSS Modules + data-attributes, rename to `MDS<Component>`.
3. Write the TSX with `'use client'` at the top, MDS-prefixed types (`MDS<Component>Variant`, `MDS<Component>Size`, etc.), `displayName`, and defaults inline. Use Base UI's `render` prop for polymorphism.
4. Write the CSS Module: component-scoped vars at top of `.root`, variant + size + state selectors overriding only the vars, cross-cutting `prefers-reduced-motion` + `forced-colors` rules. No hex fallbacks; no bare numbers (use tokens).
5. Write Vitest tests covering: rendering, every variant, every size, every Base UI state attribute (`data-disabled` etc.), prop forwarding, and polymorphism via `render` prop where relevant.
6. Wire the component: `<Component>/index.ts` re-export, top-level `src/index.ts` barrel entry, `tsup.config.ts` `entry` map, `package.json` `exports` field.
7. Add a changeset: `pnpm changeset`.

---

## Build system

- **`@mds/components`** uses **tsup** (esbuild under the hood). ESM-only output. Per-component entries (`index`, `MDSButton/index`, `MDSIcon/index`). CSS Modules via `loader: { '.css': 'local-css' }`. `'use client'` banner injected into every JS file via `esbuildOptions.banner`. Externals: `react`, `react-dom`, `@base-ui-components/react`, `@mds/icons`. `@mds/tokens` is a `peerDependency` (consumers install it themselves and know to import its CSS).
- **`@mds/icons`** uses Vite lib mode with `preserveModules: true` (rooted at `src/generated`) so each icon lands at its own `dist/<PascalCase>.js` chunk — required for `React.lazy(() => import('./Acorn'))` to actually code-split in consumers.
- **`@mds/tokens`** uses Style Dictionary as described in the Token system section above.
- `sideEffects` set correctly per package for tree-shaking: `false` for icons, `["**/*.css"]` for tokens and react.

---

## Development workflow

```bash
pnpm install                        # install across workspace
pnpm -r build                       # build all packages in dep order
pnpm -r test                        # run all tests
pnpm --filter @mds/components test       # run @mds/components tests
pnpm --filter @mds/components build      # build @mds/components (tsup)
pnpm --filter @mds/tokens dev       # watch token rebuild
pnpm changeset                      # record a version bump
pnpm -r lint
pnpm -r typecheck
```

**Typical component iteration loop:**

1. Start tokens watch (if editing tokens): `pnpm --filter @mds/tokens dev`
2. Edit component + test
3. `pnpm --filter @mds/components test` before committing

Storybook does not live in `@mds/components`. Visual development will live in a future `@mds/guidelines` package.

---

## Release flow

1. `pnpm changeset` — record a bump (patch/minor/major) per changed package.
2. `pnpm changeset version` — applies version bumps + regenerates CHANGELOGs.
3. Commit version bumps.
4. `pnpm -r build`.
5. `pnpm changeset publish` — publishes each changed package to the configured registry.

Registry and publish config TBD.

---

## Environment

- Node: ≥ 18
- pnpm: ≥ 9
- React peer: ≥ 18

---

## Known non-obvious behaviors

- **Tokens are not imported from JS in components.** They're consumed by name via CSS `var(--mds-…)`. The `tokens.js` / `tokens.d.ts` exports exist for app code that needs ref strings (inline styles, CSS-in-JS) or numeric primitives (matchMedia, chart libraries) — not for component CSS.
- **Three layers change at runtime — mode, section, and scheme.** Plus breakpoints via `@media`. Don't assume only mode swaps. Foundation tokens are re-declared on every override scope (`:root, [data-mode], [data-section], [data-scheme]`) so the var() chain re-resolves at the right element; this is non-obvious — see `style-dictionary.config.mjs` lines 26-49 for the rationale.
- **Component-scoped vars are the consumer override API.** Components should never reference `--mds-*` token vars directly in rules — always go through the component var layer (`--MDSX-*`). Consumers can override any `--MDSButton-*` var on any ancestor node.
- **Icon sizes are 16 / 24 / 32 px** for `small` / `medium` / `large`. Numeric sizes are the documented escape hatch for off-spec values — pass `size={n}` to set `--MDSIcon-size` via inline style. The t-shirt names are preferred when the Figma spec uses 16, 24, or 32.
- **`MDSIcon` lives in `@mds/components`, not `@mds/icons`.** `@mds/icons` ships only the lazy registry + `MDSIconName` union. Always import `MDSIcon` from `@mds/components`.
- **Icons tree-shake via dynamic imports.** Consumers ship only the icons they actually use at runtime (each resolved via `React.lazy`), wrapped in a `<Suspense>` with a same-sized placeholder. There is no visible layout shift; the first render of any given icon name shows the placeholder for a tick before the chunk resolves.
- **MDSButton icon-only mode is enforced at the type level.** When `iconOnly: true`, TypeScript requires both `icon` and `aria-label`. `children` is forbidden. The discriminated union in `MDSButtonProps` means an inaccessible icon-only button cannot compile.
- **`@mds/tokens` is a peer dependency of `@mds/components`.** Consumers must install it and import `@mds/tokens/tokens.css` at the app root. Making it a peer ensures consumers know they own this import — if it were a hidden `dependency`, the CSS import could be silently skipped.
