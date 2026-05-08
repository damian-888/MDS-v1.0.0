import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: i = "1em",
  title: r,
  titleId: l,
  ...d
}, t) => {
  const a = s(), o = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.125 9v4.5a1.125 1.125 0 1 1-2.25 0v-1.781l-4.08 4.08a1.127 1.127 0 1 1-1.593-1.594l4.08-4.08H10.5a1.125 1.125 0 1 1 0-2.25H15A1.125 1.125 0 0 1 16.125 9" })
  ] });
});
c.displayName = "ArrowCircleUpRight";
export {
  c as ArrowCircleUpRight
};
//# sourceMappingURL=ArrowCircleUpRight.js.map
