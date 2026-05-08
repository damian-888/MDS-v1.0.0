import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const h = n(), e = a ? d ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M6.702 5.677a1.125 1.125 0 0 0-2.156 0L1.17 16.927a1.125 1.125 0 0 0 1.079 1.448H9a1.124 1.124 0 0 0 1.077-1.448zm-2.94 10.448 1.863-6.21 1.862 6.21zm16.113-9.187a5.062 5.062 0 1 0-10.125 0 5.062 5.062 0 0 0 10.125 0m-7.875 0a2.813 2.813 0 1 1 5.625 0 2.813 2.813 0 0 1-5.625 0m9 6.562h-8.25a1.125 1.125 0 0 0-1.125 1.125V19.5a1.125 1.125 0 0 0 1.125 1.125H21a1.125 1.125 0 0 0 1.125-1.125v-4.875A1.125 1.125 0 0 0 21 13.5m-1.125 4.875h-6V15.75h6z" })
  ] });
});
s.displayName = "Shapes";
export {
  s as Shapes
};
//# sourceMappingURL=Shapes.js.map
