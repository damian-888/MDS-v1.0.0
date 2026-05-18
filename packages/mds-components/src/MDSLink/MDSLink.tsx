// packages/mds-components/src/MDSLink/MDSLink.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSLink.module.css';

export type MDSLinkAlignment = 'left' | 'center' | 'right';

export interface MDSLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Visible link label. */
  children: React.ReactNode;
  /**
   * Cross-axis alignment of the link inside its tappable area.
   * Mirrors Figma's `Alignment=Left | Center | Right` variants.
   * @default 'left'
   */
  alignment?: MDSLinkAlignment;
  /**
   * Trailing icon node. Defaults to an arrow-right glyph matching the
   * Figma "arrow-right" frame. Pass `null` to omit the icon entirely.
   * @default <MDSIcon name="arrow-right" size="small" />
   */
  icon?: React.ReactNode | null;
  /**
   * Render the link using a different element. Defaults to `<a>` — pass
   * `render={<Link to="…" />}` (or any framework router primitive) to
   * keep the styling while swapping the underlying tag.
   */
  render?: useRender.RenderProp<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
}

const DEFAULT_ICON = <MDSIcon name="arrow-right" size="small" aria-hidden="true" />;

export function MDSLink({
  alignment = 'left',
  icon = DEFAULT_ICON,
  render,
  className,
  children,
  ...props
}: MDSLinkProps) {
  return useRender({
    render: render ?? <a />,
    props: {
      ...props,
      className: [styles.root, className].filter(Boolean).join(' '),
      'data-alignment': alignment,
      children: (
        <span className={styles.container} data-slot="container">
          <span className={styles.label} data-slot="label">{children}</span>
          {icon != null && (
            <span className={styles.icon} aria-hidden="true" data-slot="icon">
              {icon}
            </span>
          )}
        </span>
      ),
    },
  });
}

MDSLink.displayName = 'MDSLink';
