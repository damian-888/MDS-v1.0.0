---
title: Change Token
type: workflow
status: stable
source:
  - packages/mds-tokens/src/
  - packages/mds-tokens/scripts/verify-build.mjs
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [workflow, tokens, figma, style-dictionary]
related:
  - "[[index]]"
  - "[[foundation/index]]"
  - "[[architecture/token-pipeline]]"
  - "[[conventions/tokens-policy]]"
  - "[[figma/index]]"
---

# Change Token

> Tokens originate in Figma Tokens Studio. The codebase consumes the exported JSON. Workflow: edit in Tokens Studio → export → rebuild → propagate to consumers.

## Summary

Adding, renaming, or changing a token value. Tokens Studio is the canonical source; the JSON files under `packages/mds-tokens/src/` are exports. Edit in Tokens Studio, push the updated JSON, run the build, and the new value propagates through the 5-hop var chain to every consumer at render time — no component code changes needed.

## Prerequisites

- Access to the MDS Figma file and the Tokens Studio plugin.
- Familiarity with [[conventions/naming]] (token naming rules) and [[foundation/index]] (which token groups exist).

## Steps

### 1. Edit in Tokens Studio

Open the MDS Figma file → Tokens Studio plugin. Locate the token in the right layer:

- **Adding a new foundation token** (consumer-facing): edit `foundation.json` set.
- **Changing a colour value** at the palette level: edit the relevant `base/` or `base/functional/` palette set.
- **Changing a mode / section / scheme binding**: edit the corresponding `.mode/` / `.section/` / `.scheme/` set.
- **Changing breakpoint values** (typography size at desktop, etc.): edit the relevant `.breakpoint/<viewport>` set.

### 2. Export from Tokens Studio

Tokens Studio writes JSON files into `packages/mds-tokens/src/`. The export should preserve the layered structure. Verify the diff makes sense before committing.

### 3. Rebuild the token package

```bash
pnpm --filter @mds/tokens build
```

This runs three steps:

1. `scripts/build-fonts.mjs` — re-emits `dist/fonts.css` if `fonts/` changed.
2. `style-dictionary.config.mjs` — 17 SD instances → 6 chunk files → `tokens.css` bundle + `typography.css` + `tokens.js` + `tokens.d.ts`.
3. `scripts/verify-build.mjs` — 10 post-build assertions; throws on regression.

If a referenced token is missing (`{ref}` in the JSON doesn't resolve), the build fails with a stack trace at the offending file/path.

### 4. Verify in Storybook

```bash
pnpm --filter @mds/guidelines dev
```

Storybook hot-loads token CSS changes. If HMR doesn't pick up the change, restart Storybook — Vite caches workspace package imports.

Check the change across:

- All four `data-mode` × `data-section` × `data-scheme` combinations that should be affected.
- All four breakpoints (resize the canvas).

### 5. (If consumer-facing) update vault

If the change adds, renames, or removes a foundation token, update [[foundation/index]] and the relevant per-group atom. See [[_meta/update-policy]].

### 6. Changeset + release

```bash
pnpm changeset
```

Select `@mds/tokens` (and any package that surfaces the change in its public API — typically just `@mds/tokens`). A token rename is a breaking change; a value change is patch or minor depending on the impact.

## Verification

```bash
pnpm --filter @mds/tokens build         # exits 0; verify-build emits "OK: <10 checks>"
pnpm --filter @mds/components test      # 0 failures (consumers didn't break)
```

Visual: confirm the change appears in every relevant theme combination in Storybook.

## Common Pitfalls

- **Unresolved reference:** `{breakpoint.radius.full}` typo (missing closing brace, wrong key) → build throws `brokenReferences`. Read the stack trace, fix the JSON.
- **Bare numeric value:** dimensional tokens with `type: "number"` need `px` appended. The `mds/value/number-to-px` transform handles `type: "number"`. If a value emits as a bare number, check its `type` in the JSON.
- **Font-weight name:** font weights live as text values (`"Regular"`, `"Bold"`). The `mds/value/font-weight-name-to-number` transform converts them. Unknown weight names emit verbatim and browsers reject them.
- **Adding a hex fallback in a component to work around a missing token:** explicitly forbidden ([[conventions/tokens-policy]]). Add the token in Tokens Studio + rebuild instead.
- **Forgetting to bump consumer packages:** if a token rename breaks a component, the changeset must include the broken consumer at the appropriate bump level.
- **Token change without vault update:** stale atom. The next agent reading the vault sees old values. Per [[_meta/update-policy]], update the matching atom and bump `last-synced:`.

## Related

- [[index]]
- [[foundation/index]]
- [[architecture/token-pipeline]]
- [[architecture/font-pipeline]]
- [[conventions/tokens-policy]]
- [[conventions/naming]]
- [[figma/index]]
- [[_meta/update-policy]]
- [[release]]
