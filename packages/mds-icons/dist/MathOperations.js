import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...l
}, d) => {
  const h = s(), o = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.875 6.749A1.125 1.125 0 0 1 9.75 7.874h-6a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125M9.75 16.124H7.875v-1.875a1.125 1.125 0 0 0-2.25 0v1.875H3.75a1.125 1.125 0 1 0 0 2.25h1.875v1.875a1.125 1.125 0 0 0 2.25 0v-1.875H9.75a1.125 1.125 0 1 0 0-2.25m4.5.375h6a1.125 1.125 0 1 0 0-2.25h-6a1.125 1.125 0 1 0 0 2.25m6 1.5h-6a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m-6.046-8.204a1.125 1.125 0 0 0 1.594 0l1.452-1.452 1.454 1.455a1.127 1.127 0 1 0 1.594-1.594l-1.454-1.455 1.455-1.454A1.127 1.127 0 1 0 18.705 3.7L17.25 5.155l-1.454-1.452a1.127 1.127 0 1 0-1.594 1.594l1.454 1.452-1.452 1.454a1.125 1.125 0 0 0 0 1.592" })
  ] });
});
m.displayName = "MathOperations";
export {
  m as MathOperations
};
//# sourceMappingURL=MathOperations.js.map
