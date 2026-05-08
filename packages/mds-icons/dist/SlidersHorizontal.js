import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const t = s(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M3.75 8.625h2.818a3.375 3.375 0 0 0 6.364 0h7.318a1.125 1.125 0 1 0 0-2.25h-7.318a3.375 3.375 0 0 0-6.364 0H3.75a1.125 1.125 0 0 0 0 2.25m6-2.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m10.5 9h-1.318a3.375 3.375 0 0 0-6.364 0H3.75a1.125 1.125 0 1 0 0 2.25h8.818a3.375 3.375 0 0 0 6.364 0h1.318a1.125 1.125 0 1 0 0-2.25m-4.5 2.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
m.displayName = "SlidersHorizontal";
export {
  m as SlidersHorizontal
};
//# sourceMappingURL=SlidersHorizontal.js.map
