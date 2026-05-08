import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const h = m(), i = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM8.64 11.813l.75-4.5a1.125 1.125 0 0 1 1.11-.938h3.75a1.125 1.125 0 0 1 0 2.25h-2.797l-.254 1.522a4 4 0 0 1 .426-.022 3.75 3.75 0 0 1 0 7.5 3.7 3.7 0 0 1-2.678-1.087 1.125 1.125 0 0 1 1.606-1.575 1.46 1.46 0 0 0 1.072.412 1.5 1.5 0 1 0 0-3 1.46 1.46 0 0 0-1.072.412 1.125 1.125 0 0 1-1.913-.975" })
  ] });
});
s.displayName = "NumberSquareFive";
export {
  s as NumberSquareFive
};
//# sourceMappingURL=NumberSquareFive.js.map
