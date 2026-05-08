import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, d) => {
  const t = s(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: i, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M5.625 5.625h5.25v12.75h-5.25zm12.75 12.75h-5.25V5.625h5.25z" })
  ] });
});
m.displayName = "SquareSplitHorizontal";
export {
  m as SquareSplitHorizontal
};
//# sourceMappingURL=SquareSplitHorizontal.js.map
