import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MDSDropdownSelect } from './MDSDropdownSelect';

describe('MDSDropdownSelect', () => {
  it('renders a trigger button with the floating label', () => {
    render(
      <MDSDropdownSelect>
        <MDSDropdownSelect.Trigger label="Country" />
      </MDSDropdownSelect>,
    );
    expect(screen.getByRole('combobox')).toBeTruthy();
    expect(screen.getByText('Country')).toBeTruthy();
  });

  it('marks the trigger as data-error when error is true', () => {
    render(
      <MDSDropdownSelect>
        <MDSDropdownSelect.Trigger label="Country" error />
      </MDSDropdownSelect>,
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger.getAttribute('data-error')).toBeTruthy();
  });

  it('supports a disabled state from the root', () => {
    render(
      <MDSDropdownSelect disabled>
        <MDSDropdownSelect.Trigger label="Country" />
      </MDSDropdownSelect>,
    );
    expect(screen.getByRole('combobox').hasAttribute('data-disabled')).toBe(true);
  });

  it('opens the popup and renders items on click', async () => {
    render(
      <MDSDropdownSelect>
        <MDSDropdownSelect.Trigger label="Country" />
        <MDSDropdownSelect.Popup>
          <MDSDropdownSelect.Item value="de">Germany</MDSDropdownSelect.Item>
          <MDSDropdownSelect.Item value="us">United States</MDSDropdownSelect.Item>
        </MDSDropdownSelect.Popup>
      </MDSDropdownSelect>,
    );
    fireEvent.click(screen.getByRole('combobox'));
    expect(await screen.findByText('Germany')).toBeTruthy();
    expect(screen.getByText('United States')).toBeTruthy();
  });
});
