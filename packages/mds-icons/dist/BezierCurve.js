import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const t = m(), a = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.026 13.219a9.43 9.43 0 0 0-2.943-4.594H22.5a1.125 1.125 0 1 0 0-2.25h-7.318a3.375 3.375 0 0 0-6.364 0H1.5a1.125 1.125 0 0 0 0 2.25h4.418a9.43 9.43 0 0 0-2.944 4.594 3.375 3.375 0 1 0 2.276.256 7.19 7.19 0 0 1 3.858-4.238 3.375 3.375 0 0 0 5.784 0 7.19 7.19 0 0 1 3.858 4.238 3.375 3.375 0 1 0 2.276-.256M3.75 17.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m8.25-9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m8.25 9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
s.displayName = "BezierCurve";
export {
  s as BezierCurve
};
//# sourceMappingURL=BezierCurve.js.map
