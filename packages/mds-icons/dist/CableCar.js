import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const h = n(), e = r ? a ?? h : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.608 2.802a1.125 1.125 0 0 0-1.305-.91l-21 3.75a1.125 1.125 0 0 0 .396 2.215l9.176-1.639v2.407H6A3.375 3.375 0 0 0 2.625 12v6A3.375 3.375 0 0 0 6 21.375h12A3.375 3.375 0 0 0 21.375 18v-6A3.375 3.375 0 0 0 18 8.625h-4.875V5.817l9.573-1.71a1.125 1.125 0 0 0 .91-1.305M10.125 14.625v-3.75h3.75v3.75zM6 10.875h1.875v3.75h-3V12A1.125 1.125 0 0 1 6 10.875m12 8.25H6A1.125 1.125 0 0 1 4.875 18v-1.125h14.25V18A1.125 1.125 0 0 1 18 19.125M19.125 12v2.625h-3v-3.75H18A1.125 1.125 0 0 1 19.125 12" })
  ] });
});
s.displayName = "CableCar";
export {
  s as CableCar
};
//# sourceMappingURL=CableCar.js.map
