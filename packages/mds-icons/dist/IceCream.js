import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 10.875a3.01 3.01 0 0 0-1.535-2.617 7.875 7.875 0 0 0-15.68 0 3 3 0 0 0 1.172 5.603l5.04 8.82a1.875 1.875 0 0 0 3.256 0l5.04-8.82a3 3 0 0 0 2.707-2.986M5.474 10.14a1.125 1.125 0 0 0 .9-1.102V9a5.625 5.625 0 1 1 11.25 0v.038a1.125 1.125 0 0 0 .902 1.102.75.75 0 0 1-.151 1.485H5.625a.75.75 0 0 1-.151-1.485m10.594 3.735-1.547 2.708-1.547-2.708zm-8.136 0h2.45l2.843 4.975L12 20.995z" })
  ] });
});
c.displayName = "IceCream";
export {
  c as IceCream
};
//# sourceMappingURL=IceCream.js.map
