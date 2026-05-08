import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...e
}, o) => {
  const h = s(), d = l ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": d, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.625 12a1.125 1.125 0 0 1-1.125 1.125h-1.95a8.6 8.6 0 0 1-.333 1.5 1.125 1.125 0 1 1-2.143-.685 6.38 6.38 0 0 0-7.432-8.17 1.125 1.125 0 1 1-.476-2.2q.35-.077.709-.122V1.5a1.125 1.125 0 1 1 2.25 0v1.948a8.645 8.645 0 0 1 7.427 7.427H22.5A1.125 1.125 0 0 1 23.625 12m-3.293 7.493a1.126 1.126 0 1 1-1.665 1.514l-1.748-1.923a8.6 8.6 0 0 1-3.794 1.466v1.95a1.125 1.125 0 1 1-2.25 0v-1.948a8.645 8.645 0 0 1-7.427-7.427H1.5a1.125 1.125 0 1 1 0-2.25h1.95a8.66 8.66 0 0 1 1.968-4.446l-1.75-1.922a1.125 1.125 0 1 1 1.664-1.514l12.545 13.799zM15.389 17.4 6.951 8.119a6.375 6.375 0 0 0 8.437 9.281" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "GpsSlash";
export {
  c as GpsSlash
};
//# sourceMappingURL=GpsSlash.js.map
