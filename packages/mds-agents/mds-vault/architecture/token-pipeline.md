---
title: Token Pipeline
type: architecture
status: stable
source:
  - packages/mds-tokens/style-dictionary.config.mjs
  - packages/mds-tokens/scripts/style-dictionary/setup.mjs
  - packages/mds-tokens/scripts/style-dictionary/build-layer.mjs
  - packages/mds-tokens/scripts/verify-build.mjs
  - packages/mds-tokens/src/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [architecture, tokens, style-dictionary, build]
related:
  - "[[index]]"
  - "[[font-pipeline]]"
  - "[[foundation/index]]"
  - "[[theming/index]]"
  - "[[conventions/tokens-policy]]"
  - "[[conventions/naming]]"
---

# Token Pipeline

> Style Dictionary builds 17 SD instances, post-processes their outputs into 6 layered chunk files, then bundles into `dist/tokens.css`. Fonts and typography utility classes are emitted alongside.

## Diagram

```
src/                              dist/
├── .core.json           ┐        ├── tokens.css            ← primary entry
├── foundation.json      │        ├── typography.css        ← :root vars + .mds-typography-* classes
├── base/                │        ├── fonts.css             ← @font-face declarations
│   ├── .white.json      │        ├── fonts/                ← copied font files
│   ├── .black.json      │   17   ├── chunks/               ← the 6 layer files
│   ├── .brand light.json│ ──SD──►│   ├── core.css
│   └── ... 8 base       │ instances│ ├── schemes.css
├── base/functional/     │        │   ├── sections.css
│   └── ... 16 funcs     │        │   ├── modes.css
├── .scheme/             │        │   ├── breakpoints.css
├── .section/            │        │   └── foundation.css
├── .mode/               │        ├── tokens.js             ← CSS var ref strings + numeric primitives
├── .functional/         │        └── tokens.d.ts           ← nested TS types
└── .breakpoint/         ┘
```

## Inputs

**Source modules in `packages/mds-tokens/src/`:**

- `.core.json` — primitives (colour ramps, viewports, font-families).
- `foundation.json` — public-API semantic layer.
- `base/{.white,.black,.brand light,.brand dark}.json` + `* subtle.json` siblings — neutral and brand palettes (8 files).
- `base/functional/.{green,red,orange,blue} {light,dark}{,subtle}.json` — 16 functional palettes.
- `.scheme/{neutral,brand,functional}.json` — scheme variants.
- `.section/{normal,subtle}.json` — section variants.
- `.mode/{light,dark}.json` — mode variants.
- `.functional/{green,red,orange,blue}.json` — binds the generic `functional.*` path to a specific palette.
- `.breakpoint/{mobile,tablet,laptop,desktop}.json` — breakpoint variants.
- `$themes.json`, `$metadata.json` — Tokens Studio meta (informational; not loaded as tokens).

**Build scripts:**

| File | Role |
|---|---|
| [`scripts/style-dictionary/setup.mjs`](packages/mds-tokens/scripts/style-dictionary/setup.mjs) | Registers parsers, transform groups (`mds/css`, `mds/js`), and custom formats (`typography/classes`, `css/variables-no-selector`). Also registers two custom value transforms. |
| [`scripts/style-dictionary/build-layer.mjs`](packages/mds-tokens/scripts/style-dictionary/build-layer.mjs) | Wraps a Style Dictionary instance into a one-shot helper that returns a CSS body string for a single source-file variant. |
| [`style-dictionary.config.mjs`](packages/mds-tokens/style-dictionary.config.mjs) | Orchestrates 17 SD instances, post-processes their outputs into 6 chunk files, bundles into `tokens.css`, emits typography + JS/TS exports. |
| [`scripts/verify-build.mjs`](packages/mds-tokens/scripts/verify-build.mjs) | Post-build assertion script (10 checks); runs as the last step of `pnpm --filter @mds/tokens build`. |
| [`scripts/build-fonts.mjs`](packages/mds-tokens/scripts/build-fonts.mjs) | Scans `fonts/`, copies files into `dist/fonts/`, emits `dist/fonts.css`. See [[font-pipeline]]. |

## Outputs

`packages/mds-tokens/dist/` (gitignored):

```
dist/
├── tokens.css            # bundled cascade — primary consumer entry
├── typography.css        # :root vars + .mds-typography-* utility classes
├── chunks/
│   ├── core.css
│   ├── schemes.css
│   ├── sections.css
│   ├── modes.css
│   ├── breakpoints.css
│   └── foundation.css
├── tokens.js             # CSS var refs (foundation) + numeric primitives (palettes, breakpoints)
├── tokens.d.ts           # nested TS types matching tokens.js
├── fonts.css             # @font-face declarations (emitted only when fonts/ has files)
└── fonts/                # copied font files (emitted only when fonts/ has files)
```

Cascade order in `tokens.css`: **core → schemes → sections → modes → breakpoints → foundation**. Foundation must come last because it references the layers above.

## Build Steps

`pnpm --filter @mds/tokens build` runs:

1. `node scripts/build-fonts.mjs` — copy fonts and emit `dist/fonts.css`.
2. `node style-dictionary.config.mjs` — run 17 SD instances, post-process, bundle.
3. `node scripts/verify-build.mjs` — assert 10 invariants on the built output.

## Why 17 SD instances

SD instance count is forced by path collisions. `mode/light.json` and `mode/dark.json` both define `mode.*`, so each variant needs its own instance.

**Count:** 1 core + 6 schemes + 2 sections + 2 modes + 4 breakpoints + 1 foundation + 1 typography = 17.

All instances use `outputReferences: true` so the `var()` chain is preserved end-to-end. `log.errors.brokenReferences: 'throw'` enforces ref correctness at build time — any unresolved `{ref}` fails the build with a stack trace.

## Custom parser

`rewrite-broken-refs` handles two source quirks:

1. Legacy Tokens Studio `"value":` keys are normalised to DTCG `"$value":` so files in either format coexist.
2. A malformed missing-brace ref in `foundation.json` (`"{breakpoint.radius.full"`) is auto-closed.

## Custom value transforms

Registered in `scripts/style-dictionary/setup.mjs`:

| Transform | Purpose |
|---|---|
| `mds/value/number-to-px` | Appends `px` to any token with `type: "number"`. Tokens Studio's built-in `ts/size/px` only fires on `dimension`/`sizing` types; this catches the `number`-typed dimensional values (number ramp, strokes, font sizes, line heights) so they emit valid CSS instead of bare numbers. |
| `mds/value/font-weight-name-to-number` | Maps human-readable weight names (`"Regular"` → `"400"`, `"Bold"` → `"700"`, etc.) to CSS-valid numeric strings. Browsers reject non-numeric font-weight values. |

## Theme-awareness preservation

Cross-layer references are preserved as `var(...)` at runtime (`outputReferences: true`). Foundation tokens chain `foundation → mode → section → scheme → palette → hex` — five hops resolved by the browser at render time.

See [[theming/chain-inheritance]] for the chain-inheritance fix that keeps per-element overrides working.

## Source

- [style-dictionary.config.mjs](packages/mds-tokens/style-dictionary.config.mjs)
- [scripts/style-dictionary/setup.mjs](packages/mds-tokens/scripts/style-dictionary/setup.mjs)
- [scripts/style-dictionary/build-layer.mjs](packages/mds-tokens/scripts/style-dictionary/build-layer.mjs)
- [scripts/verify-build.mjs](packages/mds-tokens/scripts/verify-build.mjs)

## Related

- [[index]]
- [[font-pipeline]]
- [[foundation/index]]
- [[theming/index]]
- [[theming/chain-inheritance]]
- [[conventions/tokens-policy]]
- [[conventions/naming]]
- [[workflows/change-token]]
