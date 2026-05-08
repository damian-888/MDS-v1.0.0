import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 11.998a1.13 1.13 0 0 1-.643 1.016l-14.25 6.75a1.125 1.125 0 0 1-.963-2.033l12.106-5.733L5.519 6.265a1.125 1.125 0 0 1 .963-2.033l14.25 6.75a1.13 1.13 0 0 1 .643 1.016" })
  ] });
});
m.displayName = "GreaterThan";
export {
  m as GreaterThan
};
//# sourceMappingURL=GreaterThan.js.map
