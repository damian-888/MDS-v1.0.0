import type { StoryObj } from '@storybook/react-vite';
import { MDSBadge } from '@mds/components';
import type { MDSBadgeType, MDSBadgeSize } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSBadge is a small circular status indicator. The API is discriminated:
//   `type='number'`  — renders `children` (typically a digit)
//   `type='success'` — built-in check glyph, requires `aria-label`
//   `type='error'`   — built-in warning glyph, requires `aria-label`
//
// At `size='small'` (10px) the badge is always a solid coloured dot
// — children and icon are hidden, the stroke is removed.

// Story-only proxy fields. We intentionally do NOT call this `children`
// because MDSBadge's discriminated union forbids `children` on the
// success/error branches — exposing a `children` field would collapse
// the union to the number-only branch and break the other stories.
type ProxyArgs = {
  type: MDSBadgeType;
  size: MDSBadgeSize;
  numberContent: string;
  ariaLabel: string;
};

const meta = {
  title: 'Components/MDSBadge',
  component: MDSBadge,
  tags: ['autodocs'],
  args: {
    type: 'number',
    size: 'large',
    numberContent: '1',
    ariaLabel: 'Status indicator',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['number', 'success', 'error'],
      description:
        '`number` renders children · `success` renders a check glyph · `error` renders a warning glyph. Success/error are icon-only and require `aria-label`.',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
      description:
        '`large` = 32px · `medium` = 24px · `small` = 10px (always a solid dot — content and icons are hidden).',
    },
    numberContent: {
      control: { type: 'text' },
      description:
        'Story-only — children for `type="number"`. Typically a 1–2 character digit. Ignored at `size="small"` and for icon-only types.',
      if: { arg: 'type', eq: 'number' },
    },
    ariaLabel: {
      control: { type: 'text' },
      description:
        'Required for `success` and `error` (icon-only). Optional for `number`, where the rendered digit carries meaning.',
      table: { category: 'Accessibility' },
    },
    // Hide the real `aria-label` prop — surface it as the friendly `ariaLabel`
    // proxy above so Storybook controls handle the discriminated union cleanly.
    'aria-label': { table: { disable: true } },
  },
  render: (args) => {
    const { type, size, numberContent, ariaLabel } = args;

    if (type === 'number') {
      return (
        <MDSBadge type="number" size={size} aria-label={ariaLabel || undefined}>
          {numberContent}
        </MDSBadge>
      );
    }

    return <MDSBadge type={type} size={size} aria-label={ariaLabel} />;
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A circular status indicator. Three semantic types (number, success, error) × three sizes (10/24/32 px). At the smallest size it degrades to a solid coloured dot.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Showing an unread count, new-item indicator, or short numeric metric on a list item or navigation entry.',
            'Marking a row, field, or section as successful, errored, or pending — pair with adjacent label text so the badge reinforces, not replaces, meaning.',
            'As a status dot on avatars, cards, or table cells where space is tight — use `size="small"` for a colour-only signal.',
            'Combined with `MDSText` or list items for "n unread", "saved", or "needs attention" patterns.',
          ],
          avoid: [
            'As the only carrier of meaning. Colour and a glyph alone are not accessible — provide an `aria-label` for `success`/`error` and avoid relying on the colour cue alone.',
            'Numbers larger than 2–3 characters — the badge has a fixed minimum width but is not designed to grow. Truncate with "99+" in the consumer.',
            'For long messages or rich content. Use `MDSNotification` or `MDSText` for anything that needs a sentence.',
            'Using the small size for any badge that needs to communicate a count — the digit is hidden at 10 px.',
          ],
        },
        details: {
          behaviour:
            'Renders a `<span>` (with `role="status"` is intentionally NOT applied — `role="img"` is used for icon-only types so the badge announces as a labelled image, not a live region). Colours flow from `data-scheme="brand|success|error"` plus `data-section="subtle"` on the root — at `medium`/`large`, success and error use a paler background with a saturated glyph; at `small` they switch to a solid coloured dot.',
          accessibility:
            'Discriminated TypeScript union enforces `aria-label` on icon-only types — an inaccessible success/error badge cannot compile. The icon wrapper is `aria-hidden` so the label is the sole accessible name. Number badges use the rendered digit as their accessible name.',
          animation:
            'No motion. Hover and pressed states are not surfaced — badges are passive indicators. `prefers-reduced-motion` is honoured (no transitions or animations declared).',
          gotchas:
            '`size="small"` hides children and icons via CSS `display: none`, so React still renders them — useful for accessibility (the label is still in the DOM tree if needed) but easy to forget when debugging styles. The number variant\'s `aria-label` is optional but recommended when the digit is decorative (e.g. step indicators).',
        },
        related: [
          { name: 'MDSIcon', href: '/?path=/docs/components-mdsicon--docs' },
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSBadge, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Number: Story = {};

export const Success: Story = {
  args: { type: 'success', ariaLabel: 'Saved' },
};

export const Error: Story = {
  args: { type: 'error', ariaLabel: 'Invalid input' },
};

export const NumberMedium: Story = {
  args: { size: 'medium', numberContent: '3' },
};

export const NumberSmall: Story = {
  args: { size: 'small', numberContent: '1' },
  parameters: {
    docs: {
      description: {
        story:
          'At `size="small"`, the digit is hidden — the badge is a solid coloured dot. Useful for compact "has updates" indicators on icons or list rows.',
      },
    },
  },
};

export const SuccessMedium: Story = {
  args: { type: 'success', size: 'medium', ariaLabel: 'Saved' },
};

export const SuccessSmall: Story = {
  args: { type: 'success', size: 'small', ariaLabel: 'Live' },
};

export const ErrorMedium: Story = {
  args: { type: 'error', size: 'medium', ariaLabel: 'Error in this field' },
};

export const ErrorSmall: Story = {
  args: { type: 'error', size: 'small', ariaLabel: 'Connection lost' },
};
