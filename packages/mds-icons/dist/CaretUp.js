import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...a
}, i) => {
  const t = h(), o = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.296 15.796a1.124 1.124 0 0 1-1.594 0L12 9.094l-6.704 6.702a1.127 1.127 0 1 1-1.594-1.594l7.5-7.5a1.127 1.127 0 0 1 1.594 0l7.5 7.5a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
m.displayName = "CaretUp";
export {
  m as CaretUp
};
//# sourceMappingURL=CaretUp.js.map
