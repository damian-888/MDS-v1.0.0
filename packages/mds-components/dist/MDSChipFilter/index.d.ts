import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Menu } from '@base-ui-components/react/menu';

type BaseMenuRootProps = React.ComponentPropsWithoutRef<typeof Menu.Root>;
interface MDSChipFilterProps extends Pick<BaseMenuRootProps, 'open' | 'defaultOpen' | 'onOpenChange' | 'modal'> {
    /** Visible chip label. */
    label: React.ReactNode;
    /**
     * Whether the chip is in the "filter active" state (filled accent). This
     * is independent from whether the dropdown is open and is set by the
     * consumer when one or more items beneath this chip are checked.
     */
    selected?: boolean;
    /** Disable the entire chip. */
    disabled?: boolean;
    /** `MDSChipFilter.Item` children rendered inside the dropdown. */
    children: React.ReactNode;
    /** Accessible name override for the trigger when the visible label is non-text. */
    'aria-label'?: string;
    /** className applied to the chip trigger itself. */
    className?: string;
}
declare function MDSChipFilterRoot({ label, selected, disabled, children, open, defaultOpen, onOpenChange, modal, className, 'aria-label': ariaLabel, }: MDSChipFilterProps): react_jsx_runtime.JSX.Element;
declare namespace MDSChipFilterRoot {
    var displayName: string;
}
type BaseCheckboxItemProps = React.ComponentPropsWithoutRef<typeof Menu.CheckboxItem>;
interface MDSChipFilterItemProps extends Omit<BaseCheckboxItemProps, 'children'> {
    children: React.ReactNode;
}
declare function MDSChipFilterItem({ children, className, ...props }: MDSChipFilterItemProps): react_jsx_runtime.JSX.Element;
declare namespace MDSChipFilterItem {
    var displayName: string;
}
declare const MDSChipFilter: typeof MDSChipFilterRoot & {
    Item: typeof MDSChipFilterItem;
};

export { MDSChipFilter, MDSChipFilterItem, type MDSChipFilterItemProps, type MDSChipFilterProps };
