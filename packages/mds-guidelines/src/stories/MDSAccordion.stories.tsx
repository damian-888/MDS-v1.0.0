import type { ComponentType } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { MDSAccordion, MDSText } from '@mds/components';
import type { MDSAccordionProps } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSAccordion wraps Base UI's Accordion primitive. The exported API
// is compound:
//   <MDSAccordion>
//     <MDSAccordion.Item value="…">
//       <MDSAccordion.Header>
//         <MDSAccordion.Trigger>Label</MDSAccordion.Trigger>
//       </MDSAccordion.Header>
//       <MDSAccordion.Panel>…</MDSAccordion.Panel>
//     </MDSAccordion.Item>
//   </MDSAccordion>
//
// `openMultiple` (default false) toggles whether multiple items can
// be expanded simultaneously. All other Base UI Accordion.Root props
// pass through unchanged — including `value` / `defaultValue` /
// `onValueChange` (with the full `(value, eventDetails)` signature),
// `disabled`, and `orientation`.

// Story-only proxy controls — the real component is composed, so the
// playground exposes count + label + content as flat string args.
type ProxyArgs = {
  itemCount: 1 | 2 | 3;
  baseLabel: string;
  baseContent: string;
};

const PanelContent = ({ text }: { text: string }) => (
  <div
    style={{
      padding: 'var(--mds-common-component-values-padding)',
      background: 'var(--mds-colours-basic-background-secondary)',
      borderRadius: 'var(--mds-common-component-values-radius)',
    }}
  >
    <MDSText variant="body">{text}</MDSText>
  </div>
);

// Cast `component` to a `ComponentType<Props>` shape so the inferred meta
// type doesn't reference the unexported inner `MDSAccordionRoot` function —
// `typeof MDSAccordion` otherwise expands to `typeof MDSAccordionRoot & {...}`
// which TypeScript can't name when emitting the meta's declaration.
const AccordionAsComponent =
  MDSAccordion as unknown as ComponentType<MDSAccordionProps & ProxyArgs>;

const meta = {
  title: 'Components/MDSAccordion',
  component: AccordionAsComponent,
  tags: ['autodocs'],
  args: {
    openMultiple: false,
    itemCount: 2,
    baseLabel: 'Label',
    baseContent:
      'Panel content. Children render flush inside MDSAccordion.Panel — apply your own spacing, background, or layout primitives as needed.',
  },
  argTypes: {
    openMultiple: {
      control: { type: 'boolean' },
      description:
        'Allow more than one item to be open at the same time. Maps to Base UI\'s `multiple` prop. Default `false` (single-item exclusive expansion).',
    },
    itemCount: {
      control: { type: 'inline-radio' },
      options: [1, 2, 3],
      description: 'Story-only — how many items the playground renders.',
    },
    baseLabel: {
      control: { type: 'text' },
      description: 'Story-only — trigger label prefix. Items are numbered.',
    },
    baseContent: {
      control: { type: 'text' },
      description: 'Story-only — body text rendered inside each MDSAccordion.Panel.',
    },
    // Hide the pass-through Base UI props from the Controls panel —
    // they're documented under the Compound API section below.
    value: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    disabled: { table: { disable: true } },
    orientation: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  render: (args) => {
    const { itemCount, baseLabel, baseContent, openMultiple } = args;
    const items = Array.from({ length: itemCount }, (_, i) => i + 1);

    return (
      <div style={{ width: 360 }}>
        <MDSAccordion openMultiple={openMultiple}>
          {items.map((n) => (
            <MDSAccordion.Item key={n} value={`item-${n}`}>
              <MDSAccordion.Header>
                <MDSAccordion.Trigger>
                  {baseLabel} {n}
                </MDSAccordion.Trigger>
              </MDSAccordion.Header>
              <MDSAccordion.Panel>
                <PanelContent text={`${baseContent} (panel #${n})`} />
              </MDSAccordion.Panel>
            </MDSAccordion.Item>
          ))}
        </MDSAccordion>
      </div>
    );
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A compound accordion built on Base UI. Group state, keyboard navigation, ARIA wiring, and panel animation are handled by the primitive; MDSAccordion supplies the tokens, type styles, and chevron-rotation polish.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Disclosing groups of related content where only one or two sections are usually needed at a time — FAQs, account settings sections, dense filter panels.',
            'When vertical space is constrained and progressive disclosure improves scannability.',
            'For navigable groups where keyboard reachability and arrow-key flow are required — Base UI handles `ArrowDown` / `ArrowUp` / `Home` / `End` correctly.',
            'Combined with `MDSText` for trigger labels and any layout primitives for panel content — panels render flush with no implicit padding.',
          ],
          avoid: [
            'For primary navigation between pages — use a navigation pattern instead.',
            'When the user must see all sections at once (comparison, dashboards) — accordion hides content behind interaction.',
            'For single-section content with no peer items — a disclosure (`<details>`) or a plain expandable card is lighter.',
            'Nesting accordions inside accordions — keyboard semantics get confusing and the WAI-ARIA Accordion Pattern does not cover this case.',
          ],
        },
        details: {
          behaviour:
            'Wraps Base UI\'s `Accordion.Root` / `Item` / `Header` / `Trigger` / `Panel`. Default expansion mode is single-item exclusive (`openMultiple={false}`). Pass `openMultiple` to allow multiple items open at once, `value` + `onValueChange` for controlled state, or `defaultValue` for uncontrolled. The chevron icon rotates 180° via CSS when Base UI emits `data-panel-open` on the trigger.',
          accessibility:
            'Each `MDSAccordion.Header` renders as an `<h3>` by default (override with the `render` prop). The trigger is a real `<button>` with `aria-expanded` and `aria-controls` wired by Base UI. Keyboard support follows the WAI-ARIA Accordion Pattern: `Tab` moves between triggers and `Enter` / `Space` toggles. When `orientation="vertical"` (the default), arrow keys cycle through triggers. Disabled items surface `data-disabled` and the native `disabled` attribute.',
          animation:
            'Panel height interpolates between `var(--accordion-panel-height)` (open) and `0px` (closed) using `--MDSAccordion-panel-transition-duration` (200ms). Chevron rotation uses `--MDSAccordion-chevron-transition-duration` (200ms). All transitions are suppressed under `prefers-reduced-motion: reduce`.',
          gotchas:
            'MDSAccordion renames Base UI\'s `multiple` prop to `openMultiple` and flips the default from `true` to `false`. If you want the Base UI default behaviour (multiple open by default), set `openMultiple` explicitly. The `MDSAccordion.Panel` has NO built-in padding — wrap children in your own layout primitive (as the stories below do) when you need internal spacing.',
        },
        related: [
          { name: 'MDSText', href: '/?path=/docs/components-mdstext--docs' },
          { name: 'MDSIcon', href: '/?path=/docs/components-mdsicon--docs' },
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
        ],
      },
    },
  },
  // `typeof MDSAccordion` references the inner `MDSAccordionRoot` function
  // which is not part of the public export surface, so TypeScript can't
  // name it when emitting declarations. Use `ComponentType<Props>` to
  // sidestep the reference entirely — same type contract for Storybook.
} satisfies MDSMeta<ComponentType<MDSAccordionProps>, ProxyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: { itemCount: 1, baseLabel: 'Label' },
};

export const ThreeItems: Story = {
  args: { itemCount: 3 },
};

export const MultipleOpen: Story = {
  args: { openMultiple: true, itemCount: 3 },
  parameters: {
    docs: {
      description: {
        story:
          'With `openMultiple={true}`, more than one item can be expanded simultaneously. Use sparingly — exclusive expansion (`openMultiple={false}`) is easier to scan and matches the canonical accordion pattern from WAI-ARIA.',
      },
    },
  },
};

export const WithDisabledItem: Story = {
  args: { itemCount: 3 },
  render: (args) => (
    <div style={{ width: 360 }}>
      <MDSAccordion openMultiple={args.openMultiple}>
        <MDSAccordion.Item value="a">
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>Available section</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>
            <div
              style={{
                padding: 'var(--mds-common-component-values-padding)',
                background: 'var(--mds-colours-basic-background-secondary)',
                borderRadius: 'var(--mds-common-component-values-radius)',
              }}
            >
              <MDSText variant="body">Open and inspect freely.</MDSText>
            </div>
          </MDSAccordion.Panel>
        </MDSAccordion.Item>

        <MDSAccordion.Item value="b" disabled>
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>Locked section</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>
            <MDSText variant="body">Hidden — item is disabled.</MDSText>
          </MDSAccordion.Panel>
        </MDSAccordion.Item>

        <MDSAccordion.Item value="c">
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>Another available section</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>
            <div
              style={{
                padding: 'var(--mds-common-component-values-padding)',
                background: 'var(--mds-colours-basic-background-secondary)',
                borderRadius: 'var(--mds-common-component-values-radius)',
              }}
            >
              <MDSText variant="body">
                Disabled items keep their slot in the keyboard order so the
                user can still tab past them — but the trigger refuses to
                toggle.
              </MDSText>
            </div>
          </MDSAccordion.Panel>
        </MDSAccordion.Item>
      </MDSAccordion>
    </div>
  ),
};

export const Controlled: Story = {
  args: { itemCount: 2 },
  render: () => {
    // Defaults to `item-1` open; the parent owns state. In a real app
    // this state would live in your store or query parameters.
    const open = ['item-1'];
    return (
      <div style={{ width: 360 }}>
        <MDSAccordion
          value={open}
          onValueChange={() => {
            // Controlled — no-op for the demo. In a real app this would
            // update state. Reads `value` and a second `eventDetails`
            // argument that exposes `event`, `reason`, and `cancel`.
          }}
        >
          <MDSAccordion.Item value="item-1">
            <MDSAccordion.Header>
              <MDSAccordion.Trigger>Always open in this story</MDSAccordion.Trigger>
            </MDSAccordion.Header>
            <MDSAccordion.Panel>
              <div
                style={{
                  padding: 'var(--mds-common-component-values-padding)',
                  background: 'var(--mds-colours-basic-background-secondary)',
                  borderRadius: 'var(--mds-common-component-values-radius)',
                }}
              >
                <MDSText variant="body">
                  Parent passes `value={['item-1']}`. The accordion stays open
                  regardless of clicks.
                </MDSText>
              </div>
            </MDSAccordion.Panel>
          </MDSAccordion.Item>

          <MDSAccordion.Item value="item-2">
            <MDSAccordion.Header>
              <MDSAccordion.Trigger>Never opens — controlled</MDSAccordion.Trigger>
            </MDSAccordion.Header>
            <MDSAccordion.Panel>
              <MDSText variant="body">Unreachable in this demo.</MDSText>
            </MDSAccordion.Panel>
          </MDSAccordion.Item>
        </MDSAccordion>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `value` + `onValueChange` to make the accordion fully controlled. Useful when expansion state needs to live in URL/query state, a global store, or be driven by external events. The Base UI `onValueChange` callback receives `(value, eventDetails)` — the second argument exposes `event`, `reason`, and a `cancel()` function for advanced flows.',
      },
    },
  },
};
