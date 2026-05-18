// packages/mds-components/src/MDSCard/MDSCard.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSButton } from '../MDSButton';
import { MDSIcon } from '../MDSIcon';
import { MDSText } from '../MDSText';
import styles from './MDSCard.module.css';

export type MDSCardBackground = 'standard' | 'secondary';
export type MDSCardImageAlignment = 'top' | 'right' | 'left';

/* ------------------------------------------------------------------------ *
 * Root
 * ------------------------------------------------------------------------ */

export interface MDSCardProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** Card content. Compose with `MDSCard.Header` / `.Body` / `.Actions` or pass any custom node. */
  children?: React.ReactNode;
  /**
   * Media slot — typically `<MDSImage … />`. Placement controlled by
   * `imageAlignment`. When omitted, the card renders content-only and the
   * root carries padding directly; when present, padding moves to the
   * content area so the image sits flush against the card edges.
   */
  media?: React.ReactNode;
  /** Position of the `media` slot. Defaults to `'top'`. */
  imageAlignment?: MDSCardImageAlignment;
  /**
   * Background variant.
   * - `'standard'` (default) — `--mds-colours-basic-background`.
   * - `'secondary'` — `--mds-colours-basic-accent-secondary`.
   */
  background?: MDSCardBackground;
  /** Stroked border using `--mds-colours-basic-stroke`. Default `false`. */
  outline?: boolean;
  /** Hover/pressed/focus-visible affordance. Default `false`. */
  interactive?: boolean;
  /** Marks the card as selected (accent stroke; `aria-pressed="true"` when also interactive). */
  selected?: boolean;
  /**
   * Absolute-positioned scrim + slot drawn on top of the media. Used for
   * chrome like a play-button overlay on a video card.
   */
  overlay?: React.ReactNode;
  /**
   * Render the card root using a different element. Defaults to `<div>`;
   * switch to `<a href />`, `<button />`, or a router `<Link />` when
   * `interactive` is true so the card is keyboard-activatable.
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}

function MDSCardRoot({
  children,
  media,
  imageAlignment = 'top',
  background = 'standard',
  outline = false,
  interactive = false,
  selected = false,
  overlay,
  render,
  className,
  ...props
}: MDSCardProps) {
  const hasMedia = media != null;

  // Make the bare <div> keyboard-focusable when no custom render is supplied
  // so `interactive` is honoured even before the consumer wires up `<a>` /
  // `<button>` via `render`. Consumer-provided render elements bring their
  // own focus story, so we do not inject tabIndex in that case.
  const tabIndexProp =
    interactive && render == null && props.tabIndex == null
      ? { tabIndex: 0 }
      : null;

  return useRender({
    render: render ?? <div />,
    props: {
      ...props,
      ...tabIndexProp,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-background': background,
      // Secondary surface: switch the card's region to the `subtle` palette
      // so `--mds-colours-basic-background` resolves to the section's
      // subtle background (and hover/pressed states follow automatically).
      // See conventions/tokens-policy and theming/section in the vault.
      'data-section': background === 'secondary' ? 'subtle' : undefined,
      'data-image-alignment': imageAlignment,
      'data-has-media': hasMedia || undefined,
      'data-outline': outline || undefined,
      'data-interactive': interactive || undefined,
      'data-selected': selected || undefined,
      'aria-pressed': interactive && selected ? true : undefined,
      children: hasMedia ? (
        <>
          <div className={styles.media} data-slot="media">
            {media}
            {overlay != null && (
              <div className={styles.overlay} data-slot="overlay">
                {overlay}
              </div>
            )}
          </div>
          <div className={styles.content} data-slot="content">
            {children}
          </div>
        </>
      ) : (
        children
      ),
    },
  });
}
MDSCardRoot.displayName = 'MDSCard';

/* ------------------------------------------------------------------------ *
 * Header — tag (optional) + headline + close (optional)
 * ------------------------------------------------------------------------ */

export type MDSCardHeaderHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface MDSCardHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Headline content. Renders inside the chosen heading element. */
  children: React.ReactNode;
  /** Optional pill above the headline. Pass plain text or a custom node. */
  tag?: React.ReactNode;
  /** Provide a handler to render the `×` close button. */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Required accessible name for the close button when `onClose` is set. */
  closeLabel?: string;
  /** Heading level for the headline. Defaults to `'h2'`. */
  as?: MDSCardHeaderHeadingLevel;
}

function MDSCardHeader({
  children,
  tag,
  onClose,
  closeLabel = 'Close',
  as = 'h2',
  className,
  ...props
}: MDSCardHeaderProps) {
  const HeadingTag = as;
  return (
    <div
      {...props}
      className={[styles.header, className].filter(Boolean).join(' ')}
      data-slot="header"
    >
      <div className={styles.headerText} data-slot="header-text">
        {tag != null && (
          <span className={styles.tag} data-slot="tag">
            <MDSText variant="body-bold">{tag}</MDSText>
          </span>
        )}
        <MDSText
          variant="h2"
          render={<HeadingTag />}
          className={styles.headline}
        >
          {children}
        </MDSText>
      </div>
      {onClose != null && (
        <MDSButton
          variant="ghost"
          size="small"
          iconOnly
          aria-label={closeLabel}
          icon={<MDSIcon name="x" size="small" />}
          onClick={onClose}
          data-slot="close"
        />
      )}
    </div>
  );
}
MDSCardHeader.displayName = 'MDSCard.Header';

/* ------------------------------------------------------------------------ *
 * Body — body-style typography
 * ------------------------------------------------------------------------ */

export interface MDSCardBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function MDSCardBody({ className, children, ...props }: MDSCardBodyProps) {
  return (
    <div
      {...props}
      className={[styles.body, className].filter(Boolean).join(' ')}
      data-slot="body"
    >
      <MDSText variant="body">{children}</MDSText>
    </div>
  );
}
MDSCardBody.displayName = 'MDSCard.Body';

/* ------------------------------------------------------------------------ *
 * Actions — buttons row. Stretches each child to equal width when 2+.
 * ------------------------------------------------------------------------ */

export interface MDSCardActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function MDSCardActions({
  className,
  children,
  ...props
}: MDSCardActionsProps) {
  return (
    <div
      {...props}
      className={[styles.actions, className].filter(Boolean).join(' ')}
      data-slot="actions"
    >
      {children}
    </div>
  );
}
MDSCardActions.displayName = 'MDSCard.Actions';

/* ------------------------------------------------------------------------ *
 * Compound assembly — Object.assign + top-level exports (per
 * conventions/component-contract §13).
 * ------------------------------------------------------------------------ */

export const MDSCard = Object.assign(MDSCardRoot, {
  Header: MDSCardHeader,
  Body: MDSCardBody,
  Actions: MDSCardActions,
});

export { MDSCardHeader, MDSCardBody, MDSCardActions };
