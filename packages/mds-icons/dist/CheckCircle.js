import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = h(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.546 8.954a1.125 1.125 0 0 1 0 1.594l-5.25 5.25a1.125 1.125 0 0 1-1.594 0l-2.25-2.25a1.127 1.127 0 1 1 1.594-1.594l1.454 1.452 4.454-4.455a1.125 1.125 0 0 1 1.592.003M22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
s.displayName = "CheckCircle";
export {
  s as CheckCircle
};
//# sourceMappingURL=CheckCircle.js.map
