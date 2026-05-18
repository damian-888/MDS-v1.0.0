---
title: MDS Vault
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, home, index]
related:
  - "[[_meta/vault-rules]]"
  - "[[_meta/page-template]]"
  - "[[_meta/update-policy]]"
---

# MDS Vault

> The canonical LLM-facing knowledge base for the MDS design system. Ships with the `@mds/agents` package.

## How to use this vault

1. Open the folder whose domain matches the prompt.
2. Read the folder's `index.md` to find the right atom file.
3. Read the atom file's frontmatter (route, filter, verify) before the body.
4. Treat the vault as the single source of truth for design-system facts. If the vault disagrees with code, the code wins — update the vault per [[_meta/update-policy]].

Read [[_meta/vault-rules]] before any vault edit.

## Folders

| Folder | Domain |
|---|---|
| [[_meta/index]] | Rules about the vault itself — page template, update policy, forbidden-to-edit list. |
| [[principles/index]] | Design-system tenets — the "why" behind the system. |
| [[architecture/index]] | Monorepo, dependency graph, build pipelines. |
| [[foundation/index]] | One file per token group — colours, typography, spacing, radius, breakpoints. |
| [[theming/index]] | The four runtime axes — mode, section, scheme, breakpoint. |
| [[icons/index]] | Icon system architecture, registry, size rule. |
| [[components/index]] | One file per MDS component. |
| [[patterns/index]] | Composed UI patterns / recipes. |
| [[workflows/index]] | Operational how-tos — add component, change token, sync icons, release. |
| [[conventions/index]] | Abstract rules — naming, contract, css-modules, tokens-policy. |
| [[accessibility/index]] | WCAG, forced-colors, reduced-motion. |
| [[glossary/index]] | Figma ↔ CSS terminology, shared vocabulary. |
| [[testing/index]] | Unit, integration, visual-regression conventions. |
| [[figma/index]] | Tokens Studio, Code Connect, component library structure. |
| [[libraries/index]] | External dependencies — Base UI, shadcn. Forbidden to edit. |
| [[governance/index]] | Versioning, release process, ADRs. |
| [[agents/index]] | LLM-specific guidance and prompt templates. |

## Source-of-truth precedence

1. Running code in `packages/*/src/**` — what the system is.
2. Figma — design intent (what it should be).
3. Vault — must reflect (1).
