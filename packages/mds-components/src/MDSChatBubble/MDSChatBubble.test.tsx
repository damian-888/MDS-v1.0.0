import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MDSChatBubble } from './MDSChatBubble';

describe('MDSChatBubble', () => {
  it('renders the children inside the bubble for type="message"', () => {
    render(
      <MDSChatBubble alignment="incoming">Hello there</MDSChatBubble>,
    );
    expect(screen.getByText('Hello there')).toBeInTheDocument();
  });

  it('applies data-alignment, data-background and data-type', () => {
    const { container, rerender } = render(
      <MDSChatBubble alignment="incoming">Hi</MDSChatBubble>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-alignment', 'incoming');
    expect(root).toHaveAttribute('data-background', 'standard');
    expect(root).toHaveAttribute('data-type', 'message');

    rerender(
      <MDSChatBubble alignment="outgoing" background="secondary" type="loading" />,
    );
    expect(root).toHaveAttribute('data-alignment', 'outgoing');
    expect(root).toHaveAttribute('data-background', 'secondary');
    expect(root).toHaveAttribute('data-type', 'loading');
  });

  it('renders the avatar only for incoming alignment', () => {
    const avatar = <img alt="A" src="x" />;
    const { rerender, container } = render(
      <MDSChatBubble alignment="incoming" avatar={avatar}>Hi</MDSChatBubble>,
    );
    expect(screen.getByAltText('A')).toBeInTheDocument();
    rerender(
      <MDSChatBubble alignment="outgoing" avatar={avatar}>Hi</MDSChatBubble>,
    );
    expect(screen.queryByAltText('A')).toBeNull();
    expect(container.firstChild).toHaveAttribute('data-alignment', 'outgoing');
  });

  it('renders a timestamp when provided', () => {
    render(
      <MDSChatBubble alignment="incoming" timestamp="12:00">Hi</MDSChatBubble>,
    );
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });

  it('renders a status role with accessible name for type="loading"', () => {
    render(<MDSChatBubble alignment="incoming" type="loading" />);
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('renders media children for type="media"', () => {
    render(
      <MDSChatBubble alignment="incoming" type="media">
        <img alt="puppy" src="x" />
      </MDSChatBubble>,
    );
    expect(screen.getByAltText('puppy')).toBeInTheDocument();
  });
});
