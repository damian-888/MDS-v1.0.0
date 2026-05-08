import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const m = s(), r = a ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.333 19.493-15-16.5a1.125 1.125 0 1 0-1.666 1.513l1.389 1.527a7.875 7.875 0 0 0 5.819 11.51v.832H3a1.125 1.125 0 1 0 0 2.25h15.32l.348.381a1.125 1.125 0 0 0 1.665-1.513M6.374 9.75c0-.649.11-1.292.33-1.903l1.21 1.332A4.125 4.125 0 0 0 12 13.875q.09.001.18-.005l1.21 1.33a5.625 5.625 0 0 1-7.015-5.45m6.75 8.625v-.832a8 8 0 0 0 1.914-.528l1.236 1.36zM8.333 3.97a1.125 1.125 0 0 1 .598-1.475 7.875 7.875 0 0 1 9.998 10.999 1.125 1.125 0 1 1-1.978-1.07 5.625 5.625 0 0 0-7.143-7.857 1.125 1.125 0 0 1-1.475-.597m7.792 5.746a1.126 1.126 0 0 1-1.116 1.134H15a1.125 1.125 0 0 1-1.125-1.116 1.875 1.875 0 0 0-1.682-1.85 1.125 1.125 0 1 1 .227-2.238 4.117 4.117 0 0 1 3.705 4.07" })
  ] });
});
h.displayName = "WebcamSlash";
export {
  h as WebcamSlash
};
//# sourceMappingURL=WebcamSlash.js.map
