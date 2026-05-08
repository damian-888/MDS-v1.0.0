import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = c(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.676 6.547A10.8 10.8 0 0 0 12 3.375h-.038c-5.976.02-10.837 4.946-10.837 10.981V16.5A1.875 1.875 0 0 0 3 18.375h18a1.875 1.875 0 0 0 1.875-1.875v-2.25a10.8 10.8 0 0 0-3.199-7.703m.949 9.578h-8.689l4.354-6.094a1.127 1.127 0 0 0-1.83-1.312l-5.29 7.406H3.376v-1.769c0-.161 0-.322.013-.481H5.25a1.125 1.125 0 1 0 0-2.25H3.808c1.023-3.13 3.75-5.486 7.067-5.926V7.5a1.125 1.125 0 1 0 2.25 0V5.7a8.63 8.63 0 0 1 7.093 5.925H18.75a1.125 1.125 0 0 0 0 2.25h1.866q.008.188.009.375z" })
  ] });
});
s.displayName = "Gauge";
export {
  s as Gauge
};
//# sourceMappingURL=Gauge.js.map
