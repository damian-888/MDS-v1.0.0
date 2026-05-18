import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MDSInputField } from './MDSInputField';

describe('MDSInputField', () => {
  it('renders a native input with the floating label', () => {
    render(<MDSInputField label="Email" />);
    expect(screen.getByText('Email')).toBeTruthy();
    const input = screen.getByLabelText('Email');
    expect(input.tagName).toBe('INPUT');
  });

  it('floats the label to microcopy when focused', () => {
    render(<MDSInputField label="Name" data-testid="root-wrap" />);
    const input = screen.getByLabelText('Name');
    fireEvent.focus(input);
    // The wrapper picks up `data-focused`.
    expect(
      input.closest('[data-focused]'),
    ).toBeTruthy();
  });

  it('marks `data-filled` when the input has a value', () => {
    render(<MDSInputField label="Name" defaultValue="Damian" />);
    const input = screen.getByLabelText('Name');
    expect(input.closest('[data-filled]')).toBeTruthy();
  });

  it('stamps data-error on the root when `error` is true and renders the error message', () => {
    render(<MDSInputField label="Email" error errorMessage="Required" />);
    const input = screen.getByLabelText('Email');
    const root = input.closest('[data-error]');
    expect(root).toBeTruthy();
    // Border colour comes from explicit `--mds-red-light-*` tokens
    // under `.root[data-error] .field` — no `data-scheme="error"`
    // cascade, so the trailing slot (icon or action button) keeps
    // its normal palette.
    expect(screen.getByText('Required')).toBeTruthy();
  });

  it('renders an error message linked via aria-describedby', () => {
    render(<MDSInputField label="Email" error errorMessage="Required" />);
    const input = screen.getByLabelText('Email');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toBeTruthy();
  });

  it('renders disabled state', () => {
    render(<MDSInputField label="Email" disabled />);
    const input = screen.getByLabelText('Email');
    expect(input.hasAttribute('disabled')).toBe(true);
    expect(input.closest('[data-disabled]')).toBeTruthy();
  });

  it('renders read-only state', () => {
    render(<MDSInputField label="Email" readOnly defaultValue="x@y.com" />);
    const input = screen.getByLabelText('Email');
    expect(input.hasAttribute('readonly')).toBe(true);
    expect(input.closest('[data-readonly]')).toBeTruthy();
  });

  it('renders the trailing icon when `rightIcon` is set', () => {
    const Icon = () => <span data-testid="right-icon" />;
    render(<MDSInputField label="Email" rightIcon={<Icon />} />);
    expect(screen.getByTestId('right-icon')).toBeTruthy();
  });

  it('prefers `action` over `rightIcon` and stamps data-has-action', () => {
    render(
      <MDSInputField
        label="Email"
        rightIcon={<span data-testid="right-icon" />}
        action={<button data-testid="action" />}
      />,
    );
    expect(screen.queryByTestId('right-icon')).toBeNull();
    expect(screen.getByTestId('action')).toBeTruthy();
    const input = screen.getByLabelText('Email');
    expect(input.closest('[data-has-action]')).toBeTruthy();
  });
});
