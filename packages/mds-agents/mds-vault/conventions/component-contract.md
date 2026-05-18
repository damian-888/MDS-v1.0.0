---
title: Component Contract
type: convention
status: stable
source:
  - packages/mds-components/src/
  - packages/mds-components/src/MDSButton/MDSButton.tsx
  - packages/mds-components/src/MDSAccordion/MDSAccordion.tsx
  - packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.tsx
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [convention, components, contract, base-ui, css-modules]
related:
  - "[[index]]"
  - "[[naming]]"
  - "[[css-modules]]"
  - "[[tokens-policy]]"
  - "[[cross-component-cascade]]"
  - "[[components/index]]"
  - "[[libraries/base-ui]]"
  - "[[principles/source-of-truth]]"
---

# Component Contract

> The contract every MDS component implements. Built on Base UI primitives. Styled with CSS Modules referencing `@mds/tokens` CSS variables through a two-layer indirection. Design decisions originate in Figma.

## Rule

Every MDS component implements all of the following.

### 1. Headless primitive layer

Wraps a [Base UI](https://base-ui.com) primitive. Base UI is the **sole** headless layer — imported as a runtime dependency. [shadcn/ui](https://ui.shadcn.com) (Base UI flavor) is a copy-paste recipe source during scaffolding, **not a runtime dependency**.

### 2. Styling

- CSS Modules only — no CSS-in-JS, no Tailwind.
- Token references through component-scoped `--MDSX-*` vars; see [[css-modules]] for the two-layer indirection rule.
- No hex fallbacks; see [[tokens-policy]].

### 3. Client directive

`'use client'` at the top of every component file.

### 4. displayName

`displayName` set on every component — including each part of a compound component (e.g. `'MDSAccordion'`, `'MDSAccordion.Item'`, `'MDSAccordion.Trigger'`).

### 5. Function components

Plain function components — no `forwardRef` by default. Base UI's primitive handles ref forwarding through its `render` mechanism if a consumer ever needs it.

**Exception:** components that are routinely used as Base UI `render` targets for other primitives (e.g. `<MDSMenu.Trigger render={<MDSButton />}>`) MUST use `forwardRef`. Base UI clones the rendered element and attaches its own ref via `cloneElement`, which silently fails on function components in React 18 and breaks Base UI features that rely on the trigger element (popup positioning, focus return, etc.). [[components/MDSButton]] is the canonical example. Document the deviation inline in the component file and in the atom's summary.

### 6. Variant / size as data-attributes

Variant and size are string-union React props rendered as `data-variant` / `data-size` data-attributes on the root element. CSS Modules target those attributes for visual variations. **The variant value is never encoded in the CSS var name** — selectors override the vars, the vars stay generic.

### 7. Base UI runtime state attributes

Base UI's runtime state attributes (`data-pressed`, `data-disabled`, `data-panel-open`, etc.) are set automatically by the primitive — they are **not** React props.

**Caveat:** not every primitive emits every attribute. `data-pressed` is specific to Base UI's standalone `Button`; `Accordion.Trigger` does NOT emit it, so for accordion-style pressed visuals use the native CSS `:active` pseudo-class. **Verify with a DOM inspection per primitive before relying on a data-attribute.**

### 8. The `data-icon-only={iconOnly || undefined}` pattern

Boolean-mode data-attrs use the `value || undefined` pattern so the attribute is present only when truthy. CSS selector `[data-icon-only]` matches only the truthy case.

### 9. Polymorphism via Base UI's `render` prop

Polymorphism uses Base UI's `render` prop — not `asChild`, not a custom `as`.

```tsx
<MDSButton render={<a href="..." />}>Link</MDSButton>
```

### 10. className composition

`className` prop accepted, composed with `.root` via:

```ts
className={[styles.root, className].filter(Boolean).join(' ')}
```

### 11. Prop spread

All extra props spread to the Base UI primitive.

### 12. Named exports only

No default exports.

### 13. Compound components

`MDSAccordion`, `MDSBreadcrumb` use `Object.assign(Root, { Item, … })` to attach sub-parts. Each sub-part is **also** exported as a top-level named export (`MDSAccordionItem`, etc.).

Both APIs work:

```tsx
<MDSAccordion.Item> … </MDSAccordion.Item>
<MDSAccordionItem> … </MDSAccordionItem>
```

The top-level named export side-steps the unnameable-typeof issue that `Object.assign`'d compound roots otherwise create in `.d.ts` emit — consumers refer to `MDSAccordionItem` directly instead of `typeof MDSAccordion.Item`.

### 14. Accessibility enforced at the type level

Constraints that can be expressed in TypeScript **must** be expressed there.

- `MDSButton` requires both `icon: React.ReactNode` and `'aria-label': string` when `iconOnly: true` (discriminated union).
- `MDSBadge` requires `aria-label` for `success` / `error` types.

An inaccessible component cannot compile. Runtime `console.warn` / `console.error` guards are reserved for cases TypeScript can't catch.

### 15. File layout

```
src/MDS<Component>/
├── MDS<Component>.tsx
├── MDS<Component>.module.css       (omitted for MDSText)
├── MDS<Component>.test.tsx
└── index.ts
```

Workspace-level `src/css-modules.d.ts` ambient declaration enables TypeScript to recognise `*.module.css` imports.

Stories live in [`packages/mds-guidelines/src/stories/`](packages/mds-guidelines/src/stories/) — one `.stories.tsx` per component using the shared `ComponentDocs` template from `@mds/guidelines/docs-template`.

## Why

The contract exists so that:

- **Consumers can always override.** The two-layer indirection ([[css-modules]]) means any consumer can re-declare `--MDSButton-*` on any ancestor without reaching into tokens.
- **CSS Modules contain blast radius.** Class collisions across components are impossible.
- **TypeScript catches inaccessible API misuse.** Discriminated props enforce `aria-label` when icon-only, etc.
- **Polymorphism is uniform.** Every component supports `render` the same way, so the API is learnable once.
- **Compound APIs are forward-compatible.** Dual exports (`MDSAccordion.Item` AND `MDSAccordionItem`) accommodate both ergonomics and TypeScript's reluctance to name `Object.assign`'d members.

## How to Apply

See [[workflows/add-component]] for the full step-by-step. Summary:

1. Scaffold `src/MDS<Component>/` with the 4 files above.
2. (Optional) `npx shadcn add <component> --primitive=base-ui` for a starter recipe. Strip Tailwind / CVA. Replace with CSS Modules + data-attributes.
3. Write the TSX with `'use client'`, MDS-prefixed types, `displayName`, defaults inline. Discriminated unions for type-level a11y constraints.
4. Write the CSS Module per [[css-modules]] conventions.
5. Write Vitest tests covering every variant, every size, every Base UI state attribute the primitive emits.
6. Wire the build: `index.ts` re-export, top-level `src/index.ts` barrel, `tsup.config.ts` entry map, `package.json` `exports` field (both `./MDS<Component>` and `./MDS<Component>/styles.css`).
7. Write the Storybook story under `packages/mds-guidelines/src/stories/`.
8. `pnpm changeset`.

## Examples

The canonical implementations live under [`packages/mds-components/src/`](packages/mds-components/src/). Use these as templates:

- [[components/MDSButton]] — single-element wrapper of Base UI `Button`. Discriminated `iconOnly` API.
- [[components/MDSAccordion]] — compound; `Object.assign(Root, { Item, Header, Trigger, Panel })` + per-part top-level exports. Renames Base UI's `multiple` to `openMultiple`, flips default to `false`.
- [[components/MDSBreadcrumb]] — compound; overflow uses portal-rendered `Menu.Popup` (see Exceptions).
- [[components/MDSText]] — typography utility; only component without a CSS Module.

## Exceptions

- **MDSText has no CSS Module.** Typography utility classes are the entire styling surface. See [[components/MDSText]] and [[css-modules]].
- **Typography sub-property vars** are referenced directly in rule bodies. See [[css-modules]].
- **Portal-rendered sub-parts** (Base UI's `Menu.Popup`, `Dialog`, etc.) escape the `.root` cascade. Re-declare component-scoped vars on the portalled element itself. See [[components/MDSBreadcrumb]].

## Related

- [[index]]
- [[naming]]
- [[css-modules]]
- [[tokens-policy]]
- [[cross-component-cascade]]
- [[components/index]]
- [[libraries/base-ui]]
- [[principles/source-of-truth]]
- [[workflows/add-component]]
