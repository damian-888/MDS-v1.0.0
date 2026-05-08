import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const p = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...d
}, e) => {
  const t = m(), o = a ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.863 5.28A1.12 1.12 0 0 0 21 4.874H6.188l-.513-2.827a1.125 1.125 0 0 0-1.107-.923H2.25a1.125 1.125 0 0 0 0 2.25h1.38l2.334 12.844c.063.34.193.666.382.957a3 3 0 1 0 5.185 1.199h3.188a3 3 0 1 0 2.906-2.25H8.547a.375.375 0 0 1-.368-.307l-.218-1.193h10.423a2.626 2.626 0 0 0 2.583-2.156l1.14-6.268a1.12 1.12 0 0 0-.244-.922M9.375 19.124a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m8.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.125-7.807a.375.375 0 0 1-.366.307H7.553l-.955-5.25h13.054z" })
  ] });
});
p.displayName = "ShoppingCart";
export {
  p as ShoppingCart
};
//# sourceMappingURL=ShoppingCart.js.map
