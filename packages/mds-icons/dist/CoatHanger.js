import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = s(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: e, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m22.875 15.75-9-6.75 1.8-1.35a1.13 1.13 0 0 0 .45-.9 4.125 4.125 0 0 0-8.218-.514 1.126 1.126 0 0 0 2.233.281 1.875 1.875 0 0 1 3.665-.273l-2.461 1.841-.04.03L1.124 15.75a1.875 1.875 0 0 0 1.125 3.375h19.5a1.875 1.875 0 0 0 1.125-3.375m-19.5 1.125L12 10.406l8.625 6.469z" })
  ] });
});
h.displayName = "CoatHanger";
export {
  h as CoatHanger
};
//# sourceMappingURL=CoatHanger.js.map
