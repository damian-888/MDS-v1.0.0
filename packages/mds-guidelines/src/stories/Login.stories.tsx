import type { Meta, StoryObj } from '@storybook/react-vite';

// Login pattern — intentionally blank scaffold. The `Patterns/…` title puts
// this in a new sidebar group alongside `Components/…` (sorted A→Z by the
// `storySort` comparator in `.storybook/preview.ts`). When the composed
// login screen lands, fill `render` and add a vault atom at
// `packages/mds-agents/mds-vault/patterns/login.md`.

const meta = {
  title: 'Patterns/Login',
  tags: ['autodocs'],
  render: () => <></>,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
