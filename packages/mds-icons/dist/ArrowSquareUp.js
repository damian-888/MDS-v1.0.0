import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, i) => {
  const t = m(), a = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-10.92-7.08a1.125 1.125 0 0 1 0-1.593l3-3a1.125 1.125 0 0 1 1.593 0l3 3a1.127 1.127 0 1 1-1.594 1.594l-1.079-1.077v4.781a1.125 1.125 0 1 1-2.25 0v-4.781l-1.08 1.08a1.124 1.124 0 0 1-1.59-.003" })
  ] });
});
s.displayName = "ArrowSquareUp";
export {
  s as ArrowSquareUp
};
//# sourceMappingURL=ArrowSquareUp.js.map
