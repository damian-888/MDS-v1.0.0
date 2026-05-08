import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M7.219 18.249q.442-.565.8-1.186a1.125 1.125 0 1 0-1.947-1.125 8 8 0 0 1-.447.681 7.85 7.85 0 0 1 0-9.238q.24.33.447.681A1.125 1.125 0 1 0 8.02 6.938q-.358-.622-.8-1.187a7.85 7.85 0 0 1 9.568 0q-.445.565-.806 1.186a1.126 1.126 0 0 0 1.263 1.677 1.13 1.13 0 0 0 .684-.552q.205-.352.447-.681a7.85 7.85 0 0 1 0 9.238 8 8 0 0 1-.444-.682 1.124 1.124 0 1 0-1.948 1.125q.358.621.798 1.187a7.85 7.85 0 0 1-9.568 0zM9.3 10.736q.076.63.075 1.264 0 .634-.078 1.264a1.125 1.125 0 1 1-2.233-.278 8 8 0 0 0 0-1.972 1.125 1.125 0 1 1 2.233-.281zm6.662 3.506a1.125 1.125 0 0 1-1.256-.978c-.104-.84-.104-1.691 0-2.531a1.13 1.13 0 0 1 1.257-.976 1.126 1.126 0 0 1 .976 1.257 8 8 0 0 0 0 1.969 1.127 1.127 0 0 1-.98 1.259z" })
  ] });
});
c.displayName = "Baseball";
export {
  c as Baseball
};
//# sourceMappingURL=Baseball.js.map
