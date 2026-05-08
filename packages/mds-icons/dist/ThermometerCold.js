import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const h = n(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...d
}, i) => {
  const m = v(), e = r ? l ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15 5.25a4.875 4.875 0 1 0-9.75 0v8.877a6 6 0 1 0 9.75 0zm-4.875 16.125a3.75 3.75 0 0 1-2.898-6.13c.176-.204.273-.465.273-.734V5.25a2.625 2.625 0 0 1 5.25 0v9.26c0 .263.092.517.26.72a3.75 3.75 0 0 1-2.885 6.145m12.95-13.732-1.38.449.854 1.173a1.125 1.125 0 0 1-1.82 1.323l-.854-1.174-.853 1.174a1.125 1.125 0 1 1-1.82-1.323l.852-1.173-1.38-.45a1.124 1.124 0 1 1 .695-2.139l1.381.448V4.5a1.125 1.125 0 1 1 2.25 0v1.451l1.38-.448a1.125 1.125 0 1 1 .696 2.14m-10.7 9.982A2.249 2.249 0 1 1 9 15.677v-3.302a1.125 1.125 0 1 1 2.25 0v3.302a2.25 2.25 0 0 1 1.125 1.948" })
  ] });
});
h.displayName = "ThermometerCold";
export {
  h as ThermometerCold
};
//# sourceMappingURL=ThermometerCold.js.map
