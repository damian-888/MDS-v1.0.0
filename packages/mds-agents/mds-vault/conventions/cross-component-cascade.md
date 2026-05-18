---
title: Cross-Component CSS-Variable Cascade
type: convention
status: stable
source:
  - packages/mds-components/src/MDSButton/MDSButton.module.css
  - packages/mds-components/src/MDSIcon/MDSIcon.module.css
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [convention, css-variables, cascade, composition]
related:
  - "[[index]]"
  - "[[css-modules]]"
  - "[[components/MDSButton]]"
  - "[[components/MDSIcon]]"
---

# Cross-Component CSS-Variable Cascade

> A parent component sets a child's component var via the DOM cascade. The CSS variable is the contract — neither component imports the other.

## Rule

When a parent component's variant or size determines a child component's appearance:

1. The parent **sets** the child's component var on the slot that contains the child.
2. The child **reads** its own component var as usual.
3. The DOM cascade does the rest — no JS prop drilling, no React Context, no direct knowledge between components.

The canonical example: an icon inside a button should be 16px in small buttons and 24px in large ones.

## Why

- **No coupling.** `MDSButton` does not import `MDSIcon`'s size logic; it just sets `--MDSIcon-size` on its `.iconSlot`. `MDSIcon` reads its own var as it would anywhere else.
- **Consumer-overridable.** A consumer can still override `--MDSIcon-size` on any node and the cascade resolves naturally.
- **No specificity wars.** The var is set at the deepest applicable ancestor; CSS inheritance picks it up.
- **Composable.** Any future parent that wraps `MDSIcon` can set `--MDSIcon-size` the same way — the contract is one variable name, not an API to be designed.

## How to Apply

1. **Parent side:** in the parent's CSS Module, set the child's component var on the slot element that contains the child.
   ```css
   .root[data-size='small'] .iconSlot {
     --MDSIcon-size: var(--mds-number-ramp-16);
   }
   ```
2. **Child side:** the child reads its own var, exactly as it does standalone.
   ```css
   .root {
     width: var(--MDSIcon-size);
     height: var(--MDSIcon-size);
   }
   ```
3. **DOM:** the parent's TSX must render the child inside the slot element so the CSS variable inherits down.

## Examples

```css
/* MDSButton.module.css — parent sets --MDSIcon-size on the icon slot */
.root[data-size='small'] .iconSlot {
  --MDSIcon-size: var(--mds-number-ramp-16);
}

.root[data-size='large'] .iconSlot {
  --MDSIcon-size: var(--mds-number-ramp-24);
}
```

```css
/* MDSIcon.module.css — child reads --MDSIcon-size */
.root {
  width: var(--MDSIcon-size);
  height: var(--MDSIcon-size);
}
```

```tsx
// MDSButton.tsx — renders MDSIcon inside .iconSlot, so the variable inherits
<BaseButton data-size="small">
  {/* children, label, etc. */}
  <span className={styles.iconSlot}>
    <MDSIcon name="chevron-down" />
  </span>
</BaseButton>
```

## Exceptions

### Portal-rendered children

The cascade only works through the DOM. If a child is rendered into a portal (Base UI's `Menu.Popup`, `Dialog`, etc.), it leaves the parent's `.root` subtree and the variable does not reach it. Solutions:

- Re-declare the variable on the portalled element itself in the parent's CSS Module.
- See [[components/MDSBreadcrumb]] for the canonical pattern.

## Related

- [[index]]
- [[css-modules]] — the two-layer indirection that makes this pattern safe.
- [[components/MDSButton]] — sets `--MDSIcon-size` on its icon slot.
- [[components/MDSIcon]] — reads `--MDSIcon-size`.
