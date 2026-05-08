import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const n = h(), o = r ? d ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.796 14.204a1.127 1.127 0 1 1-1.594 1.594l-6-6a1.127 1.127 0 0 1 1.594-1.594zM22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
m.displayName = "ProhibitInset";
export {
  m as ProhibitInset
};
//# sourceMappingURL=ProhibitInset.js.map
