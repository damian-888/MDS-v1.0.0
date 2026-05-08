import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.875 12v5.25a1.125 1.125 0 0 1-1.125 1.125H12a1.125 1.125 0 0 1-1.125-1.125V7.875h-7.5V12a1.125 1.125 0 0 1-2.25 0V6.75A1.125 1.125 0 0 1 2.25 5.625H12a1.125 1.125 0 0 1 1.125 1.125v9.375h7.5V12a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
v.displayName = "WaveSquare";
export {
  v as WaveSquare
};
//# sourceMappingURL=WaveSquare.js.map
