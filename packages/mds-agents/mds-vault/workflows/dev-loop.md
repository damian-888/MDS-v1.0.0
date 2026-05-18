---
title: Dev Loop
type: workflow
status: stable
source:
  - package.json
  - packages/mds-components/package.json
  - packages/mds-tokens/package.json
  - packages/mds-guidelines/package.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [workflow, dev, watch, storybook, vitest]
related:
  - "[[index]]"
  - "[[architecture/build-system]]"
  - "[[architecture/storybook]]"
  - "[[add-component]]"
  - "[[change-token]]"
---

# Dev Loop

> The typical component iteration loop. Tokens watch (if editing tokens) + Storybook + Vitest. ~3 terminal panes; HMR handles most of the rest.

## Summary

Three concurrent processes for an interactive iteration loop on a component change:

1. **`@mds/tokens` dev** — only if editing tokens. Style Dictionary watches `src/` and rebuilds `dist/tokens.css`.
2. **Storybook** — `@mds/guidelines` on `:6006` for visual feedback.
3. **Vitest watch** — `@mds/components` for unit tests.

## Prerequisites

- `pnpm install` has been run.
- An initial `pnpm -r build` has been run so each package has a `dist/` (Storybook reads from sibling `dist/`, not source).

## Steps

### 1. Start tokens watch (if editing tokens)

```bash
pnpm --filter @mds/tokens dev
```

Watches the JSON sources under `packages/mds-tokens/src/` and re-runs `style-dictionary.config.mjs` on each change.

### 2. Start Storybook

```bash
pnpm --filter @mds/guidelines dev
# or, equivalently:
pnpm storybook
```

Storybook runs on `http://localhost:6006`. The preview iframe imports `@mds/tokens/{tokens,typography,fonts}.css` + `@mds/components/styles.css`, so any change to either package shows up on save.

### 3. Run component tests in watch mode

```bash
pnpm --filter @mds/components test:watch
```

Vitest reruns the affected tests on file changes.

### 4. Edit

In a fourth terminal or your editor:

- Edit `packages/mds-components/src/MDS<Component>/MDS<Component>.tsx`
- Edit `packages/mds-components/src/MDS<Component>/MDS<Component>.module.css`
- Edit the story under `packages/mds-guidelines/src/stories/MDS<Component>.stories.tsx`

### 5. Before committing — full test pass

```bash
pnpm --filter @mds/components test       # all tests run, not just watched
pnpm --filter @mds/components build      # confirm tsup build clean
```

Then check Storybook one more time across **all four** axis combinations (mode × section × scheme × breakpoint) to catch theme-specific regressions.

## Verification

The iteration loop is considered healthy when:

- Storybook hot-reloads on TSX / CSS edits without a full restart.
- Token edits show up after `pnpm --filter @mds/tokens dev` finishes a rebuild (Storybook re-resolves CSS vars at next render).
- `pnpm --filter @mds/components test:watch` reruns and passes locally.
- A full `pnpm --filter @mds/components build` exits 0.

## Common Pitfalls

- **Storybook HMR doesn't pick up CSS changes from a sibling package:** Vite caches workspace package imports. Restart Storybook (`Ctrl+C` then re-run `pnpm storybook`).
- **Editing tokens without `pnpm --filter @mds/tokens dev`:** the change won't reach `dist/tokens.css` until the next manual `build`. Storybook will keep using the stale tokens.
- **Forgetting to import `typography.css`** in Storybook preview when adding a new typography-using component: `mds-typography-*` classes won't apply. The fix is in `.storybook/preview.ts`, not the component.
- **Cross-package edits inside one terminal:** running `pnpm -r --parallel dev` (the root `pnpm dev` script) starts all packages' dev scripts at once. Useful, but logs are interleaved. Splitting into per-package terminals is easier to read.

## Parallel root dev

For an all-in-one watch, the root has a `dev` script:

```bash
pnpm dev
# runs `pnpm -r --parallel dev` — every package's dev script in parallel
```

This starts `@mds/tokens dev`, `@mds/icons dev`, `@mds/components dev` (tsup --watch), and `@mds/guidelines dev` simultaneously. Output is multiplexed; useful when changes span multiple packages.

## Related

- [[index]]
- [[architecture/build-system]]
- [[architecture/storybook]]
- [[architecture/monorepo]]
- [[add-component]]
- [[change-token]]
- [[release]]
