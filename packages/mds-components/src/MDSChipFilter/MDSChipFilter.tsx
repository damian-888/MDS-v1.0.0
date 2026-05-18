// packages/mds-components/src/MDSChipFilter/MDSChipFilter.tsx
'use client';

import * as React from 'react';
import { Menu } from '@base-ui-components/react/menu';
import { MDSIcon } from '../MDSIcon';
import { MDSFlyout } from '../MDSFlyout';
import styles from './MDSChipFilter.module.css';

/* ------------------------------------------------------------------------ *
 * Root — wraps Menu.Root, renders a chip-shaped Menu.Trigger.
 * ------------------------------------------------------------------------ */

type BaseMenuRootProps = React.ComponentPropsWithoutRef<typeof Menu.Root>;

export interface MDSChipFilterProps
  extends Pick<BaseMenuRootProps, 'open' | 'defaultOpen' | 'onOpenChange' | 'modal'> {
  /** Visible chip label. */
  label: React.ReactNode;
  /**
   * Whether the chip is in the "filter active" state (filled accent). This
   * is independent from whether the dropdown is open and is set by the
   * consumer when one or more items beneath this chip are checked.
   */
  selected?: boolean;
  /** Disable the entire chip. */
  disabled?: boolean;
  /** `MDSChipFilter.Item` children rendered inside the dropdown. */
  children: React.ReactNode;
  /** Accessible name override for the trigger when the visible label is non-text. */
  'aria-label'?: string;
  /** className applied to the chip trigger itself. */
  className?: string;
}

function MDSChipFilterRoot({
  label,
  selected = false,
  disabled = false,
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal,
  className,
  'aria-label': ariaLabel,
}: MDSChipFilterProps) {
  return (
    <Menu.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal ?? false}
    >
      <Menu.Trigger
        disabled={disabled}
        aria-label={ariaLabel}
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        data-selected={selected || undefined}
      >
        <span className={styles.label} data-slot="label">
          {label}
        </span>
        <span className={styles.caretSlot} data-slot="caret" aria-hidden="true">
          <MDSIcon name="caret-down" size="small" />
        </span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          sideOffset={Number(8)}
          align="start"
          className={styles.positioner}
        >
          <MDSFlyout render={<Menu.Popup />} className={styles.popup}>
            {children}
          </MDSFlyout>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
MDSChipFilterRoot.displayName = 'MDSChipFilter';

/* ------------------------------------------------------------------------ *
 * Item — wraps Menu.CheckboxItem, shows a trailing check when selected.
 * ------------------------------------------------------------------------ */

type BaseCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof Menu.CheckboxItem
>;

export interface MDSChipFilterItemProps
  extends Omit<BaseCheckboxItemProps, 'children'> {
  children: React.ReactNode;
}

function MDSChipFilterItem({
  children,
  className,
  ...props
}: MDSChipFilterItemProps) {
  return (
    <MDSFlyout.Item
      render={
        <Menu.CheckboxItem
          {...props}
          className={[styles.item, className].filter(Boolean).join(' ')}
        />
      }
      icon={
        <Menu.CheckboxItemIndicator className={styles.itemIndicator}>
          <MDSIcon name="check" size="small" />
        </Menu.CheckboxItemIndicator>
      }
    >
      {children}
    </MDSFlyout.Item>
  );
}
MDSChipFilterItem.displayName = 'MDSChipFilter.Item';

/* ------------------------------------------------------------------------ *
 * Compound assembly
 * ------------------------------------------------------------------------ */

export const MDSChipFilter = Object.assign(MDSChipFilterRoot, {
  Item: MDSChipFilterItem,
});

export { MDSChipFilterItem };
