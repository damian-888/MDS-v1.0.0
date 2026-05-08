import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: i = "1em",
  title: a,
  titleId: l,
  ...e
}, o) => {
  const h = c(), d = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: d, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.5 10.875h-1.948a8.645 8.645 0 0 0-7.427-7.427V1.5a1.125 1.125 0 1 0-2.25 0v1.948a8.645 8.645 0 0 0-7.427 7.427H1.5a1.125 1.125 0 1 0 0 2.25h1.948a8.645 8.645 0 0 0 7.427 7.427V22.5a1.125 1.125 0 1 0 2.25 0v-1.948a8.645 8.645 0 0 0 7.427-7.427H22.5a1.125 1.125 0 1 0 0-2.25m-10.5 7.5A6.375 6.375 0 1 1 18.375 12 6.38 6.38 0 0 1 12 18.375m0-10.5a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25m0 6a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "GpsFix";
export {
  s as GpsFix
};
//# sourceMappingURL=GpsFix.js.map
