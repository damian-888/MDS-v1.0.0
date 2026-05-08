import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const v = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = s(), o = r ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m19.62 5.212-5.25 6.412h2.13a1.125 1.125 0 1 1 0 2.25h-3.375v1.5H16.5a1.125 1.125 0 1 1 0 2.25h-3.375v2.625a1.125 1.125 0 1 1-2.25 0v-2.625H7.5a1.125 1.125 0 1 1 0-2.25h3.375v-1.5H7.5a1.125 1.125 0 1 1 0-2.25h2.126l-5.25-6.412a1.126 1.126 0 1 1 1.745-1.425L12 10.973l5.879-7.186a1.125 1.125 0 1 1 1.742 1.425" })
  ] });
});
v.displayName = "CurrencyJpy";
export {
  v as CurrencyJpy
};
//# sourceMappingURL=CurrencyJpy.js.map
