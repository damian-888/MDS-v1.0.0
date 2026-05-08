"use client";

// src/MDSButton/MDSButton.tsx
import "react";
import { Button as BaseButton } from "@base-ui-components/react/button";

// src/MDSButton/MDSButton.module.css
var MDSButton_default = {
  root: "MDSButton_root",
  label: "MDSButton_label",
  iconSlot: "MDSButton_iconSlot"
};

// src/MDSButton/MDSButton.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSButton({
  variant = "secondary",
  size = "large",
  iconOnly = false,
  icon,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    BaseButton,
    {
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
MDSButton.displayName = "MDSButton";

export {
  MDSButton
};
//# sourceMappingURL=chunk-IRUHO4QN.js.map