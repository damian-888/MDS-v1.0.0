import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...v
}, h) => {
  const i = t(), r = a ? d ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...v, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.375 20.25a1.125 1.125 0 0 1-1.125 1.125H4.5A1.875 1.875 0 0 1 2.625 19.5v-.75a1.125 1.125 0 0 1 2.25 0v.375h.375a1.125 1.125 0 0 1 1.125 1.125m4.125-1.125H9a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25m-6.75-3A1.125 1.125 0 0 0 4.875 15v-1.5a1.125 1.125 0 0 0-2.25 0V15a1.125 1.125 0 0 0 1.125 1.125m12 1.5a1.125 1.125 0 0 0-1.125 1.125v.375h-.375a1.125 1.125 0 1 0 0 2.25H15a1.875 1.875 0 0 0 1.875-1.875v-.75a1.125 1.125 0 0 0-1.125-1.125m0-6.75a1.125 1.125 0 0 0 1.125-1.125V9A1.875 1.875 0 0 0 15 7.125h-.75a1.125 1.125 0 0 0 0 2.25h.375v.375a1.125 1.125 0 0 0 1.125 1.125m-10.5-3.75H4.5A1.875 1.875 0 0 0 2.625 9v.75a1.125 1.125 0 0 0 2.25 0v-.375h.375a1.125 1.125 0 0 0 0-2.25m14.25-4.5H9.375A1.875 1.875 0 0 0 7.5 4.5v3.806a1.125 1.125 0 0 0 1.125 1.069H10.5a1.125 1.125 0 0 0 0-2.25h-.75v-2.25h9.375v9.375h-2.25v-.75a1.125 1.125 0 1 0-2.25 0v1.875A1.125 1.125 0 0 0 15.75 16.5h3.75a1.875 1.875 0 0 0 1.875-1.875V4.5A1.875 1.875 0 0 0 19.5 2.625" })
  ] });
});
m.displayName = "SelectionForeground";
export {
  m as SelectionForeground
};
//# sourceMappingURL=SelectionForeground.js.map
