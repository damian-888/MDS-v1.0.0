"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSChipDismissible/MDSChipDismissible.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSChipDismissible/MDSChipDismissible.module.css
var MDSChipDismissible_default = {
  root: "MDSChipDismissible_root",
  label: "MDSChipDismissible_label",
  avatar: "MDSChipDismissible_avatar",
  dismiss: "MDSChipDismissible_dismiss"
};

// src/MDSChipDismissible/MDSChipDismissible.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSChipDismissible({
  children,
  avatar,
  onDismiss,
  dismissLabel = "Dismiss",
  render,
  className,
  ...props
}) {
  const hasAvatar = avatar != null;
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("span", {}),
    props: {
      ...props,
      className: [MDSChipDismissible_default.root, className].filter(Boolean).join(" "),
      "data-has-avatar": hasAvatar || void 0,
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        hasAvatar && /* @__PURE__ */ jsx("span", { className: MDSChipDismissible_default.avatar, "data-slot": "avatar", "aria-hidden": "true", children: avatar }),
        /* @__PURE__ */ jsx("span", { className: MDSChipDismissible_default.label, "data-slot": "label", children }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: MDSChipDismissible_default.dismiss,
            "data-slot": "dismiss",
            "aria-label": dismissLabel,
            onClick: onDismiss,
            children: /* @__PURE__ */ jsx(MDSIcon, { name: "x", size: "small", "aria-hidden": "true" })
          }
        )
      ] })
    }
  });
}
MDSChipDismissible.displayName = "MDSChipDismissible";

export {
  MDSChipDismissible
};
//# sourceMappingURL=chunk-EJ32O43T.js.map