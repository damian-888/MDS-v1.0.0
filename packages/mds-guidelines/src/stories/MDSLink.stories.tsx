import type { StoryObj } from '@storybook/react-vite';
import { MDSLink, MDSIcon } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSLink is a polymorphic anchor with the brand link styling — an
// underlined label, a 16 px trailing icon (defaulting to `arrow-right`)
// and the four interaction colours (basic, hovered, pressed, visited).
// Alignment controls how the link sits inside its tappable area.

const meta = {
  title: 'Components/MDSLink',
  component: MDSLink,
  tags: ['autodocs'],
  args: {
    children: 'Read more',
    href: '#section',
    alignment: 'left',
  },
  argTypes: {
    alignment: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
      description:
        'Cross-axis alignment of the link inside its tappable area.',
    },
    icon: {
      control: false,
      description:
        'Trailing icon node. Defaults to an `arrow-right`. Pass `null` to omit it entirely.',
    },
    render: { table: { disable: true } },
  },
  parameters: {
    docs: { page: ComponentDocs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5v8kcvSLvQHYfKbo7lJ2Av/MDS-Component-Library?node-id=86-1724',
    },
    mds: {
      docs: {
        summary:
          'An underlined, polymorphic anchor with a 16 px trailing icon and the brand link palette. Renders an `<a>` by default; swap the element via `render` for framework routers.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For inline or block navigation actions where the affordance is "go elsewhere".',
            'Inside body copy, footer, or settings rows when the visible label IS the destination.',
            'With `render={<NextLink … />}` (or any other framework primitive) to delegate the actual navigation while keeping the visual contract.',
            'With `icon={null}` when the surrounding sentence already implies direction (avoid double-meaning).',
          ],
          avoid: [
            'For buttons. Links navigate; buttons act. If the action submits a form or toggles state, use `MDSButton`.',
            'Without an underline. The underline is the single source of "linkness" — never override `text-decoration` away.',
            'Stacking many links vertically with default `min-height` (48 px tappable area). For dense lists, use `MDSFlyout.Item` or `MDSMenu.Item` instead.',
            'Custom trailing glyphs that imply a different action (a close `x`, a checkmark). Stick to direction or external-link affordances.',
          ],
        },
        details: {
          behaviour:
            'Renders an `<a>` by default. Polymorphism is handled by Base UI’s `useRender` — pass `render={<button />}`, `render={<Link to="…" />}`, etc. The trailing icon is a small 16 px slot that picks up the link colour.',
          accessibility:
            'Carries the implicit `link` role when rendered as an `<a>`. The default trailing icon is `aria-hidden`. Disabled state opts in via `aria-disabled` (the only standardised inert hint for `<a>`); `pointer-events: none` is applied to match. Focus uses a 2 px accent outline.',
          animation:
            'The underline thickens on hover/active (1 px → 2 px). Under `prefers-reduced-motion: reduce` the transition is suppressed.',
          gotchas:
            '`:visited` is colour-only by browser policy — the spec asks for the visited palette and that’s exactly what we apply. Hover/active overrides visited so a returning user still gets the right pressed colour on click.',
        },
        related: [
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
          { name: 'MDSIcon', href: '/?path=/docs/components-mdsicon--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

export const Visited: Story = {
  args: { href: 'https://example.com' },
  parameters: {
    docs: {
      description: {
        story:
          '`:visited` styling is browser-controlled — the swatch on this canvas shows the standard colour. Once the browser knows the URL has been visited, it paints the link in the visited palette.',
      },
    },
  },
};

export const NoIcon: Story = {
  args: { icon: null },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `icon={null}` to remove the trailing arrow — useful when the link sits inside body copy and direction is implicit.',
      },
    },
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <MDSIcon name="arrow-up-right" size="small" aria-hidden="true" />,
    children: 'Open external',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Any 16 px node can replace the default arrow — typically an external-link or detour glyph.',
      },
    },
  },
};

export const AlignmentLeft: Story = {
  args: { alignment: 'left' },
  decorators: [
    (Story) => (
      <div style={{ width: 240, border: '1px dashed #ddd', padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const AlignmentCenter: Story = {
  args: { alignment: 'center' },
  decorators: [
    (Story) => (
      <div style={{ width: 240, border: '1px dashed #ddd', padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const AlignmentRight: Story = {
  args: { alignment: 'right' },
  decorators: [
    (Story) => (
      <div style={{ width: 240, border: '1px dashed #ddd', padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const AsButton: Story = {
  render: () => (
    <MDSLink render={<button type="button" />}>Trigger as button</MDSLink>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`render={<button type="button" />}` swaps the underlying element to a real button while keeping the link styling — useful when the affordance fires JS instead of navigating.',
      },
    },
  },
};

export const Disabled: Story = {
  args: { 'aria-disabled': true },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled links opt in via `aria-disabled`. The component greys the label, drops pointer events, and switches the cursor to `not-allowed`.',
      },
    },
  },
};
