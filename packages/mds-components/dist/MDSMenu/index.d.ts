import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { Menu } from '@base-ui-components/react/menu';

type MDSMenuProps = React.ComponentPropsWithoutRef<typeof Menu.Root>;
type MDSMenuTriggerProps = React.ComponentPropsWithoutRef<typeof Menu.Trigger>;
interface MDSMenuPopupProps extends React.ComponentPropsWithoutRef<typeof Menu.Popup> {
    /**
     * Optional positioner props forwarded onto Base UI's `Menu.Positioner`.
     */
    positionerProps?: React.ComponentPropsWithoutRef<typeof Menu.Positioner>;
    /**
     * When `true`, the popup is rendered inline (no portal). Defaults to
     * portalling so the popup escapes overflow clipping.
     */
    inline?: boolean;
}
interface MDSMenuItemProps extends React.ComponentPropsWithoutRef<typeof Menu.Item> {
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
declare function MDSMenuRoot(props: MDSMenuProps): react_jsx_runtime.JSX.Element;
declare namespace MDSMenuRoot {
    var displayName: string;
}
declare function MDSMenuTrigger({ className, ...props }: MDSMenuTriggerProps): react_jsx_runtime.JSX.Element;
declare namespace MDSMenuTrigger {
    var displayName: string;
}
declare function MDSMenuPopup({ positionerProps, inline, className, children, ...props }: MDSMenuPopupProps): react_jsx_runtime.JSX.Element;
declare namespace MDSMenuPopup {
    var displayName: string;
}
declare function MDSMenuItem({ leftIcon, icon, render, className, children, ...props }: MDSMenuItemProps): react_jsx_runtime.JSX.Element;
declare namespace MDSMenuItem {
    var displayName: string;
}
declare const MDSMenu: typeof MDSMenuRoot & {
    Trigger: typeof MDSMenuTrigger;
    Popup: typeof MDSMenuPopup;
    Item: typeof MDSMenuItem;
};

export { MDSMenu, MDSMenuItem, type MDSMenuItemProps, MDSMenuPopup, type MDSMenuPopupProps, type MDSMenuProps, MDSMenuTrigger, type MDSMenuTriggerProps };
