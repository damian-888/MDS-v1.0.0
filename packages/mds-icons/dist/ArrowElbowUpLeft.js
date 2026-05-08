import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const a = s(), l = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.125 7.5V21a1.125 1.125 0 0 1-2.25 0V8.623H7.219l2.58 2.58a1.127 1.127 0 0 1-1.594 1.593l-4.5-4.5a1.125 1.125 0 0 1 0-1.594l4.5-4.5a1.127 1.127 0 0 1 1.594 1.594l-2.58 2.577h10.78A1.125 1.125 0 0 1 19.126 7.5" })
  ] });
});
h.displayName = "ArrowElbowUpLeft";
export {
  h as ArrowElbowUpLeft
};
//# sourceMappingURL=ArrowElbowUpLeft.js.map
