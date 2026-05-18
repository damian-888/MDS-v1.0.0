---
title: Storybook ↔ Vault Parity
type: convention
status: stable
source:
  - packages/mds-guidelines/src/stories/
  - packages/mds-agents/mds-vault/components/
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [convention, storybook, vault, documentation, parity]
related:
  - "[[index]]"
  - "[[component-contract]]"
  - "[[components/index]]"
  - "[[architecture/storybook]]"
  - "[[_meta/update-policy]]"
  - "[[storybook-css-isolation]]"
---

# Storybook ↔ Vault Parity

> Narrative component documentation lives in two places: the story's `parameters.mds.docs` block and the vault's component atom. Both must be identical at all times. Whenever one is updated, the other must be updated to match.

## Rule

For every MDS component, narrative documentation is dual-homed:

| Storybook source | Vault destination | Direction |
|---|---|---|
| `parameters.mds.docs.summary` | Blockquote line under the atom's `# Title` | ↔ |
| `parameters.mds.docs.guidelines.use` (array of bullets) | `## Use` section | ↔ |
| `parameters.mds.docs.guidelines.avoid` (array of bullets) | `## Avoid` section | ↔ |
| `parameters.mds.docs.details.behaviour` | `## Behaviour` section | ↔ |
| `parameters.mds.docs.details.accessibility` | `## Accessibility` section | ↔ |
| `parameters.mds.docs.details.animation` (when present) | `## Animation` section | ↔ |
| `parameters.mds.docs.details.gotchas` | `## Gotchas` section | ↔ |
| `parameters.mds.docs.related` (`{ name, href }[]`) | `## Related` cross-link to the named component atom | ↔ |

**Identical** means: the prose is the same. Story formatting is JS-string; vault is markdown. Where the story uses code-fence-style backticks, the vault preserves them. Where the story uses an array of bullets, the vault renders a bullet list. No paraphrasing, no condensation, no expansion.

### Sections NOT covered by parity

The following vault sections are sourced from code, not from the story:

- `Purpose` — the longer-form intent. Vault-only.
- `Import` — derived from `package.json` `exports`.
- `API / Props` — derived from the component's `.tsx`.
- `Variants` / `Sizes` / `States` — derived from the `.tsx` + `.module.css`.
- `Styling Hooks` — derived from the `.module.css`'s `--MDSX-*` vars.
- `Examples` — code samples maintained in the vault.
- `Source` — code path links.

These sections do not need to match a story — they have no equivalent in `parameters.mds.docs`.

## Why

- **Single source of viewable documentation.** Designers and PMs read Storybook; agents and engineers read the vault. Drift between the two means one audience gets stale or wrong information.
- **The story is a runtime artifact.** It renders props live, so the API table is auto-generated from the component. The narrative copy (`summary`, `guidelines`, `details`) is the part a human author writes — and that copy is exactly what the vault needs too.
- **Parity is checkable.** Both formats are structured: the story's `mds.docs` is a typed object; the vault has fixed section headings. An automated parity check is straightforward.

## How to Apply

### When you edit a story

If you change any of `summary`, `guidelines.use`, `guidelines.avoid`, `details.behaviour`, `details.accessibility`, `details.animation`, `details.gotchas`, or `related` in `packages/mds-guidelines/src/stories/MDS<Name>.stories.tsx`:

1. Open the matching atom in `packages/mds-agents/mds-vault/components/MDS<Name>.md`.
2. Update the corresponding section to match the new story copy verbatim.
3. Bump `last-synced:` in the atom's frontmatter to today.

### When you edit a vault component atom's narrative sections

1. Open the matching story in `packages/mds-guidelines/src/stories/MDS<Name>.stories.tsx`.
2. Update the corresponding `parameters.mds.docs` field to match the new vault copy verbatim.
3. Run Storybook to confirm the doc page renders correctly (`pnpm storybook`).

### When you add a new component

The new component's story includes a `parameters.mds.docs` block per the project convention. The new vault atom uses the [[_meta/page-template]] `component` body order with the narrative sections sourced from the story. The two are written together. See [[workflows/add-component]].

## Examples

### Drift case

A story update like this:

```ts
guidelines: {
  use: ['... was: "Triggering an action that happens in place — save, delete, submit, send."',
        '... now: "Triggering an action that happens in place — save, delete, submit, send, dismiss."'],
  ...
}
```

requires the corresponding vault atom's `## Use` bullet to update to the new text. The story is the only source the author edits; the vault atom is the parallel doc.

### Parity check (manual)

```bash
# Open story and atom side-by-side
code packages/mds-guidelines/src/stories/MDSButton.stories.tsx
code packages/mds-agents/mds-vault/components/MDSButton.md
# Compare summary, use[], avoid[], behaviour, accessibility, animation?, gotchas
```

## Exceptions

- **`animation` field is optional.** Stories that don't describe motion (e.g. MDSText, MDSIcon) omit `details.animation`. The matching vault atom omits the `## Animation` heading too — the section is not "empty with no content" but "not present."
- **Story-only example descriptions.** A story may attach a `parameters.docs.description.story` to a specific named export (e.g. `Disabled`, `IconOnly`). These per-story-export descriptions are not part of the parity contract — they are local annotations on individual stories, not on the component as a whole. They can but need not be reflected in the vault.

## Related

- [[index]]
- [[component-contract]]
- [[components/index]]
- [[architecture/storybook]]
- [[_meta/page-template]] — defines the component section order including the parity-bound sections.
- [[_meta/update-policy]] — the general rule that vault must reflect code; this is the specific application for component narrative docs.
- [[workflows/add-component]]
