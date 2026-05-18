// packages/mds-components/src/MDSInputField/MDSInputField.tsx
'use client';

import * as React from 'react';
import styles from './MDSInputField.module.css';

type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix'
>;

export interface MDSInputFieldProps extends BaseInputProps {
  /** Floating label rendered above the value (or full-size when empty). */
  label: React.ReactNode;
  /**
   * Error state — paints the border in the destructive scheme (4px stroke).
   */
  error?: boolean;
  /** Optional error message; appears below the field when `error` is true. */
  errorMessage?: React.ReactNode;
  /**
   * Optional 16px leading icon (e.g. an `<MDSIcon … size="small" />`).
   * Lives inside the value row, before the prefix.
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional prefix glyph (e.g. `€`). Text-only — rendered in body type
   * just before the value.
   */
  prefix?: React.ReactNode;
  /**
   * Optional suffix glyph (e.g. `Kg`). Text-only — rendered in body type
   * just after the value.
   */
  suffix?: React.ReactNode;
  /**
   * Optional 24px trailing icon. Mirrors Figma's "Right Icon" slot for
   * status glyphs (check, alert, etc.). When `action` is also passed,
   * `action` wins.
   */
  rightIcon?: React.ReactNode;
  /**
   * Optional trailing action — typically an icon-only `MDSButton`.
   * Renders into the same slot Figma calls "Button" in the
   * "Input Field + Button" variant. Replaces `rightIcon` when both are
   * provided. The container's right padding tightens to 6px to match
   * the Figma frame.
   */
  action?: React.ReactNode;
  /** Mark the field as required (visual `*` + native required). */
  required?: boolean;
  /** className composed with the wrapper's `.root`. */
  className?: string;
}

export function MDSInputField({
  label,
  error = false,
  errorMessage,
  leftIcon,
  prefix,
  suffix,
  rightIcon,
  action,
  required,
  disabled,
  readOnly,
  value,
  defaultValue,
  className,
  onFocus,
  onBlur,
  onChange,
  id,
  ...props
}: MDSInputFieldProps) {
  const reactId = React.useId();
  const inputId = id ?? `mds-input-${reactId}`;
  const errorId = `${inputId}-error`;

  // Controlled-or-uncontrolled "has value" tracking — drives the
  // floating-label state (microcopy vs. body-bold typography).
  const [innerValue, setInnerValue] = React.useState<string>(
    defaultValue != null ? String(defaultValue) : '',
  );
  const isControlled = value !== undefined;
  const effectiveValue = isControlled ? String(value ?? '') : innerValue;
  const filled = effectiveValue.length > 0;

  const [focused, setFocused] = React.useState(false);

  const trailing = action ?? rightIcon;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      data-error={error || undefined}
      data-filled={filled || undefined}
      data-focused={focused || undefined}
      data-disabled={disabled || undefined}
      data-readonly={readOnly || undefined}
      data-has-action={action ? '' : undefined}
      data-has-trailing={trailing ? '' : undefined}
    >
      <label
        className={styles.field}
        htmlFor={inputId}
        data-slot="field"
      >
        <span className={styles.content} data-slot="content">
          <span className={styles.labelDisplay} data-slot="label">
            {label}
            {required && <span className={styles.required} aria-hidden="true"> *</span>}
          </span>

          <span className={styles.value} data-slot="value">
            {leftIcon != null && (
              <span className={styles.leftIcon} aria-hidden="true" data-slot="left-icon">
                {leftIcon}
              </span>
            )}
            {prefix != null && (
              <span className={styles.affix} data-slot="prefix">{prefix}</span>
            )}
            <input
              {...props}
              id={inputId}
              required={required}
              readOnly={readOnly}
              disabled={disabled}
              value={isControlled ? (value as string) : undefined}
              defaultValue={!isControlled ? (defaultValue as string) : undefined}
              aria-invalid={error || undefined}
              aria-describedby={
                error && errorMessage ? errorId : props['aria-describedby']
              }
              className={styles.input}
              onChange={(e) => {
                if (!isControlled) setInnerValue(e.target.value);
                onChange?.(e);
              }}
              onFocus={(e) => {
                setFocused(true);
                onFocus?.(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                onBlur?.(e);
              }}
            />
            {suffix != null && (
              <span className={styles.affix} data-slot="suffix">{suffix}</span>
            )}
          </span>
        </span>

        {trailing != null && (
          <span className={styles.trailing} data-slot="trailing">
            {trailing}
          </span>
        )}
      </label>

      {error && errorMessage != null && (
        <span id={errorId} className={styles.errorMessage} data-slot="error">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

MDSInputField.displayName = 'MDSInputField';
