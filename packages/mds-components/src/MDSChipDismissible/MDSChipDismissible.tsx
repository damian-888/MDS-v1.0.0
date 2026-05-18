// packages/mds-components/src/MDSChipDismissible/MDSChipDismissible.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSChipDismissible.module.css';

export interface MDSChipDismissibleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Visible chip label. */
  children: React.ReactNode;
  /**
   * Optional 40px round avatar slot — typically `<MDSImage … />` or any
   * node rendering a square image. The avatar is rendered before the
   * label and the chip's left padding tightens to accommodate it.
   */
  avatar?: React.ReactNode;
  /** Called when the user activates the dismiss (close) button. */
  onDismiss?: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  /** Accessible name for the dismiss button. Defaults to `'Dismiss'`. */
  dismissLabel?: string;
  /**
   * Render the chip root using a different element/component. Defaults
   * to `<span>` — switch to a `<li>` when inside an ordered list of
   * filters.
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLSpanElement>>;
}

export function MDSChipDismissible({
  children,
  avatar,
  onDismiss,
  dismissLabel = 'Dismiss',
  render,
  className,
  ...props
}: MDSChipDismissibleProps) {
  const hasAvatar = avatar != null;

  return useRender({
    render: render ?? <span />,
    props: {
      ...props,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-has-avatar': hasAvatar || undefined,
      children: (
        <>
          {hasAvatar && (
            <span className={styles.avatar} data-slot="avatar" aria-hidden="true">
              {avatar}
            </span>
          )}
          <span className={styles.label} data-slot="label">
            {children}
          </span>
          <button
            type="button"
            className={styles.dismiss}
            data-slot="dismiss"
            aria-label={dismissLabel}
            onClick={onDismiss}
          >
            <MDSIcon name="x" size="small" aria-hidden="true" />
          </button>
        </>
      ),
    },
  });
}

MDSChipDismissible.displayName = 'MDSChipDismissible';
