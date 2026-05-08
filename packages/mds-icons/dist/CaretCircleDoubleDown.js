import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...i
}, d) => {
  const t = c(), a = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.162 4.838a10.125 10.125 0 1 0 0 14.325 10.14 10.14 0 0 0 0-14.325M17.57 17.57a7.874 7.874 0 1 1 0-11.142 7.886 7.886 0 0 1 .001 11.142zM15.797 7.452a1.125 1.125 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.127 1.127 0 0 1 1.594-1.594L12 9.656l2.206-2.206a1.125 1.125 0 0 1 1.59.002m0 5.25a1.125 1.125 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.126 1.126 0 1 1 1.594-1.594L12 14.906l2.206-2.205a1.125 1.125 0 0 1 1.59.004z" })
  ] });
});
m.displayName = "CaretCircleDoubleDown";
export {
  m as CaretCircleDoubleDown
};
//# sourceMappingURL=CaretCircleDoubleDown.js.map
