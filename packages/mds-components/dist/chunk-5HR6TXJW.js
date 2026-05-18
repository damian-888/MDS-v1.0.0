"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSChipToggle/MDSChipToggle.tsx
import "react";
import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";

// src/MDSChipToggle/MDSChipToggle.module.css
var MDSChipToggle_default = {
  root: "MDSChipToggle_root",
  label: "MDSChipToggle_label",
  avatar: "MDSChipToggle_avatar",
  checkSlot: "MDSChipToggle_checkSlot"
};

// src/MDSChipToggle/MDSChipToggle.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSChipToggle({
  children,
  selected,
  defaultSelected,
  onSelectedChange,
  avatar,
  className,
  ...props
}) {
  const hasAvatar = avatar != null;
  return /* @__PURE__ */ jsxs(
    BaseToggle,
    {
      ...props,
      pressed: selected,
      defaultPressed: defaultSelected,
      onPressedChange: onSelectedChange,
      className: [MDSChipToggle_default.root, className].filter(Boolean).join(" "),
      "data-has-avatar": hasAvatar || void 0,
      children: [
        hasAvatar && /* @__PURE__ */ jsx("span", { className: MDSChipToggle_default.avatar, "data-slot": "avatar", "aria-hidden": "true", children: avatar }),
        /* @__PURE__ */ jsx("span", { className: MDSChipToggle_default.label, "data-slot": "label", children }),
        /* @__PURE__ */ jsx("span", { className: MDSChipToggle_default.checkSlot, "data-slot": "check", "aria-hidden": "true", children: /* @__PURE__ */ jsx(MDSIcon, { name: "check", size: "small" }) })
      ]
    }
  );
}
MDSChipToggle.displayName = "MDSChipToggle";

export {
  MDSChipToggle
};
//# sourceMappingURL=chunk-5HR6TXJW.js.map