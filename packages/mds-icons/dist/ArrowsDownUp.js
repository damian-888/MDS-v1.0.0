import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const n = w(), l = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.296 15.704a1.124 1.124 0 0 1 0 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.128 1.128 0 0 1 1.594-1.594l1.079 1.077V4.5a1.125 1.125 0 0 1 2.25 0V16.78l1.079-1.08a1.124 1.124 0 0 1 1.592.003m9-9-3-3a1.124 1.124 0 0 0-1.594 0l-3 3a1.127 1.127 0 0 0 1.594 1.594l1.079-1.08V19.5a1.125 1.125 0 0 0 2.25 0V7.219l1.079 1.08a1.127 1.127 0 0 0 1.594-1.594z" })
  ] });
});
m.displayName = "ArrowsDownUp";
export {
  m as ArrowsDownUp
};
//# sourceMappingURL=ArrowsDownUp.js.map
