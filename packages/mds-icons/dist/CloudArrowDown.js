import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const n = s(), l = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: l, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.046 15.704a1.125 1.125 0 0 1 0 1.594l-3 3a1.127 1.127 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.079 1.077V12a1.125 1.125 0 1 1 2.25 0v4.781l1.08-1.08a1.124 1.124 0 0 1 1.591.003M15 3.375A8.63 8.63 0 0 0 7.406 7.91a6.375 6.375 0 1 0-.656 12.715h1.125a1.125 1.125 0 1 0 0-2.25H6.75a4.125 4.125 0 0 1-.17-8.245A8.6 8.6 0 0 0 6.375 12a1.125 1.125 0 1 0 2.25 0 6.375 6.375 0 1 1 12.75 0 6.3 6.3 0 0 1-.68 2.868 1.125 1.125 0 1 0 2.008 1.014A8.54 8.54 0 0 0 23.626 12 8.635 8.635 0 0 0 15 3.375" })
  ] });
});
h.displayName = "CloudArrowDown";
export {
  h as CloudArrowDown
};
//# sourceMappingURL=CloudArrowDown.js.map
