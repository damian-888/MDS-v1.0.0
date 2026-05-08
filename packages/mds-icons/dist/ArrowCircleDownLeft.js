import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as w, useId as m } from "react";
const s = w(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, t) => {
  const a = m(), e = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.796-11.67a1.125 1.125 0 0 1 0 1.593l-4.077 4.077H13.5a1.125 1.125 0 1 1 0 2.25H9A1.125 1.125 0 0 1 7.875 15v-4.5a1.125 1.125 0 1 1 2.25 0v1.781l4.08-4.08a1.125 1.125 0 0 1 1.59.003" })
  ] });
});
s.displayName = "ArrowCircleDownLeft";
export {
  s as ArrowCircleDownLeft
};
//# sourceMappingURL=ArrowCircleDownLeft.js.map
