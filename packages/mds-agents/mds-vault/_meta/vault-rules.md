---
title: Vault Rules
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/_meta/vault-rules.md
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, rules, authoring]
related:
  - "[[page-template]]"
  - "[[update-policy]]"
  - "[[forbidden-to-edit]]"
---

# Vault Rules

> Rules for editing the MDS vault. Read this before any vault edit.

## Summary

The MDS vault is the canonical LLM-facing knowledge base for the MDS design system. It ships with the `@mds/agents` package. These rules govern how pages are structured, named, edited, and reconciled with code.

## Rules

### 1. Source-of-truth precedence

1. Running code in `packages/*/src/**` is canonical for what the system **is**.
2. Figma is canonical for design intent — what the system **should be**.
3. The vault must reflect (1). When the vault disagrees with code, the vault is wrong; update it.

### 2. Folder-by-domain layout

Pages live inside one of 17 top-level folders. Each folder represents a single domain (foundation, components, workflows, …). Every folder has an `index.md` that lists the atoms in that folder and cross-links to related folders.

### 3. One file per atom

A component, a token group, a workflow, a convention — each is its own file. Do not bundle multiple atoms into one page. The advantage is targeted retrieval and one-place updates.

### 4. Mandatory frontmatter

Every page (including index files) carries the frontmatter block defined in [[page-template]]. The frontmatter is the machine signal — Claude reads it without loading the body to filter, route, and verify.

### 5. Per-type body templates

Body section order is fixed per `type` value (component, token-group, workflow, …). Section headings stay even when their content is empty so page shape is predictable. The full list is in [[page-template]].

### 6. Naming

- Non-component atom files: kebab-case (`two-layer-styling.md`, `add-component.md`).
- Component atom files: exact React identifier (`MDSButton.md`, `MDSIcon.md`).
- Folder index files: always literally `index.md`.

### 7. Linking

- Vault-internal links: Obsidian wikilinks `[[MDSButton]]`.
- Code references: repo-relative markdown links `[file.tsx](packages/mds-components/src/...)`.
- The `related:` frontmatter field lists the 3–5 most important cross-references.

### 8. Forbidden-to-edit pages

Pages with `forbidden-to-edit: true` in frontmatter are read-only. Refuse edit requests on these files and explain why. The full list is in [[forbidden-to-edit]]. `libraries/*` is always forbidden by policy.

### 9. Reconcile after work

If code under `packages/` changes, the matching vault pages must be updated before claiming work complete. Update the `last-synced:` field to today. New atoms are created from [[page-template]] and linked from the folder's `index.md`. Removed atoms are marked `status: deprecated` (not deleted).

### 10. No invention

Never write vault content that isn't grounded in code, Figma, or an explicit user instruction. If information is missing, say so and ask before adding.

### 11. No duplication

A fact lives in exactly one place. Other pages link to it. If a fact would naturally live in two places, the second place links to the first.

## Examples

### Adding a new component to the vault

1. Run the component scaffold under `packages/mds-components/src/MDS<Name>/`.
2. Copy [[page-template]] body for `type: component`.
3. Create `components/MDS<Name>.md` with frontmatter, source paths, today's date, empty body sections.
4. Add a row to `components/index.md` linking the new file.
5. If the component introduces a new convention, add the convention atom under `conventions/`.

### Updating a token

1. Edit the token JSON under `packages/mds-tokens/src/`.
2. Open `foundation/<group>.md`. Update the values table, the usage notes, and `last-synced:`.
3. If the change affects a component (e.g., MDSButton uses the changed token), open `components/MDS<Name>.md` and refresh its Styling Hooks section.
