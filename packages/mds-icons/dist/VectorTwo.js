import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, i) => {
  const t = c(), l = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: l, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.796 18.796-3 3a1.127 1.127 0 1 1-1.594-1.594l1.08-1.077H7.5A1.125 1.125 0 0 1 6.375 18V6.469l-1.08 1.077a1.127 1.127 0 1 1-1.593-1.594l3-3a1.125 1.125 0 0 1 1.594 0l3 3a1.127 1.127 0 0 1-1.594 1.594L8.625 6.469v10.406h9.656l-1.08-1.08a1.127 1.127 0 1 1 1.594-1.593l3 3a1.126 1.126 0 0 1 0 1.594" })
  ] });
});
h.displayName = "VectorTwo";
export {
  h as VectorTwo
};
//# sourceMappingURL=VectorTwo.js.map
