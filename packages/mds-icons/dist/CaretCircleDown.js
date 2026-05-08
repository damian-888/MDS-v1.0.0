import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, a) => {
  const t = s(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m4.546-10.17a1.125 1.125 0 0 1 0 1.593l-3.75 3.75a1.125 1.125 0 0 1-1.594 0l-3.75-3.75a1.127 1.127 0 1 1 1.594-1.594L12 12.656l2.954-2.955a1.125 1.125 0 0 1 1.592.003" })
  ] });
});
c.displayName = "CaretCircleDown";
export {
  c as CaretCircleDown
};
//# sourceMappingURL=CaretCircleDown.js.map
