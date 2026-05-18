"use client";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSDropdownSelect/MDSDropdownSelect.tsx
import "react";
import { Select as BaseSelect } from "@base-ui-components/react/select";

// src/MDSDropdownSelect/MDSDropdownSelect.module.css
var MDSDropdownSelect_default = {
  trigger: "MDSDropdownSelect_trigger",
  content: "MDSDropdownSelect_content",
  labelDisplay: "MDSDropdownSelect_labelDisplay",
  required: "MDSDropdownSelect_required",
  value: "MDSDropdownSelect_value",
  chevronIcon: "MDSDropdownSelect_chevronIcon",
  positioner: "MDSDropdownSelect_positioner",
  popup: "MDSDropdownSelect_popup",
  list: "MDSDropdownSelect_list",
  item: "MDSDropdownSelect_item",
  itemText: "MDSDropdownSelect_itemText",
  itemIndicator: "MDSDropdownSelect_itemIndicator",
  itemIndicatorInner: "MDSDropdownSelect_itemIndicatorInner"
};

// src/MDSDropdownSelect/MDSDropdownSelect.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSDropdownSelectRoot(props) {
  return /* @__PURE__ */ jsx(BaseSelect.Root, { ...props });
}
MDSDropdownSelectRoot.displayName = "MDSDropdownSelect";
var DefaultChevron = () => /* @__PURE__ */ jsx("span", { className: MDSDropdownSelect_default.chevronIcon, "aria-hidden": "true", "data-slot": "chevron", children: /* @__PURE__ */ jsx(MDSIcon, { name: "chevron-down", size: "medium" }) });
function MDSDropdownSelectTrigger({
  label,
  placeholder = "",
  chevron,
  required,
  error = false,
  disabled,
  items,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    BaseSelect.Trigger,
    {
      ...props,
      disabled,
      className: [MDSDropdownSelect_default.trigger, className].filter(Boolean).join(" "),
      render: (triggerProps, state) => {
        const filled = state.value != null && state.value !== "" && !(Array.isArray(state.value) && state.value.length === 0);
        return /* @__PURE__ */ jsxs(
          "button",
          {
            ...triggerProps,
            "data-error": error || void 0,
            "data-filled": filled || void 0,
            children: [
              /* @__PURE__ */ jsxs("span", { className: MDSDropdownSelect_default.content, "data-slot": "content", children: [
                /* @__PURE__ */ jsxs("span", { className: MDSDropdownSelect_default.labelDisplay, "data-slot": "label", children: [
                  label,
                  required && /* @__PURE__ */ jsx("span", { className: MDSDropdownSelect_default.required, "aria-hidden": "true", children: " *" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: MDSDropdownSelect_default.value, "data-slot": "value", children: /* @__PURE__ */ jsx(BaseSelect.Value, { children: (value) => {
                  if (value == null || value === "") return placeholder;
                  if (items != null) {
                    const key = String(value);
                    if (key in items) return items[key];
                  }
                  return value;
                } }) })
              ] }),
              chevron ?? /* @__PURE__ */ jsx(DefaultChevron, {})
            ]
          }
        );
      }
    }
  );
}
MDSDropdownSelectTrigger.displayName = "MDSDropdownSelect.Trigger";
function MDSDropdownSelectPopup({
  positionerProps,
  inline = false,
  className,
  children,
  ...props
}) {
  const positioner = /* @__PURE__ */ jsx(
    BaseSelect.Positioner,
    {
      sideOffset: 4,
      alignItemWithTrigger: false,
      ...positionerProps,
      className: [MDSDropdownSelect_default.positioner, positionerProps?.className].filter(Boolean).join(" "),
      children: /* @__PURE__ */ jsx(
        BaseSelect.Popup,
        {
          ...props,
          className: [MDSDropdownSelect_default.popup, className].filter(Boolean).join(" "),
          children: /* @__PURE__ */ jsx(BaseSelect.List, { className: MDSDropdownSelect_default.list, children })
        }
      )
    }
  );
  if (inline) return positioner;
  return /* @__PURE__ */ jsx(BaseSelect.Portal, { children: positioner });
}
MDSDropdownSelectPopup.displayName = "MDSDropdownSelect.Popup";
function MDSDropdownSelectItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    BaseSelect.Item,
    {
      ...props,
      className: [MDSDropdownSelect_default.item, className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx(BaseSelect.ItemText, { className: MDSDropdownSelect_default.itemText, children }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: MDSDropdownSelect_default.itemIndicator,
            "aria-hidden": "true",
            "data-slot": "indicator",
            children: /* @__PURE__ */ jsx(BaseSelect.ItemIndicator, { className: MDSDropdownSelect_default.itemIndicatorInner, children: /* @__PURE__ */ jsx(MDSIcon, { name: "check", size: "small" }) })
          }
        )
      ]
    }
  );
}
MDSDropdownSelectItem.displayName = "MDSDropdownSelect.Item";
var MDSDropdownSelect = Object.assign(MDSDropdownSelectRoot, {
  Trigger: MDSDropdownSelectTrigger,
  Popup: MDSDropdownSelectPopup,
  Item: MDSDropdownSelectItem
});

export {
  MDSDropdownSelectTrigger,
  MDSDropdownSelectPopup,
  MDSDropdownSelectItem,
  MDSDropdownSelect
};
//# sourceMappingURL=chunk-AENTFRIQ.js.map