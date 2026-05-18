"use client";

// src/MDSBottomNavigation/MDSBottomNavigation.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSBottomNavigation/MDSBottomNavigation.module.css
var MDSBottomNavigation_default = {
  root: "MDSBottomNavigation_root",
  item: "MDSBottomNavigation_item",
  iconContainer: "MDSBottomNavigation_iconContainer",
  iconSlot: "MDSBottomNavigation_iconSlot",
  badge: "MDSBottomNavigation_badge",
  label: "MDSBottomNavigation_label",
  selectionBar: "MDSBottomNavigation_selectionBar"
};

// src/MDSBottomNavigation/MDSBottomNavigation.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSBottomNavigationRoot({
  background = "standard",
  "aria-label": ariaLabel,
  render,
  className,
  children,
  ...props
}) {
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("nav", {}),
    props: {
      ...props,
      "aria-label": ariaLabel,
      className: [MDSBottomNavigation_default.root, className].filter(Boolean).join(" "),
      "data-background": background,
      children
    }
  });
}
MDSBottomNavigationRoot.displayName = "MDSBottomNavigation";
function MDSBottomNavigationItem({
  icon,
  children,
  hideLabel = false,
  showBadge = false,
  selected = false,
  href,
  render,
  className,
  ...props
}) {
  const defaultElement = href != null ? /* @__PURE__ */ jsx("a", { href }) : /* @__PURE__ */ jsx("button", { type: "button" });
  return useRender({
    render: render ?? defaultElement,
    props: {
      ...props,
      className: [MDSBottomNavigation_default.item, className].filter(Boolean).join(" "),
      "data-selected": selected || void 0,
      "aria-current": selected ? "page" : void 0,
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: MDSBottomNavigation_default.selectionBar,
            "data-slot": "selection-bar",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: MDSBottomNavigation_default.iconContainer, "data-slot": "icon-container", children: [
          /* @__PURE__ */ jsx("span", { className: MDSBottomNavigation_default.iconSlot, "aria-hidden": "true", children: icon }),
          showBadge && /* @__PURE__ */ jsx(
            "span",
            {
              className: MDSBottomNavigation_default.badge,
              "data-slot": "badge",
              "aria-hidden": "true"
            }
          )
        ] }),
        !hideLabel && children != null && /* @__PURE__ */ jsx("span", { className: MDSBottomNavigation_default.label, "data-slot": "label", children })
      ] })
    }
  });
}
MDSBottomNavigationItem.displayName = "MDSBottomNavigation.Item";
var MDSBottomNavigation = Object.assign(MDSBottomNavigationRoot, {
  Item: MDSBottomNavigationItem
});

export {
  MDSBottomNavigationItem,
  MDSBottomNavigation
};
//# sourceMappingURL=chunk-XNQB5VPG.js.map