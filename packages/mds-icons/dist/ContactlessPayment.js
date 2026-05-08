import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...a
}, i) => {
  const l = m(), r = e ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ t("title", { id: r, children: e }) : null,
    /* @__PURE__ */ t("path", { fill: "currentColor", d: "M14.304 6.22a12.25 12.25 0 0 1 0 11.56 1.125 1.125 0 1 1-1.984-1.06 10 10 0 0 0 0-9.44 1.127 1.127 0 0 1 .874-1.682 1.125 1.125 0 0 1 1.11.622M9.41 7.257A1.125 1.125 0 0 0 8.94 8.78a6.84 6.84 0 0 1 0 6.442 1.125 1.125 0 1 0 1.986 1.058 9.1 9.1 0 0 0 0-8.558 1.125 1.125 0 0 0-1.517-.464M22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
c.displayName = "ContactlessPayment";
export {
  c as ContactlessPayment
};
//# sourceMappingURL=ContactlessPayment.js.map
