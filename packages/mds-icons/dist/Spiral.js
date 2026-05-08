import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = c(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.438 12.938a1.125 1.125 0 1 1-2.25 0 8.823 8.823 0 0 0-8.813-8.813A7.883 7.883 0 0 0 4.5 12a6.946 6.946 0 0 0 6.938 6.938 6.006 6.006 0 0 0 6-6 5.07 5.07 0 0 0-5.063-5.063A4.13 4.13 0 0 0 8.25 12a3.187 3.187 0 0 0 3.188 3.188 2.25 2.25 0 0 0 2.25-2.25 1.313 1.313 0 0 0-1.313-1.313c-.1 0-.194.04-.264.11a1.125 1.125 0 0 1-.486 2.14A1.875 1.875 0 0 1 9.75 12a2.625 2.625 0 0 1 2.625-2.625 3.563 3.563 0 0 1 3.563 3.563 4.504 4.504 0 0 1-4.5 4.5A5.444 5.444 0 0 1 6 12a6.38 6.38 0 0 1 6.375-6.375 7.32 7.32 0 0 1 7.313 7.313 8.26 8.26 0 0 1-8.25 8.25A9.2 9.2 0 0 1 2.25 12 10.136 10.136 0 0 1 12.375 1.875a11.075 11.075 0 0 1 11.063 11.063" })
  ] });
});
h.displayName = "Spiral";
export {
  h as Spiral
};
//# sourceMappingURL=Spiral.js.map
