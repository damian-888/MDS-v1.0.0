// packages/mds-components/src/MDSChatBubble/MDSChatBubble.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSIcon } from '../MDSIcon';
import { MDSText } from '../MDSText';
import styles from './MDSChatBubble.module.css';

export type MDSChatBubbleAlignment = 'incoming' | 'outgoing';
export type MDSChatBubbleBackground = 'standard' | 'secondary';
export type MDSChatBubbleType = 'message' | 'media' | 'loading';

export interface MDSChatBubbleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Conversation side. Drives layout direction and the flat-corner side. */
  alignment: MDSChatBubbleAlignment;
  /**
   * Bubble fill.
   * - `'standard'` (default) — `--mds-colours-basic-background`.
   * - `'secondary'` — `--mds-colours-basic-accent-secondary`.
   */
  background?: MDSChatBubbleBackground;
  /**
   * Content layout.
   * - `'message'` (default) — bubble wraps the children as a text message.
   * - `'media'` — bubble is a 260×260 frame; children fill it (image, video, etc.).
   * - `'loading'` — bubble shows a spinning brand mark, children are ignored.
   */
  type?: MDSChatBubbleType;
  /**
   * Avatar slot — typically a 24px round `<MDSImage />`. Only rendered for
   * incoming bubbles; outgoing messages omit the avatar per Figma.
   */
  avatar?: React.ReactNode;
  /**
   * Timestamp rendered below the bubble in microcopy / text-secondary. Pass
   * a plain string ("12:00") or a custom node for richer markup.
   */
  timestamp?: React.ReactNode;
  /**
   * Bubble content. For `type="message"` this is the body text; for
   * `type="media"` this is the image/video node; for `type="loading"`
   * this prop is ignored.
   */
  children?: React.ReactNode;
  /**
   * Render the bubble row using a different element. Defaults to `<div>`.
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLDivElement>>;
}

export function MDSChatBubble({
  alignment,
  background = 'standard',
  type = 'message',
  avatar,
  timestamp,
  children,
  render,
  className,
  ...props
}: MDSChatBubbleProps) {
  const isIncoming = alignment === 'incoming';
  const showAvatar = isIncoming;

  return useRender({
    render: render ?? <div />,
    props: {
      ...props,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-alignment': alignment,
      'data-background': background,
      'data-type': type,
      children: (
        <>
          {showAvatar && (
            <span
              className={styles.avatarContainer}
              data-slot="avatar"
              aria-hidden={avatar ? undefined : 'true'}
            >
              {avatar}
            </span>
          )}
          <div className={styles.bubbleContainer} data-slot="bubble-container">
            <div className={styles.bubble} data-slot="bubble">
              {type === 'loading' ? (
                <span
                  className={styles.loader}
                  data-slot="loader"
                  role="status"
                  aria-label="Loading"
                >
                  <MDSIcon name="spinner" size={24} aria-hidden="true" />
                </span>
              ) : type === 'media' ? (
                <span className={styles.media} data-slot="media">
                  {children}
                </span>
              ) : (
                <MDSText
                  variant="body"
                  className={styles.message}
                  data-slot="message"
                >
                  {children}
                </MDSText>
              )}
            </div>
            {timestamp != null && (
              <MDSText
                variant="microcopy"
                className={styles.timestamp}
                data-slot="timestamp"
              >
                {timestamp}
              </MDSText>
            )}
          </div>
        </>
      ),
    },
  });
}

MDSChatBubble.displayName = 'MDSChatBubble';
