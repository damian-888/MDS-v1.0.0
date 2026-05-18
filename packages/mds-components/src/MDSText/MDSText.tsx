// packages/mds-components/src/MDSText/MDSText.tsx
'use client';

import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';

export type MDSTextVariant =
  | 'h1' | 'h2' | 'h3'
  | 'body-large' | 'body' | 'body-bold' | 'body-underline'
  | 'microcopy';

export interface MDSTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  variant?: MDSTextVariant;
  render?: useRender.RenderProp;
  children?: React.ReactNode;
}

export function MDSText({
  variant = 'body',
  render = <span />,
  className,
  children,
  ...props
}: MDSTextProps) {
  return useRender({
    render,
    props: {
      ...props,
      'data-variant': variant,
      className: [`mds-typography-${variant}`, className]
        .filter(Boolean)
        .join(' '),
      children,
    },
  });
}

MDSText.displayName = 'MDSText';
