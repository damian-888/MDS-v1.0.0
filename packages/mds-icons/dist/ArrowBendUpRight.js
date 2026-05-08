import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const a = s(), d = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.796 10.546-4.5 4.5a1.127 1.127 0 0 1-1.594-1.594l2.58-2.577H12a7.884 7.884 0 0 0-7.875 7.875 1.125 1.125 0 0 1-2.25 0A10.136 10.136 0 0 1 12 8.625h6.281l-2.577-2.58a1.127 1.127 0 1 1 1.594-1.594l4.5 4.5a1.125 1.125 0 0 1-.002 1.595" })
  ] });
});
m.displayName = "ArrowBendUpRight";
export {
  m as ArrowBendUpRight
};
//# sourceMappingURL=ArrowBendUpRight.js.map
