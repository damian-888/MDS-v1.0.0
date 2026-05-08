import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...a
}, e) => {
  const t = w(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.046 9.797a1.125 1.125 0 0 1-1.594 0L16.875 7.22V18a1.125 1.125 0 0 1-1.125 1.126H2.25a1.125 1.125 0 1 1 0-2.25h12.375V7.22l-2.58 2.58a1.125 1.125 0 0 1-1.837-.366 1.13 1.13 0 0 1 .244-1.228l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.125 1.125 0 0 1 0 1.59" })
  ] });
});
s.displayName = "ArrowElbowRightUp";
export {
  s as ArrowElbowRightUp
};
//# sourceMappingURL=ArrowElbowRightUp.js.map
