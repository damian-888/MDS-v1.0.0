// packages/mds-components/src/MDSBadge/MDSBadge.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSBadge.module.css';

export type MDSBadgeType = 'number' | 'success' | 'error';
export type MDSBadgeSize = 'small' | 'medium' | 'large';

type MDSBadgeBaseProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children' | 'aria-label'
> & {
  /** Render the badge using a different element/component. */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLSpanElement>>;
};

export type MDSBadgeProps =
  | (MDSBadgeBaseProps & {
      type: 'number';
      size?: MDSBadgeSize;
      children?: React.ReactNode;
      'aria-label'?: string;
    })
  | (MDSBadgeBaseProps & {
      type: 'success' | 'error';
      size?: MDSBadgeSize;
      /** Required: provides the accessible name for the icon-only badge. */
      'aria-label': string;
      children?: never;
    });

// Functional schemes only — number badges intentionally inherit the parent
// scheme so they pick up `basic-accent` from the active palette (deep brand
// blue on a default-neutral page, matching Figma). Forcing scheme='brand'
// would make the badge a brand-coloured surface (background=brand-pale,
// accent=contrasting), which is the opposite of what we want.
const SCHEME_BY_TYPE: Partial<Record<MDSBadgeType, string>> = {
  success: 'success',
  error: 'error',
};

const ICON_BY_TYPE: Record<'success' | 'error', 'check' | 'warning'> = {
  success: 'check',
  error: 'warning',
};

export function MDSBadge({
  type,
  size = 'large',
  render,
  className,
  children,
  ...props
}: MDSBadgeProps) {
  const isIconOnly = type === 'success' || type === 'error';
  const isSubtle = isIconOnly && size !== 'small';

  return useRender({
    render: render ?? <span />,
    props: {
      ...props,
      role: isIconOnly ? 'img' : undefined,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-type': type,
      'data-size': size,
      'data-scheme': SCHEME_BY_TYPE[type],
      'data-section': isSubtle ? 'subtle' : undefined,
      children: isIconOnly ? (
        <span className={styles.iconSlot} data-slot="icon" aria-hidden="true">
          <MDSIcon name={ICON_BY_TYPE[type]} size="small" />
        </span>
      ) : (
        <span className={styles.label}>{children}</span>
      ),
    },
  });
}

MDSBadge.displayName = 'MDSBadge';
