import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...d
}, e) => {
  const t = s(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.046 8.296a1.125 1.125 0 0 1-1.594 0l-2.577-2.577v10.03a6.375 6.375 0 1 1-12.75 0V7.5a1.125 1.125 0 0 1 2.25 0v8.25a4.125 4.125 0 0 0 8.25 0V5.72l-2.58 2.577a1.126 1.126 0 0 1-1.923-.797 1.13 1.13 0 0 1 .33-.797l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
w.displayName = "ArrowURightUp";
export {
  w as ArrowURightUp
};
//# sourceMappingURL=ArrowURightUp.js.map
