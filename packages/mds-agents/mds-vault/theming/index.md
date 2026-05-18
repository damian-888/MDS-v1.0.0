---
title: Theming
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/theming/
  - packages/mds-tokens/src/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, theming, mode, section, scheme, breakpoint]
related:
  - "[[README]]"
  - "[[foundation/index]]"
---

# Theming

> The four runtime-switchable axes that swap foundation values. Three colour axes (`mode`, `section`, `scheme`) switch via `[data-*]` attributes; `breakpoint` switches via `@media (min-width)`. All four compose orthogonally.

## Atoms

| File | Summary |
|---|---|
| [[mode]] | `data-mode` — `light` (default) \| `dark`. Auto-falls-back to `@media (prefers-color-scheme: dark)`. |
| [[section]] | `data-section` — `normal` (default) \| `subtle`. Palette intensity within the active scheme. |
| [[scheme]] | `data-scheme` — `neutral` (default) \| `brand` \| `success` \| `error` \| `warning` \| `info`. |
| [[breakpoint]] | `@media (min-width)` — `mobile` (default) \| `tablet` (768px+) \| `laptop` (1040px+) \| `desktop` (1440px+). |
| [[chain-inheritance]] | The CSS substitution behavior fix that makes per-element axis overrides actually re-resolve foundation tokens. |
| [[consumer-api]] | The end-user API — `<html data-mode="dark" data-scheme="brand">` and how the four axes compose. |

## Related folders

- [[foundation/index]] — the token layer the theming axes swap.
- [[architecture/token-pipeline]] — how these layers are built.
- [[components/index]] — components that work correctly across all axis combinations.
