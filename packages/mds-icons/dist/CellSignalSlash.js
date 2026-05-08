import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const v = s(), r = a ? i ?? v : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.625 14.25v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0M3.75 16.875A1.125 1.125 0 0 0 2.625 18v.75a1.125 1.125 0 0 0 2.25 0V18a1.125 1.125 0 0 0-1.125-1.125m16.583 2.618-15-16.5a1.125 1.125 0 1 0-1.666 1.514l6.458 7.103v7.14a1.125 1.125 0 1 0 2.25 0v-4.665l1.5 1.65v3.015a1.125 1.125 0 1 0 2.25 0v-.54l2.543 2.797a1.125 1.125 0 0 0 1.665-1.514M15 10.851a1.125 1.125 0 0 0 1.125-1.125V6.75a1.125 1.125 0 1 0-2.25 0v2.976A1.125 1.125 0 0 0 15 10.85m3.75 4.125a1.125 1.125 0 0 0 1.125-1.125V3a1.125 1.125 0 1 0-2.25 0v10.85a1.125 1.125 0 0 0 1.125 1.126" })
  ] });
});
h.displayName = "CellSignalSlash";
export {
  h as CellSignalSlash
};
//# sourceMappingURL=CellSignalSlash.js.map
