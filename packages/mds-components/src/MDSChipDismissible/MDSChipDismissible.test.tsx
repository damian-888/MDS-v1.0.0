import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSChipDismissible } from './MDSChipDismissible';

describe('MDSChipDismissible', () => {
  it('renders the label text', () => {
    render(<MDSChipDismissible>Sample</MDSChipDismissible>);
    expect(screen.getByText('Sample')).toBeInTheDocument();
  });

  it('renders a dismiss button with the default accessible name', () => {
    render(<MDSChipDismissible>Sample</MDSChipDismissible>);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('uses the dismissLabel prop for the close button accessible name', () => {
    render(
      <MDSChipDismissible dismissLabel="Remove filter">Berlin</MDSChipDismissible>,
    );
    expect(
      screen.getByRole('button', { name: 'Remove filter' }),
    ).toBeInTheDocument();
  });

  it('calls onDismiss when the close button is clicked', async () => {
    const onDismiss = vi.fn();
    const user = userEvent.setup();
    render(
      <MDSChipDismissible onDismiss={onDismiss}>Sample</MDSChipDismissible>,
    );
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('sets data-has-avatar only when an avatar is provided', () => {
    const { rerender, container } = render(
      <MDSChipDismissible>Sample</MDSChipDismissible>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root).not.toHaveAttribute('data-has-avatar');

    rerender(
      <MDSChipDismissible avatar={<img alt="" src="x" />}>Sample</MDSChipDismissible>,
    );
    expect(root).toHaveAttribute('data-has-avatar');
  });
});
