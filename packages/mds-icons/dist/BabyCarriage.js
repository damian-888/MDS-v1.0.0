import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15 2.625h-.75A1.875 1.875 0 0 0 12.375 4.5v4.875H5.453A3.76 3.76 0 0 0 1.874 6.75a1.125 1.125 0 0 0 0 2.25 1.5 1.5 0 0 1 1.5 1.5 7.883 7.883 0 0 0 7.875 7.875H15a7.875 7.875 0 0 0 0-15.75m4.506 4.511c.497.663.84 1.427 1.006 2.239h-3.805zM15 4.875c.982 0 1.946.259 2.797.75l-3.172 2.531V4.875zm0 11.25h-3.75a5.634 5.634 0 0 1-5.512-4.5h14.774a5.635 5.635 0 0 1-5.512 4.5M10.125 21a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m9.75 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0" })
  ] });
});
s.displayName = "BabyCarriage";
export {
  s as BabyCarriage
};
//# sourceMappingURL=BabyCarriage.js.map
