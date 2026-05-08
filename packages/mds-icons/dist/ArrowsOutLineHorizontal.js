import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...e
}, d) => {
  const t = h(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.125 3.75v16.5a1.125 1.125 0 1 1-2.25 0V3.75a1.125 1.125 0 1 1 2.25 0M8.25 10.875H4.219l1.08-1.08a1.127 1.127 0 0 0-1.594-1.593l-3 3a1.125 1.125 0 0 0 0 1.594l3 3a1.127 1.127 0 1 0 1.594-1.594l-1.08-1.077h4.03a1.125 1.125 0 1 0 0-2.25m15.046.33-3-3a1.127 1.127 0 1 0-1.594 1.593l1.08 1.077H15.75a1.125 1.125 0 1 0 0 2.25h4.031l-1.08 1.08a1.127 1.127 0 1 0 1.594 1.593l3-3a1.124 1.124 0 0 0 0-1.594" })
  ] });
});
m.displayName = "ArrowsOutLineHorizontal";
export {
  m as ArrowsOutLineHorizontal
};
//# sourceMappingURL=ArrowsOutLineHorizontal.js.map
