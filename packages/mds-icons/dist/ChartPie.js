import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = s(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m1.125 2.332c2 .289 3.813 1.336 5.063 2.925l-5.063 2.92zM4.688 14.922a7.87 7.87 0 0 1 6.187-10.715v7.143zM12 19.875a7.86 7.86 0 0 1-6.183-3.007l13.496-7.79A7.874 7.874 0 0 1 12 19.875" })
  ] });
});
m.displayName = "ChartPie";
export {
  m as ChartPie
};
//# sourceMappingURL=ChartPie.js.map
