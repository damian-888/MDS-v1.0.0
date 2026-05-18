---
title: Build System
type: architecture
status: stable
source:
  - packages/mds-components/tsup.config.ts
  - packages/mds-icons/vite.config.ts
  - packages/mds-tokens/style-dictionary.config.mjs
  - packages/mds-guidelines/.storybook/main.ts
  - packages/mds-components/package.json
  - packages/mds-tokens/package.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [architecture, build, tsup, vite, style-dictionary, esbuild, side-effects]
related:
  - "[[index]]"
  - "[[token-pipeline]]"
  - "[[icon-pipeline]]"
  - "[[storybook]]"
  - "[[font-pipeline]]"
  - "[[monorepo]]"
---

# Build System

> Each package picks the build tool that fits its output shape: tsup for components, Vite for icons, Style Dictionary for tokens, Storybook Vite for guidelines.

## Diagram

```
┌──────────────────┬─────────────────────────────────────────────────────┐
│ Package          │ Build tool                                          │
├──────────────────┼─────────────────────────────────────────────────────┤
│ @mds/tokens      │ Style Dictionary (custom orchestration in .mjs)     │
│ @mds/icons       │ Vite lib mode + preserveModules: true               │
│ @mds/components  │ tsup (esbuild)                                      │
│ @mds/guidelines  │ Storybook 10 with Vite builder                      │
└──────────────────┴─────────────────────────────────────────────────────┘
```

## Inputs

Per-package configs:

- [`packages/mds-tokens/style-dictionary.config.mjs`](packages/mds-tokens/style-dictionary.config.mjs) + `scripts/` — see [[token-pipeline]].
- [`packages/mds-icons/vite.config.ts`](packages/mds-icons/vite.config.ts) — see [[icon-pipeline]].
- [`packages/mds-components/tsup.config.ts`](packages/mds-components/tsup.config.ts) — see "tsup config" below.
- [`packages/mds-guidelines/.storybook/main.ts`](packages/mds-guidelines/.storybook/main.ts) — see [[storybook]].

## Outputs

| Package | Output |
|---|---|
| `@mds/tokens` | `dist/tokens.css`, `dist/typography.css`, `dist/fonts.css`, `dist/chunks/*.css`, `dist/tokens.js`, `dist/tokens.d.ts`, `dist/fonts/*.otf` |
| `@mds/icons` | `dist/<PascalCase>.js` per icon, `dist/registry.js`, `dist/index.js` |
| `@mds/components` | `dist/index.js` + per-component bundles (`dist/MDSButton/index.js`, …), CSS Modules emitted as separate `.css` files |
| `@mds/guidelines` | Static Storybook site (Vite-bundled) |

## tsup config — `@mds/components`

- **Format:** ESM only.
- **Per-component entries:** `index`, `MDSButton/index`, `MDSIcon/index`, `MDSText/index`, `MDSBadge/index`, `MDSAccordion/index`, `MDSBreadcrumb/index`, `MDSFlyout/index`.
- **CSS Modules:** `loader: { '.css': 'local-css' }`. Each component's CSS Module emits a sibling `.css` file in its dist folder.
- **`'use client'` banner:** injected into every JS file via `esbuildOptions.banner`.
- **Externals:** `react`, `react-dom`, `@base-ui-components/react`, `@mds/icons`. `@mds/tokens` is a `peerDependency` (consumers import its CSS themselves).

## Vite config — `@mds/icons`

- **Lib mode** rooted at `src/generated`.
- **`preserveModules: true`** so each icon lands at its own `dist/<PascalCase>.js` chunk. Required for `React.lazy(() => import('./Acorn'))` to actually code-split in consumers. See [[icon-pipeline]].

## Style Dictionary — `@mds/tokens`

17 SD instances → 6 chunk files → `tokens.css` bundle + side outputs (`typography.css`, `fonts.css`, `tokens.js`, `tokens.d.ts`). See [[token-pipeline]].

## Storybook — `@mds/guidelines`

Storybook 10 with the Vite builder. Imports `@mds/tokens/{tokens,typography,fonts}.css` + `@mds/components/styles.css` in `.storybook/preview.ts` so every story renders in the active MDS theme. See [[storybook]].

## sideEffects per package

For tree-shaking correctness:

| Package | `"sideEffects"` |
|---|---|
| `@mds/icons` | `false` (pure exports; safe to tree-shake everything not directly imported) |
| `@mds/tokens` | `["**/*.css"]` (CSS files have side effects — they declare custom properties at the global level) |
| `@mds/components` | `["**/*.css"]` (same reason — component styles register CSS Modules with side effects) |
| `@mds/guidelines` | private; not published |

## Source

- [tsup.config.ts](packages/mds-components/tsup.config.ts)
- [vite.config.ts](packages/mds-icons/vite.config.ts)
- [style-dictionary.config.mjs](packages/mds-tokens/style-dictionary.config.mjs)
- [.storybook/main.ts](packages/mds-guidelines/.storybook/main.ts)

## Related

- [[index]]
- [[token-pipeline]]
- [[icon-pipeline]]
- [[storybook]]
- [[font-pipeline]]
- [[monorepo]]
- [[dependency-graph]]
- [[workflows/dev-loop]]
