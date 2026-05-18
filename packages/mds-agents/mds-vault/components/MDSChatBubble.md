---
title: MDSChatBubble
type: component
status: stable
source:
  - packages/mds-components/src/MDSChatBubble/MDSChatBubble.tsx
  - packages/mds-components/src/MDSChatBubble/MDSChatBubble.module.css
  - packages/mds-guidelines/src/stories/MDSChatBubble.stories.tsx
last-synced: 2026-05-13
forbidden-to-edit: false
tags: [component, chat, conversation, message]
related:
  - "[[MDSImage]]"
  - "[[MDSText]]"
  - "[[MDSIcon]]"
  - "[[index]]"
  - "[[conventions/component-contract]]"
  - "[[conventions/storybook-vault-parity]]"
---

# MDSChatBubble

> A single message in a conversation. Supports text, media, and loading types, two alignments (incoming/outgoing), and two background tints.

## Purpose

The atomic unit of a chat transcript. Combines an avatar (incoming only), a bubble (text / media / spinner) with a flat corner facing the avatar side, and an optional timestamp. Stateless — the consumer composes a list of `MDSChatBubble`s into a transcript.

## Use

- Threaded conversations — chat apps, support widgets, AI assistants.
- Embedding rich media (images, screenshots, video) into the conversation surface via `type="media"`.
- Showing an inline "thinking" / "fetching" state while a reply is in flight — `type="loading"` renders a spinning brandmark and announces as a `status` region.

## Avoid

- Long-form articles or knowledge-base content — the 260 px max-width is tuned for short conversational text.
- Single-tap actions or notifications outside a conversation — use `MDSCard` or `MDSBadge`.
- Toggling between incoming/outgoing on the same node — alignment is a stable per-message property, not a state.

## Import

```ts
import { MDSChatBubble } from '@mds/components';
import '@mds/components/MDSChatBubble/styles.css';
```

## API / Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `alignment` | `'incoming' \| 'outgoing'` | — required | Conversation side. Drives layout direction and the flat-corner side. |
| `background` | `'standard' \| 'secondary'` | `'standard'` | Bubble fill. `standard` = `--mds-colours-basic-background`; `secondary` = `--mds-colours-basic-accent-secondary` (pale lavender on neutral). |
| `type` | `'message' \| 'media' \| 'loading'` | `'message'` | Content layout. |
| `avatar` | `React.ReactNode` | — | 24 px round avatar (typically `MDSImage`). Only rendered for incoming. |
| `timestamp` | `React.ReactNode` | — | Optional timestamp rendered below the bubble in microcopy. |
| `children` | `React.ReactNode` | — | Bubble content. Text for `message`; image/video for `media`; ignored for `loading`. |
| `render` | Base UI `RenderProp` | `<div />` | Polymorphism. |

All other props spread to the root element.

## Variants

| Alignment × Type × Background |
|---|
| 2 alignments (incoming, outgoing) × 3 types (message, media, loading) × 2 backgrounds (standard, secondary) = 12 visual combinations. |

For incoming, the avatar slot is rendered (passed via `avatar`); for outgoing, the avatar is intentionally omitted per Figma. The bubble's flat corner faces the avatar side: `border-start-start-radius: 0` for incoming, `border-start-end-radius: 0` for outgoing.

## Sizes

Bubble max-width: 260 px. Media bubbles are a fixed 260 × 260 frame. Avatar: 24 px round. Timestamp font: microcopy (12 px).

## States

| Attribute | Source |
|---|---|
| `data-alignment` | From the `alignment` prop. |
| `data-background` | From the `background` prop. |
| `data-type` | From the `type` prop. |

## Behaviour

Lays out as a row: avatar (incoming only) + a column containing the bubble and an optional timestamp. The bubble's flat corner faces the avatar side (top-start for incoming, top-end for outgoing). `type` swaps the bubble's inner layout — text, media frame, or spinner.

## Accessibility

The loading state uses `role="status"` + `aria-label="Loading"` so assistive tech announces the bubble. Avatars are decorative (`aria-hidden`) unless the caller passes meaningful alt text on the inner image. Outgoing bubbles intentionally omit avatars — pass alt text on the message instead if attribution matters.

## Animation

Loading bubbles animate the spinner with a 1.2 s linear rotation. `prefers-reduced-motion: reduce` stops the animation.

## Styling Hooks

| Var | Default |
|---|---|
| `--MDSChatBubble-fill` | `var(--mds-colours-basic-background)` |
| `--MDSChatBubble-text-fill` | `var(--mds-colours-basic-text)` |
| `--MDSChatBubble-timestamp-fill` | `var(--mds-colours-basic-text-secondary)` |
| `--MDSChatBubble-corner-radius` | `var(--mds-radius-medium)` |
| `--MDSChatBubble-padding` | `var(--mds-number-ramp-8)` |
| `--MDSChatBubble-max-width` | `260px` |
| `--MDSChatBubble-media-size` | `260px` |
| `--MDSChatBubble-avatar-size` | `var(--mds-number-ramp-24)` |
| `--MDSChatBubble-avatar-stroke-width` | `var(--mds-strokes-1)` |
| `--MDSChatBubble-avatar-stroke` | `var(--mds-colours-basic-background)` |
| `--MDSChatBubble-item-spacing` | `var(--mds-number-ramp-8)` |
| `--MDSChatBubble-stack-spacing` | `var(--mds-number-ramp-4)` |

`background="secondary"` overrides `--MDSChatBubble-fill` and `--MDSChatBubble-text-fill` to the secondary accent / text-on-accent-secondary pair.

## Examples

```tsx
import { MDSChatBubble, MDSImage } from '@mds/components';

// Incoming message
<MDSChatBubble
  alignment="incoming"
  avatar={<MDSImage src="/jamie.jpg" alt="" aspectRatio="1 / 1" />}
  timestamp="12:00"
>
  Hey, are you free for lunch tomorrow?
</MDSChatBubble>

// Outgoing reply
<MDSChatBubble alignment="outgoing" timestamp="12:01">
  Sure, see you at 1.
</MDSChatBubble>

// Incoming media (260×260)
<MDSChatBubble alignment="incoming" type="media" timestamp="12:02">
  <MDSImage src="/cat.jpg" alt="A tabby cat" aspectRatio="1 / 1" />
</MDSChatBubble>

// AI thinking
<MDSChatBubble alignment="incoming" type="loading" timestamp="just now" />

// Secondary background (pale lavender)
<MDSChatBubble alignment="incoming" background="secondary">
  Welcome back!
</MDSChatBubble>
```

## Gotchas

When `type="media"`, the bubble becomes a fixed 260×260 frame and its background is removed so the media fills it edge-to-edge — pass an image (`MDSImage`) sized to that frame for the cleanest result. The component does not paginate, virtualise, or stack bubbles — wrap multiple `MDSChatBubble`s in your own list for a transcript. Outgoing bubbles omit the avatar even if `avatar` is provided — alignment is the authoritative signal.

## Source

- [MDSChatBubble.tsx](packages/mds-components/src/MDSChatBubble/MDSChatBubble.tsx)
- [MDSChatBubble.module.css](packages/mds-components/src/MDSChatBubble/MDSChatBubble.module.css)
- [MDSChatBubble.stories.tsx](packages/mds-guidelines/src/stories/MDSChatBubble.stories.tsx)

## Related

- [[MDSImage]]
- [[MDSText]]
- [[MDSIcon]]
- [[index]]
- [[conventions/component-contract]]
- [[conventions/storybook-vault-parity]]
