import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSCheckbox } from './MDSCheckbox';

describe('MDSCheckbox', () => {
  it('renders a checkbox role with the label', () => {
    render(<MDSCheckbox>I agree</MDSCheckbox>);
    expect(screen.getByRole('checkbox', { name: 'I agree' })).toBeInTheDocument();
  });

  it('renders an icon-only checkbox with aria-label', () => {
    render(<MDSCheckbox iconOnly aria-label="Pick me" />);
    expect(screen.getByRole('checkbox', { name: 'Pick me' })).toBeInTheDocument();
  });

  it('reflects controlled checked state via aria-checked', () => {
    const { rerender } = render(
      <MDSCheckbox checked={false} onCheckedChange={() => {}}>
        Agree
      </MDSCheckbox>,
    );
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
    rerender(
      <MDSCheckbox checked onCheckedChange={() => {}}>
        Agree
      </MDSCheckbox>,
    );
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
  });

  it('renders an indeterminate checkbox', () => {
    render(
      <MDSCheckbox checked indeterminate onCheckedChange={() => {}}>
        Mixed
      </MDSCheckbox>,
    );
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
  });

  it('emits onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <MDSCheckbox onCheckedChange={onCheckedChange}>Toggle</MDSCheckbox>,
    );
    await user.click(screen.getByRole('checkbox', { name: 'Toggle' }));
    expect(onCheckedChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('is aria-disabled and data-disabled when disabled is true', () => {
    render(<MDSCheckbox disabled>Locked</MDSCheckbox>);
    const box = screen.getByRole('checkbox');
    expect(box).toHaveAttribute('aria-disabled', 'true');
    expect(box).toHaveAttribute('data-disabled');
  });

  it('sets data-error on the root wrapper when error is true', () => {
    const { container } = render(
      <MDSCheckbox error>Bad input</MDSCheckbox>,
    );
    expect(container.firstChild).toHaveAttribute('data-error');
    expect(container.firstChild).toHaveAttribute('data-scheme', 'error');
  });
});
