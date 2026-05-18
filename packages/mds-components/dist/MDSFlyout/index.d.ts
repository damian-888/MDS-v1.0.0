import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

interface MDSFlyoutProps extends React.HTMLAttributes<HTMLDivElement> {
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
interface MDSFlyoutItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
declare function MDSFlyoutRoot({ maxHeight, render, className, style, children, ...props }: MDSFlyoutProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSFlyoutRoot {
    var displayName: string;
}
declare function MDSFlyoutItem({ icon, render, className, children, ...props }: MDSFlyoutItemProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSFlyoutItem {
    var displayName: string;
}
declare const MDSFlyout: typeof MDSFlyoutRoot & {
    Item: typeof MDSFlyoutItem;
};

export { MDSFlyout, MDSFlyoutItem, type MDSFlyoutItemProps, type MDSFlyoutProps };
