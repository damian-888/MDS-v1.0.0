---
title: Architecture
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/architecture/
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [vault, architecture, build, monorepo]
related:
  - "[[README]]"
  - "[[principles/index]]"
  - "[[foundation/index]]"
  - "[[icons/index]]"
  - "[[components/index]]"
---

# Architecture

> Monorepo shape, dependency graph, and build pipelines for the four publishable packages.

## Atoms

| File | Summary |
|---|---|
| [[monorepo]] | pnpm-workspaces; five packages; node ≥ 18, pnpm ≥ 9, React ≥ 18. |
| [[dependency-graph]] | `@mds/components` → `@mds/tokens` (peer) + `@mds/icons` (runtime). `@mds/guidelines` consumes all three dev-only. |
| [[token-pipeline]] | Style Dictionary; 17 SD instances → 6 chunks → `tokens.css`. Custom parser + value transforms. |
| [[icon-pipeline]] | Figma sync → SVGO/SVGR → Vite lib mode + `preserveModules: true` (per-icon code-splitting). |
| [[build-system]] | tsup for `@mds/components`, Vite for `@mds/icons`, Style Dictionary for `@mds/tokens`, Storybook Vite for `@mds/guidelines`. |
| [[storybook]] | Storybook 10 + Vite. CSS isolation via `:not(.sb-story *)`. Manager vs. preview chrome split. |
| [[font-pipeline]] | Drop-in font pipeline. Currently bundling Akkurat Pro + Manyone. |

## Related folders

- [[principles/index]] — the tenets the architecture implements.
- [[foundation/index]] — token pipeline outputs.
- [[icons/index]] — icon pipeline outputs.
- [[components/index]] — component build outputs.
- [[workflows/index]] — operational steps that use this architecture.
