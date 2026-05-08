import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, a) => {
  const t = s(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.796-9.42a1.127 1.127 0 1 1-1.594 1.593l-1.077-1.08v4.782a1.125 1.125 0 1 1-2.25 0v-4.781l-1.08 1.08a1.127 1.127 0 1 1-1.593-1.594l3-3a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
c.displayName = "ArrowCircleUp";
export {
  c as ArrowCircleUp
};
//# sourceMappingURL=ArrowCircleUp.js.map
