import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const a = h(), e = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.124H6.469l4.83 4.83a1.127 1.127 0 0 1-1.594 1.593l-6.75-6.75a1.124 1.124 0 0 1 0-1.594l6.75-6.75a1.127 1.127 0 0 1 1.594 1.594l-4.83 4.827h13.78A1.125 1.125 0 0 1 21.376 12" })
  ] });
});
w.displayName = "ArrowLeft";
export {
  w as ArrowLeft
};
//# sourceMappingURL=ArrowLeft.js.map
