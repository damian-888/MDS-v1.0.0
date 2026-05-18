---
title: Size Rule
type: convention
status: stable
source:
  - packages/mds-components/src/MDSIcon/MDSIcon.tsx
  - packages/mds-components/src/MDSIcon/MDSIcon.module.css
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [icons, size, t-shirt, figma]
related:
  - "[[index]]"
  - "[[components/MDSIcon]]"
  - "[[foundation/number-ramp]]"
  - "[[conventions/cross-component-cascade]]"
---

# Size Rule

> `size?: 'small' | 'medium' | 'large' | number`. T-shirt names map to 16 / 24 / 32 px. Numeric values pass through verbatim. **When implementing from Figma, read the icon's pixel size first** and pick the t-shirt name if it matches; otherwise pass the number.

## Rule

Icon size is controlled by the `size` prop on `<MDSIcon>`.

| `size` value | Result |
|---|---|
| `'small'` | 16px — resolved via `--mds-number-ramp-16`. |
| `'medium'` (default) | 24px — resolved via `--mds-number-ramp-24`. |
| `'large'` | 32px — resolved via `--mds-number-ramp-32`. |
| `<number>` | Exact pixel size — passed verbatim through inline `style`. |

### How it resolves at runtime

- **Semantic size** → `data-size="small|medium|large"` attribute on the SVG. The CSS Module's `.root[data-size='...']` selector sets `--MDSIcon-size`.
- **Numeric size** → no `data-size` attribute. `--MDSIcon-size: <n>px` is set via inline `style` (single source of truth — the `.root` rule body always reads from `--MDSIcon-size`).

### Sourcing rule (mandatory when implementing from Figma)

When implementing a component from Figma:

1. **Read the icon's pixel size from the Figma node first.**
2. If the size **matches** 16 / 24 / 32 → use the corresponding t-shirt name (`small` / `medium` / `large`).
3. If the size **doesn't match** any of the three → pass the number directly (`size={10}`).

This rule applies inside the component's render code AND inside any consumer wiring. T-shirt names are preferred when applicable so the semantic scale stays meaningful; numeric values are the documented escape hatch for off-spec sizes Figma actually uses.

## Why

- **Token discipline.** The t-shirt names route through `--mds-number-ramp-{16,24,32}` so icon sizing stays in the token system.
- **Escape hatch is loud.** Numeric `size={n}` is rare. When a designer specifies a non-standard size in Figma, the numeric value is preserved verbatim — no rounding or substitution.
- **Single source of truth.** Both modes write to the same CSS variable (`--MDSIcon-size`); the rule body never branches on prop type.

## How to Apply

```tsx
import { MDSIcon } from '@mds/components';

<MDSIcon name="chevron-down" size="small" />          // 16px
<MDSIcon name="warning" size="medium" title="Invalid input" />  // 24px, accessible
<MDSIcon name="heart" size="large" />                 // 32px
<MDSIcon name="dot" size={10} />                      // 10px (numeric escape hatch)
```

### Inside another component

A parent component can set the icon size by writing to `--MDSIcon-size` on the icon slot. The MDSIcon child reads the variable through the DOM cascade — no need to pass `size` as a prop. See [[conventions/cross-component-cascade]] for the canonical pattern (MDSButton's size determines MDSIcon's size automatically).

## Examples

### Figma source says 24px

```tsx
<MDSIcon name="heart" size="medium" />   // matches → use t-shirt name
```

### Figma source says 10px

```tsx
<MDSIcon name="dot" size={10} />          // doesn't match → numeric
```

### Figma source says 16px inside a small button

```tsx
// Inside MDSButton — the parent sets --MDSIcon-size via the icon slot.
// MDSIcon doesn't need an explicit `size` prop.
<span className={styles.iconSlot}>
  <MDSIcon name="chevron-down" />
</span>
```

## Exceptions

None — the rule is total: if Figma says a non-{16,24,32} size, pass the number directly. Substituting to the nearest t-shirt size would silently disagree with the design.

## Related

- [[index]]
- [[components/MDSIcon]]
- [[foundation/number-ramp]]
- [[conventions/cross-component-cascade]]
- [[conventions/component-contract]]
