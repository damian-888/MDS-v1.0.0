import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const t = m(), e = a ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: e, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M6.375 9.375A1.125 1.125 0 0 1 7.5 8.25h9a1.125 1.125 0 0 1 0 2.25h-9a1.125 1.125 0 0 1-1.125-1.125M7.5 14.25h9a1.125 1.125 0 1 0 0-2.25h-9a1.125 1.125 0 1 0 0 2.25m14.625-9V19.5a1.125 1.125 0 0 1-1.628 1.006L18 19.258l-2.497 1.248a1.13 1.13 0 0 1-1.006 0L12 19.258l-2.497 1.248a1.13 1.13 0 0 1-1.006 0L6 19.258l-2.497 1.248A1.124 1.124 0 0 1 1.875 19.5V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v12.054l1.372-.685a1.13 1.13 0 0 1 1.006 0L9 18.242l2.497-1.248a1.13 1.13 0 0 1 1.006 0L15 18.242l2.497-1.248a1.13 1.13 0 0 1 1.006 0l1.372.685z" })
  ] });
});
s.displayName = "Receipt";
export {
  s as Receipt
};
//# sourceMappingURL=Receipt.js.map
