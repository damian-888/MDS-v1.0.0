import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Separator } from '@base-ui-components/react/separator';

type MDSDividerOrientation = 'horizontal' | 'vertical';
interface MDSDividerProps extends Omit<React.ComponentPropsWithoutRef<typeof Separator>, 'orientation'> {
    /**
     * Axis the divider runs along.
     * - `horizontal` — full-width 1px line. Default.
     * - `vertical` — full-height 1px column. The parent must give the divider a height.
     */
    orientation?: MDSDividerOrientation;
}
declare function MDSDivider({ orientation, className, ...props }: MDSDividerProps): react_jsx_runtime.JSX.Element;
declare namespace MDSDivider {
    var displayName: string;
}

export { MDSDivider, type MDSDividerOrientation, type MDSDividerProps };
