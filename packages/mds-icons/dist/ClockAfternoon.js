import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, n) => {
  const t = s(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M18.375 12a1.125 1.125 0 0 1-1.125 1.125h-2.531l1.83 1.83a1.127 1.127 0 0 1-1.594 1.593l-3.75-3.75A1.125 1.125 0 0 1 12 10.875h5.25A1.125 1.125 0 0 1 18.375 12" })
  ] });
});
c.displayName = "ClockAfternoon";
export {
  c as ClockAfternoon
};
//# sourceMappingURL=ClockAfternoon.js.map
