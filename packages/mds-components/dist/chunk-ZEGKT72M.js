"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";
import {
  MDSFlyout
} from "./chunk-T75LVMUX.js";

// src/MDSChipFilter/MDSChipFilter.tsx
import "react";
import { Menu } from "@base-ui-components/react/menu";

// src/MDSChipFilter/MDSChipFilter.module.css
var MDSChipFilter_default = {
  trigger: "MDSChipFilter_trigger",
  label: "MDSChipFilter_label",
  caretSlot: "MDSChipFilter_caretSlot",
  positioner: "MDSChipFilter_positioner",
  popup: "MDSChipFilter_popup",
  item: "MDSChipFilter_item",
  itemIndicator: "MDSChipFilter_itemIndicator"
};

// src/MDSChipFilter/MDSChipFilter.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSChipFilterRoot({
  label,
  selected = false,
  disabled = false,
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal,
  className,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsxs(
    Menu.Root,
    {
      open,
      defaultOpen,
      onOpenChange,
      modal: modal ?? false,
      children: [
        /* @__PURE__ */ jsxs(
          Menu.Trigger,
          {
            disabled,
            "aria-label": ariaLabel,
            className: [MDSChipFilter_default.trigger, className].filter(Boolean).join(" "),
            "data-selected": selected || void 0,
            children: [
              /* @__PURE__ */ jsx("span", { className: MDSChipFilter_default.label, "data-slot": "label", children: label }),
              /* @__PURE__ */ jsx("span", { className: MDSChipFilter_default.caretSlot, "data-slot": "caret", "aria-hidden": "true", children: /* @__PURE__ */ jsx(MDSIcon, { name: "caret-down", size: "small" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(
          Menu.Positioner,
          {
            sideOffset: Number(8),
            align: "start",
            className: MDSChipFilter_default.positioner,
            children: /* @__PURE__ */ jsx(MDSFlyout, { render: /* @__PURE__ */ jsx(Menu.Popup, {}), className: MDSChipFilter_default.popup, children })
          }
        ) })
      ]
    }
  );
}
MDSChipFilterRoot.displayName = "MDSChipFilter";
function MDSChipFilterItem({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    MDSFlyout.Item,
    {
      render: /* @__PURE__ */ jsx(
        Menu.CheckboxItem,
        {
          ...props,
          className: [MDSChipFilter_default.item, className].filter(Boolean).join(" ")
        }
      ),
      icon: /* @__PURE__ */ jsx(Menu.CheckboxItemIndicator, { className: MDSChipFilter_default.itemIndicator, children: /* @__PURE__ */ jsx(MDSIcon, { name: "check", size: "small" }) }),
      children
    }
  );
}
MDSChipFilterItem.displayName = "MDSChipFilter.Item";
var MDSChipFilter = Object.assign(MDSChipFilterRoot, {
  Item: MDSChipFilterItem
});

export {
  MDSChipFilterItem,
  MDSChipFilter
};
//# sourceMappingURL=chunk-ZEGKT72M.js.map