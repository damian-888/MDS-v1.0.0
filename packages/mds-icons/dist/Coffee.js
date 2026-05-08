import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const f = h(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const t = m(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.875 7.125H3A1.125 1.125 0 0 0 1.875 8.25v4.5a9.4 9.4 0 0 0 2.506 6.375H3a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25h-1.38a9.5 9.5 0 0 0 1.874-3A4.125 4.125 0 0 0 24 12v-.75a4.13 4.13 0 0 0-4.125-4.125m-1.5 5.625a7.15 7.15 0 0 1-3.937 6.375H8.061a7.15 7.15 0 0 1-3.937-6.375V9.375h14.25zM21.75 12a1.875 1.875 0 0 1-1.178 1.74 9 9 0 0 0 .053-.99V9.533a1.88 1.88 0 0 1 1.125 1.717zM6.375 4.5V2.25a1.125 1.125 0 0 1 2.25 0V4.5a1.125 1.125 0 0 1-2.25 0m3.75 0V2.25a1.125 1.125 0 1 1 2.25 0V4.5a1.125 1.125 0 1 1-2.25 0m3.75 0V2.25a1.125 1.125 0 1 1 2.25 0V4.5a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
f.displayName = "Coffee";
export {
  f as Coffee
};
//# sourceMappingURL=Coffee.js.map
