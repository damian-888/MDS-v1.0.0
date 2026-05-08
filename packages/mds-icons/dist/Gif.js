import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const t = h(), i = a ? d ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.875 6.75v10.5a1.125 1.125 0 1 1-2.25 0V6.75a1.125 1.125 0 1 1 2.25 0m7.875 1.125a1.125 1.125 0 0 0 0-2.25H16.5a1.125 1.125 0 0 0-1.125 1.125v10.5a1.125 1.125 0 1 0 2.25 0v-4.125H21a1.125 1.125 0 1 0 0-2.25h-3.375v-3zm-12.75 3H6.75a1.125 1.125 0 1 0 0 2.25h1.125v1.125a1.875 1.875 0 1 1-3.75 0v-4.5A1.875 1.875 0 0 1 6 7.875c.883 0 1.704.605 1.91 1.406a1.125 1.125 0 0 0 2.18-.562C9.627 6.926 7.907 5.625 6 5.625A4.13 4.13 0 0 0 1.875 9.75v4.5a4.125 4.125 0 0 0 8.25 0V12A1.125 1.125 0 0 0 9 10.875" })
  ] });
});
m.displayName = "Gif";
export {
  m as Gif
};
//# sourceMappingURL=Gif.js.map
