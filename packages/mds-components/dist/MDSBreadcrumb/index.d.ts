import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

/**
 * Polymorphic item type: items render as an `<a>` when an `href` is set,
 * and as a non-link `<span>` otherwise (or when the parent marks them as
 * the current page). Props are typed against the union of both element
 * surfaces so consumers can pass attributes appropriate to either.
 */
type MDSBreadcrumbItemProps = Omit<React.HTMLAttributes<HTMLElement>, 'children'> & Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel' | 'download' | 'referrerPolicy'> & {
    href?: string;
    children: React.ReactNode;
};
declare function MDSBreadcrumbItem(props: MDSBreadcrumbItemProps): react_jsx_runtime.JSX.Element;
declare namespace MDSBreadcrumbItem {
    var displayName: string;
}
interface MDSBreadcrumbProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'aria-label'> {
    maxItems?: number;
    'aria-label'?: string;
    children: React.ReactNode;
    /**
     * Render the breadcrumb landmark using a different element/component.
     * Defaults to `<nav>` (the WAI-ARIA Breadcrumb Pattern).
     */
    render?: useRender.RenderProp<React.HTMLAttributes<HTMLElement>>;
}
declare function MDSBreadcrumbRoot({ maxItems, 'aria-label': ariaLabel, render, className, children, ...props }: MDSBreadcrumbProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSBreadcrumbRoot {
    var displayName: string;
}
declare const MDSBreadcrumb: typeof MDSBreadcrumbRoot & {
    Item: typeof MDSBreadcrumbItem;
};

export { MDSBreadcrumb, MDSBreadcrumbItem, type MDSBreadcrumbItemProps, type MDSBreadcrumbProps };
