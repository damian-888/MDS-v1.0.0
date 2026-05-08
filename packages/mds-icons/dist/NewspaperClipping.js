import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as p, useId as m } from "react";
const t = p(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = m(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v15a1.125 1.125 0 0 0 1.628 1.006L6 20.008l2.497 1.248a1.13 1.13 0 0 0 1.006 0L12 20.008l2.497 1.248a1.13 1.13 0 0 0 1.006 0L18 20.008l2.497 1.248a1.124 1.124 0 0 0 1.628-1.006v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 15.054-1.372-.685a1.13 1.13 0 0 0-1.006 0L15 18.992l-2.497-1.248a1.13 1.13 0 0 0-1.006 0L9 18.992l-2.497-1.248a1.13 1.13 0 0 0-1.006 0l-1.372.685V5.625h15.75zm-7.125-8.304A1.125 1.125 0 0 1 13.875 9h3.375a1.125 1.125 0 0 1 0 2.25h-3.375a1.125 1.125 0 0 1-1.125-1.125m0 3.75a1.125 1.125 0 0 1 1.125-1.125h3.375a1.125 1.125 0 1 1 0 2.25h-3.375a1.125 1.125 0 0 1-1.125-1.125m-6 2.25h3.75A1.125 1.125 0 0 0 11.625 15V9A1.125 1.125 0 0 0 10.5 7.875H6.75A1.125 1.125 0 0 0 5.625 9v6a1.125 1.125 0 0 0 1.125 1.125m1.125-6h1.5v3.75h-1.5z" })
  ] });
});
t.displayName = "NewspaperClipping";
export {
  t as NewspaperClipping
};
//# sourceMappingURL=NewspaperClipping.js.map
