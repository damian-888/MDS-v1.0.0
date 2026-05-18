"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSMenu/MDSMenu.tsx
import "react";
import "@base-ui-components/react/use-render";
import { Menu as BaseMenu } from "@base-ui-components/react/menu";

// src/MDSMenu/MDSMenu.module.css
var MDSMenu_default = {
  trigger: "MDSMenu_trigger",
  positioner: "MDSMenu_positioner",
  popup: "MDSMenu_popup",
  item: "MDSMenu_item",
  itemLabel: "MDSMenu_itemLabel",
  itemLeftIcon: "MDSMenu_itemLeftIcon",
  itemIcon: "MDSMenu_itemIcon"
};

// src/MDSMenu/MDSMenu.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSMenuRoot(props) {
  return /* @__PURE__ */ jsx(BaseMenu.Root, { ...props });
}
MDSMenuRoot.displayName = "MDSMenu";
function MDSMenuTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseMenu.Trigger,
    {
      ...props,
      className: [MDSMenu_default.trigger, className].filter(Boolean).join(" ")
    }
  );
}
MDSMenuTrigger.displayName = "MDSMenu.Trigger";
function MDSMenuPopup({
  positionerProps,
  inline = false,
  className,
  children,
  ...props
}) {
  const positioner = /* @__PURE__ */ jsx(
    BaseMenu.Positioner,
    {
      sideOffset: 4,
      ...positionerProps,
      className: [MDSMenu_default.positioner, positionerProps?.className].filter(Boolean).join(" "),
      children: /* @__PURE__ */ jsx(
        BaseMenu.Popup,
        {
          ...props,
          className: [MDSMenu_default.popup, className].filter(Boolean).join(" "),
          children
        }
      )
    }
  );
  if (inline) return positioner;
  return /* @__PURE__ */ jsx(BaseMenu.Portal, { children: positioner });
}
MDSMenuPopup.displayName = "MDSMenu.Popup";
var DEFAULT_TRAILING_ICON = /* @__PURE__ */ jsx(MDSIcon, { name: "caret-right", size: "small", "aria-hidden": "true" });
function MDSMenuItem({
  leftIcon,
  icon = DEFAULT_TRAILING_ICON,
  render,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    BaseMenu.Item,
    {
      ...props,
      render,
      className: [MDSMenu_default.item, className].filter(Boolean).join(" "),
      children: [
        leftIcon != null && /* @__PURE__ */ jsx("span", { className: MDSMenu_default.itemLeftIcon, "aria-hidden": "true", "data-slot": "left-icon", children: leftIcon }),
        /* @__PURE__ */ jsx("span", { className: MDSMenu_default.itemLabel, "data-slot": "label", children }),
        icon != null && /* @__PURE__ */ jsx("span", { className: MDSMenu_default.itemIcon, "aria-hidden": "true", "data-slot": "icon", children: icon })
      ]
    }
  );
}
MDSMenuItem.displayName = "MDSMenu.Item";
var MDSMenu = Object.assign(MDSMenuRoot, {
  Trigger: MDSMenuTrigger,
  Popup: MDSMenuPopup,
  Item: MDSMenuItem
});

export {
  MDSMenuTrigger,
  MDSMenuPopup,
  MDSMenuItem,
  MDSMenu
};
//# sourceMappingURL=chunk-YCKVDP4O.js.map