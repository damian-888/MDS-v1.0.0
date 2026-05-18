// packages/mds-components/src/MDSCheckbox/MDSCheckbox.tsx
'use client';

import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSCheckbox.module.css';

type BaseCheckboxRootProps = React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>;

type MDSCheckboxBaseProps = Omit<
  BaseCheckboxRootProps,
  'children' | 'className'
> & {
  /** Error state — sets `data-scheme="error"` so the box adopts the red palette. */
  error?: boolean;
  /** className composed with the chip wrapper's `.root`. */
  className?: string;
};

export type MDSCheckboxProps =
  | (MDSCheckboxBaseProps & {
      /** Icon-only checkbox — no label, 32px square hit-target. */
      iconOnly: true;
      /** Required accessible name when no visible label is rendered. */
      'aria-label': string;
      children?: never;
    })
  | (MDSCheckboxBaseProps & {
      iconOnly?: false;
      /** Visible label rendered to the right of the box. */
      children: React.ReactNode;
      'aria-label'?: string;
    });

export function MDSCheckbox({
  iconOnly,
  error = false,
  children,
  className,
  ...props
}: MDSCheckboxProps) {
  const labelId = React.useId();
  const wrapperClassName = [styles.root, className].filter(Boolean).join(' ');

  const indicator = (
    <BaseCheckbox.Root
      {...props}
      className={styles.box}
      aria-labelledby={
        iconOnly || props['aria-label'] || props['aria-labelledby']
          ? props['aria-labelledby']
          : labelId
      }
    >
      <BaseCheckbox.Indicator
        keepMounted
        className={styles.indicator}
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            <MDSIcon
              name={state.indeterminate ? 'minus' : 'check'}
              size={24}
              aria-hidden="true"
            />
          </span>
        )}
      />
    </BaseCheckbox.Root>
  );

  if (iconOnly) {
    return (
      <span
        className={wrapperClassName}
        data-icon-only=""
        data-scheme={error ? 'error' : undefined}
        data-error={error || undefined}
      >
        {indicator}
      </span>
    );
  }

  return (
    <label
      className={wrapperClassName}
      data-scheme={error ? 'error' : undefined}
      data-error={error || undefined}
    >
      {indicator}
      <span id={labelId} className={styles.label} data-slot="label">
        {children}
      </span>
    </label>
  );
}

MDSCheckbox.displayName = 'MDSCheckbox';
