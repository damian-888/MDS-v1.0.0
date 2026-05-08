import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as f } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...t
}, i) => {
  const a = f(), o = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M15.796 18.703a1.127 1.127 0 1 1-1.594 1.594l-7.5-7.5a1.124 1.124 0 0 1 0-1.594l7.5-7.5a1.127 1.127 0 1 1 1.594 1.594l-6.702 6.702z" })
  ] });
});
h.displayName = "CaretLeft";
export {
  h as CaretLeft
};
//# sourceMappingURL=CaretLeft.js.map
