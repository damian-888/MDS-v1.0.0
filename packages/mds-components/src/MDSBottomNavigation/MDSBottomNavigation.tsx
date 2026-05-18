// packages/mds-components/src/MDSBottomNavigation/MDSBottomNavigation.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import styles from './MDSBottomNavigation.module.css';

export type MDSBottomNavigationBackground = 'standard' | 'secondary';

export interface MDSBottomNavigationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'aria-label'> {
  /**
   * Background variant.
   * - `standard` (default) — `--mds-colours-basic-background` (white on the neutral palette).
   * - `secondary` — `--mds-colours-basic-accent-secondary` (pale lavender on the neutral palette).
   */
  background?: MDSBottomNavigationBackground;
  /** Required accessible name for the `<nav>` landmark. */
  'aria-label': string;
  /** `MDSBottomNavigation.Item` children. */
  children: React.ReactNode;
  /**
   * Render the navigation landmark using a different element/component.
   * Defaults to `<nav>`.
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}

function MDSBottomNavigationRoot({
  background = 'standard',
  'aria-label': ariaLabel,
  render,
  className,
  children,
  ...props
}: MDSBottomNavigationProps) {
  return useRender({
    render: render ?? <nav />,
    props: {
      ...props,
      'aria-label': ariaLabel,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-background': background,
      children,
    },
  });
}
MDSBottomNavigationRoot.displayName = 'MDSBottomNavigation';

export interface MDSBottomNavigationItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLElement>, 'children'> {
  /** Icon node — typically `<MDSIcon name="..." />`. Wrapped with `aria-hidden`. */
  icon: React.ReactNode;
  /** The visible label below the icon. */
  children?: React.ReactNode;
  /** Hide the visible label — the icon's accessible name (via `aria-label`) becomes the sole label. Default `false`. */
  hideLabel?: boolean;
  /** Show a small accent dot at the top-right of the icon as an "unread / has-update" indicator. */
  showBadge?: boolean;
  /** Marks this item as the current page — adds `aria-current="page"` and shows the selection bar. */
  selected?: boolean;
  /**
   * Render the item using a different element. Defaults to `<a>` when `href`
   * is provided, otherwise `<button type="button">`. Use this to integrate
   * with router primitives (`<Link as={MDSBottomNavigation.Item} … />`).
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}

function MDSBottomNavigationItem({
  icon,
  children,
  hideLabel = false,
  showBadge = false,
  selected = false,
  href,
  render,
  className,
  ...props
}: MDSBottomNavigationItemProps) {
  const defaultElement = href != null
    ? <a href={href} />
    : <button type="button" />;

  return useRender({
    render: render ?? defaultElement,
    props: {
      ...props,
      className: [styles.item, className].filter(Boolean).join(' '),
      'data-selected': selected || undefined,
      'aria-current': selected ? 'page' : undefined,
      children: (
        <>
          <span
            className={styles.selectionBar}
            data-slot="selection-bar"
            aria-hidden="true"
          />
          <span className={styles.iconContainer} data-slot="icon-container">
            <span className={styles.iconSlot} aria-hidden="true">
              {icon}
            </span>
            {showBadge && (
              <span
                className={styles.badge}
                data-slot="badge"
                aria-hidden="true"
              />
            )}
          </span>
          {!hideLabel && children != null && (
            <span className={styles.label} data-slot="label">
              {children}
            </span>
          )}
        </>
      ),
    },
  });
}
MDSBottomNavigationItem.displayName = 'MDSBottomNavigation.Item';

export const MDSBottomNavigation = Object.assign(MDSBottomNavigationRoot, {
  Item: MDSBottomNavigationItem,
});

export { MDSBottomNavigationItem };
