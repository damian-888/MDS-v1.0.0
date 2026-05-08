import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = m(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.875 19.5a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.124 1.124 0 0 1-.9-1.8l6.745-8.993a2.626 2.626 0 1 0-4.5-2.63A1.125 1.125 0 1 1 7.533 6.3q.23-.527.574-.984a4.875 4.875 0 0 1 7.787 5.868l-5.394 7.19h5.25a1.125 1.125 0 0 1 1.125 1.126" })
  ] });
});
s.displayName = "NumberTwo";
export {
  s as NumberTwo
};
//# sourceMappingURL=NumberTwo.js.map
