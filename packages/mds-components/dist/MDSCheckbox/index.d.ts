import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Checkbox } from '@base-ui-components/react/checkbox';

type BaseCheckboxRootProps = React.ComponentPropsWithoutRef<typeof Checkbox.Root>;
type MDSCheckboxBaseProps = Omit<BaseCheckboxRootProps, 'children' | 'className'> & {
    /** Error state — sets `data-scheme="error"` so the box adopts the red palette. */
    error?: boolean;
    /** className composed with the chip wrapper's `.root`. */
    className?: string;
};
type MDSCheckboxProps = (MDSCheckboxBaseProps & {
    /** Icon-only checkbox — no label, 32px square hit-target. */
    iconOnly: true;
    /** Required accessible name when no visible label is rendered. */
    'aria-label': string;
    children?: never;
}) | (MDSCheckboxBaseProps & {
    iconOnly?: false;
    /** Visible label rendered to the right of the box. */
    children: React.ReactNode;
    'aria-label'?: string;
});
declare function MDSCheckbox({ iconOnly, error, children, className, ...props }: MDSCheckboxProps): react_jsx_runtime.JSX.Element;
declare namespace MDSCheckbox {
    var displayName: string;
}

export { MDSCheckbox, type MDSCheckboxProps };
