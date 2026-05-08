import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, m) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: m, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.875 4.875a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M15 5.25a4.875 4.875 0 1 0-9.75 0v8.877a6 6 0 1 0 9.75 0zm-4.875 16.125a3.75 3.75 0 0 1-2.898-6.13c.176-.204.273-.465.273-.734V5.25a2.625 2.625 0 0 1 5.25 0v9.26c0 .263.092.517.26.72a3.75 3.75 0 0 1-2.885 6.145m2.25-3.75A2.249 2.249 0 1 1 9 15.677V8.625a1.125 1.125 0 0 1 2.25 0v7.052a2.25 2.25 0 0 1 1.125 1.948" })
  ] });
});
s.displayName = "Thermometer";
export {
  s as Thermometer
};
//# sourceMappingURL=Thermometer.js.map
