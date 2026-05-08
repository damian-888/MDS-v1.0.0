import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, d) => {
  const t = s(), l = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.162 4.838a10.125 10.125 0 1 0 0 14.325 10.14 10.14 0 0 0 0-14.325M17.57 17.57a7.874 7.874 0 1 1 0-11.142 7.886 7.886 0 0 1 .001 11.142zm-1.772-2.615a1.127 1.127 0 1 1-1.594 1.594L12 14.344 9.794 16.55A1.127 1.127 0 0 1 8.2 14.956l3-3a1.125 1.125 0 0 1 1.594 0zm0-5.25a1.125 1.125 0 0 1-.366 1.838 1.13 1.13 0 0 1-1.228-.244L12 9.094l-2.206 2.205A1.127 1.127 0 0 1 8.2 9.705l3-3a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
c.displayName = "CaretCircleDoubleUp";
export {
  c as CaretCircleDoubleUp
};
//# sourceMappingURL=CaretCircleDoubleUp.js.map
