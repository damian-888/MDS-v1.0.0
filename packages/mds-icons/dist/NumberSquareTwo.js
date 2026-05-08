import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const h = n(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-6.228-8.696a1.125 1.125 0 1 0-1.958-1.054 1.125 1.125 0 0 1-2.122-.75 3.375 3.375 0 1 1 5.878 3.157L12 15.375h2.25a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-.9-1.8z" })
  ] });
});
s.displayName = "NumberSquareTwo";
export {
  s as NumberSquareTwo
};
//# sourceMappingURL=NumberSquareTwo.js.map
