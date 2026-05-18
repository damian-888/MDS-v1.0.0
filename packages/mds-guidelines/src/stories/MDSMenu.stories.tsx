import type { StoryObj } from '@storybook/react-vite';
import { MDSMenu, MDSButton, MDSIcon } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSMenu is the navigation/action dropdown — a compound built on
// Base UI Menu. Rows match Figma's "Dropdown Item" Link variant: a
// label plus a 16 px trailing `caret-right` glyph.

const meta = {
  title: 'Components/MDSMenu',
  component: MDSMenu.Item,
  tags: ['autodocs'],
  args: {
    children: 'Menu item',
  },
  argTypes: {
    children: { control: 'text' },
    icon: { control: false },
    leftIcon: { control: false },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <MDSMenu defaultOpen>
      <MDSMenu.Trigger render={<MDSButton variant="secondary">Open menu</MDSButton>} />
      <MDSMenu.Popup>
        <MDSMenu.Item {...args}>{args.children}</MDSMenu.Item>
        <MDSMenu.Item>Account</MDSMenu.Item>
        <MDSMenu.Item>Settings</MDSMenu.Item>
        <MDSMenu.Item>Sign out</MDSMenu.Item>
      </MDSMenu.Popup>
    </MDSMenu>
  ),
  parameters: {
    docs: { page: ComponentDocs },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5v8kcvSLvQHYfKbo7lJ2Av/MDS-Component-Library?node-id=621-4768',
    },
    mds: {
      docs: {
        summary:
          'A compound navigation/action dropdown built on Base UI Menu. Rows match Figma’s "Dropdown Item" Link variant — label plus a trailing `caret-right`. Use `icon={null}` for plain rows or swap in any 16 px glyph.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'For action menus opened from a button — "More options", overflow menus, profile menus.',
            'For navigation menus where each row is a real link. Pair with `render={<a href="…" />}` on `MDSMenu.Item` to render a true anchor while keeping keyboard navigation.',
            'When you need divider sections — pair multiple `MDSMenu.Popup` regions inside a parent layout, or use `BaseMenu.Separator` between groups.',
            'Inside `MDSBreadcrumb` overflow scenarios (Base UI Menu plus the MDSFlyout shell already exists there — MDSMenu is the equivalent standalone API).',
          ],
          avoid: [
            'As a substitute for `MDSSelect`. Menu rows don’t maintain a "selected" state — there is no check indicator. If the consumer needs to pick exactly one value, use `MDSSelect`.',
            'With long, scrolling lists (>10 items). Open a dialog or popover with a list-view instead — menus are for short, opinionated action sets.',
            'With non-action rows (descriptive labels, headings). Items must be activatable. Use `MDSMenu.Item disabled` for a non-actionable row that still belongs in the keyboard tab order.',
            'Stacking icons on both ends without breathing room. Use `leftIcon` OR `icon`, rarely both — they cap the row to one affordance per side.',
          ],
        },
        details: {
          behaviour:
            'Built on Base UI Menu — trigger emits the open/close handshake, keyboard nav covers `↑/↓`, `Home/End`, type-to-select, and `Esc` to close. Items render as `role="menuitem"`. The popup is portalled by default.',
          accessibility:
            'Trigger inherits any underlying element’s role (typically `<button>`). Items carry the appropriate ARIA, focus rings render on `:focus-visible` with a 2 px accent outline offset inwards to match the pill radius. Default trailing chevron is `aria-hidden`.',
          animation:
            'No transition on row state changes; the highlighted row swaps background instantly to match keyboard responsiveness. Under `prefers-reduced-motion: reduce` no animation is applied.',
          gotchas:
            'The popup uses Base UI’s `Menu.Positioner` — pass alignment/offset via the `positionerProps` prop on `MDSMenu.Popup`. Use `<MDSMenu.Popup inline>` to render without a portal when testing.',
        },
        related: [
          { name: 'MDSSelect', href: '/?path=/docs/components-mdsselect--docs' },
          { name: 'MDSFlyout', href: '/?path=/docs/components-mdsflyout--docs' },
          { name: 'MDSBreadcrumb', href: '/?path=/docs/components-mdsbreadcrumb--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSMenu.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeftIcons: Story = {
  render: () => (
    <MDSMenu defaultOpen>
      <MDSMenu.Trigger render={<MDSButton variant="secondary">Open menu</MDSButton>} />
      <MDSMenu.Popup>
        <MDSMenu.Item leftIcon={<MDSIcon name="user" size="small" />}>
          Account
        </MDSMenu.Item>
        <MDSMenu.Item leftIcon={<MDSIcon name="gear" size="small" />}>
          Settings
        </MDSMenu.Item>
        <MDSMenu.Item leftIcon={<MDSIcon name="sign-out" size="small" />}>
          Sign out
        </MDSMenu.Item>
      </MDSMenu.Popup>
    </MDSMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pair `leftIcon` with each item to add an action glyph. The default trailing `caret-right` stays in place; pass `icon={null}` per row to remove it.',
      },
    },
  },
};

export const PlainRows: Story = {
  render: () => (
    <MDSMenu defaultOpen>
      <MDSMenu.Trigger render={<MDSButton variant="secondary">Open menu</MDSButton>} />
      <MDSMenu.Popup>
        <MDSMenu.Item icon={null}>One</MDSMenu.Item>
        <MDSMenu.Item icon={null}>Two</MDSMenu.Item>
        <MDSMenu.Item icon={null}>Three</MDSMenu.Item>
      </MDSMenu.Popup>
    </MDSMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pass `icon={null}` to drop the trailing chevron — useful when each row IS the destination (no nested navigation implied).',
      },
    },
  },
};

export const AsLinks: Story = {
  render: () => (
    <MDSMenu defaultOpen>
      <MDSMenu.Trigger render={<MDSButton variant="secondary">Open menu</MDSButton>} />
      <MDSMenu.Popup>
        <MDSMenu.Item render={<a href="#docs" />}>Documentation</MDSMenu.Item>
        <MDSMenu.Item render={<a href="#changelog" />}>Changelog</MDSMenu.Item>
        <MDSMenu.Item render={<a href="#support" />}>Support</MDSMenu.Item>
      </MDSMenu.Popup>
    </MDSMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`render={<a href="…" />}` swaps the underlying element to a real anchor while keeping keyboard nav and styling. Activating the item performs a native navigation.',
      },
    },
  },
};

export const DisabledItem: Story = {
  render: () => (
    <MDSMenu defaultOpen>
      <MDSMenu.Trigger render={<MDSButton variant="secondary">Open menu</MDSButton>} />
      <MDSMenu.Popup>
        <MDSMenu.Item>Available</MDSMenu.Item>
        <MDSMenu.Item disabled>Coming soon</MDSMenu.Item>
        <MDSMenu.Item>Also available</MDSMenu.Item>
      </MDSMenu.Popup>
    </MDSMenu>
  ),
};
