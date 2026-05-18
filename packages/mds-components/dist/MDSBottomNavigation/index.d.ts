import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSBottomNavigationBackground = 'standard' | 'secondary';
interface MDSBottomNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'aria-label'> {
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
declare function MDSBottomNavigationRoot({ background, 'aria-label': ariaLabel, render, className, children, ...props }: MDSBottomNavigationProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSBottomNavigationRoot {
    var displayName: string;
}
interface MDSBottomNavigationItemProps extends Omit<React.AnchorHTMLAttributes<HTMLElement>, 'children'> {
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
declare function MDSBottomNavigationItem({ icon, children, hideLabel, showBadge, selected, href, render, className, ...props }: MDSBottomNavigationItemProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSBottomNavigationItem {
    var displayName: string;
}
declare const MDSBottomNavigation: typeof MDSBottomNavigationRoot & {
    Item: typeof MDSBottomNavigationItem;
};

export { MDSBottomNavigation, type MDSBottomNavigationBackground, MDSBottomNavigationItem, type MDSBottomNavigationItemProps, type MDSBottomNavigationProps };
