import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = c(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.875 7.5a1.125 1.125 0 0 1-1.125 1.125h-2.625a6.006 6.006 0 0 1-6 6h-.47l6.095 5.543a1.125 1.125 0 1 1-1.514 1.665l-8.25-7.5a1.125 1.125 0 0 1 .764-1.958h3.375a3.75 3.75 0 0 0 3.75-3.75H6.75a1.125 1.125 0 0 1 0-2.25h6.375a3.75 3.75 0 0 0-3-1.5H6.75a1.125 1.125 0 0 1 0-2.25h12a1.125 1.125 0 0 1 0 2.25h-3.946c.365.455.662.96.88 1.5h3.066A1.125 1.125 0 0 1 19.875 7.5" })
  ] });
});
s.displayName = "CurrencyInr";
export {
  s as CurrencyInr
};
//# sourceMappingURL=CurrencyInr.js.map
