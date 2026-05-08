import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const v = n(({
  size: i = "1em",
  title: l,
  titleId: d,
  ...e
}, o) => {
  const h = c(), r = l ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.625 13.876v3.375c0 1.298-.153 2.486-.43 3.345a1.125 1.125 0 0 1-2.14-.69c.2-.623.32-1.616.32-2.655v-3.375a.75.75 0 1 0-1.5 0v.375a1.125 1.125 0 1 1-2.25 0v-1.875a.75.75 0 1 0-1.5 0v1.125a1.125 1.125 0 1 1-2.25 0V7.126a.75.75 0 0 0-1.5 0v10.125a1.125 1.125 0 0 1-2.08.594l-1.75-2.812-.02-.032a.751.751 0 0 0-1.306.742l2.369 3.927A1.125 1.125 0 1 1 4.66 20.83l-2.372-3.937-.012-.019a3 3 0 0 1 4.849-3.484V7.126a3 3 0 1 1 6 0V9.47a3 3 0 0 1 3.448 1.593 3 3 0 0 1 4.052 2.813m3.045-9.42-3-3a1.126 1.126 0 1 0-1.594 1.593l1.08 1.077h-4.031a1.125 1.125 0 0 0 0 2.25h4.031l-1.077 1.08a1.127 1.127 0 1 0 1.594 1.593l3-3a1.127 1.127 0 0 0-.003-1.594" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "HandSwipeRight";
export {
  v as HandSwipeRight
};
//# sourceMappingURL=HandSwipeRight.js.map
