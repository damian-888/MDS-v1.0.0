import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSImage } from './MDSImage';

describe('MDSImage', () => {
  it('renders an <img> with src and alt', () => {
    render(<MDSImage src="/cat.jpg" alt="A photo of a cat" />);
    const img = screen.getByRole('img', { name: 'A photo of a cat' });
    expect(img).toHaveAttribute('src', '/cat.jpg');
    expect(img.tagName).toBe('IMG');
  });

  it('renders an empty alt for decorative images and is hidden from accessibility', () => {
    render(<MDSImage src="/decor.jpg" alt="" data-testid="decor" />);
    const img = screen.getByTestId('decor');
    expect(img).toHaveAttribute('alt', '');
    // Empty alt removes the img role from the accessibility tree.
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('defaults aspect-ratio to 16/9 and object-fit to cover', () => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" />);
    const img = screen.getByTestId('img');
    expect(img).toHaveAttribute('data-object-fit', 'cover');
    expect((img as HTMLElement).style.aspectRatio).toBe('16/9');
  });

  it.each([
    ['16/9', '16/9'],
    ['1/1', '1/1'],
    ['4/3', '4/3'],
  ] as const)('applies aspectRatio="%s" inline', (input, expected) => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" aspectRatio={input} />);
    expect((screen.getByTestId('img') as HTMLElement).style.aspectRatio).toBe(expected);
  });

  it('coerces a numeric aspectRatio to a CSS string', () => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" aspectRatio={1.5} />);
    // jsdom normalises unitless aspect-ratio values to `<n> / 1`.
    expect((screen.getByTestId('img') as HTMLElement).style.aspectRatio).toMatch(
      /^1\.5(\s*\/\s*1)?$/,
    );
  });

  it.each(['cover', 'contain'] as const)(
    'applies data-object-fit=%s when objectFit prop is set',
    (fit) => {
      render(<MDSImage src="/x.jpg" alt="x" data-testid="img" objectFit={fit} />);
      expect(screen.getByTestId('img')).toHaveAttribute('data-object-fit', fit);
    },
  );

  it('supports polymorphism via the render prop', () => {
    render(
      <MDSImage
        src="/x.jpg"
        alt="x"
        data-testid="picture-img"
        render={<picture><img alt="x" /></picture> as React.ReactElement}
      />,
    );
    expect(document.querySelector('picture')).not.toBeNull();
  });

  it('forwards arbitrary <img> attributes', () => {
    render(
      <MDSImage
        src="/x.jpg"
        alt="x"
        data-testid="img"
        loading="lazy"
        decoding="async"
        srcSet="/x@2x.jpg 2x"
      />,
    );
    const img = screen.getByTestId('img');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
    expect(img).toHaveAttribute('srcset', '/x@2x.jpg 2x');
  });

  it('preserves consumer-provided inline style alongside aspect-ratio', () => {
    render(
      <MDSImage
        src="/x.jpg"
        alt="x"
        data-testid="img"
        style={{ borderRadius: '8px' }}
      />,
    );
    const img = screen.getByTestId('img') as HTMLElement;
    expect(img.style.aspectRatio).toBe('16/9');
    expect(img.style.borderRadius).toBe('8px');
  });

  it('emits data-fill and omits inline aspect-ratio when fill is true', () => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" fill />);
    const img = screen.getByTestId('img') as HTMLElement;
    expect(img).toHaveAttribute('data-fill');
    expect(img.style.aspectRatio).toBe('');
  });

  it('fill takes precedence over a passed aspectRatio', () => {
    render(
      <MDSImage src="/x.jpg" alt="x" data-testid="img" fill aspectRatio="16/9" />,
    );
    const img = screen.getByTestId('img') as HTMLElement;
    expect(img).toHaveAttribute('data-fill');
    expect(img.style.aspectRatio).toBe('');
  });

  it('does NOT emit data-fill when fill is false or omitted', () => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" />);
    const img = screen.getByTestId('img') as HTMLElement;
    expect(img).not.toHaveAttribute('data-fill');
    expect(img.style.aspectRatio).toBe('16/9');
  });

  it('does NOT emit data-fill when fill is explicitly false', () => {
    render(<MDSImage src="/x.jpg" alt="x" data-testid="img" fill={false} />);
    const img = screen.getByTestId('img') as HTMLElement;
    expect(img).not.toHaveAttribute('data-fill');
    expect(img.style.aspectRatio).toBe('16/9');
  });
});
