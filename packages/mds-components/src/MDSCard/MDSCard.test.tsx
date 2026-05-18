import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  MDSCard,
  MDSCardHeader,
  MDSCardBody,
  MDSCardActions,
} from './MDSCard';
import { MDSButton } from '../MDSButton';

describe('MDSCard (root)', () => {
  it('renders a <div> by default with default data attrs', () => {
    render(
      <MDSCard data-testid="card">
        <p>Hello</p>
      </MDSCard>,
    );
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('DIV');
    expect(card).toHaveAttribute('data-background', 'standard');
    expect(card).toHaveAttribute('data-image-alignment', 'top');
    expect(card).not.toHaveAttribute('data-has-media');
    expect(card).not.toHaveAttribute('data-outline');
    expect(card).not.toHaveAttribute('data-interactive');
    expect(card).not.toHaveAttribute('data-selected');
  });

  it.each(['standard', 'secondary'] as const)(
    'applies data-background=%s',
    (bg) => {
      render(
        <MDSCard data-testid="card" background={bg}>
          x
        </MDSCard>,
      );
      expect(screen.getByTestId('card')).toHaveAttribute('data-background', bg);
    },
  );

  it.each(['top', 'right', 'left'] as const)(
    'applies data-image-alignment=%s',
    (align) => {
      render(
        <MDSCard data-testid="card" imageAlignment={align}>
          x
        </MDSCard>,
      );
      expect(screen.getByTestId('card')).toHaveAttribute(
        'data-image-alignment',
        align,
      );
    },
  );

  it('sets data-outline when outline is true', () => {
    render(
      <MDSCard data-testid="card" outline>
        x
      </MDSCard>,
    );
    expect(screen.getByTestId('card')).toHaveAttribute('data-outline');
  });

  it('sets data-selected + aria-pressed when interactive + selected', () => {
    render(
      <MDSCard data-testid="card" interactive selected>
        x
      </MDSCard>,
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('data-selected');
    expect(card).toHaveAttribute('data-interactive');
    expect(card).toHaveAttribute('aria-pressed', 'true');
  });

  it('does NOT set aria-pressed when selected but not interactive', () => {
    render(
      <MDSCard data-testid="card" selected>
        x
      </MDSCard>,
    );
    expect(screen.getByTestId('card')).not.toHaveAttribute('aria-pressed');
  });

  it('injects tabIndex=0 on the default <div> when interactive', () => {
    render(
      <MDSCard data-testid="card" interactive>
        x
      </MDSCard>,
    );
    expect(screen.getByTestId('card')).toHaveAttribute('tabindex', '0');
  });

  it('does NOT inject tabIndex when consumer provides a render element', () => {
    render(
      <MDSCard data-testid="card" interactive render={<a href="/x" />}>
        x
      </MDSCard>,
    );
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('A');
    expect(card).not.toHaveAttribute('tabindex');
  });

  it('renders the media slot and sets data-has-media when media is provided', () => {
    const { container } = render(
      <MDSCard
        data-testid="card"
        media={<img data-testid="img" alt="x" src="/x.jpg" />}
      >
        x
      </MDSCard>,
    );
    expect(container.querySelector('[data-slot="media"]')).not.toBeNull();
    expect(screen.getByTestId('card')).toHaveAttribute('data-has-media');
    expect(screen.getByTestId('img')).toBeInTheDocument();
  });

  it('does NOT render the media slot when media is omitted', () => {
    const { container } = render(
      <MDSCard data-testid="card">x</MDSCard>,
    );
    expect(container.querySelector('[data-slot="media"]')).toBeNull();
    expect(screen.getByTestId('card')).not.toHaveAttribute('data-has-media');
  });

  it('renders the overlay inside the media slot when both are provided', () => {
    const { container } = render(
      <MDSCard
        media={<img alt="x" src="/x.jpg" />}
        overlay={<button>Play</button>}
      >
        x
      </MDSCard>,
    );
    const media = container.querySelector('[data-slot="media"]')!;
    const overlay = media.querySelector('[data-slot="overlay"]')!;
    expect(overlay).not.toBeNull();
    expect(overlay.querySelector('button')).not.toBeNull();
  });

  it('ignores overlay when no media is provided (avoids floating scrim)', () => {
    const { container } = render(
      <MDSCard overlay={<button>Play</button>}>x</MDSCard>,
    );
    expect(container.querySelector('[data-slot="overlay"]')).toBeNull();
  });

  it('content slot is rendered as the direct sibling of media (with-media mode)', () => {
    const { container } = render(
      <MDSCard media={<img alt="x" src="/x.jpg" />}>
        <p data-testid="body">Body</p>
      </MDSCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.children).toHaveLength(2);
    expect(card.children[1]).toHaveAttribute('data-slot', 'content');
    expect(screen.getByTestId('body')).toBeInTheDocument();
  });

  it('forwards onClick when used as a button', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(
      <MDSCard
        data-testid="card"
        interactive
        render={<button type="button" />}
        onClick={() => {
          clicked = true;
        }}
      >
        x
      </MDSCard>,
    );
    await user.click(screen.getByTestId('card'));
    expect(clicked).toBe(true);
  });

  it('exposes the same compound parts via Object.assign and top-level exports', () => {
    expect(MDSCard.Header).toBe(MDSCardHeader);
    expect(MDSCard.Body).toBe(MDSCardBody);
    expect(MDSCard.Actions).toBe(MDSCardActions);
  });

  it('applies data-section="subtle" when background is secondary', () => {
    render(
      <MDSCard data-testid="card" background="secondary">
        x
      </MDSCard>,
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('data-section', 'subtle');
    expect(card).toHaveAttribute('data-background', 'secondary');
  });

  it('does NOT set data-section when background is standard', () => {
    render(
      <MDSCard data-testid="card" background="standard">
        x
      </MDSCard>,
    );
    const card = screen.getByTestId('card');
    expect(card).not.toHaveAttribute('data-section');
    expect(card).toHaveAttribute('data-background', 'standard');
  });

  it('omits data-section by default', () => {
    render(<MDSCard data-testid="card">x</MDSCard>);
    expect(screen.getByTestId('card')).not.toHaveAttribute('data-section');
  });

  it.each(['right', 'left'] as const)(
    'allows per-instance override of --MDSCard-media-side-width when imageAlignment=%s',
    (align) => {
      render(
        <MDSCard
          data-testid="card"
          imageAlignment={align}
          media={<img alt="x" src="/x.jpg" data-testid="img" />}
          style={{ ['--MDSCard-media-side-width' as string]: '200px' }}
        >
          <p>content</p>
        </MDSCard>,
      );
      const card = screen.getByTestId('card') as HTMLElement;
      // Verify the styling hook makes it onto the root as inline CSS variable.
      expect(card.style.getPropertyValue('--MDSCard-media-side-width')).toBe(
        '200px',
      );
      // And the side-aligned card structurally exposes the media slot.
      expect(card).toHaveAttribute('data-image-alignment', align);
      expect(card).toHaveAttribute('data-has-media');
    },
  );
});

describe('MDSCard.Header', () => {
  it('renders the headline as an <h2> by default', () => {
    render(
      <MDSCard>
        <MDSCard.Header>Hello</MDSCard.Header>
      </MDSCard>,
    );
    const h = screen.getByRole('heading', { level: 2, name: 'Hello' });
    expect(h.tagName).toBe('H2');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const)(
    'supports heading level "%s" via the `as` prop',
    (level) => {
      const num = Number(level.slice(1));
      render(
        <MDSCard>
          <MDSCard.Header as={level}>Hi</MDSCard.Header>
        </MDSCard>,
      );
      expect(
        screen.getByRole('heading', { level: num, name: 'Hi' }),
      ).toBeInTheDocument();
    },
  );

  it('renders the optional tag when provided', () => {
    render(
      <MDSCard>
        <MDSCard.Header tag="New">Hello</MDSCard.Header>
      </MDSCard>,
    );
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders the close button only when onClose is provided', async () => {
    const user = userEvent.setup();
    let closed = false;
    const { rerender } = render(
      <MDSCard>
        <MDSCard.Header
          onClose={() => {
            closed = true;
          }}
          closeLabel="Dismiss"
        >
          X
        </MDSCard.Header>
      </MDSCard>,
    );
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(closed).toBe(true);

    rerender(
      <MDSCard>
        <MDSCard.Header>X</MDSCard.Header>
      </MDSCard>,
    );
    expect(screen.queryByRole('button')).toBeNull();
  });
});

describe('MDSCard.Body', () => {
  it('renders children inside an MDSText body variant', () => {
    render(
      <MDSCard>
        <MDSCard.Body>Some body text</MDSCard.Body>
      </MDSCard>,
    );
    expect(screen.getByText('Some body text')).toBeInTheDocument();
  });
});

describe('MDSCard.Actions', () => {
  it('renders children as-is — consumers drop in any buttons / links', () => {
    render(
      <MDSCard>
        <MDSCard.Actions>
          <MDSButton variant="primary">Buy</MDSButton>
          <MDSButton>Learn</MDSButton>
        </MDSCard.Actions>
      </MDSCard>,
    );
    expect(screen.getByRole('button', { name: 'Buy' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Learn' })).toBeInTheDocument();
  });

  it('renders a single-button action slot without forcing equal-width stretch (CSS uses :has)', () => {
    const { container } = render(
      <MDSCard>
        <MDSCard.Actions>
          <MDSButton variant="primary">Only</MDSButton>
        </MDSCard.Actions>
      </MDSCard>,
    );
    const slot = container.querySelector('[data-slot="actions"]')!;
    expect(slot.children).toHaveLength(1);
  });
});
