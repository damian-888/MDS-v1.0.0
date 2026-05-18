import type { StoryObj } from '@storybook/react-vite';
import { MDSChatBubble, MDSImage } from '@mds/components';
import type {
  MDSChatBubbleAlignment,
  MDSChatBubbleBackground,
  MDSChatBubbleType,
} from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

const AVATAR_SRC =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80';

const MEDIA_SRC =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=70';

type ProxyArgs = {
  alignment: MDSChatBubbleAlignment;
  background: MDSChatBubbleBackground;
  type: MDSChatBubbleType;
  body: string;
  showAvatar: boolean;
  showTimestamp: boolean;
  timestamp: string;
};

const meta = {
  title: 'Components/MDSChatBubble',
  component: MDSChatBubble,
  tags: ['autodocs'],
  args: {
    alignment: 'incoming',
    background: 'standard',
    type: 'message',
    body: 'Hey, are you free for lunch tomorrow?',
    showAvatar: true,
    showTimestamp: true,
    timestamp: '12:00',
  },
  argTypes: {
    alignment: {
      control: { type: 'inline-radio' },
      options: ['incoming', 'outgoing'],
    },
    background: {
      control: { type: 'inline-radio' },
      options: ['standard', 'secondary'],
    },
    type: {
      control: { type: 'inline-radio' },
      options: ['message', 'media', 'loading'],
    },
    body: {
      control: { type: 'text' },
      description:
        'Story-only — the rendered children when `type` is `message`. Ignored for `media` and `loading`.',
      if: { arg: 'type', eq: 'message' },
    },
    showAvatar: {
      control: { type: 'boolean' },
      description:
        'Story-only — toggles the 24px round avatar slot. Only honoured for `alignment="incoming"`.',
    },
    showTimestamp: { control: { type: 'boolean' } },
    timestamp: { control: { type: 'text' }, if: { arg: 'showTimestamp', truthy: true } },
    avatar: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  render: (args) => {
    const avatar =
      args.alignment === 'incoming' && args.showAvatar ? (
        <MDSImage src={AVATAR_SRC} alt="" aspectRatio="1 / 1" />
      ) : undefined;
    const timestamp = args.showTimestamp ? args.timestamp : undefined;
    const children =
      args.type === 'message' ? (
        args.body
      ) : args.type === 'media' ? (
        <MDSImage src={MEDIA_SRC} alt="" aspectRatio="1 / 1" />
      ) : null;
    return (
      <div style={{ width: 380, display: 'flex' }}>
        <MDSChatBubble
          alignment={args.alignment}
          background={args.background}
          type={args.type}
          avatar={avatar}
          timestamp={timestamp}
        >
          {children}
        </MDSChatBubble>
      </div>
    );
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A single message in a conversation. Supports text, media, and loading types, two alignments (incoming/outgoing), and two background tints.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Threaded conversations — chat apps, support widgets, AI assistants.',
            'Embedding rich media (images, screenshots, video) into the conversation surface via `type="media"`.',
            'Showing an inline "thinking" / "fetching" state while a reply is in flight — `type="loading"` renders a spinning brandmark and announces as a `status` region.',
          ],
          avoid: [
            'Long-form articles or knowledge-base content — the 260 px max-width is tuned for short conversational text.',
            'Single-tap actions or notifications outside a conversation — use `MDSCard` or `MDSBadge`.',
            'Toggling between incoming/outgoing on the same node — alignment is a stable per-message property, not a state.',
          ],
        },
        details: {
          behaviour:
            'Lays out as a row: avatar (incoming only) + a column containing the bubble and an optional timestamp. The bubble\'s flat corner faces the avatar side (top-start for incoming, top-end for outgoing). `type` swaps the bubble\'s inner layout — text, media frame, or spinner.',
          accessibility:
            'The loading state uses `role="status"` + `aria-label="Loading"` so assistive tech announces the bubble. Avatars are decorative (`aria-hidden`) unless the caller passes meaningful alt text on the inner image. Outgoing bubbles intentionally omit avatars — pass alt text on the message instead if attribution matters.',
          animation:
            'Loading bubbles animate the spinner with a 1.2 s linear rotation. `prefers-reduced-motion: reduce` stops the animation.',
          gotchas:
            'When `type="media"`, the bubble becomes a fixed 260×260 frame and its background is removed so the media fills it edge-to-edge — pass an image (`MDSImage`) sized to that frame for the cleanest result. The component does not paginate, virtualise, or stack bubbles — wrap multiple `MDSChatBubble`s in your own list for a transcript.',
        },
        related: [
          {
            name: 'MDSImage',
            href: '/?path=/docs/components-mdsimage--docs',
          },
          {
            name: 'MDSText',
            href: '/?path=/docs/components-mdstext--docs',
          },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSChatBubble, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IncomingMessage: Story = {};

export const OutgoingMessage: Story = {
  args: { alignment: 'outgoing', showAvatar: false, body: 'Sure, see you at 1.' },
};

export const IncomingMedia: Story = {
  args: { type: 'media' },
};

export const OutgoingMedia: Story = {
  args: { alignment: 'outgoing', type: 'media', showAvatar: false },
};

export const Loading: Story = {
  args: { type: 'loading' },
};

export const SecondaryBackground: Story = {
  args: { background: 'secondary' },
};
