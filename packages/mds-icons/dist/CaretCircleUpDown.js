import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...i
}, d) => {
  const t = s(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.796-10.92a1.127 1.127 0 1 1-1.594 1.593L12 8.344l-2.204 2.205a1.127 1.127 0 1 1-1.594-1.594l3-3a1.125 1.125 0 0 1 1.594 0zm0 4.5a1.125 1.125 0 0 1 0 1.593l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594L12 15.656l2.204-2.205a1.124 1.124 0 0 1 1.592.003" })
  ] });
});
c.displayName = "CaretCircleUpDown";
export {
  c as CaretCircleUpDown
};
//# sourceMappingURL=CaretCircleUpDown.js.map
