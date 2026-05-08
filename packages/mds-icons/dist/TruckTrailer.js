import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const h = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const m = v(), e = r ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 8.78a5.633 5.633 0 0 0-5.625-5.405A1.875 1.875 0 0 0 13.5 5.25v10.875H12V6.75a1.125 1.125 0 0 0-1.125-1.125h-9A1.875 1.875 0 0 0 0 7.5v9.75a3.375 3.375 0 0 0 5.625 2.512 3.375 3.375 0 0 0 5.432-1.387h6.386A3.376 3.376 0 0 0 24 17.25v-4.5a4.13 4.13 0 0 0-3-3.97m-5.25-3.134a3.38 3.38 0 0 1 3 3.354v.75a1.125 1.125 0 0 0 1.125 1.125 1.875 1.875 0 0 1 1.875 1.875v1.318a3.375 3.375 0 0 0-4.307 2.057H15.75zm-6 2.229v6.57a3.37 3.37 0 0 0-4.125.293 3.37 3.37 0 0 0-3.375-.67V7.875zm-6.375 10.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m4.5 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m12.75 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
h.displayName = "TruckTrailer";
export {
  h as TruckTrailer
};
//# sourceMappingURL=TruckTrailer.js.map
