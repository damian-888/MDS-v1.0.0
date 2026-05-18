import type { StoryObj } from '@storybook/react-vite';
import { MDSIcon } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// Curated subset for the controls dropdown — the full registry has
// 1000+ icons; listing them all in a select is unusable. Authors who
// need a different icon can override `name` directly in their story
// args or via the addon-controls text input.
const NAME_OPTIONS = [
  'check',
  'x',
  'arrow-right',
  'arrow-left',
  'plus',
  'minus',
  'magnifying-glass',
  'heart',
  'star',
  'trash',
  'download',
  'upload',
  'gear',
  'house',
  'user',
  'bell',
  'envelope',
  'dots-three',
] as const;

const meta = {
  title: 'Components/MDSIcon',
  component: MDSIcon,
  tags: ['autodocs'],
  args: {
    name: 'star',
    size: 'medium',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: NAME_OPTIONS,
      description:
        'Icon registry key from `@mds/icons`. Type-checked against the generated registry.',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 16, 24, 32, 48],
      description:
        'Semantic (`small | medium | large`) maps to 16/24/32 px tokens. A number sets `--MDSIcon-size` directly.',
    },
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A type-checked icon component backed by `@mds/icons`. Inherits colour from the parent via `currentColor` and is sized through a single CSS variable.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'As a visual reinforcement of an adjacent text label.',
            'Inside a control (button, link, menu item) where space is limited and the action is well-known.',
            'In status indicators, list affordances, and dense data UI where a glyph reads faster than a word.',
            'Pair with text whenever the icon’s meaning is not unambiguous to a first-time user.',
          ],
          avoid: [
            'As the only label for a meaningful action without an `aria-label` or visually hidden text.',
            'Setting `width`/`height` directly — use the `size` prop or set `--MDSIcon-size` on a parent.',
            'Overriding `color` on the icon itself — set `color` on the parent so it cascades via `currentColor`.',
            'Picking a glyph metaphor that conflicts with its action (e.g. a heart icon for "delete").',
          ],
        },
        details: {
          behaviour:
            'Each icon is a lazy-loaded SVG resolved through `iconRegistry`. While loading, a same-size placeholder span is rendered so layout never shifts. Colour flows from `currentColor`; the SVGs use `fill="currentColor"`.',
          accessibility:
            'Icons are decorative by default. For meaningful icons (no adjacent label), set `role="img"` and `aria-label="…"` via the standard SVG props. Inside `MDSButton iconOnly`, the wrapper is already `aria-hidden` and the button itself owns the accessible name.',
          gotchas:
            'Numeric sizes are applied via inline `style` (`--MDSIcon-size: ${px}`). Semantic sizes are applied via `data-size`. Mixing both has no effect — the inline style wins. The `name` prop is type-checked against the generated registry; misspellings fail at compile time.',
        },
        related: [
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const Numeric: Story = {
  args: { size: 48 },
};

export const Check: Story = {
  args: { name: 'check' },
};

export const ArrowRight: Story = {
  args: { name: 'arrow-right' },
};
