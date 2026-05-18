// packages/mds-components/src/MDSChipToggle/MDSChipToggle.tsx
'use client';

import * as React from 'react';
import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSChipToggle.module.css';

type BaseToggleProps = React.ComponentPropsWithoutRef<typeof BaseToggle>;

export interface MDSChipToggleProps
  extends Omit<BaseToggleProps, 'pressed' | 'defaultPressed' | 'onPressedChange' | 'children'> {
  /** Visible chip label. */
  children: React.ReactNode;
  /** Controlled selected state. Mirrors Base UI's `pressed`. */
  selected?: boolean;
  /** Uncontrolled initial selected state. Mirrors Base UI's `defaultPressed`. */
  defaultSelected?: boolean;
  /** Called when the selected state changes. */
  onSelectedChange?: BaseToggleProps['onPressedChange'];
  /**
   * Optional 40px round avatar slot — typically `<MDSImage … />`. When
   * present, the chip's left padding tightens and the avatar renders
   * before the label.
   */
  avatar?: React.ReactNode;
}

export function MDSChipToggle({
  children,
  selected,
  defaultSelected,
  onSelectedChange,
  avatar,
  className,
  ...props
}: MDSChipToggleProps) {
  const hasAvatar = avatar != null;

  return (
    <BaseToggle
      {...props}
      pressed={selected}
      defaultPressed={defaultSelected}
      onPressedChange={onSelectedChange}
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-has-avatar={hasAvatar || undefined}
    >
      {hasAvatar && (
        <span className={styles.avatar} data-slot="avatar" aria-hidden="true">
          {avatar}
        </span>
      )}
      <span className={styles.label} data-slot="label">
        {children}
      </span>
      <span className={styles.checkSlot} data-slot="check" aria-hidden="true">
        <MDSIcon name="check" size="small" />
      </span>
    </BaseToggle>
  );
}

MDSChipToggle.displayName = 'MDSChipToggle';
