import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, e) => {
  const t = m(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m22.546 12.797-3 3a1.127 1.127 0 1 1-1.594-1.594l1.08-1.077H4.968l1.08 1.079a1.127 1.127 0 1 1-1.594 1.594l-3-3a1.125 1.125 0 0 1 0-1.594l3-3a1.127 1.127 0 1 1 1.594 1.594l-1.08 1.077H19.03l-1.08-1.08a1.125 1.125 0 0 1 .797-1.923 1.13 1.13 0 0 1 .797.33l3 3a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
w.displayName = "ArrowsHorizontal";
export {
  w as ArrowsHorizontal
};
//# sourceMappingURL=ArrowsHorizontal.js.map
