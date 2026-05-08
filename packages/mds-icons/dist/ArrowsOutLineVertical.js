import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = c(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12M9.795 5.295l1.08-1.076v4.03a1.125 1.125 0 1 0 2.25 0V4.22l1.08 1.079a1.127 1.127 0 1 0 1.593-1.594l-3-3a1.125 1.125 0 0 0-1.594 0l-3 3a1.127 1.127 0 0 0 1.594 1.594zM14.203 18.7l-1.077 1.08V15.75a1.125 1.125 0 1 0-2.25 0v4.031l-1.08-1.08a1.127 1.127 0 0 0-1.593 1.594l3 3a1.123 1.123 0 0 0 1.594 0l3-3a1.127 1.127 0 1 0-1.594-1.594" })
  ] });
});
h.displayName = "ArrowsOutLineVertical";
export {
  h as ArrowsOutLineVertical
};
//# sourceMappingURL=ArrowsOutLineVertical.js.map
