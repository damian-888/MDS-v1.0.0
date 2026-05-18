// packages/mds-components/src/MDSFlyout/MDSFlyout.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import styles from './MDSFlyout.module.css';

// ---- Types ---- //

export interface MDSFlyoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Cap the flyout's height (in any CSS length unit) and let the content
   * scroll when it exceeds the cap. When set, a styled scrollbar matching
   * Figma's "Show Scrollbar=true" variant is rendered.
   */
  maxHeight?: React.CSSProperties['maxHeight'];
  /**
   * Render the flyout shell using a different element/component. Mirrors
   * Base UI's polymorphism pattern — pass `render={<Menu.Popup />}` to use
   * the flyout's styling on a portalled menu popup.
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLDivElement>>;
}

export interface MDSFlyoutItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional 16px trailing icon. Renders into the icon slot defined by
   * Figma "Dropdown Item".
   */
  icon?: React.ReactNode;
  /**
   * Render the item using a different element/component. Pass
   * `render={<Menu.Item />}` to attach Base UI's Menu Item semantics, or
   * `render={<a href="…" />}` for a link.
   */
  render?: useRender.RenderProp<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

// ---- Root ---- //

function MDSFlyoutRoot({
  maxHeight,
  render,
  className,
  style,
  children,
  ...props
}: MDSFlyoutProps) {
  const isScrollable = maxHeight != null;
  const composedStyle: React.CSSProperties | undefined = isScrollable
    ? { maxHeight, ...style }
    : style;

  const element = useRender({
    render: render ?? <div />,
    props: {
      ...props,
      style: composedStyle,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-scrollable': isScrollable ? '' : undefined,
      children,
    },
  });

  return element;
}
MDSFlyoutRoot.displayName = 'MDSFlyout';

// ---- Item ---- //

function MDSFlyoutItem({
  icon,
  render,
  className,
  children,
  ...props
}: MDSFlyoutItemProps) {
  const element = useRender({
    render: render ?? <button type="button" />,
    props: {
      ...props,
      className: [styles.item, className].filter(Boolean).join(' '),
      children: (
        <>
          <span className={styles.itemLabel}>{children}</span>
          <span className={styles.itemIcon} aria-hidden={icon ? undefined : true}>
            {icon}
          </span>
        </>
      ),
    },
  });

  return element;
}
MDSFlyoutItem.displayName = 'MDSFlyout.Item';

// ---- Compound export ---- //

export const MDSFlyout = Object.assign(MDSFlyoutRoot, {
  Item: MDSFlyoutItem,
});

export { MDSFlyoutItem };
