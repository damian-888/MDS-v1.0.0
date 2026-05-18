import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Toggle } from '@base-ui-components/react/toggle';

type BaseToggleProps = React.ComponentPropsWithoutRef<typeof Toggle>;
interface MDSChipToggleProps extends Omit<BaseToggleProps, 'pressed' | 'defaultPressed' | 'onPressedChange' | 'children'> {
    /** Visible chip label. */
    children: React.ReactNode;
    /** Controlled selected state. Mirrors Base UI's `pressed`. */
    selected?: boolean;
    /** Uncontrolled initial selected state. Mirrors Base UI's `defaultPressed`. */
    defaultSelected?: boolean;
    /** Called when the selected state changes. */
    onSelectedChange?: BaseToggleProps['onPressedChange'];
    /**
     * Optional 40px round avatar slot — typically `<MDSImage … />`. When
     * present, the chip's left padding tightens and the avatar renders
     * before the label.
     */
    avatar?: React.ReactNode;
}
declare function MDSChipToggle({ children, selected, defaultSelected, onSelectedChange, avatar, className, ...props }: MDSChipToggleProps): react_jsx_runtime.JSX.Element;
declare namespace MDSChipToggle {
    var displayName: string;
}

export { MDSChipToggle, type MDSChipToggleProps };
