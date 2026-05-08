import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = n(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18.75 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-.375 18H5.625V4.125h12.75zM7.5 7.125A1.125 1.125 0 0 1 8.625 6h6.75a1.125 1.125 0 0 1 0 2.25h-6.75A1.125 1.125 0 0 1 7.5 7.125M11.25 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "Calculator";
export {
  s as Calculator
};
//# sourceMappingURL=Calculator.js.map
