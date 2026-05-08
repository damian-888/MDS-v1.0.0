import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...e
}, i) => {
  const t = s(), o = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.125 12a4.875 4.875 0 1 0 9.75 0 4.875 4.875 0 0 0-9.75 0m7.5 0a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m6.525-6.128L12.9 1.356a1.87 1.87 0 0 0-1.8 0L2.85 5.872a1.88 1.88 0 0 0-.975 1.646v8.964a1.88 1.88 0 0 0 .975 1.645l8.25 4.516a1.87 1.87 0 0 0 1.8 0l8.25-4.516a1.87 1.87 0 0 0 .975-1.645V7.518a1.87 1.87 0 0 0-.975-1.646M19.875 16.26 12 20.572 4.125 16.26V7.74L12 3.427l7.875 4.313z" })
  ] });
});
h.displayName = "Nut";
export {
  h as Nut
};
//# sourceMappingURL=Nut.js.map
