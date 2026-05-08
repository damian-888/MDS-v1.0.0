import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const t = s(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.125 19.5A1.125 1.125 0 0 1 21 20.625H3A1.125 1.125 0 0 1 1.875 19.5v-15a1.125 1.125 0 0 1 2.25 0v9.281l4.08-4.08a1.125 1.125 0 0 1 1.593 0L12 11.906l4.031-4.031H15a1.125 1.125 0 0 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125v3.75a1.125 1.125 0 1 1-2.25 0V9.469l-4.83 4.83a1.125 1.125 0 0 1-1.593 0L9 12.094l-4.875 4.875v1.406H21a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "ChartLineUp";
export {
  v as ChartLineUp
};
//# sourceMappingURL=ChartLineUp.js.map
