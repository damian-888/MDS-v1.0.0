// packages/mds-components/src/MDSAccordion/MDSAccordion.tsx
'use client';

import * as React from 'react';
import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import { MDSIcon } from '../MDSIcon';
import { MDSText } from '../MDSText';
import styles from './MDSAccordion.module.css';

// ---- Types ---- //

type BaseRootProps = React.ComponentPropsWithoutRef<typeof BaseAccordion.Root>;

export interface MDSAccordionProps extends Omit<BaseRootProps, 'multiple'> {
  /**
   * Allow multiple accordion items to be open simultaneously.
   * Maps to Base UI's `multiple` prop.
   * @default false
   */
  openMultiple?: boolean;
}

export type MDSAccordionItemProps = React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>;
export type MDSAccordionHeaderProps = React.ComponentPropsWithoutRef<typeof BaseAccordion.Header>;
export type MDSAccordionTriggerProps = React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>;
export type MDSAccordionPanelProps = React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>;

// ---- Root ---- //

function MDSAccordionRoot({
  className,
  openMultiple,
  ...props
}: MDSAccordionProps) {
  return (
    <BaseAccordion.Root
      {...props}
      multiple={openMultiple ?? false}
      className={[styles.root, className].filter(Boolean).join(' ')}
    />
  );
}
MDSAccordionRoot.displayName = 'MDSAccordion';

// ---- Item ---- //

function MDSAccordionItem({ className, ...props }: MDSAccordionItemProps) {
  return (
    <BaseAccordion.Item
      {...props}
      className={[styles.item, className].filter(Boolean).join(' ')}
    />
  );
}
MDSAccordionItem.displayName = 'MDSAccordion.Item';

// ---- Header ---- //

function MDSAccordionHeader({ className, ...props }: MDSAccordionHeaderProps) {
  return (
    <BaseAccordion.Header
      {...props}
      className={[styles.header, className].filter(Boolean).join(' ')}
    />
  );
}
MDSAccordionHeader.displayName = 'MDSAccordion.Header';

// ---- Trigger ---- //

function MDSAccordionTrigger({
  className,
  children,
  ...props
}: MDSAccordionTriggerProps) {
  return (
    <BaseAccordion.Trigger
      {...props}
      className={[styles.trigger, className].filter(Boolean).join(' ')}
    >
      <MDSText variant="body-bold" className={styles.label}>
        {children}
      </MDSText>
      <span className={styles.chevronSlot} aria-hidden="true">
        <MDSIcon name="chevron-down" size="medium" />
      </span>
    </BaseAccordion.Trigger>
  );
}
MDSAccordionTrigger.displayName = 'MDSAccordion.Trigger';

// ---- Panel ---- //

function MDSAccordionPanel({ className, ...props }: MDSAccordionPanelProps) {
  return (
    <BaseAccordion.Panel
      {...props}
      className={[styles.panel, className].filter(Boolean).join(' ')}
    />
  );
}
MDSAccordionPanel.displayName = 'MDSAccordion.Panel';

// ---- Compound export ---- //

export const MDSAccordion = Object.assign(MDSAccordionRoot, {
  Item: MDSAccordionItem,
  Header: MDSAccordionHeader,
  Trigger: MDSAccordionTrigger,
  Panel: MDSAccordionPanel,
});

export {
  MDSAccordionItem,
  MDSAccordionHeader,
  MDSAccordionTrigger,
  MDSAccordionPanel,
};
