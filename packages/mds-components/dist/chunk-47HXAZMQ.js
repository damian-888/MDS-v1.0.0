"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSBadge/MDSBadge.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSBadge/MDSBadge.module.css
var MDSBadge_default = {
  root: "MDSBadge_root",
  label: "MDSBadge_label",
  iconSlot: "MDSBadge_iconSlot"
};

// src/MDSBadge/MDSBadge.tsx
import { jsx } from "react/jsx-runtime";
var SCHEME_BY_TYPE = {
  success: "success",
  error: "error"
};
var ICON_BY_TYPE = {
  success: "check",
  error: "warning"
};
function MDSBadge({
  type,
  size = "large",
  render,
  className,
  children,
  ...props
}) {
  const isIconOnly = type === "success" || type === "error";
  const isSubtle = isIconOnly && size !== "small";
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("span", {}),
    props: {
      ...props,
      role: isIconOnly ? "img" : void 0,
      className: [MDSBadge_default.root, className].filter(Boolean).join(" "),
      "data-type": type,
      "data-size": size,
      "data-scheme": SCHEME_BY_TYPE[type],
      "data-section": isSubtle ? "subtle" : void 0,
      children: isIconOnly ? /* @__PURE__ */ jsx("span", { className: MDSBadge_default.iconSlot, "data-slot": "icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(MDSIcon, { name: ICON_BY_TYPE[type], size: "small" }) }) : /* @__PURE__ */ jsx("span", { className: MDSBadge_default.label, children })
    }
  });
}
MDSBadge.displayName = "MDSBadge";

export {
  MDSBadge
};
//# sourceMappingURL=chunk-47HXAZMQ.js.map