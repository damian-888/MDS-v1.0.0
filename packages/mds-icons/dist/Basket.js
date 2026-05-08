import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = n(), l = a ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.125 12v3.75a1.125 1.125 0 1 1-2.25 0V12a1.125 1.125 0 0 1 2.25 0m2.63-.112-.374 3.75a1.125 1.125 0 0 0 1.008 1.231c.037 0 .076.006.112.006a1.125 1.125 0 0 0 1.119-1.014l.375-3.75a1.125 1.125 0 0 0-2.24-.223m-7.51 0a1.125 1.125 0 0 0-2.24.223l.376 3.75a1.125 1.125 0 0 0 1.12 1.014q.054.001.112-.006a1.125 1.125 0 0 0 1.008-1.23zm14.625-3.49-1.413 10.595a1.88 1.88 0 0 1-1.863 1.632H4.406a1.88 1.88 0 0 1-1.858-1.628L1.136 8.403A1.125 1.125 0 0 1 2.25 7.125h3.99l4.916-5.616a1.125 1.125 0 0 1 1.694 0l4.911 5.616h3.99a1.125 1.125 0 0 1 1.114 1.274zM9.23 7.126h5.54L12 3.958zm11.235 2.25H3.535l1.2 9h14.532z" })
  ] });
});
s.displayName = "Basket";
export {
  s as Basket
};
//# sourceMappingURL=Basket.js.map
