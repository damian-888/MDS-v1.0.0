import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...i
}, a) => {
  const t = h(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.135 11.305-8.25-10.5a1.125 1.125 0 0 0-1.77 0l-8.25 10.5a1.125 1.125 0 0 0 0 1.39l.056.071a.4.4 0 0 0 .042.053l8.156 10.376a1.125 1.125 0 0 0 1.77 0l8.25-10.5a1.125 1.125 0 0 0-.004-1.39m-8.01-6.552 5.355 6.816-5.355 2.437zm-2.25 9.25L5.52 11.565l5.355-6.812zm0 2.472v2.772l-3.389-4.312zm2.25 0 3.39-1.54-3.39 4.312z" })
  ] });
});
s.displayName = "CurrencyEth";
export {
  s as CurrencyEth
};
//# sourceMappingURL=CurrencyEth.js.map
