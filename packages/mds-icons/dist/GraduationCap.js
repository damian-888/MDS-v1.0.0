import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const v = c(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...i
}, e) => {
  const t = m(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m23.419 8.015-10.875-6a1.13 1.13 0 0 0-1.088 0l-10.875 6a1.125 1.125 0 0 0 0 1.969l2.044 1.125v4.477c0 .461.17.906.477 1.25 1.27 1.418 4.117 3.79 8.898 3.79 1.27.006 2.534-.175 3.75-.54V22.5a1.125 1.125 0 1 0 2.25 0v-3.363a11.2 11.2 0 0 0 2.898-2.298c.308-.343.478-.788.477-1.249v-4.477l2.044-1.125a1.125 1.125 0 0 0 0-1.97zM12 4.285 20.546 9l-3.108 1.716-.017-.011-4.875-2.69a1.125 1.125 0 0 0-1.088 1.969l3.656 2.015L12 13.716 3.454 9zm0 14.09c-3.79 0-6.06-1.787-7.125-2.931V12.35l6.581 3.632a1.13 1.13 0 0 0 1.088 0l3.206-1.765v3.49c-1.198.453-2.47.68-3.75.668m7.125-2.931Q18.607 16 18 16.457v-3.482l1.125-.621z" })
  ] });
});
v.displayName = "GraduationCap";
export {
  v as GraduationCap
};
//# sourceMappingURL=GraduationCap.js.map
