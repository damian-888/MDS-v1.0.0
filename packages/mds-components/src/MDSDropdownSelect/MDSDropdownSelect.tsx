// packages/mds-components/src/MDSDropdownSelect/MDSDropdownSelect.tsx
'use client';

import * as React from 'react';
import { Select as BaseSelect } from '@base-ui-components/react/select';
import { MDSIcon } from '../MDSIcon';
import styles from './MDSDropdownSelect.module.css';

// ---- Types ---- //

type BaseRootProps<Value, Multiple extends boolean | undefined> =
  React.ComponentProps<typeof BaseSelect.Root<Value, Multiple>>;

export type MDSDropdownSelectProps<
  Value = unknown,
  Multiple extends boolean | undefined = false,
> = BaseRootProps<Value, Multiple>;

export interface MDSDropdownSelectTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>,
    'children'
  > {
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

export interface MDSDropdownSelectPopupProps
  extends React.ComponentPropsWithoutRef<typeof BaseSelect.Popup> {
  /**
   * Optional positioner props forwarded onto Base UI's `Select.Positioner`.
   * Useful for `side`, `align`, `sideOffset`, etc.
   */
  positionerProps?: React.ComponentPropsWithoutRef<
    typeof BaseSelect.Positioner
  >;
  /**
   * When `true`, the popup is rendered inline (no portal). Defaults to
   * portalling so the popup escapes overflow clipping.
   */
  inline?: boolean;
}

export type MDSDropdownSelectItemProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.Item
>;

// ---- Root ---- //

function MDSDropdownSelectRoot<
  Value = unknown,
  Multiple extends boolean | undefined = false,
>(props: MDSDropdownSelectProps<Value, Multiple>) {
  return <BaseSelect.Root {...props} />;
}
MDSDropdownSelectRoot.displayName = 'MDSDropdownSelect';

// ---- Trigger ---- //

const DefaultChevron = () => (
  <span className={styles.chevronIcon} aria-hidden="true" data-slot="chevron">
    <MDSIcon name="chevron-down" size="medium" />
  </span>
);

function MDSDropdownSelectTrigger({
  label,
  placeholder = '',
  chevron,
  required,
  error = false,
  disabled,
  items,
  className,
  ...props
}: MDSDropdownSelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      {...props}
      disabled={disabled}
      className={[styles.trigger, className].filter(Boolean).join(' ')}
      render={(triggerProps, state) => {
        // `state.value` is `null` when nothing is selected. We stamp
        // `data-filled` so the floating-label CSS can collapse the
        // label into microcopy and reveal the value row.
        const filled =
          state.value != null && state.value !== '' &&
          !(Array.isArray(state.value) && state.value.length === 0);
        return (
          <button
            {...(triggerProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            data-error={error || undefined}
            data-filled={filled || undefined}
          >
            <span className={styles.content} data-slot="content">
              <span className={styles.labelDisplay} data-slot="label">
                {label}
                {required && (
                  <span className={styles.required} aria-hidden="true"> *</span>
                )}
              </span>
              <span className={styles.value} data-slot="value">
                <BaseSelect.Value>
                  {(value: unknown) => {
                    if (value == null || value === '') return placeholder;
                    if (items != null) {
                      const key = String(value);
                      if (key in items) return items[key];
                    }
                    return value as React.ReactNode;
                  }}
                </BaseSelect.Value>
              </span>
            </span>
            {chevron ?? <DefaultChevron />}
          </button>
        );
      }}
    />
  );
}
MDSDropdownSelectTrigger.displayName = 'MDSDropdownSelect.Trigger';

// ---- Popup ---- //

function MDSDropdownSelectPopup({
  positionerProps,
  inline = false,
  className,
  children,
  ...props
}: MDSDropdownSelectPopupProps) {
  const positioner = (
    <BaseSelect.Positioner
      sideOffset={4}
      alignItemWithTrigger={false}
      {...positionerProps}
      className={[styles.positioner, positionerProps?.className]
        .filter(Boolean)
        .join(' ')}
    >
      <BaseSelect.Popup
        {...props}
        className={[styles.popup, className].filter(Boolean).join(' ')}
      >
        <BaseSelect.List className={styles.list}>
          {children}
        </BaseSelect.List>
      </BaseSelect.Popup>
    </BaseSelect.Positioner>
  );

  if (inline) return positioner;
  return <BaseSelect.Portal>{positioner}</BaseSelect.Portal>;
}
MDSDropdownSelectPopup.displayName = 'MDSDropdownSelect.Popup';

// ---- Item ---- //

function MDSDropdownSelectItem({ className, children, ...props }: MDSDropdownSelectItemProps) {
  return (
    <BaseSelect.Item
      {...props}
      className={[styles.item, className].filter(Boolean).join(' ')}
    >
      <BaseSelect.ItemText className={styles.itemText}>
        {children}
      </BaseSelect.ItemText>
      <span
        className={styles.itemIndicator}
        aria-hidden="true"
        data-slot="indicator"
      >
        <BaseSelect.ItemIndicator className={styles.itemIndicatorInner}>
          <MDSIcon name="check" size="small" />
        </BaseSelect.ItemIndicator>
      </span>
    </BaseSelect.Item>
  );
}
MDSDropdownSelectItem.displayName = 'MDSDropdownSelect.Item';

// ---- Compound export ---- //

export const MDSDropdownSelect = Object.assign(MDSDropdownSelectRoot, {
  Trigger: MDSDropdownSelectTrigger,
  Popup: MDSDropdownSelectPopup,
  Item: MDSDropdownSelectItem,
});

export { MDSDropdownSelectTrigger, MDSDropdownSelectPopup, MDSDropdownSelectItem };
