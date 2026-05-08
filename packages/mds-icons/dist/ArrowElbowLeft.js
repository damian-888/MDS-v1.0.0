import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const m = w(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const a = s(), e = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m22.546 9.796-9 9a1.125 1.125 0 0 1-1.594 0l-8.577-8.577v4.031a1.125 1.125 0 0 1-2.25 0V7.5A1.125 1.125 0 0 1 2.25 6.375H9a1.125 1.125 0 0 1 0 2.25H4.969l7.781 7.781 8.204-8.205a1.127 1.127 0 1 1 1.594 1.594z" })
  ] });
});
m.displayName = "ArrowElbowLeft";
export {
  m as ArrowElbowLeft
};
//# sourceMappingURL=ArrowElbowLeft.js.map
