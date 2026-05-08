# MDS React — System Reference

Living technical reference for the MDS design system's React implementation. Architecture, conventions, and day-to-day workflows. Keep this current as the system evolves.

---

## Architecture

**Monorepo** — pnpm workspaces. Four published packages, independent versioning via Changesets.

```
packages/
├── mds-tokens/      # @mds/tokens  — DTCG JSON → CSS vars + TS types
├── mds-icons/       # @mds/icons   — SVGs → per-icon chunks + lazy registry
├── mds-components/  # @mds/react   — UI components (MDS-prefixed), depends on tokens + icons
└── mds-agents/      # @mds/agents  — LLM context + design-system knowledge base
```

**Dependency graph:** `@mds/react` → `@mds/tokens` + `@mds/icons`. Tokens and icons do not depend on each other. The consumer-facing `MDSIcon` component lives in `@mds/react`, not `@mds/icons` — `@mds/icons` ships only the lazy icon registry that `MDSIcon` consumes.

**Source of truth:** Figma. Tokens authored in Figma Tokens Studio. Icons authored as components on a dedicated icons page. Components authored in the Figma components library.

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
- **Component-scoped vars** (inside a component's CSS Module): `--{ComponentName}-{property}[--{variant-key}-{variant-value}]`. PascalCase component name, `--` as modifier separator. Example: `--MDSButton-padding`, `--MDSButton-background--variant-primary`, `--MDSButton-height--size-large`. Component vars are NOT prefixed with `mds-` — that prefix is reserved for tokens.

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
- `build/sd-setup.mjs` — registers parsers, transform groups (`mds/css`, `mds/js`), and custom formats (`typography/classes`, `css/variables-no-selector`).
- `build/build-layer.mjs` — wraps a Style Dictionary instance into a one-shot helper that returns a CSS body string for a single source-file variant.
- `style-dictionary.config.mjs` — orchestrates 17 SD instances, post-processes their outputs into 6 chunk files, bundles into `tokens.css`, emits typography + JS/TS exports.
- `verify-build.mjs` — post-build assertion script (10 checks); runs as the last step of `pnpm --filter @mds/tokens build`.

SD instance count is forced by path collisions — `mode/light.json` and `mode/dark.json` both define `mode.*`, so each variant needs its own instance. Counts: 1 core + 6 schemes + 2 sections + 2 modes + 4 breakpoints + 1 foundation + 1 typography = 17.

All instances use `outputReferences: true` so the var() chain is preserved end-to-end. `log.errors.brokenReferences: 'throw'` enforces ref correctness at build time — any unresolved `{ref}` fails the build with a stack trace.

Custom parser (`rewrite-broken-refs`) handles two source quirks: legacy Tokens Studio `"value":` keys are normalised to DTCG `"$value":` (so files in either format coexist), and a malformed missing-brace ref in `foundation.json` (`"{breakpoint.radius.full"`) is auto-closed.

**Output** (`packages/mds-tokens/dist/`, gitignored):
```
dist/
├── tokens.css            # bundled cascade — primary consumer entry (~330 KB)
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
├── fonts.css             # @font-face declarations (only when fonts/ has files)
└── fonts/                # copied font files
```

Cascade order in `tokens.css`: core → schemes → sections → modes → breakpoints → foundation. Foundation must come last because it references the layers above.

Consumed by `@mds/react` components via CSS var names (no JS import needed) and by consuming apps via `import '@mds/tokens/tokens.css'` once at root.

### JS / TS exports

Optional — for places where CSS vars don't fit (inline styles, `matchMedia`, chart libraries, SSR).

```ts
import { colours, breakpoints, palettes, radius, typography } from '@mds/tokens';

// Foundation tokens are CSS var ref strings (theme-aware at runtime)
<div style={{ background: colours.basic.accent }} />          // → "var(--mds-colours-basic-accent)"

// Numeric primitives (resolved at build, not theme-aware)
window.matchMedia(`(min-width: ${breakpoints.tablet}px)`)     // 768
const successHex = palettes['green light'].colours.basic.accent;
```

`tokens.d.ts` is generated by a custom `ts/foundation-types` format that mirrors the `tokens.js` shape exactly (nested objects, `string` leaves for refs, typed `palettes` and `breakpoints`). TS strict mode is supported.

### Fonts

Font files live at `packages/mds-tokens/fonts/`. Supported formats: `.woff2` (preferred), `.woff`, `.otf`, `.ttf`.

**Filename convention:** `{Family}-{Style}.{ext}`. Example: `AkkuratPro-Regular.otf` → family "Akkurat Pro" (PascalCase is split with spaces), weight 400, style normal. Supported style tokens: `Thin/Hairline`, `ExtraLight/UltraLight`, `Light`, `Regular/Normal/Book`, `Medium`, `SemiBold/DemiBold`, `Bold`, `ExtraBold/UltraBold/Heavy`, `Black`. Append `Italic` to get `font-style: italic` (e.g., `Manyone-RegularItalic.otf`).

**Build:** `packages/mds-tokens/scripts/build-fonts.mjs` scans the `fonts/` folder, copies each file to `dist/fonts/`, and emits `dist/fonts.css` with one `@font-face` per file (all with `font-display: swap`). Runs as the first step of `pnpm --filter @mds/tokens build`.

**Consumption:** import `@mds/tokens/fonts.css` once at the app root before `tokens.css`. To add a font, drop a file in `packages/mds-tokens/fonts/` and rebuild — no config change needed.

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

**Public API: one component, one import.** Consumers use `<MDSIcon name="..." />` from `@mds/react`. The `name` prop autocompletes to every available icon name (kebab-case).

```tsx
import { MDSIcon } from '@mds/react';

<MDSIcon name="chevron-down" size="small" />             // 16px
<MDSIcon name="warning" size="medium" title="Invalid input" />  // 24px, accessible
<MDSIcon name="heart" size="large" />                    // 48px
<MDSIcon name="dot" size={10} />                         // 10px (off-spec — see size rule below)
```

**Icons are lazy-loaded per name.** The `@mds/icons` package ships 1505 per-icon modules plus a lazy registry (`iconRegistry`) that maps kebab-case names to `React.lazy(() => import('./Acorn'))` entries. `MDSIcon` wraps the resolved component in `<Suspense>`; consumer bundlers see real dynamic imports and code-split each icon into its own chunk. Apps using 20 icons ship 20 icon chunks, not 1505.

#### Size rule (mandatory when sourcing from Figma)

`size?: 'small' | 'medium' | 'large' | number`. T-shirt sizes map to `16 | 24 | 48` px. Numeric values pass through verbatim.

When implementing a component from Figma, **read the icon's pixel size from the Figma node first**, then:

1. If the size **matches** 16 / 24 / 48 → use the corresponding t-shirt name (`small` / `medium` / `large`).
2. If the size **doesn't match** any of the three → pass the number directly (`size={10}`).

This rule applies inside the component's render code AND inside any consumer wiring. The t-shirt names are preferred when applicable so the t-shirt scale stays semantically meaningful; numeric values are the documented escape hatch for off-spec sizes Figma actually uses (e.g., the 10×10 small-dot Badge variant).

### Pipeline

1. **Sync from Figma** (`pnpm --filter @mds/icons sync`) — Node script hits the Figma REST API and exports every `COMPONENT` / `COMPONENT_SET` on the configured icons page as SVG, writing to `packages/mds-icons/src/svg/<kebab-case-name>.svg`. Requires `.env` with `FIGMA_TOKEN`, `FIGMA_FILE_KEY`, `FIGMA_ICONS_PAGE_ID`. Invoked via `node --env-file=.env` so `.env` loads automatically. Batches icon-id requests (100 per call) to stay under CloudFront URL limits. Downloads run at concurrency 10 with per-file retry + exponential backoff; re-runs are resumable (existing SVGs are skipped).
2. **Generate** (`pnpm --filter @mds/icons generate`) — for each SVG: run SVGO (strip `width`/`height`, add `currentColor` to fills/strokes, keep `viewBox`), then SVGR with a custom template producing `forwardRef` React components. Outputs:
   - `src/generated/<PascalCase>.tsx` — one per icon (internal building block; also the per-consumer chunk target)
   - `src/generated/registry.ts` — lazy registry: `{ 'kebab-name': lazy(() => import('./PascalCase')), ... }` plus the `MDSIconName` literal union type
   - `src/generated/index.ts` — barrel exporting `iconRegistry`, `MDSIconName`, `MDSIconProps`
3. **Build** (`pnpm --filter @mds/icons build`) — runs `generate`, then Vite lib mode builds with `preserveModules: true` so each icon lands at `dist/<PascalCase>.js` as a separate chunk (required for the dynamic imports to code-split in consumers). Registry + barrel are emitted alongside.

### MDSIcon props (in `@mds/react`)

- `name: MDSIconName` — required. Kebab-case literal union covering every registered icon; full autocomplete.
- `size?: 'small' | 'medium' | 'large' | number` — default `'medium'`. T-shirt names map to `16 | 24 | 48` px; a `number` passes through verbatim. See [Size rule](#size-rule-mandatory-when-sourcing-from-figma) above for when to use which. Applied to both `width` and `height` on the underlying `<svg>`.
- `title?: string` — when set, the icon becomes accessible (`role="img"` with a `<title>` element). If omitted, the icon is `aria-hidden`.
- All other `SVGAttributes<SVGSVGElement>` spread to the inner `<svg>`, except `width`/`height` (controlled via `size`).
- Colour via `currentColor` — controlled by CSS `color` on the parent.
- `forwardRef<SVGSVGElement>` — refs point to the inner SVG once the lazy chunk resolves.

**Placeholders.** During the Suspense boundary the fallback is a `<span aria-hidden data-mds-icon-placeholder="loading">` sized to the final icon so there is no layout shift. An unknown `name` logs a dev-time `console.error` and renders a `<span aria-hidden data-mds-icon-placeholder="unknown">` of the same size. Both placeholders are selectable via `[data-mds-icon-placeholder]`.

### How to add an icon

1. Add the icon to the Figma icons library as a component.
2. Run `pnpm --filter @mds/icons sync` (pulls the new SVG into `src/svg/`).
3. Run `pnpm --filter @mds/icons build` (regenerates per-icon chunks + registry).
4. Use in code: `<MDSIcon name="<kebab-case-name>" />` (imported from `@mds/react`).

---

## Component system

### Roster

All components are MDS-prefixed. The current roster lives under `packages/mds-components/src/components/`:

**Feature components:**
- `MDSAccordion` — expandable disclosure with controlled/uncontrolled modes; single `chevron-down` icon rotated 180° on expand; `asChild` + `rootAs` for custom root elements
- `MDSBadge` — `size` × `type` (number / success / error); 10px dot / 24+ / 32+
- `MDSBottomNavigation` — compound: root (`<nav><ul>`) + `.Item` (button with icon / label / always-rendered selection bar with state-driven colour + opacity / optional badge dot with optional `badgeLabel` for screen readers); `standard|secondary` background
- `MDSBreadcrumb` — compound: root (`<nav><ol>`) + `.Item` / `.Separator` / `.OverflowItem` (native `<details>` flyout, dropdown entries support optional trailing `icon`); `MDSBreadcrumbItemProps` is a discriminated union on `current`
- `MDSButton` — `variant` × `size` × icon slots, `asChild` polymorphism; icon-only mode is automatic + circular; `asChild` + `disabled` forwards `aria-disabled` and warns the consumer to handle interactivity
- `MDSCard` — compound surface: root + `.Header` (optional tag + optional close) / `.Body` / `.Actions`. Root takes `variant` (`standard` / `secondary`) + boolean `outline`, `interactive`, `selected`; optional `image` / `imageAlignment` / `overlay` slots; `interactive` + `selected` sets `aria-pressed`. Root is a vertical flex stack — drop free-form children for custom layouts or compose the compound parts for the Figma "Preferred Content" layout (headline + close + body + buttons). `.Actions` auto-stretches children equally when 2+
- `MDSCheckbox` — native input + styled box, supports `indeterminate`; collapses to icon-only sizing when no label
- `MDSHeader` — compound 72px site header: root (`<header>` + nested `<nav aria-label="Primary">`) + `.Tab` (underline-selected anchor) + `.IconButton` (48px circular, `aria-label` required at the type level) + `.MobileMenu` (`role="dialog"` sheet) + `.MobileTab` (right-accent-bar selected state) + `.MobileItem` (leading/trailing icon rows); `background: 'standard' | 'secondary' | 'glass'` — glass fades the bottom edge to transparent over hero imagery
- `MDSLoadingSpinner` — CSS-only indeterminate ring, `size: 'small' | 'medium' | 'large' | number` (16/24/48/px), renders `role="status"` + `aria-live="polite"` with a required `label`; slows to 2400ms under `prefers-reduced-motion`
- `MDSLogo` — anchor-wrapped brand lockup. `brandmark` (required ReactNode, typically SVG) and optional `wordmark` (text or SVG) slots; 48px tall with `body-large` wordmark typography and focus-visible ring
- `MDSTable` — compound data table: root (rounded bordered surface + horizontal-scroll `<table>`) + `.Header` / `.Body` / `.Row` / `.HeaderCell` (with sortable trigger — cycles unsorted → ascending → descending via `aria-sort`) / `.Cell` (`alignment: 'left' | 'right' | 'center'`). Sticky header; `footer` slot for pagination; rows accept `selected` (forwards `aria-selected`). Compose cells from existing MDS primitives (MDSTag / MDSLink / MDSProgressBar / MDSButton / MDSCheckbox)
- `MDSTag` — small `body-bold` pill label
- `MDSTextField` — native input with floating label; `error` + `errorText` + `helperText` props wired via `aria-invalid` / `aria-describedby`; focus ring on the surface (driven by `:focus-within`)
- `MDSTimePicker` — trigger + flyout compound similar to MDSDatePicker. `format: '24-hour' | '12-hour'`, `minuteStep` for granularity, optional controlled `value: { hour, minute }`. Flyout renders 2 or 3 snap-scroll wheels (hour / minute / optional AM-PM) — each wheel is a `role="listbox"` with arrow-key navigation (Up/Down step, Home/End jump); OK commits, Cancel / outside-click discard

**Utility components** (layout / primitives / a11y — use everywhere):
- `MDSDivider` — `orientation: 'horizontal' | 'vertical'` separator. `decorative={true}` swaps `role="separator"` for `role="presentation"` + `aria-hidden` (use for purely visual dividers between inline controls).
- `MDSIcon` — see [Icon system](#icon-system)
- `MDSImage` — thin `<img>` wrapper with `aspectRatio` / `fit` / `loading` + required `alt` at the type level
- `MDSStack` — flex layout primitive
- `MDSText` — typography primitive (see below)
- `MDSVisuallyHidden` — visually hidden but screen-reader-accessible content

Storybook distinguishes the two by title prefix: feature components under `Components/*`, utility components under `Utilities/*`.

### MDSText

A typography primitive that renders any of the 8 text styles defined by `@mds/tokens/typography.css`. The variant controls visual style; the semantic element is the consumer's choice via `asChild`.

```tsx
import { MDSText } from '@mds/react';

<MDSText variant="body">Hello world</MDSText>                     // default: <span>
<MDSText variant="h1" asChild><h1>Page title</h1></MDSText>       // real heading
<MDSText variant="microcopy" asChild><label htmlFor="x">Helper</label></MDSText>
```

**Variants** (map 1:1 to `.mds-typography-*` classes): `h1`, `h2`, `h3`, `body-large`, `body` (default), `body-bold`, `body-underline`, `microcopy`.

**Why decoupled?** Visual style ≠ semantic element. A marketing hero might want h1-styled text inside a `<div>`; a form helper might want microcopy-styled text as a `<label>`. Accessibility depends on this split.

Consumers must have `@mds/tokens/typography.css` loaded at the app root — styling is entirely via the token classes, not CSS modules.

### File layout per component

```
src/components/MDS<Component>/
├── MDS<Component>.tsx
├── MDS<Component>.module.css        # optional (MDSIcon and MDSText don't ship one)
├── MDS<Component>.stories.tsx
├── MDS<Component>.test.tsx
└── index.ts                         # re-exports
```

**Compound component families** (`MDSCard`, `MDSBreadcrumb`, `MDSBottomNavigation`) follow the same folder structure — one folder per family, one `.tsx` exporting every sub-part as a named export AND attaching them to the parent:

```tsx
export const MDSBreadcrumb = MDSBreadcrumbRoot as MDSBreadcrumbCompound;
MDSBreadcrumb.Item = MDSBreadcrumbItem;
MDSBreadcrumb.Separator = MDSBreadcrumbSeparator;
MDSBreadcrumb.OverflowItem = MDSBreadcrumbOverflowItem;
```

Consumers can import either way — same identity, same underlying module:

```tsx
// Flat (matches the Figma library 1:1)
import { MDSBreadcrumb, MDSBreadcrumbItem, MDSBreadcrumbSeparator } from '@mds/react';

// Compound ergonomics
import { MDSBreadcrumb } from '@mds/react';
<MDSBreadcrumb.Item … />   // === MDSBreadcrumbItem
```

The top-level `src/index.ts` barrel re-exports every sub-part by its full flat name. Each sub-part shares the parent's CSS module (BEM element classes — `.MDSBreadcrumb-List`, `.MDSCard-Header-Headline`, etc.).

### Component contract

- `forwardRef` to the outermost DOM node.
- Variant/size props are string unions, not booleans.
- `asChild` prop via `@radix-ui/react-slot` where polymorphism is needed.
- `className` prop is accepted and composed with internal classes.
- All extra props spread to the root element.
- Named exports; no defaults.
- Compound families: sub-parts are top-level named exports AND attached as properties on the parent (`MDSBreadcrumb.Item === MDSBreadcrumbItem`).
- Dev-mode `console.warn`/`console.error` guards exist for a11y / API misuse. **Add a guard for any prop combination that produces an inaccessible or structurally-broken render but is still type-valid.** Standard pattern:
  ```tsx
  if (process.env.NODE_ENV !== 'production') {
    if (badCondition) console.warn(`MDSX: <human-readable explanation + how to fix>.`);
  }
  ```
  Tests cover both branches with `vi.spyOn(console, 'warn')` (or `'error'`) and `afterEach(() => vi.restoreAllMocks())` at the top of the `describe`. Catalog of guards that exist today (use as templates for new components):
  - **MDSButton** — icon-only without `aria-label` / `aria-labelledby`; `asChild` + `disabled` (consumer must handle non-button disabled semantics).
  - **MDSBadge** — number badge with no children (no accessible text); icon-only success/error badge without `aria-label` / `aria-labelledby`.
  - **MDSBottomNavigationItem** — `showLabel={false}` without `aria-label`; `asChild` with non-element children.
  - **MDSBreadcrumb** — multiple children with `current={true}`; `MDSBreadcrumbItem` with `current={true}` + `asChild`/`href` (current page should not be a link); `MDSBreadcrumbOverflowItem` with empty `items`.
  - **MDSCard** — `asChild` alongside `image` (image-carrying layout can't be slotted); `interactive` without `asChild` and without `onClick` (renders interactive-styled `<div>` that isn't keyboard-activatable).
  - **MDSCheckbox** — label-less without `aria-label` / `aria-labelledby`.
  - **MDSAccordion** — `asChild` set on root without a `rootAs` element to slot into.

### Two-layer styling indirection (strict, applies to ALL properties)

Inside a component's CSS Module:

1. Component vars declare the actual values by referencing token vars.
2. Rules consume only the component vars.

**This applies to every painted/measured property — colours, backgrounds, borders, spacing, sizing, radii, typography (font-family, font-size, font-weight, line-height, letter-spacing), focus rings, and transitions.** A rule body must never reference `--mds-*` token vars directly. Token references live only inside `--MDSX-*` declarations.

```css
.MDSButton {
  /* Spacing / sizing */
  --MDSButton-padding: 0 var(--mds-common-component-values-padding);
  --MDSButton-height--size-large: var(--mds-common-component-values-height-large);

  /* Typography (declare every sub-property — never the composite shorthand) */
  --MDSButton-font-family: var(--mds-typography-body-large-font-family);
  --MDSButton-font-size: var(--mds-typography-body-large-font-size);
  --MDSButton-font-weight: var(--mds-typography-body-large-font-weight);
  --MDSButton-line-height: var(--mds-typography-body-large-line-height);
  --MDSButton-letter-spacing: var(--mds-typography-body-large-letter-spacing);

  /* Colours per variant */
  --MDSButton-background--variant-primary: var(--mds-colours-basic-accent);
  --MDSButton-color--variant-primary: var(--mds-colours-basic-text-on-accent);

  /* Focus ring */
  --MDSButton-focus-ring-color: var(--mds-colours-basic-accent);
  --MDSButton-focus-ring-width: var(--mds-strokes-2);
  --MDSButton-focus-ring-offset: 2px;
}
.MDSButton {
  padding: var(--MDSButton-padding);
  font-family: var(--MDSButton-font-family);
  font-size: var(--MDSButton-font-size);
  font-weight: var(--MDSButton-font-weight);
  line-height: var(--MDSButton-line-height);
  letter-spacing: var(--MDSButton-letter-spacing);
}
.MDSButton--variant-primary {
  background-color: var(--MDSButton-background--variant-primary);
  color: var(--MDSButton-color--variant-primary);
}
.MDSButton--size-large { min-height: var(--MDSButton-height--size-large); }
.MDSButton:focus-visible {
  outline: var(--MDSButton-focus-ring-width) solid var(--MDSButton-focus-ring-color);
  outline-offset: var(--MDSButton-focus-ring-offset);
}
```

Consumers can override any `--MDSButton-*` var on any node without touching tokens. **Never reach past component vars to token vars directly in a rule** — even for typography or focus rings. The `MDSTag`, `MDSBadge`, and `MDSButton` modules are reference implementations.

### BEM class structure (inside CSS Modules) — strict

- **Block:** `<Component>` → `.MDSButton`
- **Modifier:** `<Component>--<key>-<value>` → `.MDSButton--variant-primary`. Two dashes between block and modifier; one dash between key and value.
- **Element:** `<Component>-<ElementPascalCase>` → `.MDSButton-Label`. **Single dash separator. Element name is PascalCase.**

The `__` (double-underscore) classic-BEM separator is **forbidden** in this codebase. `MDSButton__label` is wrong; `MDSButton-Label` is right.

When a sub-element nests inside another sub-element, chain with a single dash: `.MDSCard-Header-Headline`, `.MDSBottomNavigationItem-SelectionBar`. The chain mirrors the visual nesting; PascalCase keeps tokens visually distinct.

### How to add a component

1. Scaffold the folder and files above, prefixing the component name with `MDS` (e.g., `MDSSheet/MDSSheet.tsx`). A plop generator is a future addition.
2. Write the TSX with `forwardRef`, MDS-prefixed typed props (`MDSSheetProps`, `MDSSheetVariant`, etc.), `asChild` via Radix `Slot` if appropriate.
3. Write the CSS Module using the two-layer indirection. CSS classes are already MDS-prefixed (`.MDSSheet`, `.MDSSheet--variant-*`). **Typography properties must go through component vars**, not reference typography tokens directly in rules — follow the MDSTag / MDSBadge pattern, e.g. `--MDSSheet-font-family: var(--mds-typography-body-font-family)` then `font-family: var(--MDSSheet-font-family)`.
4. Write stories covering every variant × size × state. Follow the [Storybook docs template](#storybook-docs-template) author contract — meta written as `const meta = { ... } satisfies MDSMeta<typeof MDSSheet>`, `tags: ['autodocs']`, `parameters.docs.page: ComponentDocs`, structured `parameters.mds.docs` content. Title with `Components/MDSSheet` (or `Utilities/MDSSheet` if it's a primitive).
5. Write a Vitest unit test covering render + key interactions + variant application. Use `afterEach(() => vi.restoreAllMocks())` at the top of the `describe` when mocking `console.warn` / `console.error`.
6. Export from `packages/mds-components/src/index.ts` (component + prop/variant types). **Vite auto-picks up new entries** via `glob('src/components/*/index.ts')` — no `vite.config.ts` change needed. The `afterBuild()` hook emits top-level `.d.ts` stubs automatically.
7. For compound families, export every sub-part flat from the top-level barrel AND attach them as properties on the parent (`Parent.SubPart = SubPart`). See `MDSCard`, `MDSBreadcrumb`, `MDSBottomNavigation`.
8. Add a changeset: `pnpm changeset`.

---

## Storybook docs template

Every component's Storybook `Docs` tab follows the same fixed layout so designers and developers always know where to look. The template is a shared React component (`ComponentDocs`) wired onto every meta via `parameters.docs.page`; structural content lives in data on the meta, so authors cannot accidentally reorder or skip a section.

### Layout (fixed order)

1. **Title + summary** — component name via `<Title />`, plus the one-line `docs.summary` rendered as a subtitle by `<SummaryBlock />`. No JSDoc-driven `<Description />` block is rendered — the summary field is the canonical one-liner for every component.
2. **Playground** — primary story canvas (`<Primary />`) + interactive `<Controls />` for all args
3. **Guidelines** — ✓ When to use / ✗ When NOT to use columns, rendered from `docs.guidelines.use` / `docs.guidelines.avoid`, with `MDSIcon name="check"` / `MDSIcon name="x"` (in `--mds-colours-basic-accent`) as the heading marks
4. **Usage & API** — import snippet (`import { MDSX } from '<docs.usage.importFrom>';`) + every non-primary story rendered inline via `<Stories title={<></>} includePrimary={false} />`. The `title={<></>}` prop is required: Storybook's `<Stories>` block defaults `title = "Stories"` and renders a `<StyledHeading>` only when `title` is a string. Passing an empty React element routes through the element branch and renders nothing — so no auto-injected "Stories" heading appears.
5. **Details** — optional sub-sections from `docs.details`: Behaviour, Accessibility, Animation & motion, Gotchas. Empty sub-sections are omitted.
6. **Related components** — optional row of pill-shaped links from `docs.related` (renders only when provided).

### File layout

```
packages/mds-components/src/docs-template/
├── types.ts                    # MDSDocsParams, MDSTitle, MDSMeta<T>
├── ComponentDocs.tsx           # the shared Docs page component
└── blocks/
    ├── index.ts                # barrel
    ├── SummaryBlock.tsx        # renders docs.summary as a subtitle
    ├── GuidelinesBlock.tsx     # ✓ / ✗ columns (uses MDSIcon)
    ├── UsageImportBlock.tsx    # auto-generated import snippet
    ├── DetailsBlock.tsx        # Behaviour / Accessibility / Animation / Gotchas
    └── RelatedBlock.tsx        # related-components pill links
```

Blocks read from the current meta at render time via `useOf('meta', ['meta'])` from `@storybook/addon-docs/blocks`, pulling structured content out of `parameters.mds.docs`.

### Page and canvas styling (`.storybook/preview.css`)

Page chrome styling (reading column, typography, canvas borders, spacing rhythm) lives in `.storybook/preview.css`, imported by `.storybook/preview.ts`. Every rule routes through MDS tokens — no ad-hoc values.

Key rules:

- **Reading column:** `.sbdocs.sbdocs-content` capped at `960px` with token-sized padding, centred in the page.
- **Typography:** h1/h2/h3 inside docs chrome use `--mds-typography-h1-*` / `--mds-typography-h2-*` tokens. Per-story variant headings default to `<h3>` from Storybook and are promoted to the same Manyone h2 size as section headings — every heading on the page sits on one flat hierarchy. Storybook's default heading dividers (`border-bottom`) are stripped.
- **Canvas:** `.sbdocs-preview` wraps each rendered story. Background uses `--mds-colours-basic-background` (subtle variant via `[data-section="subtle"]` if you want a tinted canvas), border is `--mds-strokes-1` + `--mds-colours-basic-stroke-secondary`, radius is `--mds-radius-large`. The inner `.docs-story` uses `display: grid; place-items: center; min-height: 200px; padding: 64px 32px` so components are optically centred regardless of the story's own wrapper.
- **Scoping (non-negotiable):** every docs-chrome typography / table / code rule that targets a descendant selector ends with `:not(.sbdocs-preview *):not(.docs-story *)`. Without this, rules leak into rendered components — e.g. an `h3` rule would hijack `MDSCard.Header`'s internal headline. Only surface-level selectors targeting the canvas wrappers themselves (`.sbdocs-preview`, `.docs-story`) are unscoped. Copy-button styling uses only the specific `.sbdocs-source-copy-button` class, never a broad `button[class*="Copy"]` which could match component internals.

### Author contract

Every component's `.stories.tsx` meta MUST be written as a **plain object literal** closed with `satisfies MDSMeta<typeof X>`. Do NOT wrap in a factory function — see [Storybook CSF indexer constraint](#known-non-obvious-behaviors) below.

```tsx
import type { StoryObj } from '@storybook/react-vite';
import { ComponentDocs } from '../../docs-template/ComponentDocs';
import type { MDSMeta } from '../../docs-template/types';
import { MDSExample } from './MDSExample';

const meta = {
  title: 'Components/MDSExample',           // must match MDSTitle template-literal union
  component: MDSExample,
  tags: ['autodocs'],                        // required — opts into autodocs
  args: { /* ... */ },
  argTypes: { /* ... */ },
  parameters: {
    docs: { page: ComponentDocs },           // wires the shared template
    mds: {
      docs: {
        summary: 'One-line description of the component.',
        figmaUrl: 'https://...',             // optional — pipes to addon-designs
        related: [{ name: 'MDSOther', href: '/?path=/docs/components-mdsother' }],
        guidelines: {
          use: ['For primary actions', 'When X'],
          avoid: ['When Y', 'More than one per surface'],
        },
        usage: { importFrom: '@mds/react' },
        details: {
          behaviour: 'Controlled and uncontrolled. Forwards native props.',
          accessibility: 'Icon-only variants require aria-label. Focus ring uses --mds-colours-basic-focus.',
          animation: 'Transitions use --motion-duration-fast; reduced-motion aware.',
          gotchas: 'asChild with a non-interactive child breaks keyboard support.',
        },
      },
    },
  },
} satisfies MDSMeta<typeof MDSExample>;
export default meta;

type Story = StoryObj<typeof MDSExample>;
export const Playground: Story = {};
// ...additional variant stories
```

**Required docs fields:** `summary`, `guidelines.use`, `guidelines.avoid`, `usage.importFrom`. Everything else (`figmaUrl`, `related`, `details.*`) is optional — missing sub-sections render nothing.

**`MDSTitle` enforcement (type-level):** `title` must match `Components/MDS${string}`, `Utilities/MDS${string}`, or `Foundations/MDS${string}` — TypeScript errors otherwise. Feature components go under `Components/*`, layout/primitive/a11y helpers under `Utilities/*`.

### Where this infra lives

- Source under `src/docs-template/` (inside `tsconfig.json`'s `rootDir`). It cannot live under `.storybook/` because stories importing it would violate `rootDir`.
- Stories, tests, and any `__smoke__` artefacts are excluded from tsc via `tsconfig.json`'s `exclude` so `declaration: true` doesn't trip on inferred meta types (TS2742).

### Contract enforcement in CI

`packages/mds-components/scripts/check-story-contract.mjs` greps every `.stories.tsx` under `src/components/` and fails if any file is missing `satisfies MDSMeta<` or a `ComponentDocs` reference. Wired into `pnpm lint` as `pnpm check-stories`.

---

## Form data patterns

Form components (`MDSTextField`, `MDSCheckbox`, future `MDSRadio`/`MDSSelect`/`MDSSwitch`) render real native inputs and follow standard React idioms. Consumers can opt into whichever pattern suits their form.

### Controlled (recommended for live validation, derived UI)

You own the state; the component reflects it. You receive the value on every user interaction.

```tsx
import { useState } from 'react';
import { MDSTextField, MDSCheckbox } from '@mds/react';

const [name, setName] = useState('');
const [accepted, setAccepted] = useState(false);

<MDSTextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
<MDSCheckbox label="Accept terms" checked={accepted} onCheckedChange={setAccepted} />
```

### Uncontrolled (recommended for simple submit-time forms)

The DOM owns the state. Read it on submit via refs or `FormData`. Every component forwards `ref` to the underlying `<input>`, so all native DOM APIs (`.value`, `.checked`, `.focus()`) work directly.

```tsx
// Via FormData — components render real <input> elements, so `name` is all you need
<form onSubmit={(e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  // data.email: string, data.terms: "on" if checked, undefined if not
}}>
  <MDSTextField label="Email" name="email" />
  <MDSCheckbox label="Accept terms" name="terms" />
  <button type="submit">Submit</button>
</form>

// Via ref
const nameRef = useRef<HTMLInputElement>(null);
<MDSTextField ref={nameRef} label="Name" />
// nameRef.current.value
```

### API quick reference

| Capability | MDSTextField | MDSCheckbox |
|---|---|---|
| Controlled value | `value` + `onChange(event)` | `checked` + `onCheckedChange(isChecked)` |
| Uncontrolled default | `defaultValue` | `defaultChecked` |
| Form name | `name="email"` | `name="terms"` |
| Ref target | `HTMLInputElement` | `HTMLInputElement` |
| Third state | — | `checked="indeterminate"` |
| Validation flag | `error` prop (sets `aria-invalid`) + native input attrs (`required`, `pattern`, `type`, `maxLength`, …) | `error` prop (sets `aria-invalid`) |
| Error message | `errorText` (shown when `error={true}`, wired via `aria-describedby`) | — (consumer renders alongside) |
| Helper message | `helperText` (shown when `error` is falsy, wired via `aria-describedby`) | — |

### Conventions

- Form components must keep both patterns working in parallel — never break native form integration by intercepting `name`, `value`, or `onChange` without forwarding the same semantics.
- New form components should mirror this contract: `value`/`checked` + change handler for controlled, `defaultValue`/`defaultChecked` for uncontrolled, `ref` forwarded to the native input, `name` transparently passed through.
- The `onChange*` handler name mirrors React's native event handler name when the payload is the raw event (`onChange`), and switches to a descriptive semantic name when we compute a derived value for the consumer (`onCheckedChange`, `onExpandedChange`).

---

## Build system

- Vite lib mode in `@mds/react` and `@mds/icons`. Per-entry CSS extraction via `vite-plugin-lib-inject-css`. Per-entry `.d.ts` via `vite-plugin-dts`.
- Style Dictionary for `@mds/tokens`.
- Externals for `@mds/react`: `react`, `react-dom`, `react/jsx-runtime`, `@mds/tokens`, `@mds/icons`, `@radix-ui/react-slot`, `classnames`.
- `sideEffects` set correctly per package for tree-shaking: `false` for icons, `["**/*.css"]` for tokens and react.
- **`@mds/react` top-level `.d.ts` stubs are auto-generated.** `vite-plugin-dts` mirrors the src tree under `dist/` (so `MDSButton` types land at `dist/components/MDSButton/index.d.ts`), but the package.json exports map expects top-level entries at `dist/MDS<Name>.d.ts`. An `afterBuild()` hook in `packages/mds-components/vite.config.ts` iterates over `componentEntries` and writes `export * from './components/MDS<Name>';` stubs. Adding a new component under `src/components/` requires no Vite config change — the stub is auto-generated.
- **`@mds/icons` types source of truth is `packages/mds-icons/src/types.ts`**, but the generator copies it to `src/generated/types.ts` on each run so all emitted code imports from the same relative path (`./types`) and the dts plugin emits `dist/types.d.ts` cleanly.
- **`@mds/icons` preserves per-icon modules.** Vite's `rollupOptions.output.preserveModules: true` (rooted at `src/generated`) means each `Acorn.tsx` becomes its own `dist/Acorn.js` chunk. This is required for the registry's `React.lazy(() => import('./Acorn'))` entries to actually code-split in the consumer's bundle — without `preserveModules`, Vite would roll everything into `dist/index.js` and the dynamic imports would resolve to the same chunk.

---

## Development workflow

```bash
pnpm install                   # install across workspace
pnpm -r build                  # build all packages in dep order
pnpm -r test                   # run all tests
pnpm --filter @mds/react dev   # run Storybook for component dev
pnpm --filter @mds/tokens dev  # watch token rebuild
pnpm changeset                 # record a version bump
pnpm -r lint
pnpm -r typecheck
```

**Typical component iteration loop:**

1. Start Storybook: `pnpm --filter @mds/react storybook`
2. Start tokens watch (if editing tokens): `pnpm --filter @mds/tokens dev`
3. Edit component + story + test
4. Hot reload via Vite/Storybook
5. `pnpm --filter @mds/react test` before committing

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
- **Component-scoped vars are the consumer override API.** Components should never reference `--mds-*` token vars directly in rules — always go through the component var layer (`--MDSX-*`).
- **Icon size is token-enforced.** Only `'small' | 'medium' | 'large'` (16/24/48 px). If a design calls for a size outside those three, the token set needs to change — don't bypass it with a numeric `size`.
- **`MDSIcon` lives in `@mds/react`, not `@mds/icons`.** `@mds/icons` ships only the lazy registry + `MDSIconName` union. Always import `MDSIcon` from `@mds/react`.
- **Icons tree-shake via dynamic imports.** Consumers ship only the icons they actually use at runtime (each resolved via `React.lazy`), wrapped in a single `<Suspense>` per icon with a same-sized placeholder. There is no visible layout shift; the first render of any given icon name shows the placeholder for a tick before the chunk resolves.
- **MDSText depends on `@mds/tokens/typography.css` being loaded at the app root.** It has no CSS module of its own — styling is 100% via the `.mds-typography-*` utility classes. If text renders unstyled, the token stylesheet is missing.
- **`MDSCard` + `image` disables `asChild`.** When both are provided, `asChild` is ignored (dev `console.warn`) because the image-carrying layout needs internal structure (Media + Content + optional Overlay) that Radix Slot can't wrap with a single child. Without `image`, `asChild` works as usual.
- **`MDSCard` `variant` and `outline` are independent.** `variant` is `"standard" | "secondary"` (background). `outline` is a boolean that stacks with any variant (border).
- **`MDSCard` is a compound — `.Header` / `.Body` / `.Actions` attach to the root.** Flat exports `MDSCardHeader` / `MDSCardBody` / `MDSCardActions` are also available. The root is a column-flex stack with `--MDSCard-content-gap` between children — pass free-form children for custom layouts or compose the compound parts for the "Preferred Content" layout (headline + close + body + buttons).
- **`MDSButton` icon-only centering relies on three rules, not just flex.** `.MDSButton--icon-only` sets `line-height: 0` (kills the inline baseline descender under the SVG) and `flex-shrink: 0` (prevents squishing inside a flex-row parent), and `.MDSButton--icon-only > svg` forces `display: block` (SVGs are `display: inline` by default, which drifts the glyph 2-3px above the geometric center of the tap target). Removing any of the three re-introduces the off-center bug.
- **`MDSImage` `asChild` does NOT forward `src` / `alt` / `loading` to the child.** When `asChild` is true, those props are required at the type level (for consistency) but the child element manages its own media attributes. Use this for `next/image`, `<picture>`, or similar wrappers.
- **`MDSBadge` uses inline SVGs for `success` / `error` types.** `MDSIcon`'s `React.lazy` + `Suspense` renders a placeholder first, which breaks synchronous render/test paths in a tiny always-visible indicator. The `CheckIcon` / `WarningIcon` shapes are copied verbatim from `@mds/icons` generated files. Swap back once icons are made synchronous.
- **`MDSBottomNavigationItem` `asChild` uses `cloneElement`, not plain Slot.** The item has three internal spans (icon / label / selection bar) which Radix Slot can't wrap under a single child constraint. The implementation extracts the consumer's element children, uses them as the label content, and re-injects the icon + label + bar inside the cloned element. Consumer's `href`, `onClick`, etc. are preserved via Slot's prop merging.
- **`MDSBreadcrumbOverflowItem` uses native `<details>` / `<summary>`.** No separate `MDSPopover` primitive yet. Keyboard navigation and focus handling come for free from the browser. jsdom does NOT expose `<summary>` as `role="button"` — tests query by tag or via `aria-label`. Extract a proper popover when product needs focus-trap / click-outside.
- **Compound sub-parts share a CSS module with their parent.** `MDSCard-Header`, `MDSBreadcrumb-List`, `MDSBottomNavigationItem-SelectionBar` etc. all live in the parent's `MDS<Family>.module.css`. BEM element naming (`<Family>-<Element>` or `<Family>-<Element>-<SubElement>`) keeps the class namespace flat.
- **`MDSImage` and `MDSCard` with `imageAlignment: right|left` render a flex-row layout** where the image becomes a fixed 136×136 square (via `--MDSCard-media-side-size`). `imageAlignment="top"` renders a 16:9 ratio across the full card width. Consumers can override either via CSS vars on the card node.
- **Storybook CSF indexer requires an object-literal default export.** The `.stories.tsx` default export must be a plain `{ ... }` literal that closes with `satisfies MDSMeta<typeof X>`. A factory wrapper (`createComponentMeta(...)`) fails at index time with `NoMetaError: CSF: default export must be an object` — the indexer does static analysis and refuses to evaluate function calls. `satisfies` is compile-time only and erased at runtime, so the indexer still sees an object literal while TypeScript still enforces the contract. Do not attempt to reintroduce a factory.
- **The docs-template lives under `src/docs-template/`, not `.storybook/docs/`.** `tsconfig.json` sets `rootDir: src`, so any file under `src/` that imports from `.storybook/` violates TS6059. Stories live under `src/`, so the factory/blocks/types they import must live under `src/` too. `.storybook/` is reserved for Storybook's own config (`main.ts`, `preview.ts`, `preview.css`).
- **MDX files cannot be imported from TS modules.** Vite's MDX plugin only processes `.mdx` files registered as stories, not arbitrary `.mdx` imports from TypeScript. The shared docs template is therefore a `.tsx` file (`ComponentDocs.tsx`) that composes Storybook's doc blocks as React components, not an `.mdx` page.
- **Storybook's `<Stories>` "Stories" heading is suppressed at source, not via CSS.** Passing `title={<></>}` on `<Stories>` routes through the block's ReactElement branch (`typeof title === "string" ? <StyledHeading>{title}</StyledHeading> : title`) and renders nothing — no `<h2 id="stories">` ever reaches the DOM. Do not try to CSS-hide it; the element doesn't exist.
- **Docs-chrome CSS must never leak into rendered components.** Every rule in `.storybook/preview.css` that targets a descendant element type (h1/h2/h3/p/li/a/table/pre/code) ends with `:not(.sbdocs-preview *):not(.docs-story *)`. Without this, a rule like `.sbdocs.sbdocs-content h3 { font-size: ... }` hijacks `MDSCard.Header`'s internal headline. Wrapper selectors that target the canvas itself (`.sbdocs-preview`, `.docs-story`) don't need the `:not()` because they match the container, not its contents.
- **`MDSTimePicker` wheel has a jsdom fallback for `scrollTo`.** `TimePickerWheel` scrolls its listbox to the selected row via `el.scrollTo({ top, behavior: 'instant' })` in a `useLayoutEffect`. jsdom doesn't implement `HTMLElement.scrollTo`, so the component branches on `typeof el.scrollTo === 'function'` and falls back to assigning `el.scrollTop = nextTop` in test environments. Do not remove the guard — the component silently throws in tests otherwise.
- **`MDSHeader` is structural only — responsive behaviour is the consumer's job.** The three backgrounds (`standard` / `secondary` / `glass`) and slot layout (logo / tabs / actions) render at every viewport; there is no built-in breakpoint that hides the tabs slot or swaps to `MDSHeader.MobileMenu`. Consumers decide when to render the mobile menu (typically via a media query, `IntersectionObserver`, or container query) and toggle it with their own state. This keeps the component SSR-safe and avoids prescribing a breakpoint the design system doesn't own.
- **`MDSHeader.MobileMenu` is a sheet, not a modal.** It renders as a `role="dialog"` vertical stack that the consumer mounts *below* the header bar — there is no backdrop, scroll lock, or focus trap. Use `MDSSheet` if those semantics are needed. The MobileMenu is purely the visual Figma "Mobile Menu" surface.
- **`MDSTable` header uses a `<button>` inside `<th>` for sortable columns.** Selecting `sortable` swaps the label for a `<button type="button">` with an auto-generated `aria-label` ("Sort ascending" / "Sort descending" / "Clear sort") that reflects the *next* action. The column `<th>` itself still sets `aria-sort` to `"none" | "ascending" | "descending"` to announce the *current* state. Both are required: screen readers need `aria-sort` on the header, keyboard users need an actionable `<button>`.
- **`MDSTable` row separators are driven by `aria-selected`, not a selector class.** `MDSTable.Row` with `selected` sets `aria-selected="true"` and applies a light accent background; without it the row is styled by the `:hover:not(.MDSTable-Row--selected)` rule. Do not stack a second "hovered" class — use `selected` as the single source of truth.
- **Component-level sort state is the consumer's responsibility (MDSTable).** `MDSTable.HeaderCell` is stateless — it reports `onSort(next)` with the computed next direction but does not track it. Consumers own the `MDSTableSortDirection` state and apply the actual sort to their row data.
