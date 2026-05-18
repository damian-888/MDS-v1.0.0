import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSChipFilter } from './MDSChipFilter';

describe('MDSChipFilter', () => {
  it('renders a button trigger with the label', () => {
    render(
      <MDSChipFilter label="Brand">
        <MDSChipFilter.Item>Apple</MDSChipFilter.Item>
      </MDSChipFilter>,
    );
    expect(screen.getByRole('button', { name: /Brand/ })).toBeInTheDocument();
  });

  it('sets data-selected on the trigger when selected is true', () => {
    render(
      <MDSChipFilter label="Brand" selected>
        <MDSChipFilter.Item>Apple</MDSChipFilter.Item>
      </MDSChipFilter>,
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-selected');
  });

  it('opens a menu when the trigger is clicked, revealing items', async () => {
    const user = userEvent.setup();
    render(
      <MDSChipFilter label="Brand">
        <MDSChipFilter.Item>Apple</MDSChipFilter.Item>
        <MDSChipFilter.Item>Banana</MDSChipFilter.Item>
      </MDSChipFilter>,
    );
    expect(screen.queryByRole('menuitemcheckbox', { name: 'Apple' })).toBeNull();
    await user.click(screen.getByRole('button', { name: /Brand/ }));
    expect(
      await screen.findByRole('menuitemcheckbox', { name: 'Apple' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('menuitemcheckbox', { name: 'Banana' }),
    ).toBeInTheDocument();
  });

  it('is disabled and aria-disabled when disabled is true', () => {
    render(
      <MDSChipFilter label="Brand" disabled>
        <MDSChipFilter.Item>Apple</MDSChipFilter.Item>
      </MDSChipFilter>,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
