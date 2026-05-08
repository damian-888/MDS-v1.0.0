import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const w = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...i
}, t) => {
  const a = h(), o = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.125 18.75a1.125 1.125 0 0 1-2.25 0A7.883 7.883 0 0 0 12 10.873H5.719l2.58 2.58a1.127 1.127 0 0 1-1.594 1.593l-4.5-4.5a1.124 1.124 0 0 1 0-1.594l4.5-4.5a1.127 1.127 0 0 1 1.594 1.594l-2.58 2.577h6.28A10.136 10.136 0 0 1 22.126 18.75" })
  ] });
});
w.displayName = "ArrowBendUpLeft";
export {
  w as ArrowBendUpLeft
};
//# sourceMappingURL=ArrowBendUpLeft.js.map
