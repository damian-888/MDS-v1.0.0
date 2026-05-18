import type { StoryObj } from '@storybook/react-vite';
import { MDSChipToggle, MDSImage } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

const PLACEHOLDER_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80';

type ProxyArgs = {
  label: string;
  showAvatar: boolean;
};

const meta = {
  title: 'Components/MDSChipToggle',
  component: MDSChipToggle,
  tags: ['autodocs'],
  args: {
    label: 'Berlin',
    showAvatar: false,
    defaultSelected: false,
    disabled: false,
    children: null,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    showAvatar: { control: { type: 'boolean' } },
    defaultSelected: {
      control: { type: 'boolean' },
      description:
        'Uncontrolled initial selected state. For controlled use, pass `selected` + `onSelectedChange`.',
    },
    disabled: { control: { type: 'boolean' } },
    selected: { table: { disable: true } },
    onSelectedChange: { action: 'selected change' },
    children: { table: { disable: true } },
    avatar: { table: { disable: true } },
  },
  render: (args) => (
    <MDSChipToggle
      defaultSelected={args.defaultSelected}
      disabled={args.disabled}
      onSelectedChange={args.onSelectedChange}
      avatar={
        args.showAvatar ? (
          <MDSImage src={PLACEHOLDER_AVATAR} alt="" aspectRatio="1 / 1" />
        ) : undefined
      }
    >
      {args.label}
    </MDSChipToggle>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A two-state selectable pill. Unselected shows a stroked, light surface; selected fills with the basic accent and exposes a trailing check glyph.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Single boolean preferences ("Available now", "Vegetarian", "Show only open").',
            'Multi-select chip groups where each option can be on/off independently of the others.',
            'Compact yes/no choices that benefit from a label rather than a switch.',
          ],
          avoid: [
            'Single-choice (radio) selection — use a different component or convert to a real toggle group with mutual exclusion at the consumer level.',
            'Triggering one-off actions — use `MDSButton`.',
            'Opening menus — use `MDSChipFilter`.',
          ],
        },
        details: {
          behaviour:
            'Wraps Base UI Toggle. Uncontrolled via `defaultSelected`; controlled via `selected` + `onSelectedChange`. Base UI sets `data-pressed` while selected, which drives the accent fill and reveals the trailing check icon via CSS.',
          accessibility:
            'Renders a real `<button>` with `aria-pressed`. Keyboard activation (Enter / Space) toggles selection. Focus ring follows the standard 2 px accent outline.',
          animation:
            'Background colour transitions on hover and active states. `prefers-reduced-motion` removes them.',
          gotchas:
            'The check glyph is rendered into the DOM in every state and only revealed by CSS when the chip is selected. This avoids a layout shift on toggle but means assistive tech sees the icon node; the icon is `aria-hidden`.',
        },
        related: [
          {
            name: 'MDSChipDismissible',
            href: '/?path=/docs/components-mdschipdismissible--docs',
          },
          {
            name: 'MDSChipFilter',
            href: '/?path=/docs/components-mdschipfilter--docs',
          },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSChipToggle, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {};

export const Selected: Story = {
  args: { defaultSelected: true },
};

export const WithAvatar: Story = {
  args: { showAvatar: true, label: 'Jamie' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Unavailable' },
};
