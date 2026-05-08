import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const t = m(), d = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M15 3.375a8.63 8.63 0 0 0-7.594 4.534 6.375 6.375 0 1 0-.656 12.716H15a8.625 8.625 0 1 0 0-17.25m0 15H6.75a4.126 4.126 0 0 1-.17-8.25A8.6 8.6 0 0 0 6.374 12a1.125 1.125 0 0 0 2.25 0A6.375 6.375 0 1 1 15 18.375m3.796-8.67a1.125 1.125 0 0 1 0 1.593l-4.5 4.5a1.124 1.124 0 0 1-1.594 0l-2.25-2.25a1.13 1.13 0 0 1 .366-1.838 1.13 1.13 0 0 1 1.228.244l1.454 1.452 3.704-3.705a1.125 1.125 0 0 1 1.592.003" })
  ] });
});
s.displayName = "CloudCheck";
export {
  s as CloudCheck
};
//# sourceMappingURL=CloudCheck.js.map
