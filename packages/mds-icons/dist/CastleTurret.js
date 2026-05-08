import { jsxs as v, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const i = n(), e = r ? o ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.25 19.875h-1.125v-8.906l.95-.95a1.86 1.86 0 0 0 .55-1.33V4.5a1.875 1.875 0 0 0-1.875-1.875H5.25A1.875 1.875 0 0 0 3.375 4.5v4.19a1.86 1.86 0 0 0 .55 1.325l.95.954v8.906H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25M6.796 9.705 5.625 8.53V4.875H8.25v2.25a1.125 1.125 0 0 0 2.25 0v-2.25h3v2.25a1.125 1.125 0 1 0 2.25 0v-2.25h2.625v3.656l-1.17 1.17a1.13 1.13 0 0 0-.33.799v9.375h-1.5V15.75a3.375 3.375 0 0 0-6.75 0v4.125h-1.5V10.5a1.13 1.13 0 0 0-.33-.796m6.329 10.17h-2.25V15.75a1.125 1.125 0 1 1 2.25 0z" })
  ] });
});
s.displayName = "CastleTurret";
export {
  s as CastleTurret
};
//# sourceMappingURL=CastleTurret.js.map
