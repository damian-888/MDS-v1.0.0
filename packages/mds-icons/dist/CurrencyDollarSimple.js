import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...i
}, d) => {
  const h = m(), e = r ? o ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 15.75a4.88 4.88 0 0 1-4.875 4.875h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a4.88 4.88 0 0 1-4.875-4.875 1.125 1.125 0 0 1 2.25 0 2.625 2.625 0 0 0 2.625 2.625h4.5a2.625 2.625 0 0 0 0-5.25H10.5a4.875 4.875 0 1 1 0-9.75h.375V2.25a1.125 1.125 0 1 1 2.25 0v1.125h.375a4.88 4.88 0 0 1 4.875 4.875 1.125 1.125 0 1 1-2.25 0A2.625 2.625 0 0 0 13.5 5.625h-3a2.625 2.625 0 0 0 0 5.25h3.75a4.88 4.88 0 0 1 4.875 4.875" })
  ] });
});
s.displayName = "CurrencyDollarSimple";
export {
  s as CurrencyDollarSimple
};
//# sourceMappingURL=CurrencyDollarSimple.js.map
