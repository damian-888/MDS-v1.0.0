---
title: Libraries
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/libraries/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, libraries, external]
related:
  - "[[README]]"
  - "[[_meta/forbidden-to-edit]]"
  - "[[components/index]]"
---

# Libraries

> External dependencies the MDS system builds on. Every file in this folder is **forbidden to edit** — these are verbatim mirrors of upstream documentation, refreshed only by explicit re-sync.

## Atoms

| File | Summary |
|---|---|
| [[base-ui]] | `@base-ui-components/react` — the sole headless primitive layer for MDS components. |
| [[shadcn]] | `shadcn/ui` (Base UI flavor) — used as a copy-paste recipe source during scaffolding; not a runtime dependency. |

## Related folders

- [[components/index]] — every MDS component wraps a Base UI primitive.
- [[_meta/forbidden-to-edit]] — the policy that makes these files read-only.
