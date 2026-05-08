import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = s(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.296 11.204a1.125 1.125 0 0 1 0 1.594l-6.75 6.75a1.127 1.127 0 1 1-1.594-1.594l4.83-4.829H3a1.125 1.125 0 1 1 0-2.25h10.781l-4.827-4.83a1.127 1.127 0 0 1 1.594-1.593zm2.954-8.579a1.125 1.125 0 0 0-1.125 1.125v16.5a1.125 1.125 0 1 0 2.25 0V3.75a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
m.displayName = "ArrowLineRight";
export {
  m as ArrowLineRight
};
//# sourceMappingURL=ArrowLineRight.js.map
