import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSBadge } from './MDSBadge';

describe('MDSBadge', () => {
  it('renders a span with data-type=number and data-size=large by default for type=number', () => {
    render(<MDSBadge type="number" data-testid="b">1</MDSBadge>);
    const el = screen.getByTestId('b');
    expect(el.tagName.toLowerCase()).toBe('span');
    expect(el).toHaveAttribute('data-type', 'number');
    expect(el).toHaveAttribute('data-size', 'large');
  });

  it('renders children for type=number', () => {
    render(<MDSBadge type="number" data-testid="b">3</MDSBadge>);
    expect(screen.getByTestId('b')).toHaveTextContent('3');
  });

  it.each(['small', 'medium', 'large'] as const)(
    'applies data-size=%s',
    (size) => {
      render(<MDSBadge type="number" size={size} data-testid="b">1</MDSBadge>);
      expect(screen.getByTestId('b')).toHaveAttribute('data-size', size);
    },
  );

  it('does NOT set data-scheme for type=number (inherits parent scheme)', () => {
    render(<MDSBadge type="number" data-testid="b">1</MDSBadge>);
    expect(screen.getByTestId('b')).not.toHaveAttribute('data-scheme');
  });

  it('sets data-scheme="success" and renders the check icon for type=success at size=large', () => {
    render(<MDSBadge type="success" aria-label="Saved" data-testid="b" />);
    const el = screen.getByTestId('b');
    expect(el).toHaveAttribute('data-scheme', 'success');
    expect(el).toHaveAttribute('aria-label', 'Saved');
    expect(el).toHaveAttribute('role', 'img');
    expect(el.querySelector('[data-slot="icon"]')).not.toBeNull();
  });

  it('sets data-scheme="error" and renders the warning icon for type=error', () => {
    render(<MDSBadge type="error" aria-label="Invalid" data-testid="b" />);
    const el = screen.getByTestId('b');
    expect(el).toHaveAttribute('data-scheme', 'error');
    expect(el.querySelector('[data-slot="icon"]')).not.toBeNull();
  });

  it('sets data-section=subtle for success+medium and success+large', () => {
    const { rerender } = render(
      <MDSBadge type="success" size="medium" aria-label="ok" data-testid="b" />,
    );
    expect(screen.getByTestId('b')).toHaveAttribute('data-section', 'subtle');

    rerender(<MDSBadge type="success" size="large" aria-label="ok" data-testid="b" />);
    expect(screen.getByTestId('b')).toHaveAttribute('data-section', 'subtle');
  });

  it('does NOT set data-section=subtle for success+small (solid dot)', () => {
    render(<MDSBadge type="success" size="small" aria-label="ok" data-testid="b" />);
    expect(screen.getByTestId('b')).not.toHaveAttribute('data-section');
  });

  it('forwards arbitrary props', () => {
    render(<MDSBadge type="number" id="badge-1" data-testid="b">1</MDSBadge>);
    expect(screen.getByTestId('b')).toHaveAttribute('id', 'badge-1');
  });

  it('requires aria-label at the type level for type=success and type=error', () => {
    // @ts-expect-error — aria-label is required for icon-only success badge
    render(<MDSBadge type="success" data-testid="b1" />);
    // @ts-expect-error — aria-label is required for icon-only error badge
    render(<MDSBadge type="error" data-testid="b2" />);
    // @ts-expect-error — children are forbidden on icon-only types
    render(<MDSBadge type="success" aria-label="ok" data-testid="b3">x</MDSBadge>);
  });
});
