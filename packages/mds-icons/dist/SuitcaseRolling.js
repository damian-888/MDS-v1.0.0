import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...l
}, d) => {
  const h = n(), o = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M10.875 9v7.5a1.125 1.125 0 1 1-2.25 0V9a1.125 1.125 0 0 1 2.25 0m2.25 0v7.5a1.125 1.125 0 1 0 2.25 0V9a1.125 1.125 0 1 0-2.25 0m6.75-3v13.5A1.875 1.875 0 0 1 18 21.375h-1.125V22.5a1.125 1.125 0 1 1-2.25 0v-1.125h-5.25V22.5a1.125 1.125 0 0 1-2.25 0v-1.125H6A1.875 1.875 0 0 1 4.125 19.5V6A1.875 1.875 0 0 1 6 4.125h1.875v-1.5A2.625 2.625 0 0 1 10.5 0h3a2.625 2.625 0 0 1 2.625 2.625v1.5H18A1.875 1.875 0 0 1 19.875 6m-9.75-1.875h3.75v-1.5a.375.375 0 0 0-.375-.375h-3a.375.375 0 0 0-.375.375zm7.5 2.25H6.375v12.75h11.25z" })
  ] });
});
m.displayName = "SuitcaseRolling";
export {
  m as SuitcaseRolling
};
//# sourceMappingURL=SuitcaseRolling.js.map
