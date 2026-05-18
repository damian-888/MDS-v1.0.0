import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSFlyout } from './MDSFlyout';

describe('MDSFlyout', () => {
  it('renders a div by default with the flyout class', () => {
    const { container } = render(
      <MDSFlyout data-testid="flyout">
        <span>content</span>
      </MDSFlyout>,
    );
    const flyout = screen.getByTestId('flyout');
    expect(flyout.tagName.toLowerCase()).toBe('div');
    expect(container.firstChild).toBe(flyout);
  });

  it('renders children inside the shell', () => {
    render(
      <MDSFlyout>
        <span>hello</span>
      </MDSFlyout>,
    );
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('forwards arbitrary HTML attributes', () => {
    render(
      <MDSFlyout id="my-flyout" aria-label="Demo">
        <span>x</span>
      </MDSFlyout>,
    );
    const flyout = screen.getByLabelText('Demo');
    expect(flyout).toHaveAttribute('id', 'my-flyout');
  });

  it('sets data-scrollable + inline max-height when maxHeight is provided', () => {
    render(
      <MDSFlyout maxHeight={240} data-testid="flyout">
        <span>x</span>
      </MDSFlyout>,
    );
    const flyout = screen.getByTestId('flyout');
    expect(flyout).toHaveAttribute('data-scrollable');
    expect(flyout.style.maxHeight).toBe('240px');
  });

  it('does NOT set data-scrollable when maxHeight is omitted', () => {
    render(
      <MDSFlyout data-testid="flyout">
        <span>x</span>
      </MDSFlyout>,
    );
    expect(screen.getByTestId('flyout')).not.toHaveAttribute('data-scrollable');
  });

  it('renders polymorphically via the render prop', () => {
    render(
      <MDSFlyout render={<section data-testid="flyout" />}>
        <span>x</span>
      </MDSFlyout>,
    );
    const flyout = screen.getByTestId('flyout');
    expect(flyout.tagName.toLowerCase()).toBe('section');
  });

  it('composes consumer className with the internal class', () => {
    render(
      <MDSFlyout className="extra" data-testid="flyout">
        <span>x</span>
      </MDSFlyout>,
    );
    const cls = screen.getByTestId('flyout').className;
    expect(cls).toContain('extra');
    // Internal CSS-Module class name contains 'root' — assert it's still there.
    expect(cls).toMatch(/root/);
  });
});

describe('MDSFlyout.Item', () => {
  it('renders a button by default', () => {
    render(<MDSFlyout.Item>Click me</MDSFlyout.Item>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn.tagName.toLowerCase()).toBe('button');
    // Default type is "button" to prevent accidental form submission.
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('wraps children in a label span (for ellipsis truncation)', () => {
    render(<MDSFlyout.Item>Label text</MDSFlyout.Item>);
    const label = screen.getByText('Label text');
    expect(label.tagName.toLowerCase()).toBe('span');
  });

  it('renders the icon slot when no icon is provided (aria-hidden)', () => {
    const { container } = render(<MDSFlyout.Item>Label</MDSFlyout.Item>);
    const iconSlots = container.querySelectorAll('[aria-hidden="true"]');
    expect(iconSlots.length).toBeGreaterThan(0);
  });

  it('renders a trailing icon when provided', () => {
    render(
      <MDSFlyout.Item icon={<svg data-testid="icon" />}>Label</MDSFlyout.Item>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders polymorphically as a link via the render prop', () => {
    render(
      <MDSFlyout.Item render={<a href="/foo" />}>Go</MDSFlyout.Item>,
    );
    const link = screen.getByRole('link', { name: 'Go' });
    expect(link).toHaveAttribute('href', '/foo');
  });

  it('forwards arbitrary props onto the rendered element', () => {
    render(
      <MDSFlyout.Item data-testid="item" disabled>
        Label
      </MDSFlyout.Item>,
    );
    expect(screen.getByTestId('item')).toBeDisabled();
  });
});
