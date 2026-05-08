import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSButton } from './MDSButton';

describe('MDSButton', () => {
  it('renders a button element with its children', () => {
    render(<MDSButton>Click me</MDSButton>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('defaults data-variant to "secondary" and data-size to "large"', () => {
    render(<MDSButton>Default</MDSButton>);
    const button = screen.getByRole('button', { name: 'Default' });
    expect(button).toHaveAttribute('data-variant', 'secondary');
    expect(button).toHaveAttribute('data-size', 'large');
  });

  it.each(['primary', 'secondary', 'outline', 'ghost'] as const)(
    'applies data-variant=%s when variant prop is set',
    (variant) => {
      render(<MDSButton variant={variant}>Label</MDSButton>);
      const button = screen.getByRole('button', { name: 'Label' });
      expect(button).toHaveAttribute('data-variant', variant);
    },
  );

  it.each(['small', 'large'] as const)(
    'applies data-size=%s when size prop is set',
    (size) => {
      render(<MDSButton size={size}>Label</MDSButton>);
      const button = screen.getByRole('button', { name: 'Label' });
      expect(button).toHaveAttribute('data-size', size);
    },
  );

  it('renders the icon as a trailing element when icon prop is passed (non-icon-only mode)', () => {
    render(
      <MDSButton icon={<span data-testid="trailing-icon">→</span>}>
        Continue
      </MDSButton>,
    );
    const button = screen.getByRole('button', { name: 'Continue' });
    const icon = screen.getByTestId('trailing-icon');
    expect(button).toContainElement(icon);
  });

  it('does NOT render an icon when icon prop is omitted', () => {
    render(<MDSButton>Plain</MDSButton>);
    expect(screen.queryByTestId('trailing-icon')).toBeNull();
  });

  it('sets data-icon-only when iconOnly is true and renders only the icon', () => {
    render(
      <MDSButton iconOnly aria-label="Add" icon={<span data-testid="solo-icon">+</span>} />,
    );
    const button = screen.getByRole('button', { name: 'Add' });
    expect(button).toHaveAttribute('data-icon-only');
    expect(screen.getByTestId('solo-icon')).toBeInTheDocument();
    // Label text should not be rendered in icon-only mode
    expect(button.textContent).toBe('+');
  });

  it('marks the icon as aria-hidden in both labelled and icon-only modes', () => {
    const { rerender } = render(
      <MDSButton icon={<span data-testid="icon">★</span>}>Label</MDSButton>,
    );
    let iconWrapper = screen.getByTestId('icon').parentElement;
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');

    rerender(
      <MDSButton iconOnly aria-label="Action" icon={<span data-testid="icon">★</span>} />,
    );
    iconWrapper = screen.getByTestId('icon').parentElement;
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('does NOT set data-icon-only when iconOnly is false (default)', () => {
    render(<MDSButton>Default</MDSButton>);
    const button = screen.getByRole('button', { name: 'Default' });
    expect(button).not.toHaveAttribute('data-icon-only');
  });

  it('sets data-disabled and is disabled when the disabled prop is true (Base UI behavior)', () => {
    render(<MDSButton disabled>Disabled</MDSButton>);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled');
  });

  it('forwards onClick handlers', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(<MDSButton onClick={() => { clicked = true; }}>Tap</MDSButton>);
    await user.click(screen.getByRole('button', { name: 'Tap' }));
    expect(clicked).toBe(true);
  });

  it('does NOT fire onClick when disabled', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(
      <MDSButton disabled onClick={() => { clicked = true; }}>
        Disabled
      </MDSButton>,
    );
    await user.click(screen.getByRole('button', { name: 'Disabled' }));
    expect(clicked).toBe(false);
  });

  it('renders the icon inside an iconSlot wrapper that establishes the size cascade', () => {
    const { container: largeButtonContainer } = render(
      <MDSButton size="large" icon={<span data-testid="icon">★</span>}>Large</MDSButton>,
    );
    const largeIconSlot = largeButtonContainer.querySelector('button > span:last-child');
    // The icon slot exists and contains the icon node
    expect(largeIconSlot).not.toBeNull();
    expect(largeIconSlot?.firstChild).toBe(screen.getByTestId('icon'));

    // The button itself carries data-size; the CSS cascade handles --MDSIcon-size on the slot.
    // We can't reliably compute resolved CSS Module styles in jsdom, but we can assert the
    // structural contract that makes the cascade work: the slot is a direct child of the
    // button (so .root[data-size=...] .iconSlot selector can target it).
    const button = screen.getByRole('button', { name: 'Large' });
    expect(button).toHaveAttribute('data-size', 'large');
    expect(largeIconSlot?.parentElement).toBe(button);
  });
});
