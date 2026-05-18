import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

type MDSTextVariant = 'h1' | 'h2' | 'h3' | 'body-large' | 'body' | 'body-bold' | 'body-underline' | 'microcopy';
interface MDSTextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    variant?: MDSTextVariant;
    render?: useRender.RenderProp;
    children?: React.ReactNode;
}
declare function MDSText({ variant, render, className, children, ...props }: MDSTextProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace MDSText {
    var displayName: string;
}

export { MDSText, type MDSTextProps, type MDSTextVariant };
