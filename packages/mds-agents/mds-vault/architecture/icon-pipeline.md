---
title: Icon Pipeline
type: architecture
status: stable
source:
  - packages/mds-icons/scripts/sync-from-figma.mjs
  - packages/mds-icons/scripts/build-icons.mjs
  - packages/mds-icons/scripts/icon-template.mjs
  - packages/mds-icons/vite.config.ts
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [architecture, icons, figma, svgo, svgr, vite, lazy-loading]
related:
  - "[[index]]"
  - "[[icons/index]]"
  - "[[components/MDSIcon]]"
  - "[[workflows/add-icon]]"
---

# Icon Pipeline

> Three-stage pipeline: sync from Figma → generate React components → Vite lib build with `preserveModules: true` so every icon lands at its own chunk for code-splitting.

## Diagram

```
Figma icons page         src/                              dist/
                         ├── svg/                          ├── Acorn.js
[Component]──── sync ───►│   ├── acorn.svg                 ├── AirplaneLanding.js
[Component] ───────────► │   ├── airplane-landing.svg      ├── ... (one per icon)
[Component]              │   └── ...                       ├── registry.js
                         │                       generate  └── index.js          (barrel)
                         └── generated/         ───build──►       │
                             ├── Acorn.tsx                        │
                             ├── AirplaneLanding.tsx              │
                             ├── ...                              ▼
                             ├── registry.ts          consumed by @mds/components → MDSIcon
                             └── index.ts                  (lazy React.lazy() per icon)
```

## Inputs

- Figma file configured via `.env`:
  - `FIGMA_TOKEN`
  - `FIGMA_FILE_KEY`
  - `FIGMA_ICONS_PAGE_ID`
- Every `COMPONENT` / `COMPONENT_SET` on the icons page is treated as a source icon.

## Outputs

- `packages/mds-icons/src/svg/<kebab-case-name>.svg` — synced SVG sources.
- `packages/mds-icons/src/generated/<PascalCase>.tsx` — generated React components (one per icon).
- `packages/mds-icons/src/generated/registry.ts` — lazy registry mapping kebab-case names to `React.lazy(() => import('./PascalCase'))` entries; also exports the `MDSIconName` literal union.
- `packages/mds-icons/src/generated/index.ts` — barrel exporting `iconRegistry`, `MDSIconName`, `MDSIconProps`.
- `packages/mds-icons/dist/<PascalCase>.js` — per-icon chunks, separate files because of `preserveModules: true`.

## Build Steps

`pnpm --filter @mds/icons` exposes three commands:

| Command | Action |
|---|---|
| `pnpm --filter @mds/icons sync` | Hits the Figma REST API, exports every component on the icons page as SVG, writes to `src/svg/<kebab-case-name>.svg`. Invoked via `node --env-file=.env` so `.env` loads automatically. Batches icon-id requests (100 per call) to stay under CloudFront URL limits. Downloads run at concurrency 10 with per-file retry + exponential backoff. Re-runs are resumable (existing SVGs are skipped). |
| `pnpm --filter @mds/icons generate` | For each SVG: SVGO (strip `width`/`height`, add `currentColor` to fills/strokes, keep `viewBox`), then SVGR with a custom template producing `forwardRef` React components. Outputs to `src/generated/`. |
| `pnpm --filter @mds/icons build` | Runs `generate`, then Vite lib mode build with `preserveModules: true` so each icon lands at `dist/<PascalCase>.js` as a separate chunk (required for the dynamic imports to code-split in consumers). |

## Why `preserveModules: true`

The registry uses `React.lazy(() => import('./Acorn'))`. For consumer bundlers (Vite, Webpack, esbuild) to see this as a real dynamic import and code-split each icon into its own chunk, each icon must live in its own file in `dist/` — not bundled together. `preserveModules: true` is the Vite/Rollup option that disables module concatenation.

An app using 20 icons ships 20 chunks, not the full registry.

## Tree-shaking

Consumers ship only the icons they reference at runtime. Each `MDSIcon name="..."` resolves to a lazy chunk; the registry itself is a tree-shakeable object literal whose keys are lazy stubs.

`MDSIcon` wraps the resolved component in `<Suspense>` with a same-sized placeholder so there is no visible layout shift. The first render of any given icon name shows the placeholder for a tick before the chunk resolves.

## Source

- [scripts/sync-from-figma.mjs](packages/mds-icons/scripts/sync-from-figma.mjs)
- [scripts/build-icons.mjs](packages/mds-icons/scripts/build-icons.mjs)
- [scripts/icon-template.mjs](packages/mds-icons/scripts/icon-template.mjs)
- [vite.config.ts](packages/mds-icons/vite.config.ts)

## Related

- [[index]]
- [[icons/index]]
- [[icons/lazy-loading]]
- [[components/MDSIcon]]
- [[workflows/add-icon]]
