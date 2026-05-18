---
title: Add Icon
type: workflow
status: stable
source:
  - packages/mds-icons/scripts/sync-from-figma.mjs
  - packages/mds-icons/scripts/build-icons.mjs
  - packages/mds-icons/package.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [workflow, icons, figma, sync]
related:
  - "[[index]]"
  - "[[icons/index]]"
  - "[[components/MDSIcon]]"
  - "[[architecture/icon-pipeline]]"
---

# Add Icon

> Four-step recipe: add to Figma → sync → build → use. The icon registry regenerates from the Figma source on each sync — no manual registry edits.

## Summary

Icons are authored in Figma and synced to the codebase via the Figma REST API. The pipeline strips dimensions and replaces fills with `currentColor`, then emits per-icon React components + a lazy registry. The new icon is type-checked into `MDSIconName` automatically — `<MDSIcon name="new-icon-name" />` will autocomplete after the next sync + build.

## Prerequisites

- `.env` in `packages/mds-icons/` with `FIGMA_TOKEN`, `FIGMA_FILE_KEY`, `FIGMA_ICONS_PAGE_ID`.
- Edit access to the MDS Figma icons page.

## Steps

### 1. Add the icon in Figma

On the configured icons page, create the icon as a **Component** or **Component Set**. Naming convention: the component name in Figma becomes the kebab-case key in the registry.

The icon should:

- Be drawn at 24×24 viewBox (the canonical Phosphor / MDS icon size).
- Use a single fill colour that the pipeline will replace with `currentColor`.
- Have no embedded `width` / `height` attributes (the SVGO pass strips them, but cleaner sources are easier to debug).

### 2. Sync from Figma

```bash
pnpm --filter @mds/icons sync
```

What this does:

- Hits the Figma REST API for every `COMPONENT` / `COMPONENT_SET` on the icons page.
- Exports each as SVG and writes to `packages/mds-icons/src/svg/<kebab-case-name>.svg`.
- Batches icon-id requests (100 per call) to stay under CloudFront URL limits.
- Concurrent downloads at concurrency 10 with retry + exponential backoff.
- Resumable — existing SVGs are skipped.

### 3. Generate + build

```bash
pnpm --filter @mds/icons build
```

Internally runs `generate` then `vite build`:

- **Generate:** SVGO (strip `width` / `height`, add `currentColor`) → SVGR with a custom `forwardRef` template. Outputs `src/generated/<PascalCase>.tsx` per icon plus `registry.ts` and barrel.
- **Build:** Vite lib mode with `preserveModules: true`. Each icon lands at `dist/<PascalCase>.js` — required for `React.lazy()` to code-split.

### 4. Use the icon

```tsx
import { MDSIcon } from '@mds/components';

<MDSIcon name="<new-kebab-case-name>" />
```

TypeScript autocompletes the new name from the regenerated `MDSIconName` union.

## Verification

```bash
ls packages/mds-icons/src/svg/<new-kebab-case-name>.svg          # exists
ls packages/mds-icons/src/generated/<PascalCase>.tsx             # exists
ls packages/mds-icons/dist/<PascalCase>.js                        # exists after build
grep <PascalCase> packages/mds-icons/src/generated/registry.ts   # registered
```

Visual verification: render `<MDSIcon name="<new-name>" />` in Storybook. Check it appears at 16 / 24 / 32 px and inherits `color` from a parent.

## Common Pitfalls

- **`.env` missing or wrong:** `pnpm sync` fails with a Figma auth error. Make sure `FIGMA_TOKEN` has access to `FIGMA_FILE_KEY`.
- **Icon was a frame, not a component:** Figma's REST API only exports `COMPONENT` / `COMPONENT_SET` nodes. Wrap a frame as a component.
- **Name has spaces or special chars:** the kebab-case conversion expects normal alphanumerics + hyphens. Avoid Unicode symbols in the Figma component name.
- **Skipping `build` after `sync`:** the SVG lands in `src/svg/` but no `dist/<PascalCase>.js` chunk exists yet. Consumers won't see the new icon until `build` runs.
- **Hand-editing files under `src/generated/`:** these are wiped on the next `generate`. Fix the SVG source or the icon template (`scripts/icon-template.mjs`) instead.

## Related

- [[index]]
- [[icons/index]]
- [[icons/registry]]
- [[icons/lazy-loading]]
- [[components/MDSIcon]]
- [[architecture/icon-pipeline]]
- [[figma/index]]
