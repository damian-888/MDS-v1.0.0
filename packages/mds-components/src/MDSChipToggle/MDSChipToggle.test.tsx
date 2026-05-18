import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSChipToggle } from './MDSChipToggle';

describe('MDSChipToggle', () => {
  it('renders a button with the label', () => {
    render(<MDSChipToggle>Berlin</MDSChipToggle>);
    expect(screen.getByRole('button', { name: 'Berlin' })).toBeInTheDocument();
  });

  it('reflects the selected prop via aria-pressed', () => {
    const { rerender } = render(
      <MDSChipToggle selected={false}>Berlin</MDSChipToggle>,
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    rerender(<MDSChipToggle selected>Berlin</MDSChipToggle>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('emits onSelectedChange when the user toggles it', async () => {
    const onSelectedChange = vi.fn();
    const user = userEvent.setup();
    render(
      <MDSChipToggle onSelectedChange={onSelectedChange}>Berlin</MDSChipToggle>,
    );
    await user.click(screen.getByRole('button'));
    expect(onSelectedChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('sets data-has-avatar only when an avatar is provided', () => {
    const { rerender } = render(<MDSChipToggle>Berlin</MDSChipToggle>);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-has-avatar');
    rerender(
      <MDSChipToggle avatar={<img alt="" src="x" />}>Berlin</MDSChipToggle>,
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-has-avatar');
  });

  it('is disabled and sets data-disabled when disabled is true', () => {
    render(<MDSChipToggle disabled>Berlin</MDSChipToggle>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled');
  });
});
