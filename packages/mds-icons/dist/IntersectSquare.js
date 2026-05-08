import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: t,
  ...h
}, i) => {
  const a = m(), o = r ? t ?? a : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 7.875h-4.125V3.75A1.125 1.125 0 0 0 15 2.625H3.75A1.125 1.125 0 0 0 2.625 3.75V15a1.125 1.125 0 0 0 1.125 1.125h4.125v4.125A1.125 1.125 0 0 0 9 21.375h11.25a1.125 1.125 0 0 0 1.125-1.125V9a1.125 1.125 0 0 0-1.125-1.125m-15.375 6v-9h9v3H9A1.125 1.125 0 0 0 7.875 9v4.875zm5.25-2.156 2.156 2.156h-2.156zm3.75.562-2.156-2.156h2.156zm5.25 6.844h-9v-3H15A1.125 1.125 0 0 0 16.125 15v-4.875h3z" })
  ] });
});
s.displayName = "IntersectSquare";
export {
  s as IntersectSquare
};
//# sourceMappingURL=IntersectSquare.js.map
