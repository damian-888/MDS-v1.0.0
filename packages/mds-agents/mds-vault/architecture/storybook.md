---
title: Storybook
type: architecture
status: stable
source:
  - packages/mds-guidelines/.storybook/main.ts
  - packages/mds-guidelines/.storybook/preview.ts
  - packages/mds-guidelines/.storybook/preview.css
  - packages/mds-guidelines/.storybook/theme.ts
  - packages/mds-guidelines/.storybook/manager-head.html
  - packages/mds-guidelines/.storybook/manager.ts
  - packages/mds-guidelines/src/stories/
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [architecture, storybook, vite, docs, isolation]
related:
  - "[[index]]"
  - "[[build-system]]"
  - "[[components/index]]"
---

# Storybook

> Storybook 10 in Vite mode. Lives in `@mds/guidelines` (private package). Imports MDS tokens + components at the preview level so every story renders in the active theme. Strict CSS isolation between Storybook chrome and rendered components.

## Diagram

```
@mds/guidelines/
└── .storybook/
    ├── main.ts                # framework + addon config, Vite builder
    ├── preview.ts             # imports tokens.css, typography.css, fonts.css, styles.css
    ├── preview.css            # iframe-scoped chrome styling
    ├── theme.ts               # manager (sidebar/toolbar) theme
    ├── manager.ts             # registers the manager theme
    ├── manager-head.html      # @font-face + manager iframe styles
    ├── themeToolbar.tsx       # the live mode/section/scheme toggle UI
    └── accentContrast.ts      # contrast helper for the theme toolbar

└── src/stories/
    ├── MDSButton.stories.tsx  # one .stories.tsx per component
    └── ... (one per MDS component)
```

## Inputs

- The three runtime packages at dev-time: `@mds/tokens`, `@mds/icons`, `@mds/components`.
- The `ComponentDocs` template from `@mds/guidelines/docs-template`.

## Outputs

A static Storybook docs site (when `pnpm --filter @mds/guidelines build-storybook` is run). For local development the dev server runs on `:6006`.

## Build Steps

```bash
pnpm --filter @mds/guidelines dev               # start Storybook on :6006
pnpm --filter @mds/guidelines build-storybook   # static export
```

## CSS isolation model (the bleed-into-components problem)

Rules in [`.storybook/preview.css`](packages/mds-guidelines/.storybook/preview.css) must NOT reach into rendered component output.

**Pattern:** every broad tag selector (`button`, `a`, `p`, `li`) ends in `:not(.sb-story *)`.

- `.sb-story` is Storybook's wrapper around the rendered story.
- Component output always lives inside `.sb-story`.
- Storybook chrome (zoom buttons, "Show code" toggles, controls) always lives outside.
- `:not(.sb-story *)` is structural — no per-component class exclusions are needed when adding new MDS components.

`@layer` was considered for an even stronger guarantee but rejected: Storybook's own emotion-injected CSS is unlayered, and any named layer (containing preview.css) loses to unlayered Storybook defaults for ordinary properties.

See [`preview.css`'s file header](packages/mds-guidelines/.storybook/preview.css) for the full rationale.

## Manager vs. preview chrome

Storybook splits its UI into two iframes:

| Iframe | Styled by | What lives there |
|---|---|---|
| Manager (sidebar + toolbar) | `theme.ts` + `manager-head.html` | The Storybook UI itself. |
| Preview / canvas + docs | `preview.css` (loaded via `preview.ts`) | Where stories render. |

`@font-face` declarations for MDS fonts live in `manager-head.html` so both iframes pick them up (the manager iframe doesn't load `preview.css`).

## Per-component stories

One `.stories.tsx` per component, using:

```tsx
const meta: MDSMeta<typeof MDSButton, ProxyArgs> = {
  component: MDSButton,
  // ...
};
```

For compound components (`MDSAccordion`, `MDSBreadcrumb`) cast `component:` to `ComponentType<Props & ProxyArgs>` so the meta type doesn't reference an unexported inner root function.

All stories use the shared `ComponentDocs` template from `@mds/guidelines/docs-template`.

## Source

- [.storybook/main.ts](packages/mds-guidelines/.storybook/main.ts)
- [.storybook/preview.ts](packages/mds-guidelines/.storybook/preview.ts)
- [.storybook/preview.css](packages/mds-guidelines/.storybook/preview.css)
- [.storybook/theme.ts](packages/mds-guidelines/.storybook/theme.ts)
- [.storybook/manager-head.html](packages/mds-guidelines/.storybook/manager-head.html)
- [src/stories/](packages/mds-guidelines/src/stories/)

## Related

- [[index]]
- [[build-system]]
- [[components/index]]
- [[workflows/dev-loop]]
