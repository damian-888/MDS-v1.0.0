import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const A = l(({
  size: h = "1em",
  title: a,
  titleId: d,
  ...e
}, o) => {
  const m = n(), r = a ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 19.125h-.375v-12A1.125 1.125 0 0 0 21 6h-3.375V3.75A1.125 1.125 0 0 0 16.5 2.625h-9A1.125 1.125 0 0 0 6.375 3.75v5.625H3A1.125 1.125 0 0 0 1.875 10.5v8.625H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-18.375-7.5H7.5A1.125 1.125 0 0 0 8.625 10.5V4.875h6.75v2.25A1.125 1.125 0 0 0 16.5 8.25h3.375v10.875h-6V16.5a.375.375 0 0 0-.375-.375h-3a.375.375 0 0 0-.375.375v2.625h-6zm6-4.5A1.125 1.125 0 0 1 11.25 6h1.5a1.125 1.125 0 0 1 0 2.25h-1.5a1.125 1.125 0 0 1-1.125-1.125m0 3.375a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 0 2.25h-1.5a1.125 1.125 0 0 1-1.125-1.125m4.875 0a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 0 2.25h-1.5A1.125 1.125 0 0 1 15 10.5m-6 3.375A1.125 1.125 0 0 1 7.875 15h-1.5a1.125 1.125 0 1 1 0-2.25h1.5A1.125 1.125 0 0 1 9 13.875m1.125 0a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 1 1 0 2.25h-1.5a1.125 1.125 0 0 1-1.125-1.125m4.875 0a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 1 1 0 2.25h-1.5A1.125 1.125 0 0 1 15 13.875" })
  ] });
});
A.displayName = "BuildingApartment";
export {
  A as BuildingApartment
};
//# sourceMappingURL=BuildingApartment.js.map
