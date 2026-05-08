import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = m(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.296 17.955a1.127 1.127 0 0 1-1.594 1.594L12 12.845l-6.704 6.702a1.127 1.127 0 1 1-1.594-1.594l7.5-7.5a1.127 1.127 0 0 1 1.594 0zm-15-5.906L12 5.345l6.704 6.705a1.127 1.127 0 1 0 1.594-1.594l-7.5-7.5a1.124 1.124 0 0 0-1.594 0l-7.5 7.5a1.127 1.127 0 1 0 1.594 1.594z" })
  ] });
});
h.displayName = "CaretDoubleUp";
export {
  h as CaretDoubleUp
};
//# sourceMappingURL=CaretDoubleUp.js.map
