---
title: Add Component
type: workflow
status: stable
source:
  - packages/mds-components/src/
  - packages/mds-components/tsup.config.ts
  - packages/mds-components/package.json
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [workflow, components, scaffolding, tsup, storybook]
related:
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/css-modules]]"
  - "[[conventions/naming]]"
  - "[[components/index]]"
  - "[[architecture/build-system]]"
---

# Add Component

> Eight-step recipe for adding a new MDS component. Scaffold → Base UI recipe (optional) → TSX → CSS Module → Vitest → wire build → Storybook → changeset.

## Summary

Add a new component named `MDS<Name>` that conforms to [[conventions/component-contract]]. The component wraps a Base UI primitive, ships its own CSS Module, exports a barrel, lights up in Storybook, and emits a changeset for the next release.

## Prerequisites

- Component is designed in Figma (the visual contract).
- A Base UI primitive exists that fits the component's behaviour. See [[libraries/base-ui]] for the inventory.
- Familiarity with [[conventions/component-contract]] and [[conventions/css-modules]].

## Steps

### 1. Scaffold the folder

Create `packages/mds-components/src/MDS<Component>/` with:

```
MDS<Component>/
├── MDS<Component>.tsx
├── MDS<Component>.module.css       (omitted for typography-only components — see MDSText)
├── MDS<Component>.test.tsx
└── index.ts
```

### 2. (Optional) Get a starter recipe from shadcn

```bash
npx shadcn add <component> --primitive=base-ui
```

The shadcn recipe is a starting point. **Strip the Tailwind classes** and CVA. **Replace** with CSS Modules + data-attributes per the contract.

### 3. Write the TSX

Required elements (see [[conventions/component-contract]] for the full 15-rule contract):

- `'use client'` directive at the top.
- MDS-prefixed types: `MDS<Component>Variant`, `MDS<Component>Size`, etc.
- `displayName` on every component (including each part of a compound).
- Discriminated union for type-level a11y constraints where applicable.
- Defaults inline in the function signature: `variant = 'secondary', size = 'large'`.
- Base UI's `render` prop for polymorphism.
- `data-variant` / `data-size` / boolean `data-*={value || undefined}` data-attributes on the root.
- `className={[styles.root, className].filter(Boolean).join(' ')}`.
- All other props spread to the Base UI primitive.

For **compound components**: use `Object.assign(Root, { Part, … })` AND export each part as a top-level named export.

### 4. Write the CSS Module

Per [[conventions/css-modules]]:

- Component-scoped vars at the top of `.root` (Figma vocabulary: `fill`, `stroke`, `corner-radius`, `padding-horizontal`, `item-spacing`).
- Section order: Base → Variants → Sizes → Mode toggles → Disabled → Focus → Cross-cutting.
- `/* ---- Section ---- */` dividers.
- No hex fallbacks (see [[conventions/tokens-policy]]).
- Logical properties for RTL (`padding-inline`, `padding-block`).
- Mandatory cross-cutting rules: `prefers-reduced-motion` and `forced-colors`.
- **Portal-rendered sub-parts:** declare component vars on the portalled element itself, not on `.root`. See [[components/MDSBreadcrumb]] for the canonical pattern.

### 5. Write Vitest tests

`MDS<Component>.test.tsx`. Cover:

- Renders.
- Every variant (each emits the right `data-variant`).
- Every size.
- Every Base UI state attribute the primitive emits. **Verify with a DOM inspection per primitive** — not every primitive emits every attribute (`Accordion.Trigger` does NOT emit `data-pressed`).
- Prop forwarding.
- Polymorphism via `render` prop where relevant.
- For discriminated a11y constraints, add a `@ts-expect-error` block proving the type rejects misuse.

### 6. Wire the build

Update three files:

- **`MDS<Component>/index.ts`** — re-export the public API.
- **`src/index.ts`** (top-level barrel) — re-export from the new folder.
- **`tsup.config.ts`** — add `MDS<Component>/index` to the `entry` map.
- **`package.json`** — add to `exports`:
  - `./MDS<Component>` → the JS entry
  - `./MDS<Component>/styles.css` → the emitted CSS

### 7. Write a Storybook story

`packages/mds-guidelines/src/stories/MDS<Component>.stories.tsx`:

```tsx
import type { MDSMeta } from '@mds/guidelines/docs-template';
import { MDS<Component> } from '@mds/components';

const meta: MDSMeta<typeof MDS<Component>, ProxyArgs> = {
  component: MDS<Component>,
  // ...
};
export default meta;
```

For compound components, cast `component:` to `ComponentType<Props & ProxyArgs>` so the meta type doesn't reference an unexported inner root function.

### 8. Changeset

```bash
pnpm changeset
```

Select `@mds/components`, pick a bump type (patch / minor / major), write the message. The changeset file lands in `.changeset/` to be consumed by the next `release` run.

## Verification

```bash
pnpm --filter @mds/components test           # 0 failures
pnpm --filter @mds/components typecheck      # 0 errors
pnpm --filter @mds/components build          # exits 0
pnpm --filter @mds/guidelines dev            # story renders on :6006
```

Then visually verify in Storybook across all `data-mode` / `data-section` / `data-scheme` / breakpoint combinations.

## Common Pitfalls

- **Forgetting `'use client'`** — the component will not work in RSC consumers.
- **Reaching past `--MDSX-*` to `--mds-*` in rule bodies** — violates the two-layer indirection. Test by trying to override the component var on an ancestor; if it doesn't take effect, you're reaching past it.
- **Declaring component vars on `.root` for portal-rendered popups** — the vars won't reach the portalled element. Declare them on the portalled element instead. See [[components/MDSBreadcrumb]].
- **Hex fallback** — strictly forbidden. Add the missing token to `@mds/tokens` instead. See [[conventions/tokens-policy]].
- **Relying on `data-pressed` on every Base UI primitive** — only `Button` emits it. For `Accordion.Trigger`, use CSS `:active`.
- **Missing `displayName`** — required on every component, including compound parts.
- **Skipping the changeset** — without it, the next release won't pick up the new component.

## Related

- [[index]]
- [[conventions/component-contract]]
- [[conventions/css-modules]]
- [[conventions/naming]]
- [[conventions/tokens-policy]]
- [[components/index]]
- [[architecture/build-system]]
- [[release]]
- [[dev-loop]]
