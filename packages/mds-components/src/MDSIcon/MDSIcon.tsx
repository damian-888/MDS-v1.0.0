// packages/mds-components/src/MDSIcon/MDSIcon.tsx
'use client';

import * as React from 'react';
import { iconRegistry, type MDSIconName, type MDSIconProps as MDSIconBaseProps } from '@mds/icons';
import styles from './MDSIcon.module.css';

export type MDSIconSize = 'small' | 'medium' | 'large';

export interface MDSIconProps extends Omit<MDSIconBaseProps, 'size' | 'width' | 'height' | 'ref'> {
  /** Name of the icon in @mds/icons. Kebab-case, type-checked against the registry. */
  name: MDSIconName;
  /** Semantic size (token-driven) or an explicit pixel number. */
  size?: MDSIconSize | number;
}

export function MDSIcon({
  name,
  size = 'medium',
  className,
  style,
  ...props
}: MDSIconProps) {
  const LazyIcon = iconRegistry[name];

  const isSemantic = typeof size === 'string';

  // For numeric sizes, drive --MDSIcon-size via inline style so the CSS variable
  // is the single source of truth (the CSS Module's width/height read from it).
  // For semantic sizes, the [data-size] selector in CSS handles sizing.
  const sizeStyle: React.CSSProperties | undefined = isSemantic
    ? undefined
    : ({ '--MDSIcon-size': `${size}px` } as React.CSSProperties);

  const composedClassName = [styles.root, className].filter(Boolean).join(' ');
  const composedStyle: React.CSSProperties | undefined =
    sizeStyle || style ? { ...sizeStyle, ...style } : undefined;

  return (
    <React.Suspense
      fallback={
        <span
          aria-hidden="true"
          className={composedClassName}
          style={composedStyle}
        />
      }
    >
      <LazyIcon
        {...props}
        className={composedClassName}
        style={composedStyle}
        data-size={isSemantic ? size : undefined}
      />
    </React.Suspense>
  );
}

MDSIcon.displayName = 'MDSIcon';
