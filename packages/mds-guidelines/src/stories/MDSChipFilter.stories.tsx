import { useState } from 'react';
import type { ComponentType } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { MDSChipFilter } from '@mds/components';
import type { MDSChipFilterProps } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

type ProxyArgs = {
  labelText: string;
  options: string;
};

const DEFAULT_OPTIONS = 'Apple,Banana,Cherry,Pear';

function FilterPlayground({
  labelText,
  options,
  disabled,
}: ProxyArgs & { disabled?: boolean }) {
  const items = options
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const selectedCount = Object.values(checked).filter(Boolean).length;
  const buttonLabel =
    selectedCount > 0 ? `${labelText} · ${selectedCount}` : labelText;

  return (
    <MDSChipFilter
      label={buttonLabel}
      selected={selectedCount > 0}
      disabled={disabled}
    >
      {items.map((item) => (
        <MDSChipFilter.Item
          key={item}
          checked={!!checked[item]}
          onCheckedChange={(next) =>
            setChecked((prev) => ({ ...prev, [item]: next }))
          }
          closeOnClick={false}
        >
          {item}
        </MDSChipFilter.Item>
      ))}
    </MDSChipFilter>
  );
}

// MDSChipFilter is a compound (`Object.assign(Root, { Item })`). Storybook's
// component metadata expects a nameable single component — cast it to the
// root prop signature so the meta type can be emitted in declarations.
const ChipFilterAsComponent = MDSChipFilter as unknown as ComponentType<
  MDSChipFilterProps & ProxyArgs
>;

const meta = {
  title: 'Components/MDSChipFilter',
  component: ChipFilterAsComponent,
  tags: ['autodocs'],
  args: {
    labelText: 'Brand',
    options: DEFAULT_OPTIONS,
    children: null,
    label: 'Brand',
  },
  argTypes: {
    labelText: {
      control: { type: 'text' },
      description:
        'Story-only — drives the chip\'s visible label (with appended selected count).',
    },
    options: {
      control: { type: 'text' },
      description:
        'Story-only — comma-separated list of dropdown items rendered as `MDSChipFilter.Item` children.',
    },
    children: { table: { disable: true } },
    label: { table: { disable: true } },
    selected: { table: { disable: true } },
  },
  render: (args) => (
    <FilterPlayground
      labelText={args.labelText}
      options={args.options}
      disabled={args.disabled}
    />
  ),
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A pill chip that opens a flyout of selectable items below it. The chip itself reflects whether any filters are active; the items inside hold their own multi-select state.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Filter bars above a list of results — each chip opens a category of options.',
            'Multi-select dropdowns where the trigger needs to communicate "filters applied" at a glance.',
            'Anywhere the chip pattern is shorter than a labelled select but the user still needs a popup of choices.',
          ],
          avoid: [
            'Single-action triggers — use `MDSButton`.',
            'Two-state toggles — use `MDSChipToggle`.',
            'Removable filters once applied — pair this with `MDSChipDismissible` in the result bar.',
          ],
        },
        details: {
          behaviour:
            'Built on Base UI Menu. The trigger renders as a chip (with a rotating caret indicator). Items wrap `Menu.CheckboxItem` so each is independently checkable; the consumer controls each item\'s `checked` and `onCheckedChange`. Pass `selected` to the root when one or more items are active so the chip surfaces in the accent fill.',
          accessibility:
            'Trigger is a real `<button>` with `aria-haspopup` / `aria-expanded` set by Base UI. The popup uses the `menu` role; items use `menuitemcheckbox` with `aria-checked`. The popup is portalled — `@scope`-isolated styles per the MDS storybook isolation rules.',
          animation:
            'The caret rotates 180° when the menu opens. The popup appears in place per Base UI defaults. `prefers-reduced-motion` removes the caret transition.',
          gotchas:
            'The chip\'s `selected` prop and the items\' `checked` props are separate concerns: `selected` is the trigger\'s visual "filters active" state, and `checked` is each item\'s individual selection. Coordinate them in your state (count selected items → set `selected={count > 0}`).',
        },
        related: [
          {
            name: 'MDSFlyout',
            href: '/?path=/docs/components-mdsflyout--docs',
          },
          {
            name: 'MDSChipToggle',
            href: '/?path=/docs/components-mdschiptoggle--docs',
          },
          {
            name: 'MDSChipDismissible',
            href: '/?path=/docs/components-mdschipdismissible--docs',
          },
        ],
      },
    },
  },
} satisfies MDSMeta<ComponentType<MDSChipFilterProps & ProxyArgs>, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
