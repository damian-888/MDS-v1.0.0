import { useState } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { MDSDropdownSelect } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSDropdownSelect is the compound dropdown — Root + Trigger + Popup + Item.
// The Trigger renders the floating-label pill (matching Figma's
// "Dropdown Select" frame) and the Popup wraps Base UI's portalled
// Select.Popup with the flyout shell styling.

const meta = {
  title: 'Components/MDSDropdownSelect',
  component: MDSDropdownSelect.Trigger,
  tags: ['autodocs'],
  args: {
    label: 'Country',
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    chevron: { control: false },
  },
  render: (args) => (
    <div style={{ width: 340 }}>
      <MDSDropdownSelect>
        <MDSDropdownSelect.Trigger {...args} />
        <MDSDropdownSelect.Popup>
          <MDSDropdownSelect.Item value="Germany">Germany</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="United States">United States</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="United Kingdom">United Kingdom</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="France">France</MDSDropdownSelect.Item>
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>
    </div>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5v8kcvSLvQHYfKbo7lJ2Av/MDS-Component-Library?node-id=6104-13920',
    },
    mds: {
      docs: {
        summary:
          'A compound dropdown built on Base UI Select. The Trigger renders the floating-label pill; the Popup ships the same shell as MDSFlyout; each Item is a 48 px pill with a check indicator on selection.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For single-select pickers with 4–~20 options that fit comfortably in a popup (countries, statuses, categories).',
            'With `MDSDropdownSelect.Trigger required` when the field must be answered before form submission — the trigger renders a visual `*`.',
            'With `error` on the Trigger when validation fails — the stroke flips to the destructive palette and the surrounding form should surface a message.',
            'Inside a form where keyboard navigation and `Esc`/`Enter` semantics matter — Base UI Select wires those for free.',
          ],
          avoid: [
            'For tag input or multi-select lists with hundreds of options. Use a combobox or a dedicated multi-select instead.',
            'When the option labels need rich content (icons, descriptions, dividers). The Item slot is plain-text by contract; promote to a custom Menu if needed.',
            'Stacking two MDSDropdownSelect popups on a tight viewport — the portalled popups will overlap. Space the triggers vertically with the form gap tokens.',
            'Overriding the trigger chrome with custom CSS that breaks the floating-label states. The component reads `data-popup-open` and Base UI’s value-set markers to swap typography automatically.',
          ],
        },
        details: {
          behaviour:
            'Selecting an item closes the popup and stamps the Trigger with `data-value` (Base UI). The floating label collapses to microcopy as soon as either `data-popup-open` is set or a value exists. The Popup uses `Select.Positioner` with `sideOffset={4}` so the flyout floats just below the trigger.',
          accessibility:
            'Base UI’s Select.Trigger renders as a real `<button role="combobox">`. Items carry `role="option"`. Keyboard nav (`↑/↓`, `Home/End`, type-to-select, `Esc` to close) is built in. The Trigger picks up `aria-invalid` automatically when `error` is true via the wrapper’s `data-error` attribute.',
          animation:
            'The chevron rotates 180° when the popup opens (150 ms). The floating label cross-fades over 100 ms. All transitions suppress under `prefers-reduced-motion: reduce`.',
          gotchas:
            'The popup is portalled by default — pass `<MDSDropdownSelect.Popup inline>` for tests or any context where portalling breaks layout. Custom positioning is forwarded via `positionerProps`.',
        },
        related: [
          { name: 'MDSFlyout', href: '/?path=/docs/components-mdsflyout--docs' },
          { name: 'MDSInput', href: '/?path=/docs/components-mdsinput--docs' },
          { name: 'MDSMenu', href: '/?path=/docs/components-mdsmenu--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSDropdownSelect.Trigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

const COUNTRY_ITEMS = {
  de: 'Germany',
  us: 'United States',
  uk: 'United Kingdom',
  fr: 'France',
};

export const PreSelected: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <MDSDropdownSelect defaultValue="us">
        <MDSDropdownSelect.Trigger label="Country" items={COUNTRY_ITEMS} />
        <MDSDropdownSelect.Popup>
          <MDSDropdownSelect.Item value="Germany">Germany</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="United States">United States</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="United Kingdom">United Kingdom</MDSDropdownSelect.Item>
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When values are non-display keys (e.g. `"us"`, `"de"`), pass an `items` map on the Trigger so the human label renders in the value row.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState<string>('de');
      return (
        <div style={{ width: 340 }}>
          <MDSDropdownSelect value={value} onValueChange={(v) => setValue(v as string)}>
            <MDSDropdownSelect.Trigger label="Country" items={COUNTRY_ITEMS} />
            <MDSDropdownSelect.Popup>
              <MDSDropdownSelect.Item value="Germany">Germany</MDSDropdownSelect.Item>
              <MDSDropdownSelect.Item value="United States">United States</MDSDropdownSelect.Item>
              <MDSDropdownSelect.Item value="United Kingdom">United Kingdom</MDSDropdownSelect.Item>
            </MDSDropdownSelect.Popup>
          </MDSDropdownSelect>
        </div>
      );
    };
    return <ControlledExample />;
  },
};

export const Required: Story = {
  args: { required: true },
};

export const Error: Story = {
  args: { error: true },
};

export const ErrorFilled: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <MDSDropdownSelect defaultValue="us">
        <MDSDropdownSelect.Trigger label="Country" error items={COUNTRY_ITEMS} />
        <MDSDropdownSelect.Popup>
          <MDSDropdownSelect.Item value="Germany">Germany</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="United States">United States</MDSDropdownSelect.Item>
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <MDSDropdownSelect disabled>
        <MDSDropdownSelect.Trigger label="Country" />
        <MDSDropdownSelect.Popup>
          <MDSDropdownSelect.Item value="Germany">Germany</MDSDropdownSelect.Item>
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>
    </div>
  ),
};

export const ManyItems: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <MDSDropdownSelect>
        <MDSDropdownSelect.Trigger label="Pick a number" />
        <MDSDropdownSelect.Popup>
          {Array.from({ length: 12 }, (_, i) => (
            <MDSDropdownSelect.Item key={i} value={`item-${i}`}>
              Option {i + 1}
            </MDSDropdownSelect.Item>
          ))}
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The popup auto-scrolls when it would exceed the available height (Base UI uses `--available-height`). Internal scrollbar styling matches MDSFlyout’s scrollable variant.',
      },
    },
  },
};
