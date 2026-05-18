---
title: Monorepo
type: architecture
status: stable
source:
  - pnpm-workspace.yaml
  - package.json
  - packages/
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [architecture, monorepo, pnpm, packages]
related:
  - "[[index]]"
  - "[[dependency-graph]]"
  - "[[build-system]]"
  - "[[README]]"
---

# Monorepo

> pnpm-workspaces monorepo. Five workspace packages: four publishable, one private (`@mds/guidelines`). All packages currently at version `0.0.0` — pre-1.0; nothing has shipped to npm yet. Independent versioning via Changesets once releases begin.

## Diagram

```
MDS-v1.0.0/
├── packages/
│   ├── mds-tokens/      # @mds/tokens     — DTCG JSON → CSS vars + TS types
│   ├── mds-icons/       # @mds/icons      — SVGs → per-icon chunks + lazy registry
│   ├── mds-components/  # @mds/components — UI components (MDS-prefixed)
│   ├── mds-agents/      # @mds/agents     — LLM context (the vault)
│   └── mds-guidelines/  # @mds/guidelines — private; Storybook 10 docs
├── docs/                # specs + plans
├── pnpm-workspace.yaml
├── package.json
├── tsconfig.base.json
└── CLAUDE.md            # project instructions for AI agents
```

## Inputs

- **Tokens** authored in Figma Tokens Studio; JSON exported into `packages/mds-tokens/src/`.
- **Icons** authored as components on a dedicated icons page in Figma.
- **Components** authored in the Figma components library.
- **Code** maintained in this repo; consumes the above through the npm packages.

## Outputs

- `@mds/tokens` — CSS, JS, TS, font files. Consumed by both `@mds/components` and end-user apps.
- `@mds/icons` — per-icon JS chunks + lazy registry. Consumed by `@mds/components` (it wraps the registry in `MDSIcon`).
- `@mds/components` — React components with CSS Modules. Consumed by end-user apps.
- `@mds/agents` — the vault (this Obsidian knowledge base). Ships with the design system to provide LLM context.
- `@mds/guidelines` — private Storybook docs site. Not published.

See [[dependency-graph]] for direction and runtime/peer/dev distinctions.

## Build Steps

```bash
pnpm install                              # install across workspace
pnpm -r build                             # build all packages in dep order
pnpm -r test                              # run all tests
pnpm -r lint
pnpm -r typecheck
```

Per-package:

```bash
pnpm --filter @mds/tokens build           # Style Dictionary build
pnpm --filter @mds/icons build            # generate icons + vite lib build
pnpm --filter @mds/components build       # tsup build
pnpm --filter @mds/guidelines dev         # start Storybook on :6006
```

## Environment

- Node ≥ 18
- pnpm ≥ 9
- React peer ≥ 18

## Release flow

See [[workflows/release]] for the Changeset-driven release process.

## Source

- [pnpm-workspace.yaml](pnpm-workspace.yaml)
- [package.json](package.json)
- [tsconfig.base.json](tsconfig.base.json)

## Related

- [[index]]
- [[dependency-graph]]
- [[build-system]]
- [[token-pipeline]]
- [[icon-pipeline]]
- [[README]]
