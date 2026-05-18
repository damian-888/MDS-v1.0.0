import type { StoryObj } from '@storybook/react-vite';
import { MDSText } from '@mds/components';
import { ComponentDocs } from '../docs-template';
import type { MDSMeta } from '../docs-template';

// MDSText is a polymorphic typography utility — it renders a single
// HTML element with one of the eight `.mds-typography-*` classes from
// `@mds/tokens`. The `render` prop controls the rendered tag (default
// `<span>`); the `variant` prop selects the type style.
//
// There's no CSS Module — the typography classes already exist in
// `tokens.css` and are the single source of truth for type styles.

const meta = {
  title: 'Components/MDSText',
  component: MDSText,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'body-large',
        'body',
        'body-bold',
        'body-underline',
        'microcopy',
      ],
      description:
        'Type style. Maps 1:1 to a `.mds-typography-*` utility class emitted by `@mds/tokens`.',
    },
    children: {
      control: { type: 'text' },
      description: 'Text content. Any ReactNode works.',
    },
    render: { table: { disable: true } },
  },
  parameters: {
    docs: { page: ComponentDocs },
    mds: {
      docs: {
        summary:
          'A polymorphic text utility. Renders a single HTML element with one of the eight MDS type styles. Choose the tag with `render`, pick the style with `variant`.',
        usage: { importFrom: '@mds/components' },
        guidelines: {
          use: [
            'Anywhere a fragment of text needs to inherit MDS type tokens without authoring a new component or CSS module.',
            'When you need polymorphism — render an `<h1>`, `<p>`, `<a>`, or `<label>` while keeping the same type style.',
            'As the canonical way to apply MDS typography inside other MDS components (e.g. Accordion trigger label, Breadcrumb item, custom card titles).',
            'When the rendered element semantics matter (`<h1>`/`<h2>`/`<p>`/`<label>`) — `render` keeps semantics and visuals independent.',
          ],
          avoid: [
            'For long-form prose where you would otherwise reach for a paragraph or heading hierarchy — use `render` to set the correct element instead of nesting `<span>`s.',
            'Setting font-family, font-size, weight, line-height, or letter-spacing inline. If a token is missing, add it to `@mds/tokens`, do not work around it here.',
            'Using `microcopy` for primary content. It is intended for fine print, helper text, and dense labels.',
            'Repurposing the heading variants (`h1` / `h2` / `h3`) on `<span>` for visual hierarchy. Match the rendered element to the document outline.',
          ],
        },
        details: {
          behaviour:
            'Built on Base UI\'s `useRender` — the `render` prop accepts a React element (default `<span/>`) whose tag and outer props are preserved. The `variant` is applied as both a `data-variant` attribute and the matching `.mds-typography-*` class. `className`, `id`, ARIA props, and event handlers all forward.',
          accessibility:
            'The component is presentation-only — it carries no implicit role. Use `render` to choose the semantically correct element: `<h1>`–`<h3>` for headings, `<p>` for paragraphs, `<label>` for form labels, `<a>` for links. Visible focus rings, link semantics, and disabled state come from the rendered element, not from MDSText itself.',
          gotchas:
            'The variant generic order (h1 → microcopy) reflects visual prominence, not the typographic scale published in `@mds/tokens`. `body-underline` is the only variant whose visual difference comes from `text-decoration` (the other underline-on-hover patterns belong on `<a>`, not on body copy).',
        },
        related: [
          { name: 'MDSButton', href: '/?path=/docs/components-mdsbutton--docs' },
          { name: 'MDSBreadcrumb', href: '/?path=/docs/components-mdsbreadcrumb--docs' },
          { name: 'MDSAccordion', href: '/?path=/docs/components-mdsaccordion--docs' },
        ],
      },
    },
  },
} satisfies MDSMeta<typeof MDSText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const HeadingH1: Story = {
  args: {
    variant: 'h1',
    render: <h1 />,
    children: 'Page title',
  },
};

export const HeadingH2: Story = {
  args: {
    variant: 'h2',
    render: <h2 />,
    children: 'Section title',
  },
};

export const HeadingH3: Story = {
  args: {
    variant: 'h3',
    render: <h3 />,
    children: 'Sub-section title',
  },
};

export const BodyLarge: Story = {
  args: { variant: 'body-large' },
};

export const BodyBold: Story = {
  args: { variant: 'body-bold' },
};

export const BodyUnderline: Story = {
  args: { variant: 'body-underline' },
};

export const Microcopy: Story = {
  args: {
    variant: 'microcopy',
    children: 'Caption · helper text · legal disclaimer',
  },
};

export const AsAnchor: Story = {
  args: {
    variant: 'body-underline',
    render: <a href="#" />,
    children: 'A polymorphic anchor with body-underline styling',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using `render={<a href="..." />}` swaps the rendered element to an anchor while keeping the same typography variant. Any HTML attributes (href, target, rel) are forwarded.',
      },
    },
  },
};

export const AsParagraph: Story = {
  args: {
    render: <p />,
    children:
      'Use `render={<p />}` when the text is a real paragraph, not just a styled span. Use it generously — the rendered element drives screen-reader semantics.',
  },
};
