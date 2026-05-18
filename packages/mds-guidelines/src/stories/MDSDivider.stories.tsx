import type { StoryObj } from '@storybook/react-vite';
import { MDSDivider, MDSText } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSDivider is a 1px line/column rendered with the basic stroke colour
// and a pill-radius corner. It wraps Base UI's `Separator` primitive so
// it carries the correct ARIA role and orientation semantics for free.

const meta = {
  title: 'Components/MDSDivider',
  component: MDSDivider,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description:
        'Axis the divider runs along. Vertical dividers require a parent with a height (e.g. an `align-self: stretch` flex row).',
    },
  },
  render: (args) => (
    <div
      style={{
        width: args.orientation === 'horizontal' ? 240 : undefined,
        height: args.orientation === 'vertical' ? 160 : undefined,
        display: args.orientation === 'vertical' ? 'inline-flex' : 'block',
      }}
    >
      <MDSDivider {...args} />
    </div>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5v8kcvSLvQHYfKbo7lJ2Av/MDS-Component-Library?node-id=15-382',
    },
    mds: {
      docs: {
        summary:
          'A presentational 1 px line or column. Wraps Base UI’s `Separator` so it ships with the correct ARIA role and orientation.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Between sibling content blocks that share a parent container (sidebar sections, list groups, card body regions).',
            'In flex/grid layouts where you need a thin rule that stretches to the cross-axis size of the row.',
            'Inside compound components (MDSCard.Body, MDSFlyout) when the visual hierarchy needs a soft break without extra padding.',
          ],
          avoid: [
            'Using as a page heading underline — typography already carries the hierarchy. Pair instead with `MDSText`.',
            'Decorating it with custom colours via inline styles. If the consumer needs a non-stroke colour, override `--MDSDivider-fill` on an ancestor.',
            'Stacking multiple dividers in a row. If your content needs more separation, increase the surrounding padding instead.',
          ],
        },
        details: {
          behaviour:
            'Horizontal dividers stretch to 100 % of the parent’s inline-axis. Vertical dividers stretch to 100 % of the parent’s block-axis via `align-self: stretch`. The two-layer indirection means a consumer can re-declare `--MDSDivider-fill` or `--MDSDivider-thickness` on any ancestor without touching the component.',
          accessibility:
            'Rendered as Base UI’s `Separator`, which emits `role="separator"` plus `aria-orientation` when vertical. The horizontal variant omits `aria-orientation` (it’s the default per WAI-ARIA) but always carries `data-orientation` for styling hooks.',
          animation:
            'No motion. Under `prefers-reduced-motion: reduce` the (already none) transitions stay suppressed.',
          gotchas:
            'Vertical dividers need a parent that gives them a height — typically `align-self: stretch` inside a flex row. A standalone `<MDSDivider orientation="vertical" />` outside a sized container will collapse to 0 px height.',
        },
        related: [
          { name: 'MDSCard', href: '/?path=/docs/components-mdscard--docs' },
          { name: 'MDSFlyout', href: '/?path=/docs/components-mdsflyout--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
};

export const InContent: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <MDSText variant="body-bold">Section one</MDSText>
      <MDSDivider />
      <MDSText variant="body-bold">Section two</MDSText>
      <MDSDivider />
      <MDSText variant="body-bold">Section three</MDSText>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use horizontal dividers between sibling text or content blocks. The 1 px line picks up the basic-stroke colour and the pill radius rounds off the caps.',
      },
    },
  },
};

export const VerticalInRow: Story = {
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        gap: 16,
        alignItems: 'center',
        height: 32,
      }}
    >
      <MDSText variant="body-bold">Left</MDSText>
      <MDSDivider orientation="vertical" />
      <MDSText variant="body-bold">Center</MDSText>
      <MDSDivider orientation="vertical" />
      <MDSText variant="body-bold">Right</MDSText>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Vertical dividers stretch to the row height via `align-self: stretch`. Wrap them in a sized flex row so the column has a height to fill.',
      },
    },
  },
};
