import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

interface MDSChipDismissibleProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
    /** Visible chip label. */
    children: React.ReactNode;
    /**
     * Optional 40px round avatar slot — typically `<MDSImage … />` or any
     * node rendering a square image. The avatar is rendered before the
     * label and the chip's left padding tightens to accommodate it.
     */
    avatar?: React.ReactNode;
    /** Called when the user activates the dismiss (close) button. */
    onDismiss?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    /** Accessible name for the dismiss button. Defaults to `'Dismiss'`. */
    dismissLabel?: string;
    /**
     * Render the chip root using a different element/component. Defaults
     * to `<span>` — switch to a `<li>` when inside an ordered list of
     * filters.
     */
    render?: useRender.RenderProp<React.HTMLAttributes<HTMLSpanElement>>;
}
declare function MDSChipDismissible({ children, avatar, onDismiss, dismissLabel, render, className, ...props }: MDSChipDismissibleProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSChipDismissible {
    var displayName: string;
}

export { MDSChipDismissible, type MDSChipDismissibleProps };
