import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Select } from '@base-ui-components/react/select';

type BaseRootProps<Value, Multiple extends boolean | undefined> = React.ComponentProps<typeof Select.Root<Value, Multiple>>;
type MDSDropdownSelectProps<Value = unknown, Multiple extends boolean | undefined = false> = BaseRootProps<Value, Multiple>;
interface MDSDropdownSelectTriggerProps extends Omit<React.ComponentPropsWithoutRef<typeof Select.Trigger>, 'children'> {
    /** Floating label shown above the value (or full-size when empty). */
    label: React.ReactNode;
    /**
     * Placeholder shown inside `<BaseSelect.Value>` when nothing is selected.
     * Defaults to an empty string so the floating label can claim the row.
     */
    placeholder?: React.ReactNode;
    /**
     * Optional override for the trailing chevron. Defaults to an MDSIcon
     * that flips when the popup is open.
     */
    chevron?: React.ReactNode;
    /** Mark the field as required (visual `*`). */
    required?: boolean;
    /** Error state — paints the border in the destructive scheme (4px stroke). */
    error?: boolean;
    /**
     * Optional value → label map. When the selected value is a non-displayable
     * key (e.g. `"us"`, `42`), provide this so the trigger shows the human
     * label (`"United States"`) instead of the raw value. Falls back to
     * `String(value)` when a value is missing from the map.
     */
    items?: Record<string, React.ReactNode>;
}
interface MDSDropdownSelectPopupProps extends React.ComponentPropsWithoutRef<typeof Select.Popup> {
    /**
     * Optional positioner props forwarded onto Base UI's `Select.Positioner`.
     * Useful for `side`, `align`, `sideOffset`, etc.
     */
    positionerProps?: React.ComponentPropsWithoutRef<typeof Select.Positioner>;
    /**
     * When `true`, the popup is rendered inline (no portal). Defaults to
     * portalling so the popup escapes overflow clipping.
     */
    inline?: boolean;
}
type MDSDropdownSelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item>;
declare function MDSDropdownSelectRoot<Value = unknown, Multiple extends boolean | undefined = false>(props: MDSDropdownSelectProps<Value, Multiple>): react_jsx_runtime.JSX.Element;
declare namespace MDSDropdownSelectRoot {
    var displayName: string;
}
declare function MDSDropdownSelectTrigger({ label, placeholder, chevron, required, error, disabled, items, className, ...props }: MDSDropdownSelectTriggerProps): react_jsx_runtime.JSX.Element;
declare namespace MDSDropdownSelectTrigger {
    var displayName: string;
}
declare function MDSDropdownSelectPopup({ positionerProps, inline, className, children, ...props }: MDSDropdownSelectPopupProps): react_jsx_runtime.JSX.Element;
declare namespace MDSDropdownSelectPopup {
    var displayName: string;
}
declare function MDSDropdownSelectItem({ className, children, ...props }: MDSDropdownSelectItemProps): react_jsx_runtime.JSX.Element;
declare namespace MDSDropdownSelectItem {
    var displayName: string;
}
declare const MDSDropdownSelect: typeof MDSDropdownSelectRoot & {
    Trigger: typeof MDSDropdownSelectTrigger;
    Popup: typeof MDSDropdownSelectPopup;
    Item: typeof MDSDropdownSelectItem;
};

export { MDSDropdownSelect, MDSDropdownSelectItem, type MDSDropdownSelectItemProps, MDSDropdownSelectPopup, type MDSDropdownSelectPopupProps, type MDSDropdownSelectProps, MDSDropdownSelectTrigger, type MDSDropdownSelectTriggerProps };
