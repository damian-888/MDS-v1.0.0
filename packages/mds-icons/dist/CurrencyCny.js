import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, n) => {
  const l = v(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M4.875 5.25A1.125 1.125 0 0 1 6 4.125h12a1.125 1.125 0 0 1 0 2.25H6A1.125 1.125 0 0 1 4.875 5.25m15.375 9.375a1.125 1.125 0 0 0-1.125 1.125v1.125H16.5a1.125 1.125 0 0 1-1.125-1.125v-4.125H19.5a1.125 1.125 0 1 0 0-2.25h-15a1.125 1.125 0 0 0 0 2.25h4.125V12a4.88 4.88 0 0 1-4.875 4.875 1.125 1.125 0 1 0 0 2.25A7.13 7.13 0 0 0 10.875 12v-.375h2.25v4.125a3.375 3.375 0 0 0 3.375 3.375h3.75A1.125 1.125 0 0 0 21.375 18v-2.25a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
s.displayName = "CurrencyCny";
export {
  s as CurrencyCny
};
//# sourceMappingURL=CurrencyCny.js.map
