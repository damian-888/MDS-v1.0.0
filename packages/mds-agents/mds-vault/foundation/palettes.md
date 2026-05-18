---
title: Palettes
type: token-group
status: stable
source:
  - packages/mds-tokens/src/base/
  - packages/mds-tokens/src/base/functional/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, palettes, base]
related:
  - "[[index]]"
  - "[[colours]]"
  - "[[theming/scheme]]"
  - "[[theming/section]]"
---

# Palettes

> 24 leaf palette files. The bottom of the colour resolution chain — what `--mds-colours-basic-accent` ultimately resolves to. Switched indirectly through `data-scheme`, `data-section`, `data-mode`.

## Token List

### Base palettes (`src/base/`) — 8 files

| File | Purpose |
|---|---|
| `.white.json` | White base palette, normal section. |
| `.white subtle.json` | White base palette, subtle section. |
| `.black.json` | Black base palette, normal. |
| `.black subtle.json` | Black base palette, subtle. |
| `.brand light.json` | Brand-light palette, normal. |
| `.brand light subtle.json` | Brand-light palette, subtle. |
| `.brand dark.json` | Brand-dark palette, normal. |
| `.brand dark subtle.json` | Brand-dark palette, subtle. |

### Functional palettes (`src/base/functional/`) — 16 files

For each of `green`, `red`, `orange`, `blue`:

```
.<colour> light.json
.<colour> light subtle.json
.<colour> dark.json
.<colour> dark subtle.json
```

4 colours × 2 modes × 2 sections = 16 files.

## Usage

Consumers **do not reference palette tokens directly** — they reference foundation tokens (`--mds-colours-basic-*`), and the active mode/section/scheme determines which palette resolves.

For numeric primitives (e.g. extracting a specific hex for a chart library), use the `palettes` JS export:

```ts
import { palettes } from '@mds/tokens';
const successHex = palettes['green light'].colours.basic.accent;
```

(The palettes export resolves at build time — not theme-aware. Use foundation CSS vars for theme-aware behaviour.)

## Layer

Palettes sit at the bottom of the colour chain:

```
foundation → mode → section → scheme → PALETTE → hex
```

The `[data-scheme="<name>"]` attribute, combined with the active section and mode, selects which palette file's leaf value is used.

## Naming Pattern

- Palette file: `.<base> <variant>[ subtle].json` — spaces in the name reflect Tokens Studio's file layout. The space is preserved in JS export keys: `palettes['green light']`.
- Resolved CSS var (intermediate, not consumer-facing): `--mds-{base}-{variant}-colours-basic-{role}` — e.g. `--mds-green-light-subtle-colours-basic-text`.

## Source

- [base/](packages/mds-tokens/src/base/)
- [base/functional/](packages/mds-tokens/src/base/functional/)

## Related

- [[index]]
- [[colours]]
- [[theming/scheme]]
- [[theming/section]]
- [[theming/mode]]
- [[theming/chain-inheritance]]
- [[js-exports]]
