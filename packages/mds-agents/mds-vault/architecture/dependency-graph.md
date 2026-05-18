---
title: Dependency Graph
type: architecture
status: stable
source:
  - packages/mds-components/package.json
  - packages/mds-icons/package.json
  - packages/mds-guidelines/package.json
  - packages/mds-tokens/package.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [architecture, dependencies, peer-dependencies]
related:
  - "[[index]]"
  - "[[monorepo]]"
  - "[[components/MDSIcon]]"
---

# Dependency Graph

> `@mds/components` → `@mds/tokens` (peer) + `@mds/icons` (runtime). Tokens and icons do not depend on each other. `@mds/guidelines` consumes all three at dev-time only.

## Diagram

```
        ┌──────────────────────┐
        │   @mds/guidelines    │  (dev-only; private — never published)
        │   Storybook 10       │
        └──────┬────────┬──────┘
               │        │
   ┌───────────▼─┐   ┌──▼─────────────┐
   │ @mds/components │  ──────────►   @mds/icons      (runtime dep)
   │  React + CSS  │  ──────peer──►   @mds/tokens     (peer dep)
   │  Modules      │
   └───────────────┘

   @mds/icons         (no internal MDS deps)
   @mds/tokens        (no internal MDS deps)
```

`@mds/agents` (the vault) is independent — it has no MDS runtime deps; it is documentation that ships alongside.

## Inputs

- `@mds/components` runtime deps: `@base-ui-components/react@1.0.0-rc.0`, `@mds/icons` (workspace).
- `@mds/components` peer deps: `react >=18`, `react-dom >=18`, `@mds/tokens` (workspace).
- `@mds/icons`: no MDS deps. Vite is the build tool.
- `@mds/tokens`: no MDS deps. Style Dictionary + custom helpers.
- `@mds/guidelines` (private): all three at dev-time only.

## Outputs

| Consumer | Imports |
|---|---|
| End-user app | `@mds/tokens/tokens.css`, `@mds/tokens/typography.css`, `@mds/tokens/fonts.css` (root); `@mds/components` (per-component) |
| `@mds/components` (at build) | `@mds/icons` registry; `@mds/tokens` only via CSS variable names (no JS import) |
| `@mds/guidelines` | `@mds/tokens/*.css` + `@mds/components/styles.css` in `.storybook/preview.ts` |

## Build Steps

`pnpm -r build` walks the dependency graph automatically. Order:

1. `@mds/tokens` and `@mds/icons` (no inter-deps; can run in parallel).
2. `@mds/components` (after tokens + icons).
3. `@mds/guidelines` (after all three).

## Key invariants

### `@mds/tokens` is a peer dependency of `@mds/components`

Consumers install `@mds/tokens` themselves and import its CSS at the app root:

```ts
import '@mds/tokens/tokens.css';
import '@mds/tokens/typography.css';        // required if using MDSText, MDSAccordion, or MDSBreadcrumb
import '@mds/tokens/fonts.css';             // required if using the bundled fonts
```

Making it a peer ensures consumers know they own this import. If it were a hidden `dependency`, the CSS import could be silently skipped and the components would render unstyled.

### `MDSIcon` lives in `@mds/components`, not `@mds/icons`

`@mds/icons` ships only the lazy registry + `MDSIconName` union type. `MDSIcon` (the React component consumers actually use) lives in `@mds/components`. Always import `MDSIcon` from `@mds/components`. See [[components/MDSIcon]] and [[icons/index]].

### `@mds/guidelines` is private

`private: true` in `package.json`. Storybook is internal documentation; never published. Hosts the design system docs site for the team.

### Tokens are not imported from JS by components

`@mds/components` references tokens through CSS variable names only — never via `import { colours } from '@mds/tokens'`. The JS exports exist for app-level code (inline styles, `matchMedia`, chart libs), not for component styling. See [[conventions/tokens-policy]].

## Source

- [packages/mds-components/package.json](packages/mds-components/package.json)
- [packages/mds-icons/package.json](packages/mds-icons/package.json)
- [packages/mds-guidelines/package.json](packages/mds-guidelines/package.json)
- [packages/mds-tokens/package.json](packages/mds-tokens/package.json)

## Related

- [[index]]
- [[monorepo]]
- [[build-system]]
- [[components/MDSIcon]]
- [[conventions/tokens-policy]]
