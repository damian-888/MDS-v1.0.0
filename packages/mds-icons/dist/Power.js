import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const t = s(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M10.875 12V4.5a1.125 1.125 0 1 1 2.25 0V12a1.125 1.125 0 1 1-2.25 0m6.24-7.687a1.125 1.125 0 0 0-1.23 1.884c2.06 1.338 3.24 3.46 3.24 5.803a7.125 7.125 0 0 1-14.25 0c0-2.344 1.18-4.465 3.24-5.808a1.125 1.125 0 0 0-1.23-1.88C4.179 6.074 2.626 8.878 2.626 12a9.375 9.375 0 1 0 18.75 0c0-3.123-1.552-5.927-4.26-7.687" })
  ] });
});
m.displayName = "Power";
export {
  m as Power
};
//# sourceMappingURL=Power.js.map
