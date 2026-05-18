---
title: Conventions
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/conventions/
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [vault, conventions, rules]
related:
  - "[[README]]"
  - "[[principles/index]]"
---

# Conventions

> Abstract rules the system follows — naming, component contract, CSS Modules, tokens policy, cross-component cascade.

## Atoms

| File | Summary |
|---|---|
| [[component-contract]] | The contract every MDS component implements. |
| [[naming]] | Kebab-case, British spelling, `--mds-` prefix on tokens, PascalCase + `--MDSX-` on component vars. |
| [[tokens-policy]] | No hex fallbacks. Components reference tokens with clean `var(--name)` only. |
| [[css-modules]] | CSS Modules + two-layer indirection. Component vars consume tokens; rule bodies consume component vars. |
| [[cross-component-cascade]] | A parent component sets a child's component var via the DOM cascade. |
| [[storybook-vault-parity]] | Narrative component documentation is dual-homed in the story and the vault atom. They must be identical. |
| [[storybook-css-isolation]] | Bidirectional CSS isolation contract for Storybook docs ↔ components: `@scope`-bounded preview.css using `:scope:scope X`, plus Storybook's own `.sb-unstyled` exclusion and class-only component CSS. |

## Related folders

- [[principles/index]] — the tenets these conventions enforce.
- [[components/index]] — components that implement the conventions.
- [[accessibility/index]] — accessibility-specific conventions.
