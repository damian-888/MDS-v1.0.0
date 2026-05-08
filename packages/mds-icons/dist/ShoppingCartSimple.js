import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const p = m(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...e
}, d) => {
  const t = h(), i = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.645 6.07a1.13 1.13 0 0 0-.895-.445H5.647l-.813-2.926a1.125 1.125 0 0 0-1.084-.824H1.875a1.125 1.125 0 0 0 0 2.25h1.02l3.216 11.577a2.634 2.634 0 0 0 2.53 1.923h9.265a2.63 2.63 0 0 0 2.532-1.923l2.402-8.651a1.13 1.13 0 0 0-.195-.982m-4.382 9.03a.374.374 0 0 1-.357.275H8.64a.375.375 0 0 1-.36-.275L6.271 7.875H20.27zm-8.138 5.525a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m9.75 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0" })
  ] });
});
p.displayName = "ShoppingCartSimple";
export {
  p as ShoppingCartSimple
};
//# sourceMappingURL=ShoppingCartSimple.js.map
