import type { StoryObj } from '@storybook/react-vite';
import { MDSChipDismissible, MDSImage } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

const PLACEHOLDER_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80';

type ProxyArgs = {
  label: string;
  showAvatar: boolean;
};

const meta = {
  title: 'Components/MDSChipDismissible',
  component: MDSChipDismissible,
  tags: ['autodocs'],
  args: {
    label: 'Berlin',
    showAvatar: false,
    children: null,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    showAvatar: {
      control: { type: 'boolean' },
      description: 'Story-only proxy — toggles the 40px round avatar slot.',
    },
    children: { table: { disable: true } },
    avatar: { table: { disable: true } },
    onDismiss: { action: 'dismissed' },
  },
  render: (args) => (
    <MDSChipDismissible
      avatar={
        args.showAvatar ? (
          <MDSImage src={PLACEHOLDER_AVATAR} alt="" aspectRatio="1 / 1" />
        ) : undefined
      }
      onDismiss={args.onDismiss}
    >
      {args.label}
    </MDSChipDismissible>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A persistent, filled pill with a close button. Used to represent an active filter, an applied tag, or any chunk of user state the user can remove.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Showing active filters above a list — clicking the × removes that filter.',
            'Representing user-added tags, recipients, attachments, or keywords with one-click removal.',
            'Anywhere the user has explicitly opted in to something and needs an obvious way to opt out.',
          ],
          avoid: [
            'Toggling selection on/off — use `MDSChipToggle` for that.',
            'Opening a dropdown of choices — use `MDSChipFilter`.',
            'Single-action chips without removal affordance — use `MDSButton` or another component.',
          ],
        },
        details: {
          behaviour:
            'Renders a `<span>` wrapping a label and a real `<button>` for dismissal. Clicking or activating the button fires `onDismiss`; the consumer decides what to do (remove from a list, etc.).',
          accessibility:
            'The dismiss button is a real `<button>` with `aria-label` (default: "Dismiss"). Override `dismissLabel` to describe the specific action ("Remove Berlin filter"). Focus ring follows the standard MDS pattern.',
          animation:
            'Hover/pressed tints on the close-button background only. Honours `prefers-reduced-motion`.',
          gotchas:
            'The avatar slot consumes the chip\'s leading padding — when an avatar is provided, the chip switches from 16 px to 4 px left padding so the 40 px disc sits flush against the bubble edge.',
        },
        related: [
          {
            name: 'MDSChipToggle',
            href: '/?path=/docs/components-mdschiptoggle--docs',
          },
          {
            name: 'MDSChipFilter',
            href: '/?path=/docs/components-mdschipfilter--docs',
          },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSChipDismissible, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: { showAvatar: true, label: 'Jamie' },
};
