---
title: Font Pipeline
type: architecture
status: stable
source:
  - packages/mds-tokens/scripts/build-fonts.mjs
  - packages/mds-tokens/fonts/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [architecture, fonts, build, typography]
related:
  - "[[index]]"
  - "[[token-pipeline]]"
  - "[[foundation/typography]]"
---

# Font Pipeline

> A drop-in pipeline that scans `packages/mds-tokens/fonts/` for font files, copies them into `dist/fonts/`, and emits `dist/fonts.css` with `@font-face` declarations. Active in MDS today — Akkurat Pro and Manyone are bundled.

## Diagram

```
packages/mds-tokens/
├── fonts/                          dist/
│   ├── AkkuratPro-Regular.otf      ├── fonts/
│   ├── AkkuratPro-Bold.otf  ───┐   │   ├── AkkuratPro-Regular.otf
│   ├── Manyone-Regular.otf     │   │   ├── AkkuratPro-Bold.otf
│   └── Manyone-RegularItalic.otf   │   ├── Manyone-Regular.otf
│                               │   │   └── Manyone-RegularItalic.otf
└── scripts/build-fonts.mjs ────┘   └── fonts.css     (@font-face declarations)
```

## Inputs

- **Location:** `packages/mds-tokens/fonts/`.
- **Supported formats:** `.woff2` (preferred), `.woff`, `.otf`, `.ttf`.
- **Currently bundled:** `AkkuratPro-Regular.otf`, `AkkuratPro-Bold.otf`, `Manyone-Regular.otf`, `Manyone-RegularItalic.otf`.

### Filename convention

`{Family}-{Style}.{ext}`. The script parses this into the `@font-face` declaration:

- `AkkuratPro-Regular.otf` → family `"Akkurat Pro"` (PascalCase split with spaces), weight 400, style normal.
- `Manyone-RegularItalic.otf` → family `"Manyone"`, weight 400, style italic.

**Style tokens:**

| Token | Weight | Italic? |
|---|---|---|
| `Thin`, `Hairline` | 100 | no |
| `ExtraLight`, `UltraLight` | 200 | no |
| `Light` | 300 | no |
| `Regular`, `Normal`, `Book` | 400 | no |
| `Medium` | 500 | no |
| `SemiBold`, `DemiBold` | 600 | no |
| `Bold` | 700 | no |
| `ExtraBold`, `UltraBold`, `Heavy` | 800 | no |
| `Black` | 900 | no |
| `<Anything>Italic` | (above) | yes |

Append `Italic` to any token to set `font-style: italic` (e.g., `Manyone-RegularItalic.otf`).

## Outputs

- `dist/fonts/<filename>` — copies of every font file.
- `dist/fonts.css` — one `@font-face` per file, all `font-display: swap`.

`dist/fonts.css` and `dist/fonts/` are emitted only when `fonts/` has files. If the directory is empty the pipeline is a no-op.

## Build Steps

[`scripts/build-fonts.mjs`](packages/mds-tokens/scripts/build-fonts.mjs) runs as the **first** step of `pnpm --filter @mds/tokens build` — before Style Dictionary so the font assets exist before typography utility classes reference them.

```bash
pnpm --filter @mds/tokens build
# Step 1: node scripts/build-fonts.mjs        ← this pipeline
# Step 2: node style-dictionary.config.mjs
# Step 3: node scripts/verify-build.mjs
```

## Consumption

The package's `exports` field exposes both `./fonts.css` and `./fonts/*` so consumers do:

```ts
import '@mds/tokens/fonts.css';        // before tokens.css
import '@mds/tokens/tokens.css';
import '@mds/tokens/typography.css';
```

Load `fonts.css` at the app root before `tokens.css` so font-family declarations are available when typography rules reference them.

## Source

- [scripts/build-fonts.mjs](packages/mds-tokens/scripts/build-fonts.mjs)
- [packages/mds-tokens/fonts/](packages/mds-tokens/fonts/)

## Related

- [[index]]
- [[token-pipeline]]
- [[foundation/typography]]
- [[foundation/index]]
