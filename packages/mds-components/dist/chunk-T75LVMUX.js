"use client";

// src/MDSFlyout/MDSFlyout.tsx
import "react";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSFlyout/MDSFlyout.module.css
var MDSFlyout_default = {
  root: "MDSFlyout_root",
  item: "MDSFlyout_item",
  itemLabel: "MDSFlyout_itemLabel",
  itemIcon: "MDSFlyout_itemIcon"
};

// src/MDSFlyout/MDSFlyout.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function MDSFlyoutRoot({
  maxHeight,
  render,
  className,
  style,
  children,
  ...props
}) {
  const isScrollable = maxHeight != null;
  const composedStyle = isScrollable ? { maxHeight, ...style } : style;
  const element = useRender({
    render: render ?? /* @__PURE__ */ jsx("div", {}),
    props: {
      ...props,
      style: composedStyle,
      className: [MDSFlyout_default.root, className].filter(Boolean).join(" "),
      "data-scrollable": isScrollable ? "" : void 0,
      children
    }
  });
  return element;
}
MDSFlyoutRoot.displayName = "MDSFlyout";
function MDSFlyoutItem({
  icon,
  render,
  className,
  children,
  ...props
}) {
  const element = useRender({
    render: render ?? /* @__PURE__ */ jsx("button", { type: "button" }),
    props: {
      ...props,
      className: [MDSFlyout_default.item, className].filter(Boolean).join(" "),
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: MDSFlyout_default.itemLabel, children }),
        /* @__PURE__ */ jsx("span", { className: MDSFlyout_default.itemIcon, "aria-hidden": icon ? void 0 : true, children: icon })
      ] })
    }
  });
  return element;
}
MDSFlyoutItem.displayName = "MDSFlyout.Item";
var MDSFlyout = Object.assign(MDSFlyoutRoot, {
  Item: MDSFlyoutItem
});

export {
  MDSFlyoutItem,
  MDSFlyout
};
//# sourceMappingURL=chunk-T75LVMUX.js.map