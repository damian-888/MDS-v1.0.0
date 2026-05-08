import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Button } from '@base-ui-components/react/button';

type MDSButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type MDSButtonSize = 'small' | 'large';
type MDSButtonBaseProps = Omit<React.ComponentPropsWithoutRef<typeof Button>, 'children'>;
type MDSButtonProps = (MDSButtonBaseProps & {
    variant?: MDSButtonVariant;
    size?: MDSButtonSize;
    /** Square icon-only button (no label). Requires `icon` and a meaningful `aria-label`. */
    iconOnly: true;
    /** The icon — required in icon-only mode. */
    icon: React.ReactNode;
    /** Required: provides the button's accessible name in icon-only mode. */
    'aria-label': string;
    children?: never;
}) | (MDSButtonBaseProps & {
    variant?: MDSButtonVariant;
    size?: MDSButtonSize;
    iconOnly?: false;
    icon?: React.ReactNode;
    children?: React.ReactNode;
});
declare function MDSButton({ variant, size, iconOnly, icon, children, className, ...props }: MDSButtonProps): react_jsx_runtime.JSX.Element;
declare namespace MDSButton {
    var displayName: string;
}

export { MDSButton, type MDSButtonProps, type MDSButtonSize, type MDSButtonVariant };
