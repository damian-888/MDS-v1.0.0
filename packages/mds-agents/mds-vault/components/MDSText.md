---
title: MDSText
type: component
status: stable
source:
  - packages/mds-components/src/MDSText/MDSText.tsx
  - packages/mds-guidelines/src/stories/MDSText.stories.tsx
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [component, typography, polymorphic]
related:
  - "[[MDSButton]]"
  - "[[MDSBreadcrumb]]"
  - "[[MDSAccordion]]"
  - "[[index]]"
  - "[[foundation/typography]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/css-modules]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSText

> A polymorphic text utility. Renders a single HTML element with one of the eight MDS type styles. Choose the tag with `render`, pick the style with `variant`.

## Purpose

Render text with one of the eight foundation typography styles. Polymorphic via Base UI's `useRender` — defaults to `<span>`, can become any element. **No CSS Module** — typography utility classes from `@mds/tokens/typography.css` are the entire styling surface. Documented exception to the two-layer indirection rule.

## Use

- Anywhere a fragment of text needs to inherit MDS type tokens without authoring a new component or CSS module.
- When you need polymorphism — render an `<h1>`, `<p>`, `<a>`, or `<label>` while keeping the same type style.
- As the canonical way to apply MDS typography inside other MDS components (e.g. Accordion trigger label, Breadcrumb item, custom card titles).
- When the rendered element semantics matter (`<h1>`/`<h2>`/`<p>`/`<label>`) — `render` keeps semantics and visuals independent.

## Avoid

- For long-form prose where you would otherwise reach for a paragraph or heading hierarchy — use `render` to set the correct element instead of nesting `<span>`s.
- Setting font-family, font-size, weight, line-height, or letter-spacing inline. If a token is missing, add it to `@mds/tokens`, do not work around it here.
- Using `microcopy` for primary content. It is intended for fine print, helper text, and dense labels.
- Repurposing the heading variants (`h1` / `h2` / `h3`) on `<span>` for visual hierarchy. Match the rendered element to the document outline.

## Import

```ts
import { MDSText } from '@mds/components';
import '@mds/tokens/typography.css';   // REQUIRED — typography utility classes live here
```

Consumers of `MDSText`, `MDSAccordion`, or `MDSBreadcrumb` must import `@mds/tokens/typography.css` in addition to `@mds/tokens/tokens.css`. See [[architecture/dependency-graph]].

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'body-large' \| 'body' \| 'body-bold' \| 'body-underline' \| 'microcopy'` | `'body'` | Type style. Maps 1:1 to a `.mds-typography-*` utility class emitted by `@mds/tokens`. |
| `render` | Base UI `RenderProp` | `<span />` | Polymorphism — pass any element to change the rendered tag. |
| `children` | `React.ReactNode` | — | Text content. Any ReactNode works. |
| `className` | `string` | — | Composed with the typography utility class. |
| All `HTMLAttributes<HTMLElement>` (except `children`) | — | — | Spread to the rendered element. |

## Variants

The eight styles from [[foundation/typography]]:

| Variant | Utility class | Use for |
|---|---|---|
| `h1` | `.mds-typography-h1` | Page-level heading. |
| `h2` | `.mds-typography-h2` | Section heading. |
| `h3` | `.mds-typography-h3` | Sub-section heading. |
| `body-large` | `.mds-typography-body-large` | Lead paragraph. |
| `body` (default) | `.mds-typography-body` | Default paragraph. |
| `body-bold` | `.mds-typography-body-bold` | Emphasised body text. |
| `body-underline` | `.mds-typography-body-underline` | Underlined body — typically link text. |
| `microcopy` | `.mds-typography-microcopy` | Captions, footnotes. |

## Sizes

None — size is determined by `variant`. All variants are breakpoint-aware (font-size etc. swap per viewport).

## States

`MDSText` has no interactive states. The rendered element may have native states (e.g. `:hover` on an `<a />`-rendered link).

## Behaviour

Built on Base UI's `useRender` — the `render` prop accepts a React element (default `<span/>`) whose tag and outer props are preserved. The `variant` is applied as both a `data-variant` attribute and the matching `.mds-typography-*` class. `className`, `id`, ARIA props, and event handlers all forward.

## Accessibility

The component is presentation-only — it carries no implicit role. Use `render` to choose the semantically correct element: `<h1>`–`<h3>` for headings, `<p>` for paragraphs, `<label>` for form labels, `<a>` for links. Visible focus rings, link semantics, and disabled state come from the rendered element, not from MDSText itself.

## Styling Hooks

None at the component level. Restyling typography is done by overriding the `--mds-typography-*` foundation vars or the utility class itself. See [[foundation/typography]].

This is the **documented exception** to the component contract — `MDSText` has no `--MDSText-*` vars because there's no scope to declare them. See [[conventions/css-modules]].

## Examples

```tsx
import { MDSText } from '@mds/components';

// Default — renders <span> with body style.
<MDSText>Inline text.</MDSText>

// Heading — element matches semantic level
<MDSText variant="h1" render={<h1 />}>Page title</MDSText>
<MDSText variant="h2" render={<h2 />}>Section heading</MDSText>

// Paragraph
<MDSText variant="body-large" render={<p />}>Lead paragraph.</MDSText>

// Link-styled text (still a span unless render overrides)
<MDSText variant="body-underline" render={<a href="/docs" />}>Documentation</MDSText>

// Microcopy
<MDSText variant="microcopy" render={<small />}>Posted 2 hours ago</MDSText>
```

## Gotchas

The variant generic order (h1 → microcopy) reflects visual prominence, not the typographic scale published in `@mds/tokens`. `body-underline` is the only variant whose visual difference comes from `text-decoration` (the other underline-on-hover patterns belong on `<a>`, not on body copy).

## Source

- [MDSText.tsx](packages/mds-components/src/MDSText/MDSText.tsx)
- [MDSText.stories.tsx](packages/mds-guidelines/src/stories/MDSText.stories.tsx)

## Related

- [[MDSButton]]
- [[MDSBreadcrumb]]
- [[MDSAccordion]]
- [[index]]
- [[foundation/typography]]
- [[conventions/component-contract]]
- [[conventions/css-modules]] — see Exceptions for why MDSText has no CSS Module.
- [[conventions/storybook-vault-parity]]
