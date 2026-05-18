import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSBreadcrumb } from './MDSBreadcrumb';

describe('MDSBreadcrumb', () => {
  it('renders <nav aria-label="Breadcrumb"> with an <ol>', () => {
    const { container } = render(
      <MDSBreadcrumb>
        <MDSBreadcrumb.Item href="/">Level 1</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(nav).toBeInTheDocument();
    expect(container.querySelector('ol')).not.toBeNull();
  });

  it('renders 2 items as-is, last marked aria-current=page', () => {
    render(
      <MDSBreadcrumb>
        <MDSBreadcrumb.Item href="/">Level 1</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(screen.getByRole('link', { name: 'Level 1' })).toHaveAttribute('href', '/');
    const current = screen.getByText('Current');
    expect(current.tagName.toLowerCase()).toBe('span');
    expect(current).toHaveAttribute('aria-current', 'page');
  });

  it('renders separators between items', () => {
    const { container } = render(
      <MDSBreadcrumb>
        <MDSBreadcrumb.Item href="/a">A</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/b">B</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>C</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(container.querySelectorAll('[data-slot="separator"]').length).toBe(2);
  });

  it('does NOT overflow when count <= maxItems', () => {
    const { container } = render(
      <MDSBreadcrumb maxItems={4}>
        <MDSBreadcrumb.Item href="/1">1</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/2">2</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/3">3</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>4</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(container.querySelector('[data-slot="overflow-trigger"]')).toBeNull();
  });

  it('collapses middle items into an overflow trigger when count > maxItems', () => {
    render(
      <MDSBreadcrumb maxItems={4}>
        <MDSBreadcrumb.Item href="/1">L1</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/2">L2</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/3">L3</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/4">L4</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/5">L5</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(screen.getByRole('link', { name: 'L1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Show.*collapsed/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'L5' })).toBeInTheDocument();
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page');
    expect(screen.queryByRole('link', { name: 'L2' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'L3' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'L4' })).toBeNull();
  });

  it('exposes collapsed items via the overflow menu', async () => {
    const user = userEvent.setup();
    render(
      <MDSBreadcrumb maxItems={4}>
        <MDSBreadcrumb.Item href="/1">L1</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/2">L2</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/3">L3</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item href="/4">L4</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    const trigger = screen.getByRole('button', { name: /Show.*collapsed/i });
    await user.click(trigger);
    const menu = await screen.findByRole('menu');
    expect(within(menu).getByText('L2')).toBeInTheDocument();
    expect(within(menu).getByText('L3')).toBeInTheDocument();
  });

  it('respects a custom aria-label', () => {
    render(
      <MDSBreadcrumb aria-label="Site path">
        <MDSBreadcrumb.Item href="/">A</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>B</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(screen.getByRole('navigation', { name: 'Site path' })).toBeInTheDocument();
  });

  it('renders an item with no href as a non-link span (escape hatch)', () => {
    render(
      <MDSBreadcrumb>
        <MDSBreadcrumb.Item>NoLink</MDSBreadcrumb.Item>
        <MDSBreadcrumb.Item>Current</MDSBreadcrumb.Item>
      </MDSBreadcrumb>,
    );
    expect(screen.queryByRole('link', { name: 'NoLink' })).toBeNull();
    const noLink = screen.getByText('NoLink');
    expect(noLink.tagName.toLowerCase()).toBe('span');
    expect(noLink).not.toHaveAttribute('aria-current');
  });
});
