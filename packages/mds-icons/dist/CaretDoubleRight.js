import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, d) => {
  const t = m(), l = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m13.546 12.797-7.5 7.5a1.13 1.13 0 0 1-1.838-.366 1.13 1.13 0 0 1 .244-1.228l6.704-6.702-6.702-6.704a1.127 1.127 0 0 1 1.594-1.594l7.5 7.5a1.126 1.126 0 0 1-.002 1.594m7.5-1.594-7.5-7.5a1.128 1.128 0 0 0-1.594 1.594L18.656 12l-6.705 6.704a1.127 1.127 0 0 0 1.594 1.594l7.5-7.5a1.125 1.125 0 0 0 0-1.594z" })
  ] });
});
s.displayName = "CaretDoubleRight";
export {
  s as CaretDoubleRight
};
//# sourceMappingURL=CaretDoubleRight.js.map
