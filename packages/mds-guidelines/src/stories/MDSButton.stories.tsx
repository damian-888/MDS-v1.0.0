import type { StoryObj } from '@storybook/react-vite';
import { MDSButton, MDSIcon } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// Curated icon list for the playground select. The full @mds/icons
// registry has 1000+ icons — listing all in a select is unusable.
const ICON_NAMES = [
  'arrow-right',
  'arrow-left',
  'plus',
  'minus',
  'check',
  'x',
  'heart',
  'star',
  'magnifying-glass',
  'trash',
  'download',
  'upload',
  'gear',
  'house',
  'user',
  'bell',
  'envelope',
] as const;
type IconName = typeof ICON_NAMES[number];

// Story-only proxy controls — these aren't real MDSButton props. The
// `render` function below maps them to the actual prop shape, which
// translates the friendly mode/iconName picker into the right
// MDSButtonProps discriminated-union variant.
type ButtonMode = 'text' | 'icon' | 'with-icon';

interface ProxyArgs {
  mode: ButtonMode;
  iconName: IconName;
}

const meta = {
  title: 'Components/MDSButton',
  component: MDSButton,
  tags: ['autodocs'],
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'large',
    disabled: false,
    mode: 'text',
    iconName: 'arrow-right',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual treatment. One per screen for `primary`.',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'large'],
      description: '`large` for primary actions, `small` for dense UI.',
    },
    children: {
      control: { type: 'text' },
      description:
        'Button label. In icon-only mode, this string is reused as the `aria-label`.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Native disabled state. Surface a reason nearby when used.',
    },
    mode: {
      control: { type: 'inline-radio' },
      options: ['text', 'with-icon', 'icon'],
      description:
        'Story-only proxy. `text` = label only · `with-icon` = label + trailing icon · `icon` = icon-only (square, no label).',
    },
    iconName: {
      control: { type: 'select' },
      options: ICON_NAMES,
      description:
        'Story-only proxy. The icon to render when mode is `with-icon` or `icon`.',
      // Show the picker only when an icon will actually be rendered.
      // (`neq` = "not equal", so this hides the picker when mode is `text`.)
      if: { arg: 'mode', neq: 'text' },
    },
    // The real MDSButton `icon` and `iconOnly` props are driven by the
    // proxy above — no need to surface them as separate controls.
    icon: { table: { disable: true } },
    iconOnly: { table: { disable: true } },
  },
  render: (args) => {
    // No `...rest` spread — TypeScript can't narrow the discriminated union
    // (iconOnly true | false branches) across a spread, so we explicitly
    // pass each prop. The playground only needs these — extra props like
    // onClick aren't surfaced as controls.
    const { mode, iconName, children, variant, size, disabled } = args;
    // Guard: Storybook may invoke render with partially-merged args during
    // initialization. MDSIcon throws when given an undefined name (its
    // registry lookup returns undefined → React "element type invalid").
    const icon = iconName ? <MDSIcon name={iconName} /> : null;
    const label = typeof children === 'string' ? children : 'Button';

    if (mode === 'icon') {
      return (
        <MDSButton
          variant={variant}
          size={size}
          disabled={disabled}
          iconOnly
          aria-label={label}
          icon={icon}
        />
      );
    }

    return (
      <MDSButton
        variant={variant}
        size={size}
        disabled={disabled}
        icon={mode === 'with-icon' ? icon : undefined}
      >
        {children}
      </MDSButton>
    );
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A clickable control that triggers an action. Built on Base UI Button with token-driven variants and sizes.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Triggering an action that happens in place — save, delete, submit, send.',
            'When the affordance needs a clear accessible name and keyboard activation.',
            'Exactly one `primary` button per screen, marking the most important action.',
            'Use `secondary` for important supporting actions and `outline`/`ghost` for tertiary or repeated actions in dense UI.',
          ],
          avoid: [
            'Navigating between pages or to an external URL — use a link instead.',
            'Multiple `primary` buttons on the same screen — it dilutes hierarchy.',
            'Icon-only buttons without an `aria-label` — they are unreadable to assistive tech.',
            'Disabling without explanation — if the action cannot run, tell the user why.',
          ],
        },
        details: {
          behaviour:
            'Renders a real `<button>` via Base UI. Click and Enter/Space activate it. Hover, pressed, and disabled states are driven by `data-*` attributes and resolve through `--mds-colours-interaction-states-*` tokens.',
          accessibility:
            'Uses native button semantics — focus ring is `--mds-colours-basic-accent` with a 2px outline at a 2px offset. In `iconOnly` mode, `aria-label` is required at the type level; the inner icon slot is `aria-hidden`. Disabled state is announced by the platform.',
          animation:
            'Hover/pressed transitions are short and respect `prefers-reduced-motion: reduce` (no transitions or animations).',
          gotchas:
            'The `iconOnly` prop is a discriminated union — it forbids `children` and requires both `icon` and `aria-label` at compile time. The `small` size switches to the `body-bold` type style (different family), not just a smaller `body-large`.',
        },
        related: [
          { name: 'MDSIcon', href: '/?path=/docs/components-mdsicon--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSButton, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancel' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Small: Story = {
  args: { size: 'small', children: 'Small' },
};

export const WithIcon: Story = {
  args: { children: 'Continue', mode: 'with-icon', iconName: 'arrow-right' },
};

export const IconOnly: Story = {
  args: { children: 'Add to favourites', mode: 'icon', iconName: 'heart' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Unavailable' },
};
