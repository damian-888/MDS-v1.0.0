---
title: Colours
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.mode/light.json
  - packages/mds-tokens/src/.mode/dark.json
  - packages/mds-tokens/src/.section/normal.json
  - packages/mds-tokens/src/.section/subtle.json
  - packages/mds-tokens/src/.scheme/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, colours, theming]
related:
  - "[[index]]"
  - "[[palettes]]"
  - "[[theming/mode]]"
  - "[[theming/section]]"
  - "[[theming/scheme]]"
  - "[[conventions/naming]]"
---

# Colours

> Foundation colour tokens — what consumers reference. 12 semantic roles under `basic`, 4 interaction states. Theme-aware via `data-mode`, `data-section`, `data-scheme`.

## Token List

### `--mds-colours-basic-*` (12 roles)

| Role | Purpose |
|---|---|
| `--mds-colours-basic-background` | Surface background. |
| `--mds-colours-basic-accent` | Primary accent / brand colour. |
| `--mds-colours-basic-accent-secondary` | Secondary accent (used by `MDSButton` secondary variant). |
| `--mds-colours-basic-text` | Primary text on background. |
| `--mds-colours-basic-text-secondary` | Lower-emphasis text. |
| `--mds-colours-basic-link` | Inline link colour. |
| `--mds-colours-basic-text-on-accent` | Text rendered on top of accent fills (foreground for primary buttons). |
| `--mds-colours-basic-text-on-accent-secondary` | Text on secondary accent fills. |
| `--mds-colours-basic-stroke` | Default stroke / border colour. |
| `--mds-colours-basic-stroke-secondary` | Lower-emphasis stroke. |
| `--mds-colours-basic-focus` | Focus ring colour. |
| `--mds-colours-basic-scrim` | Modal / dialog backdrop. |

### `--mds-colours-interaction-states-*` (4 states × targets)

Pattern (suffix-repeat): `colours-interaction-states-{state}-{target}-{state}`. Example: `--mds-colours-interaction-states-hovered-accent-hovered`.

| State | Purpose |
|---|---|
| `hovered` | Hover overlay / colour shift. |
| `pressed` | Active / pressed colour. |
| `disabled` | Disabled fill / text. |
| `visited` | `:visited` link colour. |

See [[conventions/naming]] for the full naming convention.

## Usage

Consumers reference foundation colours through component-scoped vars (the two-layer indirection — see [[conventions/css-modules]]):

```css
.root {
  --MDSButton-fill: var(--mds-colours-basic-accent);
  --MDSButton-text-fill: var(--mds-colours-basic-text-on-accent);
  background: var(--MDSButton-fill);
  color: var(--MDSButton-text-fill);
}
```

App-level inline styles use the JS export:

```ts
import { colours } from '@mds/tokens';
<div style={{ background: colours.basic.accent }} />
// → "var(--mds-colours-basic-accent)"
```

## Layer

Foundation colours **chain through** four runtime axes:

```
foundation → mode → section → scheme → palette → hex
```

- `foundation.colours.basic.accent` references `{mode.colours.basic.accent}`.
- `mode.light.colours.basic.accent` references `{section.light.colours.basic.accent}`.
- `section.light.colours.basic.accent` references `{scheme.<scheme>.colours.basic.accent}`.
- `scheme.<name>.colours.basic.accent` references a palette leaf (e.g. `{brand light.colours.basic.accent}` → hex).

Five hops, resolved by the browser at render time. See [[theming/chain-inheritance]] for the cascade fix that keeps per-element overrides working.

## Naming Pattern

- `--mds-colours-{group}-{role}[-{modifier}]`
- Groups: `basic`, `interaction-states`.
- Roles: 12 under basic; the interaction-state group uses the suffix-repeat pattern.

## Source

- [foundation.json](packages/mds-tokens/src/foundation.json)
- [.mode/light.json](packages/mds-tokens/src/.mode/light.json), [.mode/dark.json](packages/mds-tokens/src/.mode/dark.json)
- [.section/normal.json](packages/mds-tokens/src/.section/normal.json), [.section/subtle.json](packages/mds-tokens/src/.section/subtle.json)
- [.scheme/neutral.json](packages/mds-tokens/src/.scheme/neutral.json), [.scheme/brand.json](packages/mds-tokens/src/.scheme/brand.json), [.scheme/functional.json](packages/mds-tokens/src/.scheme/functional.json)

## Related

- [[index]]
- [[palettes]]
- [[theming/mode]]
- [[theming/section]]
- [[theming/scheme]]
- [[theming/chain-inheritance]]
- [[conventions/naming]]
- [[conventions/tokens-policy]]
- [[conventions/css-modules]]
