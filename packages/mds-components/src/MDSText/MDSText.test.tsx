import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSText } from './MDSText';

describe('MDSText', () => {
  it('renders a span by default with the body class', () => {
    render(<MDSText data-testid="t">hello</MDSText>);
    const el = screen.getByTestId('t');
    expect(el.tagName.toLowerCase()).toBe('span');
    expect(el).toHaveClass('mds-typography-body');
    expect(el).toHaveTextContent('hello');
  });

  it.each([
    'h1', 'h2', 'h3',
    'body-large', 'body', 'body-bold', 'body-underline',
    'microcopy',
  ] as const)('applies mds-typography-%s when variant=%s', (variant) => {
    render(<MDSText variant={variant} data-testid="t">x</MDSText>);
    const el = screen.getByTestId('t');
    expect(el).toHaveClass(`mds-typography-${variant}`);
    expect(el).toHaveAttribute('data-variant', variant);
  });

  it('renders the element from the render prop', () => {
    render(<MDSText render={<h1 />} variant="h1" data-testid="t">Hi</MDSText>);
    const el = screen.getByTestId('t');
    expect(el.tagName.toLowerCase()).toBe('h1');
    expect(el).toHaveClass('mds-typography-h1');
  });

  it('renders an anchor when render={<a href="..." />}', () => {
    render(<MDSText render={<a href="/about" />} data-testid="t">About</MDSText>);
    const el = screen.getByTestId('t');
    expect(el.tagName.toLowerCase()).toBe('a');
    expect(el).toHaveAttribute('href', '/about');
    expect(el).toHaveClass('mds-typography-body');
  });

  it('composes className with the variant class', () => {
    render(<MDSText className="extra" data-testid="t">x</MDSText>);
    const el = screen.getByTestId('t');
    expect(el).toHaveClass('mds-typography-body');
    expect(el).toHaveClass('extra');
  });

  it('forwards arbitrary html props', () => {
    render(<MDSText id="label-1" aria-describedby="hint" data-testid="t">x</MDSText>);
    const el = screen.getByTestId('t');
    expect(el).toHaveAttribute('id', 'label-1');
    expect(el).toHaveAttribute('aria-describedby', 'hint');
  });
});
