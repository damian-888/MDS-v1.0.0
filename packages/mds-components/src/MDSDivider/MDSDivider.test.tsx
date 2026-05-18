import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSDivider } from './MDSDivider';

describe('MDSDivider', () => {
  it('defaults to horizontal orientation', () => {
    render(<MDSDivider data-testid="d" />);
    const el = screen.getByTestId('d');
    expect(el.getAttribute('data-orientation')).toBe('horizontal');
  });

  it('renders vertical orientation', () => {
    render(<MDSDivider orientation="vertical" data-testid="d" />);
    const el = screen.getByTestId('d');
    expect(el.getAttribute('data-orientation')).toBe('vertical');
  });

  it('composes user className with the root class', () => {
    render(<MDSDivider className="custom" data-testid="d" />);
    expect(screen.getByTestId('d').className).toMatch(/custom/);
  });

  it('forwards arbitrary HTML attributes', () => {
    render(<MDSDivider data-testid="d" aria-label="Section break" />);
    expect(screen.getByTestId('d').getAttribute('aria-label')).toBe(
      'Section break',
    );
  });
});
