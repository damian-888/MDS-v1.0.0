import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, a) => {
  const t = h(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.493 8.476A10.125 10.125 0 0 1 4.84 19.163 10.125 10.125 0 0 1 18.32 4.092l1.884-1.885A1.128 1.128 0 0 1 21.798 3.8l-9 9a1.126 1.126 0 1 1-1.594-1.594l2.25-2.25a3.375 3.375 0 1 0 1.852 3.717 1.125 1.125 0 1 1 2.206.444A5.624 5.624 0 1 1 15.1 7.305l1.615-1.61a7.875 7.875 0 1 0 2.669 3.563 1.124 1.124 0 1 1 2.109-.783z" })
  ] });
});
m.displayName = "Target";
export {
  m as Target
};
//# sourceMappingURL=Target.js.map
