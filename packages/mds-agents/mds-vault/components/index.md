---
title: Components
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/components/
  - packages/mds-components/src/
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [vault, components]
related:
  - "[[README]]"
  - "[[conventions/component-contract]]"
  - "[[libraries/base-ui]]"
---

# Components

> One file per MDS component. Each atom carries the component's API, variants, states, accessibility notes, styling hooks, and code source paths.

## Atoms

| File | Summary |
|---|---|
| [[MDSButton]] | Primary action element. 4 variants × 2 sizes. Wraps Base UI `Button`. |
| [[MDSIcon]] | Lazy-loaded icon. T-shirt or numeric sizing. Lives in `@mds/components`. |
| [[MDSText]] | Polymorphic typography utility. No CSS Module — typography classes are the sole styling surface. |
| [[MDSBadge]] | Circular status indicator. 3 types × 3 sizes. |
| [[MDSAccordion]] | Compound component wrapping Base UI `Accordion`. Single-item exclusive by default. |
| [[MDSBreadcrumb]] | Compound component. Overflow collapses into a `…` menu. |
| [[MDSFlyout]] | Floating panel surface. |
| [[MDSBottomNavigation]] | Mobile bottom nav. Compound (`.Item`). 2–5 items, optional badge dot, standard/secondary background. |
| [[MDSImage]] | Minimal `<img>` wrapper. Forces aspect ratio + object-fit; spread-through for everything else. |
| [[MDSCard]] | Flexible media + content surface. Compound (`.Header`, `.Body`, `.Actions`). 5 variant axes (background, image alignment, outline, interactive, selected). |
| [[MDSCheckbox]] | Two/three-state ticker. 32 px square with 6 px radius; discriminated `iconOnly` API; `error` switches to the red scheme. |
| [[MDSChipDismissible]] | Filled pill with a close button. Optional 40 px round avatar. Surface for active filters / removable tags. |
| [[MDSChipToggle]] | Two-state selectable pill built on Base UI `Toggle`. Unselected = stroked light; selected = accent fill + trailing check. |
| [[MDSChipFilter]] | Compound. Pill trigger + Base UI Menu of `Menu.CheckboxItem`s. Caret rotates on open. |
| [[MDSChatBubble]] | Conversation message. Incoming/outgoing alignment, message/media/loading types, two backgrounds, optional avatar + timestamp. |
| [[MDSDivider]] | 1 px line or column. Wraps Base UI `Separator`. `orientation: 'horizontal' \| 'vertical'`. |
| [[MDSLink]] | Underlined polymorphic anchor with a 16 px trailing icon. 3 alignments × 4 state colours. |
| [[MDSInputField]] | Text field with floating label (slides + shrinks on focus). Hover/focus/error/disabled/read-only states, optional leading icon, prefix/suffix, status icon or trailing action button. Mirrors Figma "Input Field" + "Input Field + Button". |
| [[MDSDropdownSelect]] | Compound single-select built on Base UI Select. Floating-label trigger + flyout popup + check-indicator items. Mirrors Figma "Dropdown Select" + "Dropdown Item" (Selection variant). |
| [[MDSMenu]] | Compound action/navigation dropdown built on Base UI Menu. Items match Figma's "Dropdown Item" Link variant. Trigger accepts `render={<MDSButton />}` for a styled button. |

## Related folders

- [[conventions/component-contract]] — the contract every component implements.
- [[libraries/base-ui]] — the headless primitives every component wraps.
- [[patterns/index]] — compositions of these components.
