"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSLink/MDSLink.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSLink/MDSLink.module.css
var MDSLink_default = {
  root: "MDSLink_root",
  container: "MDSLink_container",
  label: "MDSLink_label",
  icon: "MDSLink_icon"
};

// src/MDSLink/MDSLink.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DEFAULT_ICON = /* @__PURE__ */ jsx(MDSIcon, { name: "arrow-right", size: "small", "aria-hidden": "true" });
function MDSLink({
  alignment = "left",
  icon = DEFAULT_ICON,
  render,
  className,
  children,
  ...props
}) {
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("a", {}),
    props: {
      ...props,
      className: [MDSLink_default.root, className].filter(Boolean).join(" "),
      "data-alignment": alignment,
      children: /* @__PURE__ */ jsxs("span", { className: MDSLink_default.container, "data-slot": "container", children: [
        /* @__PURE__ */ jsx("span", { className: MDSLink_default.label, "data-slot": "label", children }),
        icon != null && /* @__PURE__ */ jsx("span", { className: MDSLink_default.icon, "aria-hidden": "true", "data-slot": "icon", children: icon })
      ] })
    }
  });
}
MDSLink.displayName = "MDSLink";

export {
  MDSLink
};
//# sourceMappingURL=chunk-RGAHE3QE.js.map