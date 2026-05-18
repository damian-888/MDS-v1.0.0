---
title: Common Component Values
type: token-group
status: stable
source:
  - packages/mds-tokens/src/foundation.json
  - packages/mds-tokens/src/.breakpoint/
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [foundation, tokens, components, common-values]
related:
  - "[[index]]"
  - "[[radius]]"
  - "[[spacing]]"
  - "[[breakpoints]]"
  - "[[components/MDSButton]]"
  - "[[conventions/naming]]"
---

# Common Component Values

> Opinionated defaults shared across interactive component chrome — heights, padding, gap, corner radius, minimum tappable area. Breakpoint-aware.

## Token List

| Token | Purpose |
|---|---|
| `--mds-common-component-values-height-small` | Height for "small" interactive components (e.g. small buttons). |
| `--mds-common-component-values-height-large` | Height for "large" / default interactive components. |
| `--mds-common-component-values-padding` | Default horizontal padding on chrome. |
| `--mds-common-component-values-gap` | Default item-spacing between sub-parts (icon + label, etc.). |
| `--mds-common-component-values-radius` | Default corner radius shared by interactive surfaces. |
| `--mds-common-component-values-minimum-tappable-area` | Accessibility floor for touch targets (~44px on mobile). |

## Usage

These are the **first reach** when defining component defaults. They let multiple components share the same height, padding, etc. without each picking individually from `spacing` and `radius`.

```css
.root {
  --MDSButton-padding-horizontal: var(--mds-common-component-values-padding);
  --MDSButton-min-height: var(--mds-common-component-values-height-large);
  --MDSButton-corner-radius: var(--mds-radius-full);   /* explicit override for pill shape */
  padding-inline: var(--MDSButton-padding-horizontal);
  min-height: var(--MDSButton-min-height);
}
```

Components that need a one-off (e.g. a pill button using `--mds-radius-full` instead of the common radius) skip the common token and reach directly into the named scale.

## Layer

`foundation.common-component-values.*` → `{breakpoint.common-component-values.*}` → numeric primitive.

## Naming Pattern

`--mds-common-component-values-{role}`.

## Source

- [foundation.json — common-component-values](packages/mds-tokens/src/foundation.json)
- [.breakpoint/](packages/mds-tokens/src/.breakpoint/)

## Related

- [[index]]
- [[radius]]
- [[spacing]]
- [[breakpoints]]
- [[components/MDSButton]]
- [[conventions/naming]]
- [[conventions/css-modules]]
