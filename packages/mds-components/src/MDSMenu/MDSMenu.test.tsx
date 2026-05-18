import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MDSMenu } from './MDSMenu';

describe('MDSMenu', () => {
  it('renders a trigger button', () => {
    render(
      <MDSMenu>
        <MDSMenu.Trigger>Open</MDSMenu.Trigger>
        <MDSMenu.Popup>
          <MDSMenu.Item>One</MDSMenu.Item>
        </MDSMenu.Popup>
      </MDSMenu>,
    );
    expect(screen.getByRole('button', { name: /open/i })).toBeTruthy();
  });

  it('opens the popup and renders items when the trigger is activated', async () => {
    render(
      <MDSMenu>
        <MDSMenu.Trigger>Open</MDSMenu.Trigger>
        <MDSMenu.Popup>
          <MDSMenu.Item>One</MDSMenu.Item>
          <MDSMenu.Item>Two</MDSMenu.Item>
        </MDSMenu.Popup>
      </MDSMenu>,
    );
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    expect(await screen.findByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });

  it('items render a trailing caret-right by default', async () => {
    render(
      <MDSMenu>
        <MDSMenu.Trigger>Open</MDSMenu.Trigger>
        <MDSMenu.Popup>
          <MDSMenu.Item>Link</MDSMenu.Item>
        </MDSMenu.Popup>
      </MDSMenu>,
    );
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    const item = await screen.findByText('Link');
    const row = item.closest('[role="menuitem"]') as HTMLElement;
    expect(row.querySelector('[data-slot="icon"]')).toBeTruthy();
  });

  it('omits the trailing icon when icon={null}', async () => {
    render(
      <MDSMenu>
        <MDSMenu.Trigger>Open</MDSMenu.Trigger>
        <MDSMenu.Popup>
          <MDSMenu.Item icon={null}>Plain</MDSMenu.Item>
        </MDSMenu.Popup>
      </MDSMenu>,
    );
    fireEvent.click(screen.getByRole('button', { name: /open/i }));
    const item = await screen.findByText('Plain');
    const row = item.closest('[role="menuitem"]') as HTMLElement;
    expect(row.querySelector('[data-slot="icon"]')).toBeNull();
  });
});
