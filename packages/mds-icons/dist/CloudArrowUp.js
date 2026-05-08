import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...e
}, i) => {
  const t = h(), d = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: d, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18.421 14.204a1.127 1.127 0 0 1-1.594 1.594l-1.077-1.08V19.5a1.125 1.125 0 1 1-2.25 0v-4.781l-1.079 1.08a1.127 1.127 0 1 1-1.594-1.594l3-3a1.124 1.124 0 0 1 1.594 0zM15 3.375A8.63 8.63 0 0 0 7.406 7.91a6.375 6.375 0 1 0-.656 12.715h2.625a1.125 1.125 0 1 0 0-2.25H6.75a4.125 4.125 0 0 1-.17-8.245A8.6 8.6 0 0 0 6.375 12a1.125 1.125 0 1 0 2.25 0 6.375 6.375 0 1 1 12.431 1.996 1.124 1.124 0 1 0 2.138.704A8.63 8.63 0 0 0 15 3.375" })
  ] });
});
w.displayName = "CloudArrowUp";
export {
  w as CloudArrowUp
};
//# sourceMappingURL=CloudArrowUp.js.map
