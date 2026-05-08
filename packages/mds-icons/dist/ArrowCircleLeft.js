import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, t) => {
  const a = s(), l = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.875 12a1.125 1.125 0 0 1-1.125 1.125h-4.781l1.08 1.08a1.127 1.127 0 0 1-1.594 1.593l-3-3a1.125 1.125 0 0 1 0-1.594l3-3a1.128 1.128 0 0 1 1.594 1.594l-1.08 1.077h4.781A1.125 1.125 0 0 1 16.875 12" })
  ] });
});
c.displayName = "ArrowCircleLeft";
export {
  c as ArrowCircleLeft
};
//# sourceMappingURL=ArrowCircleLeft.js.map
