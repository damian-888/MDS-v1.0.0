import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...i
}, e) => {
  const n = h(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.204 6.796a1.127 1.127 0 0 1 1.594-1.594l1.077 1.08V2.25a1.125 1.125 0 1 1 2.25 0v4.031l1.08-1.08a1.127 1.127 0 1 1 1.593 1.594l-3 3a1.125 1.125 0 0 1-1.594 0zm4.594 7.406a1.125 1.125 0 0 0-1.594 0l-3 3a1.127 1.127 0 1 0 1.594 1.594l1.077-1.077v4.031a1.125 1.125 0 1 0 2.25 0v-4.031l1.08 1.08a1.127 1.127 0 1 0 1.593-1.594zm8.952-3.327h-4.031l1.08-1.08a1.127 1.127 0 1 0-1.594-1.593l-3 3a1.125 1.125 0 0 0 0 1.594l3 3a1.127 1.127 0 1 0 1.594-1.594l-1.08-1.077h4.031a1.125 1.125 0 1 0 0-2.25m-11.954.33-3-3a1.127 1.127 0 0 0-1.594 1.593l1.08 1.077H2.25a1.125 1.125 0 1 0 0 2.25h4.031l-1.077 1.08a1.126 1.126 0 0 0 .797 1.923c.299 0 .585-.119.797-.33l3-3a1.125 1.125 0 0 0-.002-1.594" })
  ] });
});
m.displayName = "ArrowsInCardinal";
export {
  m as ArrowsInCardinal
};
//# sourceMappingURL=ArrowsInCardinal.js.map
