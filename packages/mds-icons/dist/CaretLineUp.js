import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = s(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.296 17.204a1.127 1.127 0 1 1-1.594 1.594L12 12.094l-6.704 6.702a1.127 1.127 0 1 1-1.594-1.594l7.5-7.5a1.127 1.127 0 0 1 1.594 0zM4.5 7.875h15a1.125 1.125 0 0 0 0-2.25h-15a1.125 1.125 0 0 0 0 2.25" })
  ] });
});
m.displayName = "CaretLineUp";
export {
  m as CaretLineUp
};
//# sourceMappingURL=CaretLineUp.js.map
