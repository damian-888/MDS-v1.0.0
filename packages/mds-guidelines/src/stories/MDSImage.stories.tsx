import type { StoryObj } from '@storybook/react-vite';
import { MDSImage } from '@mds/components';
import type { MDSImageObjectFit } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSImage is a polymorphic <img> wrapper with a forced aspect-ratio and
// object-fit. The default <img> is preserved so consumers get native
// performance / a11y for free; swap via the `render` prop to integrate
// with Next.js <Image>, picture/source, etc.

const PLACEHOLDER_SRC =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60';

type ProxyArgs = {
  aspectRatio: '16/9' | '4/3' | '1/1' | '3/4' | '21/9';
  objectFit: MDSImageObjectFit;
  alt: string;
  src: string;
};

const meta = {
  title: 'Components/MDSImage',
  component: MDSImage,
  tags: ['autodocs'],
  args: {
    aspectRatio: '16/9',
    objectFit: 'cover',
    alt: 'A cat sitting on a windowsill',
    src: PLACEHOLDER_SRC,
  },
  argTypes: {
    aspectRatio: {
      control: { type: 'inline-radio' },
      options: ['16/9', '4/3', '1/1', '3/4', '21/9'],
      description:
        'CSS `aspect-ratio` applied to the image box. Accepts any valid value at the API level — the playground exposes the most common ratios.',
    },
    objectFit: {
      control: { type: 'inline-radio' },
      options: ['cover', 'contain'],
      description:
        '`cover` fills the box, cropping overflow. `contain` fits inside the box, letterboxing if needed.',
    },
    alt: {
      control: { type: 'text' },
      description:
        'Required accessible description. Pass an empty string for purely decorative images.',
      table: { category: 'Accessibility' },
    },
    src: {
      control: { type: 'text' },
      description: 'Image URL.',
    },
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <MDSImage
        src={args.src}
        alt={args.alt}
        aspectRatio={args.aspectRatio}
        objectFit={args.objectFit}
      />
    </div>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    layout: 'centered',
    mds: {
      docs: {
        summary:
          'A minimal `<img>` wrapper that forces an aspect ratio and an object-fit. Provides predictable layout for media slots — image boxes do not jump as images load — while leaving all standard image attributes accessible via prop spread.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For hero, card, and editorial media where the surrounding layout depends on a known aspect ratio.',
            'Inside `MDSCard` as the `media` slot — the card relies on the image keeping its box without depending on the natural image dimensions.',
            'With `fill` when the image lives inside a fixed-shape parent (e.g. `MDSCard` side-aligned variants) and must fill it on both axes.',
            'When the image is content (carries information). Pair every visible image with a meaningful `alt`.',
            'When the image is decoration. Pass `alt=""` so assistive technology skips it.',
          ],
          avoid: [
            'For SVG icons. Use `MDSIcon` — it owns the size cascade and is keyed to the icon registry.',
            'For images that must respond to viewport with multiple sources. v1 does not ship `srcSet`/`sizes` helpers — pass them through and let the browser handle it.',
            'As an avatar or persona surface. Build a dedicated avatar component when that pattern arrives.',
            'Without an `alt`. The prop is required at the type level for a reason.',
            'Using `fill` without a parent that has an explicit height — the image will collapse to zero.',
          ],
        },
        details: {
          behaviour:
            'Renders an `<img>` (overridable via `render`). The `aspectRatio` prop is set via inline CSS so per-instance overrides do not require new style rules; `objectFit` flips a data-attribute (`data-object-fit`) that the CSS Module reads to set `object-fit`. Width defaults to `100%` so the box fills its container; height is derived from the aspect ratio.\n\nWhen `fill={true}`, the inline `aspectRatio` style is suppressed and `data-fill` is set on the element. The CSS rule `.root[data-fill]` overrides width to `100%`, height to `100%`, and aspect-ratio to `auto`, so the image occupies its parent\'s full bounding box. The parent must have an explicit height (or be a flex/grid cell with a defined cross-axis size) for fill to have effect.',
          accessibility:
            '`alt` is required at the type level. Pass an empty string for decorative images — that explicitly removes the image from the accessibility tree. The component does not add `role` or other ARIA props; native `<img>` semantics carry through unchanged.',
          animation:
            'No animation. `prefers-reduced-motion: reduce` is honoured (no transitions or animations declared).',
          gotchas:
            'The `aspectRatio` prop accepts numbers as well as strings — `aspectRatio={1.5}` is equivalent to `aspectRatio="1.5"`. Browsers normalise unitless values to `<n> / 1` when read back from the DOM (jsdom does the same), so test assertions should match both forms.\n\n`fill` suppresses `aspectRatio` entirely (no inline style is emitted). If both `fill` and `aspectRatio` are provided, `fill` wins — the `aspectRatio` prop is silently ignored.',
        },
        related: [
          { name: 'MDSCard', href: '/?path=/docs/components-mdscard--docs' },
          { name: 'MDSIcon', href: '/?path=/docs/components-mdsicon--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSImage, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Square: Story = { args: { aspectRatio: '1/1' } };

export const Portrait: Story = { args: { aspectRatio: '3/4' } };

export const UltraWide: Story = { args: { aspectRatio: '21/9' } };

export const Contain: Story = {
  args: { objectFit: 'contain' },
  parameters: {
    docs: {
      description: {
        story:
          '`object-fit: contain` letterboxes the image. Use when cropping would remove meaningful content (e.g. product shots where the silhouette matters).',
      },
    },
  },
};

export const Decorative: Story = {
  args: { alt: '' },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `alt=""` for purely decorative images. The element is still rendered visually but skipped by assistive technology.',
      },
    },
  },
};

export const Fill: Story = {
  args: { alt: 'A cat by a window', src: PLACEHOLDER_SRC },
  parameters: {
    docs: {
      description: {
        story:
          'When `fill` is true, MDSImage ignores `aspectRatio` and fills its parent on both axes via `width: 100%; height: 100%`. Pair with a parent that defines the box shape — used by `MDSCard` side variants.',
      },
    },
  },
  render: (args) => (
    <div
      style={{
        width: 136,
        height: 136,
        aspectRatio: '1 / 1',
        overflow: 'clip',
        borderRadius: 8,
      }}
    >
      <MDSImage src={args.src} alt={args.alt} fill />
    </div>
  ),
};
