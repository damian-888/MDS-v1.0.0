// packages/mds-components/src/MDSBreadcrumb/MDSBreadcrumb.tsx
'use client';

import * as React from 'react';
import { Menu } from '@base-ui-components/react/menu';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSIcon } from '../MDSIcon';
import { MDSText } from '../MDSText';
import { MDSFlyout } from '../MDSFlyout';
import styles from './MDSBreadcrumb.module.css';

/**
 * Polymorphic item type: items render as an `<a>` when an `href` is set,
 * and as a non-link `<span>` otherwise (or when the parent marks them as
 * the current page). Props are typed against the union of both element
 * surfaces so consumers can pass attributes appropriate to either.
 */
export type MDSBreadcrumbItemProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel' | 'download' | 'referrerPolicy'> & {
    href?: string;
    children: React.ReactNode;
  };

interface InternalItemProps extends MDSBreadcrumbItemProps {
  /** Set true on the last item by the parent. */
  current?: boolean;
}

function MDSBreadcrumbItemInternal({
  href,
  children,
  className,
  current,
  ...props
}: InternalItemProps) {
  const composed = [styles.item, className].filter(Boolean).join(' ');

  if (current || !href) {
    return (
      <MDSText
        {...(props as React.HTMLAttributes<HTMLElement>)}
        variant="body-bold"
        className={composed}
        data-current={current || undefined}
        aria-current={current ? 'page' : undefined}
      >
        {children}
      </MDSText>
    );
  }

  return (
    <a {...props} href={href} className={composed}>
      <MDSText variant="body-bold">{children}</MDSText>
    </a>
  );
}
MDSBreadcrumbItemInternal.displayName = 'MDSBreadcrumb.ItemInternal';

function MDSBreadcrumbItem(props: MDSBreadcrumbItemProps) {
  return <MDSBreadcrumbItemInternal {...props} />;
}
MDSBreadcrumbItem.displayName = 'MDSBreadcrumb.Item';

function Separator() {
  return (
    <li className={styles.separator} data-slot="separator" aria-hidden="true">
      <MDSText variant="body">/</MDSText>
    </li>
  );
}
Separator.displayName = 'MDSBreadcrumb.Separator';

interface OverflowMenuProps {
  items: React.ReactElement<MDSBreadcrumbItemProps>[];
}

function OverflowMenu({ items }: OverflowMenuProps) {
  return (
    <li className={styles.overflowCell}>
      <Menu.Root>
        <Menu.Trigger
          className={styles.overflowTrigger}
          aria-label="Show collapsed breadcrumbs"
          data-slot="overflow-trigger"
        >
          <MDSIcon name="dots-three" size="medium" />
        </Menu.Trigger>
        <Menu.Portal>
          {/* Anchor the popup flush below the trigger and aligned to its
              left edge, matching Figma frame 111:2644 (overflow expanded). */}
          <Menu.Positioner sideOffset={0} align="start">
            <MDSFlyout render={<Menu.Popup />}>
              {items.map((child, idx) => {
                const { href, children } = child.props;
                const key = (child.key ?? idx) as React.Key;
                return (
                  <MDSFlyout.Item
                    key={key}
                    render={
                      <Menu.Item
                        render={href ? <a href={href} /> : <span />}
                      />
                    }
                  >
                    {children}
                  </MDSFlyout.Item>
                );
              })}
            </MDSFlyout>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </li>
  );
}
OverflowMenu.displayName = 'MDSBreadcrumb.OverflowMenu';

export interface MDSBreadcrumbProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'aria-label'> {
  maxItems?: number;
  'aria-label'?: string;
  children: React.ReactNode;
  /**
   * Render the breadcrumb landmark using a different element/component.
   * Defaults to `<nav>` (the WAI-ARIA Breadcrumb Pattern).
   */
  render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}

function MDSBreadcrumbRoot({
  maxItems = 4,
  'aria-label': ariaLabel = 'Breadcrumb',
  render,
  className,
  children,
  ...props
}: MDSBreadcrumbProps) {
  const effectiveMaxItems = Math.max(2, maxItems);
  const items = React.Children.toArray(children).filter(
    React.isValidElement,
  ) as React.ReactElement<MDSBreadcrumbItemProps>[];

  const lastIndex = items.length - 1;

  const list =
    items.length <= effectiveMaxItems || items.length < 4 ? (
      <ol className={styles.list}>
        {items.flatMap((child, idx) => {
          const isLast = idx === lastIndex;
          const cell = (
            <li
              key={`item-${idx}`}
              className={styles.itemCell}
              data-slot="item-cell"
            >
              <MDSBreadcrumbItemInternal
                {...(child.props as MDSBreadcrumbItemProps)}
                current={isLast}
              />
            </li>
          );
          return idx < lastIndex
            ? [cell, <Separator key={`sep-${idx}`} />]
            : [cell];
        })}
      </ol>
    ) : (
      // Overflow: first / overflow menu / second-to-last / last
      <ol className={styles.list}>
        <li className={styles.itemCell} data-slot="item-cell">
          <MDSBreadcrumbItemInternal
            {...(items[0].props as MDSBreadcrumbItemProps)}
            current={false}
          />
        </li>
        <Separator />
        <OverflowMenu items={items.slice(1, items.length - 2)} />
        <Separator />
        <li className={styles.itemCell} data-slot="item-cell">
          <MDSBreadcrumbItemInternal
            {...(items[items.length - 2].props as MDSBreadcrumbItemProps)}
            current={false}
          />
        </li>
        <Separator />
        <li className={styles.itemCell} data-slot="item-cell">
          <MDSBreadcrumbItemInternal
            {...(items[lastIndex].props as MDSBreadcrumbItemProps)}
            current={true}
          />
        </li>
      </ol>
    );

  return useRender({
    render: render ?? <nav />,
    props: {
      ...props,
      'aria-label': ariaLabel,
      className: [styles.root, className].filter(Boolean).join(' '),
      children: list,
    },
  });
}
MDSBreadcrumbRoot.displayName = 'MDSBreadcrumb';

export const MDSBreadcrumb = Object.assign(MDSBreadcrumbRoot, {
  Item: MDSBreadcrumbItem,
});

export { MDSBreadcrumbItem };
