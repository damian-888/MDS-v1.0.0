import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const w = s(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const t = c(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.796 17.954a1.125 1.125 0 0 1 0 1.594l-3 3a1.124 1.124 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.079 1.077V4.969l-1.08 1.077a1.127 1.127 0 1 1-1.593-1.594l3-3a1.127 1.127 0 0 1 1.594 0l3 3a1.127 1.127 0 0 1-1.594 1.594l-1.077-1.077V19.03l1.079-1.08a1.126 1.126 0 0 1 1.592.003" })
  ] });
});
w.displayName = "ArrowsVertical";
export {
  w as ArrowsVertical
};
//# sourceMappingURL=ArrowsVertical.js.map
