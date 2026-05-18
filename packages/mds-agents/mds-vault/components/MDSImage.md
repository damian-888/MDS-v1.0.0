---
title: MDSImage
type: component
status: stable
source:
  - packages/mds-components/src/MDSImage/MDSImage.tsx
  - packages/mds-components/src/MDSImage/MDSImage.module.css
  - packages/mds-guidelines/src/stories/MDSImage.stories.tsx
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [component, image, media]
related:
  - "[[MDSCard]]"
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSImage

> A minimal `<img>` wrapper that forces an aspect ratio and an object-fit. Provides predictable layout for media slots — image boxes do not jump as images load — while leaving all standard image attributes accessible via prop spread.

## Purpose

Provide a primitive for any place in the system that renders a raster image (cards, hero blocks, editorial layouts, avatars-in-future). The component reserves the box space up front, so containers that depend on its size do not re-flow as the image network-loads. Beyond that it stays out of the way — every standard `<img>` attribute remains forwardable.

## Use

- For hero, card, and editorial media where the surrounding layout depends on a known aspect ratio.
- Inside `MDSCard` as the `media` slot — the card relies on the image keeping its box without depending on the natural image dimensions.
- With `fill` when the image lives inside a fixed-shape parent (e.g. `MDSCard` side-aligned variants) and must fill it on both axes.
- When the image is content (carries information). Pair every visible image with a meaningful `alt`.
- When the image is decoration. Pass `alt=""` so assistive technology skips it.

## Avoid

- For SVG icons. Use `MDSIcon` — it owns the size cascade and is keyed to the icon registry.
- For images that must respond to viewport with multiple sources. v1 does not ship `srcSet`/`sizes` helpers — pass them through and let the browser handle it.
- As an avatar or persona surface. Build a dedicated avatar component when that pattern arrives.
- Without an `alt`. The prop is required at the type level for a reason.
- Using `fill` without a parent that has an explicit height — the image will collapse to zero.

## Import

```ts
import { MDSImage } from '@mds/components';
import '@mds/components/MDSImage/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `src` | `string` | — **required** | Image URL. |
| `alt` | `string` | — **required** | Accessible description. Empty string for decorative images. |
| `aspectRatio` | `string \| number` | `'16/9'` | Any valid CSS `aspect-ratio` value (`'16/9'`, `1.5`, `'auto'`). Ignored when `fill` is `true`. |
| `objectFit` | `'cover' \| 'contain'` | `'cover'` | Flips the `data-object-fit` attribute. |
| `fill` | `boolean` | `false` | Fill parent on both axes (`width: 100%; height: 100%`). Suppresses inline `aspectRatio`. Sets `data-fill` attribute. |
| `render` | Base UI `RenderProp` | `<img />` | Polymorphism — swap for `<picture>`, Next `<Image>`, etc. |

All other `<img>` attributes (`srcSet`, `sizes`, `loading`, `decoding`, …) are spread through.

## Variants

| Axis | Values |
|---|---|
| `objectFit` | `cover` (default), `contain` |
| `fill` | `false` (default), `true` |

`aspectRatio` is a value axis, not a variant — any string or number is valid.

## States

The component is presentational and exposes no interaction states. `data-object-fit` and `data-fill` are the only state attributes.

## Behaviour

Renders an `<img>` (overridable via `render`). The `aspectRatio` prop is set via inline CSS so per-instance overrides do not require new style rules; `objectFit` flips a data-attribute (`data-object-fit`) that the CSS Module reads to set `object-fit`. Width defaults to `100%` so the box fills its container; height is derived from the aspect ratio.

When `fill={true}`, the inline `aspectRatio` style is suppressed and `data-fill` is set on the element. The CSS rule `.root[data-fill]` overrides width to `100%`, height to `100%`, and aspect-ratio to `auto`, so the image occupies its parent's full bounding box. The parent must have an explicit height (or be a flex/grid cell with a defined cross-axis size) for fill to have effect.

## Accessibility

`alt` is required at the type level. Pass an empty string for decorative images — that explicitly removes the image from the accessibility tree. The component does not add `role` or other ARIA props; native `<img>` semantics carry through unchanged.

## Animation

No animation. `prefers-reduced-motion: reduce` is honoured (no transitions or animations declared).

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSImage-object-fit` | `cover` (overridden by `data-object-fit`) |
| `--MDSImage-object-position` | `center` |
| `--MDSImage-corner-radius` | `0` — set on a parent that clips, or on the image directly when used standalone |
| `[data-fill]` (attribute) | overrides `width`, `height`, and `aspect-ratio` for fill mode (no var; structural CSS rule). |

## Examples

```tsx
import { MDSImage } from '@mds/components';

// Hero
<MDSImage src="/hero.jpg" alt="The product on a desk" aspectRatio="21/9" />

// Card media
<MDSImage src="/cat.jpg" alt="A cat by a window" aspectRatio="16/9" />

// Decorative texture
<MDSImage src="/grain.jpg" alt="" aspectRatio="auto" objectFit="contain" />

// Fill mode — parent must have explicit height
<div style={{ height: 240 }}>
  <MDSImage src="/side.jpg" alt="Side panel image" fill />
</div>
```

## Gotchas

The `aspectRatio` prop accepts numbers as well as strings — `aspectRatio={1.5}` is equivalent to `aspectRatio="1.5"`. Browsers normalise unitless values to `<n> / 1` when read back from the DOM (jsdom does the same), so test assertions should match both forms.

`fill` suppresses `aspectRatio` entirely (no inline style is emitted). If both `fill` and `aspectRatio` are provided, `fill` wins — the `aspectRatio` prop is silently ignored.

## Source

- [MDSImage.tsx](packages/mds-components/src/MDSImage/MDSImage.tsx)
- [MDSImage.module.css](packages/mds-components/src/MDSImage/MDSImage.module.css)
- [MDSImage.stories.tsx](packages/mds-guidelines/src/stories/MDSImage.stories.tsx)

## Related

- [[MDSCard]]
- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
