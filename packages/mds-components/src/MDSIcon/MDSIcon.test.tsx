// packages/mds-components/src/MDSIcon/MDSIcon.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MDSIcon } from './MDSIcon';

describe('MDSIcon', () => {
  it('renders an SVG element after the lazy icon resolves', async () => {
    render(<MDSIcon name="plus" data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon.tagName.toLowerCase()).toBe('svg');
  });

  it('defaults to data-size="medium"', async () => {
    render(<MDSIcon name="plus" data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon).toHaveAttribute('data-size', 'medium');
  });

  it.each(['small', 'medium', 'large'] as const)(
    'applies data-size=%s when size prop is set semantically',
    async (size) => {
      render(<MDSIcon name="plus" size={size} data-testid="icon" />);
      const icon = await waitFor(() => screen.getByTestId('icon'));
      expect(icon).toHaveAttribute('data-size', size);
    },
  );

  it('sets --MDSIcon-size inline style for numeric sizes', async () => {
    render(<MDSIcon name="plus" size={20} data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    // For numeric sizes, the component sets --MDSIcon-size as an inline custom property
    expect(icon.style.getPropertyValue('--MDSIcon-size')).toBe('20px');
  });

  it('does NOT set --MDSIcon-size inline style for semantic sizes (CSS handles it)', async () => {
    render(<MDSIcon name="plus" size="large" data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon.style.getPropertyValue('--MDSIcon-size')).toBe('');
  });

  it('does NOT set data-size when size is a number (semantic vs numeric paths are distinct)', async () => {
    render(<MDSIcon name="plus" size={20} data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon).not.toHaveAttribute('data-size');
  });

  it('forwards aria-label to the SVG', async () => {
    render(<MDSIcon name="plus" aria-label="Add" data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon).toHaveAttribute('aria-label', 'Add');
  });

  it('forwards aria-hidden to the SVG', async () => {
    render(<MDSIcon name="plus" aria-hidden="true" data-testid="icon" />);
    const icon = await waitFor(() => screen.getByTestId('icon'));
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
