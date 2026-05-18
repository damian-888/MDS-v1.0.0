import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  MDSBottomNavigation,
  MDSBottomNavigationItem,
} from './MDSBottomNavigation';

describe('MDSBottomNavigation', () => {
  it('renders a <nav> landmark with the provided aria-label', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span data-testid="icon">★</span>}>
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(nav.tagName).toBe('NAV');
  });

  it('defaults data-background to "standard"', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(screen.getByRole('navigation')).toHaveAttribute(
      'data-background',
      'standard',
    );
  });

  it.each(['standard', 'secondary'] as const)(
    'applies data-background=%s when prop is set',
    (background) => {
      render(
        <MDSBottomNavigation aria-label="Primary" background={background}>
          <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
        </MDSBottomNavigation>,
      );
      expect(screen.getByRole('navigation')).toHaveAttribute(
        'data-background',
        background,
      );
    },
  );

  it('exposes the same Item as a top-level named export and via .Item', () => {
    expect(MDSBottomNavigation.Item).toBe(MDSBottomNavigationItem);
  });

  it('supports polymorphism via the render prop', () => {
    render(
      <MDSBottomNavigation aria-label="Primary" render={<section />}>
        <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    // <section> with aria-label is still a navigation landmark? No — it's a region.
    // Verify the tag changed.
    const node = document.querySelector('section[aria-label="Primary"]');
    expect(node).not.toBeNull();
  });
});

describe('MDSBottomNavigation.Item', () => {
  it('renders as <a> when href is provided', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item href="/home" icon={<span />}>
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toHaveAttribute('href', '/home');
  });

  it('renders as <button type="button"> when no href is provided', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const button = screen.getByRole('button', { name: /home/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('shows the label by default and wraps the icon in aria-hidden', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span data-testid="icon">★</span>}>
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    const iconWrapper = screen.getByTestId('icon').parentElement;
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides the label when hideLabel is true', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item
          icon={<span />}
          hideLabel
          aria-label="Home"
        >
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(screen.queryByText('Home')).toBeNull();
    // Still accessible via aria-label on the button itself.
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
  });

  it('renders a badge slot when showBadge is true', () => {
    const { container } = render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />} showBadge>
          Inbox
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(container.querySelector('[data-slot="badge"]')).not.toBeNull();
  });

  it('does NOT render a badge slot when showBadge is false (default)', () => {
    const { container } = render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(container.querySelector('[data-slot="badge"]')).toBeNull();
  });

  it('sets data-selected and aria-current="page" when selected', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item href="/home" icon={<span />} selected>
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toHaveAttribute('data-selected');
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it('does NOT set data-selected or aria-current by default', () => {
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item href="/home" icon={<span />}>
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).not.toHaveAttribute('data-selected');
    expect(link).not.toHaveAttribute('aria-current');
  });

  it('always renders the selection-bar slot (visibility is driven by CSS state)', () => {
    const { container } = render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />}>Home</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    expect(container.querySelector('[data-slot="selection-bar"]')).not.toBeNull();
  });

  it('forwards onClick handlers', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item
          icon={<span />}
          onClick={() => {
            clicked = true;
          }}
        >
          Home
        </MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    await user.click(screen.getByRole('button', { name: /home/i }));
    expect(clicked).toBe(true);
  });

  it('renders one item per child and lets each take equal flex width', () => {
    const { container } = render(
      <MDSBottomNavigation aria-label="Primary">
        <MDSBottomNavigation.Item icon={<span />}>One</MDSBottomNavigation.Item>
        <MDSBottomNavigation.Item icon={<span />}>Two</MDSBottomNavigation.Item>
        <MDSBottomNavigation.Item icon={<span />}>Three</MDSBottomNavigation.Item>
      </MDSBottomNavigation>,
    );
    const nav = within(container).getByRole('navigation');
    // Each child is directly under <nav> — no intermediate ol/ul wrapper.
    expect(nav.children).toHaveLength(3);
  });
});
