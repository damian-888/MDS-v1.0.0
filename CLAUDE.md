# MDS — Project Instructions

MDS is a React design system (pnpm monorepo). The canonical LLM-facing
knowledge base is the **vault** at `packages/mds-agents/mds-vault/`.
Treat the vault as the single source of truth for design-system facts.

> **Vault is preloaded.** A `UserPromptSubmit` hook in
> `.claude/settings.local.json` injects the vault README (folder map) and
> `_meta/vault-rules.md` into the model context at the start of every
> turn. You always have the map + rules without reading them. Atom files
> still need to be opened on demand — but you know where they live.

## Mandatory workflow — every prompt

### Step 1 — Use the preloaded map; open the specific atom(s)

The vault README and rules are already in context (see the hook). From
the README's folder map, identify the relevant folder(s) for the
prompt and **open the specific atom file(s)** with the Read tool. Do
not begin the user's task until you have surfaced the relevant vault
content. If the vault has nothing on the topic, say so explicitly and
ask whether to add it.

Common entry points by intent:
- "build / change a component" → `components/<MDSName>.md` + `conventions/component-contract.md`
- "change a token" → `foundation/<group>.md` + `workflows/change-token.md`
- "add an icon" → `icons/index.md` + `workflows/add-icon.md`
- "theming question" → `theming/<axis>.md`
- "release" → `workflows/release.md` + `governance/index.md`

### Step 2 — Honor `forbidden-to-edit`

Pages with `forbidden-to-edit: true` in frontmatter are read-only.
`libraries/*` is always forbidden. Refuse edit requests on these files
and explain why.

### Step 3 — Do the work

Use vault content as authoritative for conventions, contracts, and
workflows. If vault content contradicts what you see in code, **trust
the code** — it ships — and flag the drift. The drift gets resolved
in Step 4.

### Step 4 — Reconcile the vault (BEFORE claiming done)

If your work changed any code under `packages/` or any design-system
fact (token, component API, convention, workflow step, …):

1. Update the matching atom page(s) in the vault.
2. Update `last-synced:` in frontmatter to today's date.
3. If you created a new component / token group / pattern / workflow,
   create the atom page using `_meta/page-template.md` as the template,
   and add a link from the folder's `index.md`.
4. If something was removed, mark the page `status: deprecated` (do not
   delete) and explain why in the body.
5. **If you edited a component story or its vault atom's narrative
   sections**, sync the other side per
   `conventions/storybook-vault-parity.md`. Stories and atoms must
   stay identical for `summary`, `Use`, `Avoid`, `Behaviour`,
   `Accessibility`, `Animation`, `Gotchas`, and `Related`.

Do not claim the task complete until the vault matches the new state
of the system.

## Source-of-truth precedence

When facts conflict:
1. **Running code** (`packages/*/src/**`) — canonical for what the system is.
2. **Figma** — canonical for design intent (what the system *should* be).
3. **Vault** — must reflect (1). If vault disagrees with (1), update vault.

## Hard prohibitions

- Never edit a page with `forbidden-to-edit: true`.
- Never claim work complete without updating the vault when applicable.
- Never invent vault content. If information isn't there, say so and ask.
- Never duplicate facts across vault pages — cross-link with `[[wikilinks]]`.
- Never break Storybook ↔ vault parity — the prose in `parameters.mds.docs`
  and the matching atom's parity-bound sections must match.

## Wikilink syntax (Obsidian)

Vault-internal links use Obsidian wikilinks. **Use vault-root-relative
paths**, not `../` paths:

- ✅ `[[components/MDSButton]]` · `[[conventions/css-modules]]` · `[[index]]` (same folder)
- ❌ `[[../components/MDSButton]]` — Obsidian doesn't resolve `..`

## Vault internals

Authoritative editing rules are at
`packages/mds-agents/mds-vault/_meta/vault-rules.md` (preloaded above).
The page template is at `_meta/page-template.md`. The parity rule is
at `conventions/storybook-vault-parity.md`.

## Hook configuration

The vault-preload hook is in `.claude/settings.local.json` under
`hooks.UserPromptSubmit`. If you ever rename, move, or remove the
vault, update the absolute paths in that hook's `command` accordingly.
