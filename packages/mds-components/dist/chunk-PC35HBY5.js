"use client";

// src/MDSInputField/MDSInputField.tsx
import * as React from "react";

// src/MDSInputField/MDSInputField.module.css
var MDSInputField_default = {
  root: "MDSInputField_root",
  field: "MDSInputField_field",
  content: "MDSInputField_content",
  labelDisplay: "MDSInputField_labelDisplay",
  required: "MDSInputField_required",
  value: "MDSInputField_value",
  input: "MDSInputField_input",
  affix: "MDSInputField_affix",
  leftIcon: "MDSInputField_leftIcon",
  trailing: "MDSInputField_trailing",
  errorMessage: "MDSInputField_errorMessage"
};

// src/MDSInputField/MDSInputField.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSInputField({
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
}) {
  const reactId = React.useId();
  const inputId = id ?? `mds-input-${reactId}`;
  const errorId = `${inputId}-error`;
  const [innerValue, setInnerValue] = React.useState(
    defaultValue != null ? String(defaultValue) : ""
  );
  const isControlled = value !== void 0;
  const effectiveValue = isControlled ? String(value ?? "") : innerValue;
  const filled = effectiveValue.length > 0;
  const [focused, setFocused] = React.useState(false);
  const trailing = action ?? rightIcon;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: [MDSInputField_default.root, className].filter(Boolean).join(" "),
      "data-error": error || void 0,
      "data-filled": filled || void 0,
      "data-focused": focused || void 0,
      "data-disabled": disabled || void 0,
      "data-readonly": readOnly || void 0,
      "data-has-action": action ? "" : void 0,
      "data-has-trailing": trailing ? "" : void 0,
      children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            className: MDSInputField_default.field,
            htmlFor: inputId,
            "data-slot": "field",
            children: [
              /* @__PURE__ */ jsxs("span", { className: MDSInputField_default.content, "data-slot": "content", children: [
                /* @__PURE__ */ jsxs("span", { className: MDSInputField_default.labelDisplay, "data-slot": "label", children: [
                  label,
                  required && /* @__PURE__ */ jsx("span", { className: MDSInputField_default.required, "aria-hidden": "true", children: " *" })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: MDSInputField_default.value, "data-slot": "value", children: [
                  leftIcon != null && /* @__PURE__ */ jsx("span", { className: MDSInputField_default.leftIcon, "aria-hidden": "true", "data-slot": "left-icon", children: leftIcon }),
                  prefix != null && /* @__PURE__ */ jsx("span", { className: MDSInputField_default.affix, "data-slot": "prefix", children: prefix }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      ...props,
                      id: inputId,
                      required,
                      readOnly,
                      disabled,
                      value: isControlled ? value : void 0,
                      defaultValue: !isControlled ? defaultValue : void 0,
                      "aria-invalid": error || void 0,
                      "aria-describedby": error && errorMessage ? errorId : props["aria-describedby"],
                      className: MDSInputField_default.input,
                      onChange: (e) => {
                        if (!isControlled) setInnerValue(e.target.value);
                        onChange?.(e);
                      },
                      onFocus: (e) => {
                        setFocused(true);
                        onFocus?.(e);
                      },
                      onBlur: (e) => {
                        setFocused(false);
                        onBlur?.(e);
                      }
                    }
                  ),
                  suffix != null && /* @__PURE__ */ jsx("span", { className: MDSInputField_default.affix, "data-slot": "suffix", children: suffix })
                ] })
              ] }),
              trailing != null && /* @__PURE__ */ jsx("span", { className: MDSInputField_default.trailing, "data-slot": "trailing", children: trailing })
            ]
          }
        ),
        error && errorMessage != null && /* @__PURE__ */ jsx("span", { id: errorId, className: MDSInputField_default.errorMessage, "data-slot": "error", children: errorMessage })
      ]
    }
  );
}
MDSInputField.displayName = "MDSInputField";

export {
  MDSInputField
};
//# sourceMappingURL=chunk-PC35HBY5.js.map