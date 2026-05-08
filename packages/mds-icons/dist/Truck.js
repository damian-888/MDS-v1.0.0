import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const l = n(), h = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.92 10.832 22.606 7.55a1.86 1.86 0 0 0-1.74-1.176h-2.492V6a1.125 1.125 0 0 0-1.125-1.125H3A1.875 1.875 0 0 0 1.125 6.75v10.5A1.875 1.875 0 0 0 3 19.125h1.318a3.375 3.375 0 0 0 6.364 0h4.136a3.375 3.375 0 0 0 6.364 0h.943A1.875 1.875 0 0 0 24 17.25v-6a2 2 0 0 0-.08-.418m-5.545-2.207h2.239l.6 1.5h-2.839zM7.5 19.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m8.625-3.93a3.4 3.4 0 0 0-1.307 1.68h-4.136a3.375 3.375 0 0 0-6.364 0h-.943v-3.75h12.75zm0-4.32H3.375v-3.75h12.75zM18 19.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.75-2.25h-.568a3.38 3.38 0 0 0-2.807-2.228v-2.272h3.375z" })
  ] });
});
v.displayName = "Truck";
export {
  v as Truck
};
//# sourceMappingURL=Truck.js.map
