import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, t) => {
  const a = w(), l = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m21.046 8.297-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l2.58-2.577H7.874V21a1.125 1.125 0 1 1-2.25 0V7.5A1.125 1.125 0 0 1 6.75 6.376h10.781l-2.577-2.58a1.125 1.125 0 0 1 .797-1.923 1.13 1.13 0 0 1 .797.33l4.5 4.5a1.126 1.126 0 0 1-.002 1.594" })
  ] });
});
s.displayName = "ArrowElbowUpRight";
export {
  s as ArrowElbowUpRight
};
//# sourceMappingURL=ArrowElbowUpRight.js.map
