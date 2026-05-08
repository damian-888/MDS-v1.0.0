import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = m(), o = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.796-5.67a1.127 1.127 0 1 1-1.594 1.593l-4.077-4.08V13.5a1.125 1.125 0 1 1-2.25 0V9A1.125 1.125 0 0 1 9 7.875h4.5a1.125 1.125 0 0 1 0 2.25h-1.781z" })
  ] });
});
s.displayName = "ArrowCircleUpLeft";
export {
  s as ArrowCircleUpLeft
};
//# sourceMappingURL=ArrowCircleUpLeft.js.map
