import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...t
}, i) => {
  const l = c(), r = a ? d ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...t, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.085 4.78a10.116 10.116 0 0 0-17.21 7.218c0 4.193 2.588 7.711 6.75 9.182a3.376 3.376 0 0 0 4.5-3.182 1.125 1.125 0 0 1 1.125-1.125h4.332a3.355 3.355 0 0 0 3.29-2.625c.175-.766.26-1.55.253-2.335a10.05 10.05 0 0 0-3.04-7.133m.594 8.969a1.12 1.12 0 0 1-1.097.871H14.25a3.375 3.375 0 0 0-3.375 3.376 1.124 1.124 0 0 1-1.5 1.059c-1.56-.551-2.873-1.478-3.795-2.678a7.13 7.13 0 0 1-1.455-4.379 7.875 7.875 0 0 1 7.793-7.875H12a7.91 7.91 0 0 1 7.875 7.809 8 8 0 0 1-.196 1.82zM13.5 7.123a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4.125 2.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.25-5.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "Palette";
export {
  s as Palette
};
//# sourceMappingURL=Palette.js.map
