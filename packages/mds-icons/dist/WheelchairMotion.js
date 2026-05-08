import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, d) => {
  const t = m(), a = o ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": a, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.5 7.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m2.745 9.037a1.12 1.12 0 0 1 .234.937l-1.5 7.5a1.125 1.125 0 0 1-1.73.711 1.125 1.125 0 0 1-.478-1.155l1.232-6.155h-5.378a1.126 1.126 0 0 1-.975-1.687l1.68-2.926a7.14 7.14 0 0 0-7.488.99 1.125 1.125 0 0 1-1.433-1.734 9.375 9.375 0 0 1 11.08-.626 1.125 1.125 0 0 1 .361 1.5L13.57 12h4.805a1.13 1.13 0 0 1 .87.412m-3.888 4.173a6 6 0 1 1-6.903-6.39 1.125 1.125 0 1 1 .343 2.224 3.75 3.75 0 1 0 4.317 3.996 1.125 1.125 0 1 1 2.243.17" })
  ] });
});
s.displayName = "WheelchairMotion";
export {
  s as WheelchairMotion
};
//# sourceMappingURL=WheelchairMotion.js.map
