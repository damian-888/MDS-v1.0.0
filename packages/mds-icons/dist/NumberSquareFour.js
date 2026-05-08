import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const u = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const h = n(), o = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM8.25 15.375h4.125V16.5a1.125 1.125 0 1 0 2.25 0v-1.125H15a1.125 1.125 0 1 0 0-2.25h-.375V7.5a1.125 1.125 0 0 0-2.013-.69l-5.25 6.75a1.125 1.125 0 0 0 .888 1.815m4.125-4.594v2.344h-1.824z" })
  ] });
});
u.displayName = "NumberSquareFour";
export {
  u as NumberSquareFour
};
//# sourceMappingURL=NumberSquareFour.js.map
