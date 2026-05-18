"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSCheckbox/MDSCheckbox.tsx
import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";

// src/MDSCheckbox/MDSCheckbox.module.css
var MDSCheckbox_default = {
  root: "MDSCheckbox_root",
  box: "MDSCheckbox_box",
  indicator: "MDSCheckbox_indicator",
  label: "MDSCheckbox_label"
};

// src/MDSCheckbox/MDSCheckbox.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSCheckbox({
  iconOnly,
  error = false,
  children,
  className,
  ...props
}) {
  const labelId = React.useId();
  const wrapperClassName = [MDSCheckbox_default.root, className].filter(Boolean).join(" ");
  const indicator = /* @__PURE__ */ jsx(
    BaseCheckbox.Root,
    {
      ...props,
      className: MDSCheckbox_default.box,
      "aria-labelledby": iconOnly || props["aria-label"] || props["aria-labelledby"] ? props["aria-labelledby"] : labelId,
      children: /* @__PURE__ */ jsx(
        BaseCheckbox.Indicator,
        {
          keepMounted: true,
          className: MDSCheckbox_default.indicator,
          render: (indicatorProps, state) => /* @__PURE__ */ jsx("span", { ...indicatorProps, children: /* @__PURE__ */ jsx(
            MDSIcon,
            {
              name: state.indeterminate ? "minus" : "check",
              size: 24,
              "aria-hidden": "true"
            }
          ) })
        }
      )
    }
  );
  if (iconOnly) {
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: wrapperClassName,
        "data-icon-only": "",
        "data-scheme": error ? "error" : void 0,
        "data-error": error || void 0,
        children: indicator
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: wrapperClassName,
      "data-scheme": error ? "error" : void 0,
      "data-error": error || void 0,
      children: [
        indicator,
        /* @__PURE__ */ jsx("span", { id: labelId, className: MDSCheckbox_default.label, "data-slot": "label", children })
      ]
    }
  );
}
MDSCheckbox.displayName = "MDSCheckbox";

export {
  MDSCheckbox
};
//# sourceMappingURL=chunk-PYWAI4O3.js.map