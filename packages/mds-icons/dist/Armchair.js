import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const c = n(({
  size: i = "1em",
  title: a,
  titleId: l,
  ...e
}, h) => {
  const o = v(), d = a ? l ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: d, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.625 7.362V6.75A4.13 4.13 0 0 0 16.5 2.625h-9A4.13 4.13 0 0 0 3.375 6.75v.612a4.875 4.875 0 0 0 0 9.281v2.107a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-2.108a4.875 4.875 0 0 0 0-9.282zM7.5 4.875h9a1.875 1.875 0 0 1 1.875 1.875v.433a4.88 4.88 0 0 0-4.11 4.442H9.735a4.88 4.88 0 0 0-4.11-4.442V6.75A1.875 1.875 0 0 1 7.5 4.875m11.888 9.737a1.124 1.124 0 0 0-1.013 1.12v2.643H5.625v-2.644a1.125 1.125 0 0 0-1.014-1.12A2.625 2.625 0 1 1 7.5 12v3.375a1.125 1.125 0 1 0 2.25 0v-1.5h4.5v1.5a1.125 1.125 0 1 0 2.25 0V12a2.625 2.625 0 1 1 2.888 2.612" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "Armchair";
export {
  c as Armchair
};
//# sourceMappingURL=Armchair.js.map
