import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSLink } from './MDSLink';

describe('MDSLink', () => {
  it('renders an anchor by default', () => {
    render(<MDSLink href="/page">Read more</MDSLink>);
    const a = screen.getByRole('link', { name: /read more/i });
    expect(a.tagName).toBe('A');
    expect(a.getAttribute('href')).toBe('/page');
  });

  it('defaults alignment to left', () => {
    render(<MDSLink href="#x">Go</MDSLink>);
    expect(screen.getByRole('link').getAttribute('data-alignment')).toBe('left');
  });

  it('honours alignment prop', () => {
    render(<MDSLink href="#x" alignment="right">Go</MDSLink>);
    expect(screen.getByRole('link').getAttribute('data-alignment')).toBe('right');
  });

  it('renders the default trailing arrow icon', () => {
    render(<MDSLink href="#x">Go</MDSLink>);
    const iconSlot = screen.getByRole('link').querySelector('[data-slot="icon"]');
    expect(iconSlot).not.toBeNull();
  });

  it('omits the icon when `icon={null}` is passed', () => {
    render(<MDSLink href="#x" icon={null}>Go</MDSLink>);
    const iconSlot = screen.getByRole('link').querySelector('[data-slot="icon"]');
    expect(iconSlot).toBeNull();
  });

  it('supports `render` to swap the underlying element', () => {
    render(
      <MDSLink render={<button type="button" />}>Action</MDSLink>,
    );
    const el = screen.getByRole('button', { name: /action/i });
    expect(el.tagName).toBe('BUTTON');
  });

  it('renders disabled state via aria-disabled', () => {
    render(<MDSLink href="#x" aria-disabled>Off</MDSLink>);
    expect(screen.getByRole('link').getAttribute('aria-disabled')).toBeTruthy();
  });
});
