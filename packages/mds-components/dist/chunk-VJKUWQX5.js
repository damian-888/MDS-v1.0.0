"use client";

// src/MDSButton/MDSButton.tsx
import * as React from "react";
import { Button as BaseButton } from "@base-ui-components/react/button";

// src/MDSButton/MDSButton.module.css
var MDSButton_default = {
  root: "MDSButton_root",
  label: "MDSButton_label",
  iconSlot: "MDSButton_iconSlot"
};

// src/MDSButton/MDSButton.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var MDSButton = React.forwardRef(
  function MDSButton2({
    variant = "secondary",
    size = "large",
    iconOnly = false,
    icon,
    children,
    className,
    ...props
  }, ref) {
    return /* @__PURE__ */ jsx(
      BaseButton,
      {
        ref,
        ...props,
        className: [MDSButton_default.root, className].filter(Boolean).join(" "),
        "data-variant": variant,
        "data-size": size,
        "data-icon-only": iconOnly || void 0,
        children: iconOnly ? /* @__PURE__ */ jsx("span", { className: MDSButton_default.iconSlot, "aria-hidden": "true", children: icon }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          children != null && /* @__PURE__ */ jsx("span", { className: MDSButton_default.label, children }),
          icon != null && /* @__PURE__ */ jsx("span", { className: MDSButton_default.iconSlot, "aria-hidden": "true", children: icon })
        ] })
      }
    );
  }
);

export {
  MDSButton
};
//# sourceMappingURL=chunk-VJKUWQX5.js.map