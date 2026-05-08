import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: h = "1em",
  title: r,
  titleId: a,
  ...d
}, v) => {
  const e = n(), i = r ? a ?? e : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: v, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 12h-2.625v-1.875H18a1.875 1.875 0 0 0 1.875-1.875v-4.5A1.875 1.875 0 0 0 18 1.875H6A1.875 1.875 0 0 0 4.125 3.75v4.5A1.875 1.875 0 0 0 6 10.125h1.125V12H4.5a1.875 1.875 0 0 0-1.875 1.875v2.25A1.875 1.875 0 0 0 4.5 18h.75v3a1.125 1.125 0 0 0 2.25 0v-3h9v3a1.125 1.125 0 1 0 2.25 0v-3h.75a1.875 1.875 0 0 0 1.875-1.875v-2.25A1.875 1.875 0 0 0 19.5 12M6.375 4.125h11.25v3.75H6.375zm3 6h5.25V12h-5.25zm9.75 5.625H4.875v-1.5h14.25z" })
  ] });
});
m.displayName = "Chair";
export {
  m as Chair
};
//# sourceMappingURL=Chair.js.map
