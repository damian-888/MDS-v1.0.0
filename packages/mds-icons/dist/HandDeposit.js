import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const v = s(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const t = h(), r = a ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M11.25 13.127a1.125 1.125 0 0 1-1.125-1.125V4.22l-.704.704A1.127 1.127 0 0 1 7.827 3.33L10.452.706a1.125 1.125 0 0 1 1.594 0L14.67 3.33a1.127 1.127 0 1 1-1.594 1.594l-.702-.704V12a1.125 1.125 0 0 1-1.125 1.126m7.125-1.733V9.002A1.875 1.875 0 0 0 16.5 7.127h-1.125a1.125 1.125 0 1 0 0 2.25h.75v6.403a3 3 0 0 0-4.065 4.151l2.087 3.188a1.124 1.124 0 0 0 1.872.018 1.13 1.13 0 0 0 .012-1.251L13.97 18.73a.751.751 0 0 1 1.312-.728q.015.028.034.054l.998 1.528a1.126 1.126 0 0 0 2.062-.616V14.44a6.62 6.62 0 0 1 1.5 4.183v3.88a1.125 1.125 0 1 0 2.25 0v-3.877a8.9 8.9 0 0 0-3.75-7.23M7.125 7.127H6a1.875 1.875 0 0 0-1.875 1.875v9.75a1.125 1.125 0 0 0 2.25 0V9.377h.75a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
v.displayName = "HandDeposit";
export {
  v as HandDeposit
};
//# sourceMappingURL=HandDeposit.js.map
