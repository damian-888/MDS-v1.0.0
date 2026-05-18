// packages/mds-components/src/MDSDivider/MDSDivider.tsx
'use client';

import * as React from 'react';
import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import styles from './MDSDivider.module.css';

export type MDSDividerOrientation = 'horizontal' | 'vertical';

export interface MDSDividerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseSeparator>,
    'orientation'
  > {
  /**
   * Axis the divider runs along.
   * - `horizontal` — full-width 1px line. Default.
   * - `vertical` — full-height 1px column. The parent must give the divider a height.
   */
  orientation?: MDSDividerOrientation;
}

export function MDSDivider({
  orientation = 'horizontal',
  className,
  ...props
}: MDSDividerProps) {
  return (
    <BaseSeparator
      {...props}
      orientation={orientation}
      data-orientation={orientation}
      className={[styles.root, className].filter(Boolean).join(' ')}
    />
  );
}

MDSDivider.displayName = 'MDSDivider';
