// packages/mds-components/src/MDSButton/MDSButton.tsx
'use client';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui-components/react/button';
import styles from './MDSButton.module.css';

export type MDSButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type MDSButtonSize = 'small' | 'large';

type MDSButtonBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseButton>,
  'children'
>;

export type MDSButtonProps =
  | (MDSButtonBaseProps & {
      variant?: MDSButtonVariant;
      size?: MDSButtonSize;
      /** Square icon-only button (no label). Requires `icon` and a meaningful `aria-label`. */
      iconOnly: true;
      /** The icon — required in icon-only mode. */
      icon: React.ReactNode;
      /** Required: provides the button's accessible name in icon-only mode. */
      'aria-label': string;
      children?: never;
    })
  | (MDSButtonBaseProps & {
      variant?: MDSButtonVariant;
      size?: MDSButtonSize;
      iconOnly?: false;
      icon?: React.ReactNode;
      children?: React.ReactNode;
    });

export function MDSButton({
  variant = 'secondary',
  size = 'large',
  iconOnly = false,
  icon,
  children,
  className,
  ...props
}: MDSButtonProps) {
  return (
    <BaseButton
      {...props}
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-icon-only={iconOnly || undefined}
    >
      {iconOnly ? (
        <span className={styles.iconSlot} aria-hidden="true">{icon}</span>
      ) : (
        <>
          {children != null && <span className={styles.label}>{children}</span>}
          {icon != null && (
            <span className={styles.iconSlot} aria-hidden="true">
              {icon}
            </span>
          )}
        </>
      )}
    </BaseButton>
  );
}

MDSButton.displayName = 'MDSButton';
