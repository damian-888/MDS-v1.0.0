import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const t = m(), i = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.875 21.749a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5a1.125 1.125 0 0 1 1.125 1.125m3.75-12a8.58 8.58 0 0 1-3.297 6.782 1.15 1.15 0 0 0-.453.905v.188A1.875 1.875 0 0 1 15 19.499H9a1.875 1.875 0 0 1-1.875-1.875v-.188a1.13 1.13 0 0 0-.44-.892 8.59 8.59 0 0 1-3.31-6.747c-.025-4.671 3.75-8.56 8.418-8.673a8.625 8.625 0 0 1 8.832 8.625m-2.25 0a6.374 6.374 0 0 0-6.53-6.375c-3.449.082-6.239 2.957-6.22 6.41a6.35 6.35 0 0 0 2.447 4.987 3.36 3.36 0 0 1 1.303 2.478h5.26a3.39 3.39 0 0 1 1.303-2.486 6.35 6.35 0 0 0 2.437-5.014m-1.881-.5a4.55 4.55 0 0 0-2.992-3.75 1.125 1.125 0 0 0-.75 2.121 2.28 2.28 0 0 1 1.508 1.875 1.126 1.126 0 0 0 2.237-.247z" })
  ] });
});
s.displayName = "Lightbulb";
export {
  s as Lightbulb
};
//# sourceMappingURL=Lightbulb.js.map
