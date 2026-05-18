import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MDSAccordion } from './MDSAccordion';

function renderOneItem() {
  return render(
    <MDSAccordion>
      <MDSAccordion.Item value="a">
        <MDSAccordion.Header>
          <MDSAccordion.Trigger>Label A</MDSAccordion.Trigger>
        </MDSAccordion.Header>
        <MDSAccordion.Panel>
          <div data-testid="panel-a-content">A content</div>
        </MDSAccordion.Panel>
      </MDSAccordion.Item>
    </MDSAccordion>,
  );
}

function renderTwoItems() {
  return render(
    <MDSAccordion>
      <MDSAccordion.Item value="a">
        <MDSAccordion.Header>
          <MDSAccordion.Trigger>Label A</MDSAccordion.Trigger>
        </MDSAccordion.Header>
        <MDSAccordion.Panel>
          <div data-testid="panel-a">A</div>
        </MDSAccordion.Panel>
      </MDSAccordion.Item>
      <MDSAccordion.Item value="b">
        <MDSAccordion.Header>
          <MDSAccordion.Trigger>Label B</MDSAccordion.Trigger>
        </MDSAccordion.Header>
        <MDSAccordion.Panel>
          <div data-testid="panel-b">B</div>
        </MDSAccordion.Panel>
      </MDSAccordion.Item>
    </MDSAccordion>,
  );
}

describe('MDSAccordion', () => {
  it('renders the trigger label and chevron icon', () => {
    renderOneItem();
    expect(screen.getByRole('button', { name: /Label A/i })).toBeInTheDocument();
  });

  it('toggles the panel open on trigger click (uncontrolled)', async () => {
    const user = userEvent.setup();
    renderOneItem();
    const trigger = screen.getByRole('button', { name: /Label A/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('supports controlled value + onValueChange', async () => {
    const user = userEvent.setup();
    const changes: unknown[] = [];
    render(
      <MDSAccordion
        value={[]}
        onValueChange={(v) => changes.push(v)}
      >
        <MDSAccordion.Item value="a">
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>A</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>
            <div data-testid="p">x</div>
          </MDSAccordion.Panel>
        </MDSAccordion.Item>
      </MDSAccordion>,
    );

    await user.click(screen.getByRole('button', { name: 'A' }));
    expect(changes[changes.length - 1]).toEqual(['a']);
  });

  it('allows multi-expansion when openMultiple is set', async () => {
    const user = userEvent.setup();
    render(
      <MDSAccordion openMultiple>
        <MDSAccordion.Item value="a">
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>A</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>x</MDSAccordion.Panel>
        </MDSAccordion.Item>
        <MDSAccordion.Item value="b">
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>B</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>y</MDSAccordion.Panel>
        </MDSAccordion.Item>
      </MDSAccordion>,
    );

    const a = screen.getByRole('button', { name: 'A' });
    const b = screen.getByRole('button', { name: 'B' });
    await user.click(a);
    await user.click(b);
    expect(a).toHaveAttribute('aria-expanded', 'true');
    expect(b).toHaveAttribute('aria-expanded', 'true');
  });

  it('exposes the disabled state via data-disabled on the trigger', () => {
    render(
      <MDSAccordion>
        <MDSAccordion.Item value="a" disabled>
          <MDSAccordion.Header>
            <MDSAccordion.Trigger>A</MDSAccordion.Trigger>
          </MDSAccordion.Header>
          <MDSAccordion.Panel>x</MDSAccordion.Panel>
        </MDSAccordion.Item>
      </MDSAccordion>,
    );
    const trigger = screen.getByRole('button', { name: 'A' });
    expect(trigger).toBeDisabled();
    expect(trigger).toHaveAttribute('data-disabled');
  });

  it('exposes compound subcomponents on MDSAccordion', () => {
    expect(typeof MDSAccordion).toBe('function');
    expect(typeof MDSAccordion.Item).toBe('function');
    expect(typeof MDSAccordion.Header).toBe('function');
    expect(typeof MDSAccordion.Trigger).toBe('function');
    expect(typeof MDSAccordion.Panel).toBe('function');
  });

  it('renders two items independently', () => {
    renderTwoItems();
    expect(screen.getByRole('button', { name: 'Label A' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Label B' })).toBeInTheDocument();
  });
});
