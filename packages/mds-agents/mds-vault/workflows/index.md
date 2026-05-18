---
title: Workflows
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/workflows/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, workflows, how-to]
related:
  - "[[README]]"
  - "[[governance/index]]"
---

# Workflows

> Operational how-tos — the recipes for adding components, adding icons, changing tokens, and shipping releases.

## Atoms

| File | Summary |
|---|---|
| [[add-component]] | Scaffold → Base UI recipe → TSX → CSS Module → Vitest → wire build → Storybook → changeset. |
| [[add-icon]] | Edit in Figma → `pnpm sync` → `pnpm build` → use. The registry regenerates automatically. |
| [[change-token]] | Edit in Tokens Studio → export JSON → `pnpm --filter @mds/tokens build` → verify in Storybook. |
| [[release]] | `pnpm changeset version` → commit → `pnpm build` → `pnpm changeset publish`. |
| [[dev-loop]] | Tokens watch + Storybook + Vitest watch. The standard iteration triangle. |

## Related folders

- [[governance/index]] — release process and versioning policy.
- [[figma/index]] — Figma-side workflows (where designs originate).
- [[architecture/build-system]] — the build tools each workflow drives.
