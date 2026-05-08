import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...a
}, d) => {
  const t = s(), r = e ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: r, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.162 4.838a10.125 10.125 0 1 0 0 14.325 10.14 10.14 0 0 0 0-14.325M17.57 17.57a7.874 7.874 0 1 1 0-11.142 7.886 7.886 0 0 1 .001 11.142zm-1.023-7.777L14.344 12l2.205 2.206a1.127 1.127 0 0 1-1.593 1.594l-3-3a1.124 1.124 0 0 1 0-1.594l3-3A1.127 1.127 0 0 1 16.549 9.8zm-5.25 0L9.094 12l2.205 2.206A1.126 1.126 0 1 1 9.705 15.8l-3-3a1.124 1.124 0 0 1 0-1.594l3-3A1.127 1.127 0 1 1 11.299 9.8z" })
  ] });
});
c.displayName = "CaretCircleDoubleLeft";
export {
  c as CaretCircleDoubleLeft
};
//# sourceMappingURL=CaretCircleDoubleLeft.js.map
