---
title: Forbidden-to-Edit Pages
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/_meta/forbidden-to-edit.md
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, policy, read-only]
related:
  - "[[vault-rules]]"
---

# Forbidden-to-Edit Pages

> Pages whose body must not be modified by any agent. Two signals: this list (policy) and `forbidden-to-edit: true` in the page's frontmatter (per-file marker).

## Rules

A page is forbidden to edit if **either** is true:

1. Its path is listed below.
2. Its frontmatter contains `forbidden-to-edit: true`.

Refuse edit requests on these files. Explain why. Re-syncs from upstream are the only allowed modification, and only when the user explicitly requests it.

## Examples

| Path | Reason |
|---|---|
| `packages/mds-agents/mds-vault/libraries/base-ui.md` | Verbatim mirror of https://base-ui.com docs. |
| `packages/mds-agents/mds-vault/libraries/shadcn.md` | Verbatim mirror of https://ui.shadcn.com docs. |

All future `libraries/*.md` files inherit the forbidden marker by policy.
