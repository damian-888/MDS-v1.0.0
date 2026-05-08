import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = s(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.546 13.546-3 3a1.127 1.127 0 1 1-1.594-1.594l1.08-1.077h-7.313l-4.5 4.5H9a1.125 1.125 0 1 1 0 2.25H4.5A1.125 1.125 0 0 1 3.375 19.5V15a1.125 1.125 0 0 1 2.25 0v1.781l4.5-4.5V4.969l-1.08 1.077a1.127 1.127 0 1 1-1.593-1.594l3-3a1.125 1.125 0 0 1 1.594 0l3 3a1.127 1.127 0 1 1-1.594 1.594l-1.077-1.077v6.656h6.656l-1.08-1.08a1.125 1.125 0 0 1 .797-1.923 1.13 1.13 0 0 1 .797.33l3 3a1.126 1.126 0 0 1 0 1.594" })
  ] });
});
c.displayName = "VectorThree";
export {
  c as VectorThree
};
//# sourceMappingURL=VectorThree.js.map
