import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const a = s(), l = r ? o ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m2.296-10.83L11.344 12l2.955 2.954a1.127 1.127 0 0 1-1.594 1.594l-3.75-3.75a1.125 1.125 0 0 1 0-1.594l3.75-3.75a1.128 1.128 0 0 1 1.594 1.594z" })
  ] });
});
c.displayName = "CaretCircleLeft";
export {
  c as CaretCircleLeft
};
//# sourceMappingURL=CaretCircleLeft.js.map
