"use client";
import {
  MDSText
} from "./chunk-YIZUHDZP.js";
import {
  MDSIcon
} from "./chunk-PEONUTKF.js";

// src/MDSAccordion/MDSAccordion.tsx
import "react";
import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";

// src/MDSAccordion/MDSAccordion.module.css
var MDSAccordion_default = {
  root: "MDSAccordion_root",
  item: "MDSAccordion_item",
  header: "MDSAccordion_header",
  trigger: "MDSAccordion_trigger",
  label: "MDSAccordion_label",
  chevronSlot: "MDSAccordion_chevronSlot",
  panel: "MDSAccordion_panel"
};

// src/MDSAccordion/MDSAccordion.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function MDSAccordionRoot({
  className,
  openMultiple,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    BaseAccordion.Root,
    {
      ...props,
      multiple: openMultiple ?? false,
      className: [MDSAccordion_default.root, className].filter(Boolean).join(" ")
    }
  );
}
MDSAccordionRoot.displayName = "MDSAccordion";
function MDSAccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseAccordion.Item,
    {
      ...props,
      className: [MDSAccordion_default.item, className].filter(Boolean).join(" ")
    }
  );
}
MDSAccordionItem.displayName = "MDSAccordion.Item";
function MDSAccordionHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseAccordion.Header,
    {
      ...props,
      className: [MDSAccordion_default.header, className].filter(Boolean).join(" ")
    }
  );
}
MDSAccordionHeader.displayName = "MDSAccordion.Header";
function MDSAccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    BaseAccordion.Trigger,
    {
      ...props,
      className: [MDSAccordion_default.trigger, className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx(MDSText, { variant: "body-bold", className: MDSAccordion_default.label, children }),
        /* @__PURE__ */ jsx("span", { className: MDSAccordion_default.chevronSlot, "aria-hidden": "true", children: /* @__PURE__ */ jsx(MDSIcon, { name: "chevron-down", size: "medium" }) })
      ]
    }
  );
}
MDSAccordionTrigger.displayName = "MDSAccordion.Trigger";
function MDSAccordionPanel({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseAccordion.Panel,
    {
      ...props,
      className: [MDSAccordion_default.panel, className].filter(Boolean).join(" ")
    }
  );
}
MDSAccordionPanel.displayName = "MDSAccordion.Panel";
var MDSAccordion = Object.assign(MDSAccordionRoot, {
  Item: MDSAccordionItem,
  Header: MDSAccordionHeader,
  Trigger: MDSAccordionTrigger,
  Panel: MDSAccordionPanel
});

export {
  MDSAccordionItem,
  MDSAccordionHeader,
  MDSAccordionTrigger,
  MDSAccordionPanel,
  MDSAccordion
};
//# sourceMappingURL=chunk-RIAI5DI4.js.map