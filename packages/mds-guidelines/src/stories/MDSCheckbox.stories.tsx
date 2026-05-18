import type { StoryObj } from '@storybook/react-vite';
import { MDSCheckbox } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

type ProxyArgs = {
  label: string;
  mode: 'label' | 'icon-only';
  indeterminate: boolean;
};

const meta = {
  title: 'Components/MDSCheckbox',
  component: MDSCheckbox,
  tags: ['autodocs'],
  args: {
    label: 'I agree to the terms',
    mode: 'label',
    defaultChecked: false,
    disabled: false,
    error: false,
    indeterminate: false,
    children: null,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    mode: {
      control: { type: 'inline-radio' },
      options: ['label', 'icon-only'],
      description:
        'Story-only proxy. `label` renders the box + visible label · `icon-only` is a 32 px square with no label (requires `aria-label`).',
    },
    defaultChecked: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    error: {
      control: { type: 'boolean' },
      description:
        'Switches the box into the error scheme (red palette) and thickens the stroke to 4 px.',
    },
    children: { table: { disable: true } },
    iconOnly: { table: { disable: true } },
    checked: { table: { disable: true } },
    'aria-label': { table: { disable: true } },
    onCheckedChange: { action: 'checked change' },
  },
  render: (args) => {
    const { mode, label, indeterminate, defaultChecked, disabled, error } = args;
    if (mode === 'icon-only') {
      return (
        <MDSCheckbox
          iconOnly
          aria-label={label}
          defaultChecked={defaultChecked}
          indeterminate={indeterminate}
          disabled={disabled}
          error={error}
        />
      );
    }
    return (
      <MDSCheckbox
        defaultChecked={defaultChecked}
        indeterminate={indeterminate}
        disabled={disabled}
        error={error}
      >
        {label}
      </MDSCheckbox>
    );
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A two-state (or three-state, with indeterminate) ticker built on Base UI Checkbox. 32 px square with a 6 px corner radius; selected and indeterminate states fill with the basic accent.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Multi-select lists where each row is an independent on/off.',
            'Boolean form fields ("I agree to…", "Send me updates").',
            'Tri-state group headers — set `indeterminate` when some but not all children are checked.',
          ],
          avoid: [
            'Single-choice selection — use a radio group.',
            'Triggering immediate actions — use a switch or button.',
            'As a visual checkmark with no interaction — use `MDSIcon name="check"` directly.',
          ],
        },
        details: {
          behaviour:
            'Wraps Base UI Checkbox.Root + Checkbox.Indicator. Indeterminate state shows a minus glyph; checked shows a tick. Both use the basic accent fill. The icon-only variant collapses the wrapper to the box\'s intrinsic 32 px so it can sit alone in a dense layout.',
          accessibility:
            'Discriminated TypeScript API — `iconOnly` requires `aria-label`. The label-mode wraps the box and label in a `<label>` element so clicking the label toggles the box. The error mode sets `data-scheme="error"` so the stroke (and any subsequent error visuals) inherit the red palette — never hardcode the red.',
          animation:
            'No transitions on the box fill — the check/minus icon appears immediately on toggle. `prefers-reduced-motion` is honoured.',
          gotchas:
            'When `disabled` and `checked`/`indeterminate` are both true, the box stays filled in the disabled-background colour and the glyph adopts the disabled-text colour — matching Figma\'s "disabled, selected" frame. Don\'t rely on an "error" scheme for `success`-style affirmation — the error prop swaps the entire box scheme to red.',
        },
        related: [
          {
            name: 'MDSIcon',
            href: '/?path=/docs/components-mdsicon--docs',
          },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSCheckbox, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, defaultChecked: true, label: 'Select all' },
};

export const Error: Story = {
  args: { error: true, label: 'Please confirm' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Locked' },
};

export const IconOnly: Story = {
  args: { mode: 'icon-only', label: 'Pick option A' },
};
