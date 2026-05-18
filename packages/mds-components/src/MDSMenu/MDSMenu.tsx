// packages/mds-components/src/MDSMenu/MDSMenu.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSMenu.module.css';

// ---- Types ---- //

export type MDSMenuProps = React.ComponentPropsWithoutRef<typeof BaseMenu.Root>;

export type MDSMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseMenu.Trigger
>;

export interface MDSMenuPopupProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.Popup> {
  /**
   * Optional positioner props forwarded onto Base UI's `Menu.Positioner`.
   */
  positionerProps?: React.ComponentPropsWithoutRef<typeof BaseMenu.Positioner>;
  /**
   * When `true`, the popup is rendered inline (no portal). Defaults to
   * portalling so the popup escapes overflow clipping.
   */
  inline?: boolean;
}

export interface MDSMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseMenu.Item> {
  /**
   * Optional 16px leading icon (e.g. an `<MDSIcon … size="small" />`).
   * Lives before the label.
   */
  leftIcon?: React.ReactNode;
  /**
   * Trailing icon node. Defaults to `caret-right` (matches Figma's Link
   * variant). Pass `null` to omit the icon entirely.
   * @default <MDSIcon name="caret-right" size="small" />
   */
  icon?: React.ReactNode | null;
  /**
   * Render the item using a different element. Pass `render={<a href="…" />}`
   * for a real anchor while keeping the styling and Menu keyboard nav.
   */
  render?: useRender.RenderProp<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

// ---- Root ---- //

function MDSMenuRoot(props: MDSMenuProps) {
  return <BaseMenu.Root {...props} />;
}
MDSMenuRoot.displayName = 'MDSMenu';

// ---- Trigger ---- //

function MDSMenuTrigger({ className, ...props }: MDSMenuTriggerProps) {
  return (
    <BaseMenu.Trigger
      {...props}
      className={[styles.trigger, className].filter(Boolean).join(' ')}
    />
  );
}
MDSMenuTrigger.displayName = 'MDSMenu.Trigger';

// ---- Popup ---- //

function MDSMenuPopup({
  positionerProps,
  inline = false,
  className,
  children,
  ...props
}: MDSMenuPopupProps) {
  const positioner = (
    <BaseMenu.Positioner
      sideOffset={4}
      {...positionerProps}
      className={[styles.positioner, positionerProps?.className]
        .filter(Boolean)
        .join(' ')}
    >
      <BaseMenu.Popup
        {...props}
        className={[styles.popup, className].filter(Boolean).join(' ')}
      >
        {children}
      </BaseMenu.Popup>
    </BaseMenu.Positioner>
  );

  if (inline) return positioner;
  return <BaseMenu.Portal>{positioner}</BaseMenu.Portal>;
}
MDSMenuPopup.displayName = 'MDSMenu.Popup';

// ---- Item ---- //

const DEFAULT_TRAILING_ICON = (
  <MDSIcon name="caret-right" size="small" aria-hidden="true" />
);

function MDSMenuItem({
  leftIcon,
  icon = DEFAULT_TRAILING_ICON,
  render,
  className,
  children,
  ...props
}: MDSMenuItemProps) {
  return (
    <BaseMenu.Item
      {...props}
      render={render}
      className={[styles.item, className].filter(Boolean).join(' ')}
    >
      {leftIcon != null && (
        <span className={styles.itemLeftIcon} aria-hidden="true" data-slot="left-icon">
          {leftIcon}
        </span>
      )}
      <span className={styles.itemLabel} data-slot="label">
        {children}
      </span>
      {icon != null && (
        <span className={styles.itemIcon} aria-hidden="true" data-slot="icon">
          {icon}
        </span>
      )}
    </BaseMenu.Item>
  );
}
MDSMenuItem.displayName = 'MDSMenu.Item';

// ---- Compound export ---- //

export const MDSMenu = Object.assign(MDSMenuRoot, {
  Trigger: MDSMenuTrigger,
  Popup: MDSMenuPopup,
  Item: MDSMenuItem,
});

export { MDSMenuTrigger, MDSMenuPopup, MDSMenuItem };
