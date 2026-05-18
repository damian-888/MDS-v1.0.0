import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;
interface MDSInputFieldProps extends BaseInputProps {
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
declare function MDSInputField({ label, error, errorMessage, leftIcon, prefix, suffix, rightIcon, action, required, disabled, readOnly, value, defaultValue, className, onFocus, onBlur, onChange, id, ...props }: MDSInputFieldProps): react_jsx_runtime.JSX.Element;
declare namespace MDSInputField {
    var displayName: string;
}

export { MDSInputField, type MDSInputFieldProps };
