import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = m(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.046-8.67a1.125 1.125 0 0 1 0 1.593l-3.75 3.75a1.126 1.126 0 1 1-1.594-1.594L12.656 12 9.704 9.046a1.127 1.127 0 1 1 1.594-1.594z" })
  ] });
});
s.displayName = "CaretCircleRight";
export {
  s as CaretCircleRight
};
//# sourceMappingURL=CaretCircleRight.js.map
