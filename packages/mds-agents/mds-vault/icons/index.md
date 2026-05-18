---
title: Icons
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/icons/
  - packages/mds-icons/src/
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [vault, icons]
related:
  - "[[README]]"
  - "[[components/MDSIcon]]"
  - "[[workflows/index]]"
---

# Icons

> The icon system — 1505 lazy-loaded icons sourced from Figma, exposed through `MDSIcon` in `@mds/components`. Code-split per icon so apps ship only what they use.

## Atoms

| File | Summary |
|---|---|
| [[size-rule]] | `size?: 'small' \| 'medium' \| 'large' \| number`. T-shirt = 16/24/32 px. Read Figma pixel size first, then pick. |
| [[lazy-loading]] | `React.lazy` per icon + Suspense fallback + Vite `preserveModules: true`. No layout shift. |
| [[registry]] | The generated `iconRegistry` + `MDSIconName` literal union. 1505 icons. |

## Related folders

- [[components/MDSIcon]] — the consumer-facing icon component (lives in `@mds/components`, not `@mds/icons`).
- [[architecture/icon-pipeline]] — Figma sync → SVGO/SVGR → Vite lib build.
- [[workflows/add-icon]] — operational steps to add a new icon.
- [[figma/index]] — icon authoring in Figma.
