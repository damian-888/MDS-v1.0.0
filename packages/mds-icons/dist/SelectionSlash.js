import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: e = "1em",
  title: a,
  titleId: l,
  ...i
}, d) => {
  const h = v(), o = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M9.375 3.748A1.125 1.125 0 0 1 10.5 2.623h3a1.125 1.125 0 1 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125M13.5 19.123h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 0 0 0-2.25m6-16.5h-2.25a1.125 1.125 0 1 0 0 2.25h1.875v1.875a1.125 1.125 0 1 0 2.25 0v-2.25A1.875 1.875 0 0 0 19.5 2.623m.75 6.75a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 0 0 2.25 0v-3a1.125 1.125 0 0 0-1.125-1.125m-16.5 5.25a1.125 1.125 0 0 0 1.125-1.125v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 0 0 1.125 1.125m3 4.5H4.875v-1.875a1.125 1.125 0 1 0-2.25 0v2.25A1.875 1.875 0 0 0 4.5 21.373h2.25a1.125 1.125 0 0 0 0-2.25M5.332 2.992a1.125 1.125 0 1 0-1.664 1.513l15 16.5a1.125 1.125 0 0 0 1.665-1.513z" })
  ] });
});
m.displayName = "SelectionSlash";
export {
  m as SelectionSlash
};
//# sourceMappingURL=SelectionSlash.js.map
