import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { Accordion } from '@base-ui-components/react/accordion';

type BaseRootProps = React.ComponentPropsWithoutRef<typeof Accordion.Root>;
interface MDSAccordionProps extends Omit<BaseRootProps, 'multiple'> {
    /**
     * Allow multiple accordion items to be open simultaneously.
     * Maps to Base UI's `multiple` prop.
     * @default false
     */
    openMultiple?: boolean;
}
type MDSAccordionItemProps = React.ComponentPropsWithoutRef<typeof Accordion.Item>;
type MDSAccordionHeaderProps = React.ComponentPropsWithoutRef<typeof Accordion.Header>;
type MDSAccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Accordion.Trigger>;
type MDSAccordionPanelProps = React.ComponentPropsWithoutRef<typeof Accordion.Panel>;
declare function MDSAccordionRoot({ className, openMultiple, ...props }: MDSAccordionProps): react_jsx_runtime.JSX.Element;
declare namespace MDSAccordionRoot {
    var displayName: string;
}
declare function MDSAccordionItem({ className, ...props }: MDSAccordionItemProps): react_jsx_runtime.JSX.Element;
declare namespace MDSAccordionItem {
    var displayName: string;
}
declare function MDSAccordionHeader({ className, ...props }: MDSAccordionHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace MDSAccordionHeader {
    var displayName: string;
}
declare function MDSAccordionTrigger({ className, children, ...props }: MDSAccordionTriggerProps): react_jsx_runtime.JSX.Element;
declare namespace MDSAccordionTrigger {
    var displayName: string;
}
declare function MDSAccordionPanel({ className, ...props }: MDSAccordionPanelProps): react_jsx_runtime.JSX.Element;
declare namespace MDSAccordionPanel {
    var displayName: string;
}
declare const MDSAccordion: typeof MDSAccordionRoot & {
    Item: typeof MDSAccordionItem;
    Header: typeof MDSAccordionHeader;
    Trigger: typeof MDSAccordionTrigger;
    Panel: typeof MDSAccordionPanel;
};

export { MDSAccordion, MDSAccordionHeader, type MDSAccordionHeaderProps, MDSAccordionItem, type MDSAccordionItemProps, MDSAccordionPanel, type MDSAccordionPanelProps, type MDSAccordionProps, MDSAccordionTrigger, type MDSAccordionTriggerProps };
