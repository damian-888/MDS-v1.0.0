import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...l
}, i) => {
  const h = n(), e = a ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 14.625a1.125 1.125 0 0 1-1.125-1.125V6a5.625 5.625 0 1 0-11.25 0v.375h-1.45a1.88 1.88 0 0 0-1.608.91l-1.925 3.207a1.9 1.9 0 0 0-.267.966v8.792a1.875 1.875 0 0 0 1.875 1.875h9a1.875 1.875 0 0 0 1.875-1.875v-8.792c0-.34-.092-.673-.267-.965l-1.925-3.208a1.89 1.89 0 0 0-1.608-.91h-1.45V6a3.375 3.375 0 0 1 6.75 0v7.5A3.375 3.375 0 0 0 21 16.875a1.125 1.125 0 1 0 0-2.25m-8.887-6 1.762 2.936v8.314h-8.25v-8.314l1.762-2.936h1.238v4.125a1.125 1.125 0 0 0 2.25 0V8.625z" })
  ] });
});
s.displayName = "TeaBag";
export {
  s as TeaBag
};
//# sourceMappingURL=TeaBag.js.map
