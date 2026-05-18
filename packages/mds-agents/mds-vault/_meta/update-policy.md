---
title: Update Policy
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/_meta/update-policy.md
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, sync, reconciliation]
related:
  - "[[vault-rules]]"
  - "[[page-template]]"
---

# Update Policy

> When and how the vault is reconciled with the running code.

## Summary

The vault must reflect the running system. After any prompt that modifies code under `packages/`, the matching vault pages are updated before the work is claimed complete. This page defines the trigger conditions and the update procedure.

## Rules

### Trigger conditions

Reconcile the vault if **any** of these are true after the prompt:

- Code under `packages/*/src/**` changed.
- A new component, token group, pattern, workflow, or convention was introduced.
- An existing component / token / convention was renamed, removed, or had its API / values / steps changed.
- A new external library was added to the dependency tree (creates a new `libraries/<name>.md`).
- A configuration that affects the system shape changed (`tsup.config.ts`, `style-dictionary.config.mjs`, etc.).

If none of the above are true, no reconciliation is needed.

### Update procedure

1. **Identify affected atoms.** Walk the change. For each modified concept, find the atom page that covers it.
2. **Update the page.**
   - Refresh the body sections that describe the changed parts.
   - Refresh `source:` if file paths moved.
   - Set `last-synced:` to today's date.
3. **Add or remove atoms as needed.**
   - New concept → create the atom from [[page-template]], add a row to the folder's `index.md`.
   - Removed concept → mark the atom `status: deprecated` (do not delete the file). Add a "Removed" note in the body with date and reason.
4. **Update cross-links.** If a renamed concept is referenced from other pages, update those `related:` entries and inline `[[wikilinks]]`.
5. **Verify.** Open each updated page and confirm the frontmatter is valid and the body sections still match the template.

### What is NOT updated automatically

- `libraries/*` files are forbidden to edit. They are refreshed only by re-syncing from upstream when the user explicitly requests it.
- `_meta/*` files change only when the vault rules / templates / policies themselves change — not in response to code changes.

## Examples

### Component prop renamed

A renamed prop in `MDSButton.tsx` (e.g. `disabled` → `isDisabled`):

1. Open `components/MDSButton.md`.
2. Update the API / Props section.
3. Update `last-synced:`.
4. Grep the vault for `disabled` references in other atoms; update where MDSButton is referenced.

### New token group added

A new `motion.json` added to `packages/mds-tokens/src/`:

1. Create `foundation/motion.md` from the `token-group` template.
2. Add row to `foundation/index.md`.
3. If any existing component starts referencing motion tokens, update its Styling Hooks section.

### Component removed

A deprecated `MDSOldThing` removed from code:

1. Open `components/MDSOldThing.md`.
2. Set `status: deprecated`.
3. Add a "Removed" body section with date and reason.
4. Leave the file in place — historical context is useful.
