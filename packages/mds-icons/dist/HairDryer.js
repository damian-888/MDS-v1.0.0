import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, o) => {
  const h = c(), i = l ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": i, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18.75 8.25a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3 .75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.224 10.526 2.93-6.446A6.376 6.376 0 0 0 15.75 1.875q-.095 0-.187.015L2.691 4.036a1.87 1.87 0 0 0-1.567 1.85v4.728a1.87 1.87 0 0 0 1.567 1.855l8.933 1.484v4.797a1.876 1.876 0 0 0 1.565 1.847A4.13 4.13 0 0 0 17.25 24h1.5a1.125 1.125 0 1 0 0-2.25h-1.5a1.88 1.88 0 0 1-1.726-1.143 1.88 1.88 0 0 0 1.45-1.08M3.375 6.203l12.462-2.078a4.125 4.125 0 0 1 0 8.25L3.375 10.297zm12.188 8.407q.092.015.187.015.51 0 1.017-.082l-1.742 3.832h-1.15v-4.047z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "HairDryer";
export {
  m as HairDryer
};
//# sourceMappingURL=HairDryer.js.map
