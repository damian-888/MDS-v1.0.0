import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...d
}, t) => {
  const e = s(), o = l ? i ?? e : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M10.875 4.5v15a1.125 1.125 0 1 1-2.25 0v-6.375H4.969l1.08 1.08a1.127 1.127 0 1 1-1.594 1.593l-3-3a1.125 1.125 0 0 1 0-1.594l3-3a1.127 1.127 0 0 1 1.594 1.594l-1.08 1.077h3.656V4.5a1.125 1.125 0 0 1 2.25 0m11.67 6.704-3-3a1.127 1.127 0 1 0-1.593 1.594l1.08 1.077h-3.657V4.5a1.125 1.125 0 1 0-2.25 0v15a1.125 1.125 0 1 0 2.25 0v-6.375h3.656l-1.08 1.08a1.127 1.127 0 1 0 1.594 1.593l3-3a1.124 1.124 0 0 0 0-1.594" })
  ] });
});
v.displayName = "SplitHorizontal";
export {
  v as SplitHorizontal
};
//# sourceMappingURL=SplitHorizontal.js.map
