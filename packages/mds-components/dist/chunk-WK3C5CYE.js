"use client";
import {
  MDSText
} from "./chunk-YIZUHDZP.js";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";
import {
  MDSFlyout
} from "./chunk-T75LVMUX.js";

// src/MDSBreadcrumb/MDSBreadcrumb.tsx
import * as React from "react";
import { Menu } from "@base-ui-components/react/menu";
import { useRender } from "@base-ui-components/react/use-render";

// src/MDSBreadcrumb/MDSBreadcrumb.module.css
var MDSBreadcrumb_default = {
  root: "MDSBreadcrumb_root",
  list: "MDSBreadcrumb_list",
  itemCell: "MDSBreadcrumb_itemCell",
  separator: "MDSBreadcrumb_separator",
  overflowCell: "MDSBreadcrumb_overflowCell",
  item: "MDSBreadcrumb_item",
  overflowTrigger: "MDSBreadcrumb_overflowTrigger"
};

// src/MDSBreadcrumb/MDSBreadcrumb.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSBreadcrumbItemInternal({
  href,
  children,
  className,
  current,
  ...props
}) {
  const composed = [MDSBreadcrumb_default.item, className].filter(Boolean).join(" ");
  if (current || !href) {
    return /* @__PURE__ */ jsx(
      MDSText,
      {
        ...props,
        variant: "body-bold",
        className: composed,
        "data-current": current || void 0,
        "aria-current": current ? "page" : void 0,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx("a", { ...props, href, className: composed, children: /* @__PURE__ */ jsx(MDSText, { variant: "body-bold", children }) });
}
MDSBreadcrumbItemInternal.displayName = "MDSBreadcrumb.ItemInternal";
function MDSBreadcrumbItem(props) {
  return /* @__PURE__ */ jsx(MDSBreadcrumbItemInternal, { ...props });
}
MDSBreadcrumbItem.displayName = "MDSBreadcrumb.Item";
function Separator() {
  return /* @__PURE__ */ jsx("li", { className: MDSBreadcrumb_default.separator, "data-slot": "separator", "aria-hidden": "true", children: /* @__PURE__ */ jsx(MDSText, { variant: "body", children: "/" }) });
}
Separator.displayName = "MDSBreadcrumb.Separator";
function OverflowMenu({ items }) {
  return /* @__PURE__ */ jsx("li", { className: MDSBreadcrumb_default.overflowCell, children: /* @__PURE__ */ jsxs(Menu.Root, { children: [
    /* @__PURE__ */ jsx(
      Menu.Trigger,
      {
        className: MDSBreadcrumb_default.overflowTrigger,
        "aria-label": "Show collapsed breadcrumbs",
        "data-slot": "overflow-trigger",
        children: /* @__PURE__ */ jsx(MDSIcon, { name: "dots-three", size: "medium" })
      }
    ),
    /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(Menu.Positioner, { sideOffset: 0, align: "start", children: /* @__PURE__ */ jsx(MDSFlyout, { render: /* @__PURE__ */ jsx(Menu.Popup, {}), children: items.map((child, idx) => {
      const { href, children } = child.props;
      const key = child.key ?? idx;
      return /* @__PURE__ */ jsx(
        MDSFlyout.Item,
        {
          render: /* @__PURE__ */ jsx(
            Menu.Item,
            {
              render: href ? /* @__PURE__ */ jsx("a", { href }) : /* @__PURE__ */ jsx("span", {})
            }
          ),
          children
        },
        key
      );
    }) }) }) })
  ] }) });
}
OverflowMenu.displayName = "MDSBreadcrumb.OverflowMenu";
function MDSBreadcrumbRoot({
  maxItems = 4,
  "aria-label": ariaLabel = "Breadcrumb",
  render,
  className,
  children,
  ...props
}) {
  const effectiveMaxItems = Math.max(2, maxItems);
  const items = React.Children.toArray(children).filter(
    React.isValidElement
  );
  const lastIndex = items.length - 1;
  const list = items.length <= effectiveMaxItems || items.length < 4 ? /* @__PURE__ */ jsx("ol", { className: MDSBreadcrumb_default.list, children: items.flatMap((child, idx) => {
    const isLast = idx === lastIndex;
    const cell = /* @__PURE__ */ jsx(
      "li",
      {
        className: MDSBreadcrumb_default.itemCell,
        "data-slot": "item-cell",
        children: /* @__PURE__ */ jsx(
          MDSBreadcrumbItemInternal,
          {
            ...child.props,
            current: isLast
          }
        )
      },
      `item-${idx}`
    );
    return idx < lastIndex ? [cell, /* @__PURE__ */ jsx(Separator, {}, `sep-${idx}`)] : [cell];
  }) }) : (
    // Overflow: first / overflow menu / second-to-last / last
    /* @__PURE__ */ jsxs("ol", { className: MDSBreadcrumb_default.list, children: [
      /* @__PURE__ */ jsx("li", { className: MDSBreadcrumb_default.itemCell, "data-slot": "item-cell", children: /* @__PURE__ */ jsx(
        MDSBreadcrumbItemInternal,
        {
          ...items[0].props,
          current: false
        }
      ) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(OverflowMenu, { items: items.slice(1, items.length - 2) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("li", { className: MDSBreadcrumb_default.itemCell, "data-slot": "item-cell", children: /* @__PURE__ */ jsx(
        MDSBreadcrumbItemInternal,
        {
          ...items[items.length - 2].props,
          current: false
        }
      ) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("li", { className: MDSBreadcrumb_default.itemCell, "data-slot": "item-cell", children: /* @__PURE__ */ jsx(
        MDSBreadcrumbItemInternal,
        {
          ...items[lastIndex].props,
          current: true
        }
      ) })
    ] })
  );
  return useRender({
    render: render ?? /* @__PURE__ */ jsx("nav", {}),
    props: {
      ...props,
      "aria-label": ariaLabel,
      className: [MDSBreadcrumb_default.root, className].filter(Boolean).join(" "),
      children: list
    }
  });
}
MDSBreadcrumbRoot.displayName = "MDSBreadcrumb";
var MDSBreadcrumb = Object.assign(MDSBreadcrumbRoot, {
  Item: MDSBreadcrumbItem
});

export {
  MDSBreadcrumbItem,
  MDSBreadcrumb
};
//# sourceMappingURL=chunk-WK3C5CYE.js.map