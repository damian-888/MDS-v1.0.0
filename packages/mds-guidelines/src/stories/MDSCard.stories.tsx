import type { ComponentType, ReactNode } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import {
  MDSCard,
  MDSImage,
  MDSText,
  MDSButton,
  MDSIcon,
} from '@mds/components';
import type {
  MDSCardProps,
  MDSCardBackground,
  MDSCardImageAlignment,
} from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSCard is a compound component:
//
//   <MDSCard
//     background="standard"
//     imageAlignment="top"
//     interactive={false}
//     selected={false}
//     outline={false}
//     media={<MDSImage src="..." alt="..." aspectRatio="16/9" />}
//   >
//     <MDSCard.Header tag="New" onClose={fn}>Headline</MDSCard.Header>
//     <MDSCard.Body>Lorem ipsum...</MDSCard.Body>
//     <MDSCard.Actions>
//       <MDSButton>Learn</MDSButton>
//       <MDSButton variant="primary">Buy</MDSButton>
//     </MDSCard.Actions>
//   </MDSCard>
//
// `.Header` / `.Body` / `.Actions` are the DS-blessed "Preferred Content"
// layout pieces — consumers wire their own buttons and text. Custom layouts
// can drop arbitrary children instead.

const PLACEHOLDER_SRC =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60';

// In-story "Preferred Content" helper — the Figma promo layout, composed
// from the compound parts so consumers can copy this exact shape.
function PreferredContent({
  headline,
  body,
  tag,
  onClose,
  actions,
}: {
  headline: ReactNode;
  body?: ReactNode;
  tag?: ReactNode;
  onClose?: () => void;
  actions: ReactNode;
}) {
  return (
    <>
      <MDSCard.Header tag={tag} onClose={onClose}>
        {headline}
      </MDSCard.Header>
      {body != null && <MDSCard.Body>{body}</MDSCard.Body>}
      <MDSCard.Actions>{actions}</MDSCard.Actions>
    </>
  );
}

type ProxyArgs = {
  showMedia: boolean;
  background: MDSCardBackground;
  imageAlignment: MDSCardImageAlignment;
  outline: boolean;
  interactive: boolean;
  selected: boolean;
  showTag: boolean;
  showClose: boolean;
  actionMode: 'two-buttons' | 'one-button';
};

// MDSCard is compound (`Object.assign(Root, { Header, Body, Actions })`).
// The implicit `typeof MDSCard` references the inner root function, which
// is not part of the public export surface — cast to ComponentType so the
// declaration emits cleanly (same pattern as MDSBreadcrumb).
const CardAsComponent = MDSCard as unknown as ComponentType<
  MDSCardProps & ProxyArgs
>;

const meta = {
  title: 'Components/MDSCard',
  component: CardAsComponent,
  tags: ['autodocs'],
  args: {
    showMedia: true,
    background: 'standard',
    imageAlignment: 'top',
    outline: false,
    interactive: false,
    selected: false,
    showTag: false,
    showClose: true,
    actionMode: 'two-buttons',
    children: null,
  },
  argTypes: {
    showMedia: {
      control: { type: 'boolean' },
      description: 'Story-only — toggle the `media` slot.',
    },
    showTag: {
      control: { type: 'boolean' },
      description: 'Story-only — toggle the optional pill in `MDSCard.Header`.',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Story-only — toggle the `MDSCard.Header` close affordance.',
    },
    actionMode: {
      control: { type: 'inline-radio' },
      options: ['two-buttons', 'one-button'],
      description:
        'Story-only — switches between the Two-Buttons promo layout and a single round outline arrow button.',
    },
    background: {
      control: { type: 'inline-radio' },
      options: ['standard', 'secondary'],
      description:
        '`standard` — default card surface (`--mds-colours-basic-background`). `secondary` — the card switches its subtree to `data-section="subtle"` so its background contrasts with a normal-section page. Hover/pressed states follow the subtle palette automatically.',
    },
    imageAlignment: {
      control: { type: 'inline-radio' },
      options: ['top', 'right', 'left'],
      description:
        'Where the `media` slot sits. `top` is full-width; `right`/`left` are a fixed-width well along the side.',
    },
    outline: { control: { type: 'boolean' } },
    interactive: { control: { type: 'boolean' } },
    selected: { control: { type: 'boolean' } },
    children: { table: { disable: true } },
  },
  render: (args) => {
    const actions =
      args.actionMode === 'one-button' ? (
        <MDSButton
          variant="outline"
          iconOnly
          aria-label="Next"
          icon={<MDSIcon name="arrow-right" />}
        />
      ) : (
        <>
          <MDSButton variant="secondary">Label</MDSButton>
          <MDSButton variant="primary">Label</MDSButton>
        </>
      );

    return (
      <div style={{ width: 422 }}>
        <MDSCard
          background={args.background}
          imageAlignment={args.imageAlignment}
          outline={args.outline}
          interactive={args.interactive}
          selected={args.selected}
          media={
            args.showMedia ? (
              <MDSImage
                src={PLACEHOLDER_SRC}
                alt="A cat by a windowsill"
                {...(args.imageAlignment === 'right' || args.imageAlignment === 'left'
                  ? { fill: true }
                  : { aspectRatio: '16/9' as const })}
              />
            ) : undefined
          }
        >
          <PreferredContent
            headline="Headline"
            body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
            tag={args.showTag ? 'New' : undefined}
            onClose={args.showClose ? () => {} : undefined}
            actions={actions}
          />
        </MDSCard>
      </div>
    );
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A flexible card surface for grouping media and content. Five variant axes (background, image alignment, outline, interactive, selected) and compound `.Header` / `.Body` / `.Actions` parts cover the documented Figma matrix without forking the API.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For media-led blocks where an image and a body of content read as one unit — promo tiles, article cards, product summaries.',
            'With `MDSCard.Header` + `MDSCard.Body` + `MDSCard.Actions` for the DS-blessed promo layout — consumers wire their own buttons and text into the action and header slots.',
            'As an interactive surface (`interactive` + `render={<a href />}`) when the entire card is the navigation target. Compose with `MDSImage` for the media slot.',
            'In selection lists (`selected` + `interactive` + `aria-pressed`) where each option carries an image and a label.',
          ],
          avoid: [
            'As a plain visual container — use a simple `<section>` or a layout primitive. Cards imply a coherent unit; do not stretch the metaphor.',
            'For dense data — tables, lists with many fields, or grids of metrics deserve their own primitive. Cards are content-first.',
            'For navigation surfaces where only a single element is interactive. Either make the whole card interactive or keep all internal elements clickable on their own — do not nest interactive elements.',
            'Setting `outline` and `selected` together expecting two visible strokes — they share the border slot. The selected accent wins.',
          ],
        },
        details: {
          behaviour:
            'Renders a `<div>` by default (overridable via `render`). The root is a vertical flex stack with `--mds-spacing-extra-small` gap and `--mds-common-component-values-padding` padding. When `media` is provided, `data-has-media` flips the layout: the root padding/gap drop to zero and `imageAlignment` chooses `flex-direction: column` (top), `row-reverse` (right), or `row` (left); the content area gains its own padding/gap so the image sits flush against the card edges. For `imageAlignment=\'right\' | \'left\'`, the media well is locked to a 136 × 136 square (`aspect-ratio: 1 / 1; width: 136px`) and `align-self: stretch` so it grows vertically when content makes the card taller. The inner MDSImage should use `fill` (or pass `aspectRatio="1/1"`) so it fills the square. The `overlay` slot, when set, renders an absolute-positioned scrim above the media for chrome (play button, brand glyph). Interactive cards swap their fill on `:hover` / `:active` from `--mds-colours-interaction-states-hovered-background-hovered` and `--mds-colours-interaction-states-pressed-background-pressed`. The `.Actions` slot stretches its children to equal flex when it contains 2+ items (via `:has(> :nth-child(2))`), and lets a single child keep its natural width.\n\nThe `background=\'secondary\'` variant sets `data-section="subtle"` on the root. The card\'s `--mds-colours-basic-background` re-resolves through the subtle palette; hover and pressed fills follow automatically because the subtle palette also defines those interaction-state values.',
          accessibility:
            '`interactive` cards default to `tabIndex={0}` so the bare `<div>` is keyboard-focusable; for production use, swap the root via `render={<a href />}` or `render={<button type="button" />}` so it announces correctly and accepts `Enter`/`Space` natively. When the card is interactive and `selected`, `aria-pressed="true"` is set. `MDSCard.Header` renders the headline as a real heading (`<h2>` by default, overridable via `as`) so the document outline is correct. The header close button is a real `MDSButton` with the configurable `closeLabel` as its required `aria-label`. The `overlay` is purely decorative chrome — wrap interactive content inside it explicitly with `aria-label` / `role` as needed.',
          animation:
            'State changes are immediate background-fill swaps. `prefers-reduced-motion: reduce` is honoured.',
          gotchas:
            '`interactive` without a `render` prop leaves the card as a `<div>` with `tabIndex={0}` — keyboard activation does NOT fire `onClick` on a div, so always pass `render={<a />}` or `render={<button />}` in production. The `.Actions` row only stretches when 2+ children are present; a single action keeps its natural width by design (matches Figma\'s One-Button variant).',
        },
        related: [
          { name: 'MDSImage', href: '/?path=/docs/components-mdsimage--docs' },
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
          { name: 'MDSText', href: '/?path=/docs/components-mdstext--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<ComponentType<MDSCardProps>, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoButtons: Story = {
  args: { actionMode: 'two-buttons', showClose: true },
};

export const OneButton: Story = {
  args: { actionMode: 'one-button', showClose: true },
  parameters: {
    docs: {
      description: {
        story:
          'Single-action variant — drop a single `MDSButton` (icon-only outline `arrow-right`) into `MDSCard.Actions`. The action slot keeps the button at its natural size (no equal-width stretch).',
      },
    },
  },
};

export const WithTag: Story = {
  args: { showTag: true },
};

export const NoClose: Story = {
  args: { showClose: false },
};

export const NoMedia: Story = {
  args: { showMedia: false },
  parameters: {
    docs: {
      description: {
        story:
          'Without a `media` slot the card renders content-only with padding on the root.',
      },
    },
  },
};

export const SecondaryBackground: Story = {
  args: { background: 'secondary' },
  // Opt this one story's docs-preview frame back to `data-section="normal"`
  // (white). The frame defaults to `subtle` (grey) so primary cards stand
  // out — but a subtle card on a subtle frame collides. The sentinel
  // `data-frame-section="normal"` is read by the MutationObserver in
  // preview.ts when stamping the `.sbdocs-preview` ancestor. `display: contents`
  // keeps the sentinel transparent to layout.
  decorators: [
    (Story) => (
      <div data-frame-section="normal" style={{ display: 'contents' }}>
        <Story />
      </div>
    ),
  ],
};

export const Outline: Story = {
  args: { outline: true },
};

export const ImageAlignmentRight: Story = {
  args: { imageAlignment: 'right' },
};

export const ImageAlignmentLeft: Story = {
  args: { imageAlignment: 'left' },
};

export const Interactive: Story = {
  args: { interactive: true },
};

export const InteractiveSelected: Story = {
  args: { interactive: true, selected: true },
};

export const StaticCustom: Story = {
  render: () => (
    <div style={{ width: 422 }}>
      <MDSCard
        media={
          <MDSImage
            src={PLACEHOLDER_SRC}
            alt="A cat by a windowsill"
            aspectRatio="16/9"
          />
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <MDSText variant="h3" render={<h3 />}>
            Article headline
          </MDSText>
          <MDSText variant="body">
            A concise summary that fits in two or three lines and leaves
            enough room for the user to skim the page comfortably.
          </MDSText>
        </div>
      </MDSCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A static card with custom content (not the compound `Header`/`Body`/`Actions` layout). Use this shape when the content shape is unique to your surface.',
      },
    },
  },
};
