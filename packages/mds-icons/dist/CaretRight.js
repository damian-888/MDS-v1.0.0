import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const a = s(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m17.296 12.797-7.5 7.5a1.127 1.127 0 0 1-1.594-1.594l6.704-6.702-6.702-6.704a1.127 1.127 0 1 1 1.594-1.594l7.5 7.5a1.126 1.126 0 0 1-.002 1.594" })
  ] });
});
m.displayName = "CaretRight";
export {
  m as CaretRight
};
//# sourceMappingURL=CaretRight.js.map
