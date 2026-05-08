import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as n } from "react";
const h = c(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const m = n(), e = r ? d ?? m : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15 5.25a4.875 4.875 0 1 0-9.75 0v8.877a6 6 0 1 0 9.75 0zm-4.875 16.125a3.75 3.75 0 0 1-2.898-6.13c.176-.204.273-.465.273-.734V5.25a2.625 2.625 0 0 1 5.25 0v9.26c0 .263.092.517.26.72a3.75 3.75 0 0 1-2.885 6.145m2.25-3.75A2.249 2.249 0 1 1 9 15.677V5.25a1.125 1.125 0 0 1 2.25 0v10.427a2.25 2.25 0 0 1 1.125 1.948m3.932-9.844a1.125 1.125 0 0 1 .329-1.556c1.577-1.031 2.842-.487 3.68-.13.759.324 1.025.41 1.57.054a1.125 1.125 0 0 1 1.228 1.885c-.681.44-1.304.591-1.86.591-.73 0-1.344-.262-1.82-.469-.759-.324-1.025-.41-1.57-.054a1.125 1.125 0 0 1-1.557-.32m7.135 2.447a1.125 1.125 0 0 1-.328 1.556c-.681.444-1.304.596-1.86.596-.73 0-1.344-.263-1.82-.47-.759-.323-1.025-.409-1.57-.053a1.125 1.125 0 0 1-1.228-1.886c1.577-1.031 2.842-.487 3.68-.13.759.324 1.025.41 1.57.054a1.125 1.125 0 0 1 1.556.328z" })
  ] });
});
h.displayName = "ThermometerHot";
export {
  h as ThermometerHot
};
//# sourceMappingURL=ThermometerHot.js.map
