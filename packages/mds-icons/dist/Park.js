import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...e
}, h) => {
  const i = n(), o = a ? l ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 17.624h-2.625v-1.5H21a1.125 1.125 0 0 0 1.091-1.397l-3-12a1.125 1.125 0 0 0-2.182 0l-3 12A1.125 1.125 0 0 0 15 16.124h1.875v1.5h-6V16.5a1.125 1.125 0 1 0 0-2.25v-1.125a1.125 1.125 0 1 0 0-2.25H3a1.125 1.125 0 1 0 0 2.25v1.125a1.125 1.125 0 1 0 0 2.25v1.125h-.75a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 1 0 0-2.25M18 7.638l1.56 6.236h-3.12zM5.25 13.124h3.375v1.125H5.25zm0 3.375h3.375v1.125H5.25zm5.625-7.125a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.501.75.75 0 0 1 0-1.5" })
  ] });
});
m.displayName = "Park";
export {
  m as Park
};
//# sourceMappingURL=Park.js.map
