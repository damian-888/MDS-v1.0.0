import type { StoryObj } from '@storybook/react-vite';
import { MDSInputField, MDSButton, MDSIcon } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSInputField is the design-system text field. A floating label collapses
// into microcopy when the field is focused or holds a value. The
// component covers the full Figma matrix — standard / hover / focus /
// error / disabled / read-only — and supports leading icons, prefix /
// suffix glyphs, a status icon, or a trailing action button (e.g. an
// "Add" icon-only MDSButton).

const meta = {
  title: 'Components/MDSInputField',
  component: MDSInputField,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    error: false,
    required: false,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    leftIcon: { control: false },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    rightIcon: { control: false },
    action: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: { page: ComponentDocs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5v8kcvSLvQHYfKbo7lJ2Av/MDS-Component-Library?node-id=6104-13647',
    },
    mds: {
      docs: {
        summary:
          'The design-system text field. A floating label collapses to microcopy on focus/value, and the component ships with hover/focus/error/disabled/read-only states plus optional leading icons, prefix/suffix, and a trailing action slot.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For any single-line text capture — name, email, search, currency, weight, etc.',
            'With `prefix`/`suffix` for unit affordances (€, Kg) — they render in body type and stay inside the field.',
            'With `action={<MDSButton iconOnly icon={…} />}` for inline-action fields ("Add", "Apply", "Search"). The right padding tightens to 6 px so the button sits flush.',
            'With `error` + `errorMessage` together — the component links them via `aria-describedby` and stamps `data-scheme="error"` to flip the stroke to the destructive palette.',
          ],
          avoid: [
            'Multi-line capture. Use a `<textarea>`-backed component instead — MDSInputField renders a single `<input>`.',
            'Hardcoding widths inside the field. Size the wrapper (the consumer’s grid/flex) — the input stretches to fill.',
            'Mixing `rightIcon` and `action` simultaneously. `action` always wins; choose one slot per field.',
            'Putting a button inside a read-only or disabled input. The trailing slot stays visible but the rest of the chrome hints the field is non-editable, which creates conflicting affordances.',
          ],
        },
        details: {
          behaviour:
            'The wrapper tracks the value in state (controlled or uncontrolled) and stamps `data-filled` when a value is present and `data-focused` while the input has focus. CSS reads those attributes to collapse the floating label into microcopy and reveal the value row beneath. The `action` slot stamps `data-has-action`, which tightens the right padding to 6 px to match the Figma "Input Field + Button" frame.',
          accessibility:
            'The visible floating label is a real `<label>` associated with the input via `htmlFor`/`id`. `aria-invalid` and `aria-describedby` are wired automatically when `error` is true. Focus rings render on the field chrome, not the input — a 2 px accent outline with a 2 px offset that respects forced-colors mode.',
          animation:
            'The floating label and value row cross-fade across 100 ms. Border and background colour transitions are 120 ms. Under `prefers-reduced-motion: reduce` every transition is suppressed.',
          gotchas:
            'The component renders its own `<label>` because the floating effect requires the label to live inside the field chrome. Pass the visible label via the `label` prop, not as `children` — the `children` slot is reserved for native `<input>` props you might want to spread.',
        },
        related: [
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
          { name: 'MDSCheckbox', href: '/?path=/docs/components-mdscheckbox--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

// ----- Standard matrix ----- //

export const Empty: Story = {};

export const Filled: Story = {
  args: { defaultValue: 'John Smith' },
};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        story:
          'The placeholder shows inside the value row when the field is focused but empty. The floating label still occupies the eyebrow position.',
      },
    },
  },
};

export const Required: Story = {
  args: { required: true },
};

// ----- Error matrix ----- //

export const Error: Story = {
  args: { error: true },
};

export const ErrorWithMessage: Story = {
  args: { error: true, errorMessage: 'This field is required.' },
};

export const ErrorFilled: Story = {
  args: { error: true, defaultValue: 'wrong@input', errorMessage: 'Invalid format.' },
};

// ----- Inert states ----- //

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledFilled: Story = {
  args: { disabled: true, defaultValue: 'Locked value' },
};

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'Read-only value' },
};

// ----- Slots ----- //

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Amount',
    defaultValue: '29.95',
    prefix: '€',
    suffix: 'Kg',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Card number',
    defaultValue: '1234 5678',
    leftIcon: <MDSIcon name="credit-card" size="small" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    defaultValue: 'john.smith@gmail.com',
    rightIcon: <MDSIcon name="check" size="medium" />,
  },
};

export const WithActionButton: Story = {
  args: {
    label: 'Add item',
    placeholder: 'Type and add',
    action: (
      <MDSButton
        iconOnly
        icon={<MDSIcon name="plus" size="small" />}
        aria-label="Add item"
        size="small"
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pair the input with an icon-only `MDSButton` via the `action` slot. The right padding tightens to 6 px so the 48 × 48 button sits flush against the corner — the same matrix Figma describes as "Input Field + Button".',
      },
    },
  },
};

export const ActionWithError: Story = {
  args: {
    label: 'Add item',
    error: true,
    errorMessage: 'Item already in the list.',
    defaultValue: 'Tomatoes',
    action: (
      <MDSButton
        iconOnly
        icon={<MDSIcon name="plus" size="small" />}
        aria-label="Add item"
        size="small"
      />
    ),
  },
};
