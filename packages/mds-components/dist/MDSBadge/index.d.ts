import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSBadgeType = 'number' | 'success' | 'error';
type MDSBadgeSize = 'small' | 'medium' | 'large';
type MDSBadgeBaseProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'children' | 'aria-label'> & {
    /** Render the badge using a different element/component. */
    render?: useRender.RenderProp<React.HTMLAttributes<HTMLSpanElement>>;
};
type MDSBadgeProps = (MDSBadgeBaseProps & {
    type: 'number';
    size?: MDSBadgeSize;
    children?: React.ReactNode;
    'aria-label'?: string;
}) | (MDSBadgeBaseProps & {
    type: 'success' | 'error';
    size?: MDSBadgeSize;
    /** Required: provides the accessible name for the icon-only badge. */
    'aria-label': string;
    children?: never;
});
declare function MDSBadge({ type, size, render, className, children, ...props }: MDSBadgeProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSBadge {
    var displayName: string;
}

export { MDSBadge, type MDSBadgeProps, type MDSBadgeSize, type MDSBadgeType };
