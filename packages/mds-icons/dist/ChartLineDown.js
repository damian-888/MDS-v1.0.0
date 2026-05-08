import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...i
}, d) => {
  const n = s(), a = l ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.125 19.5A1.125 1.125 0 0 1 21 20.625H3A1.125 1.125 0 0 1 1.875 19.5v-15a1.125 1.125 0 0 1 2.25 0v1.031L9 10.406l2.204-2.205a1.125 1.125 0 0 1 1.594 0l4.827 4.83V12a1.125 1.125 0 1 1 2.25 0v3.75q0 .056-.006.113-.002.022-.006.045l-.01.063q-.005.029-.013.053-.006.026-.014.054l-.018.05q-.009.028-.02.053l-.02.047-.026.054-.025.042-.031.052-.034.044q-.015.022-.032.044c-.011.014-.043.05-.067.074l-.007.009-.01.007a1 1 0 0 1-.073.067l-.043.032-.045.034q-.024.015-.051.03l-.043.026-.053.025c-.018.009-.03.015-.048.022l-.05.02-.054.017-.051.013-.055.014-.06.009-.05.007a1 1 0 0 1-.11.005H15a1.125 1.125 0 1 1 0-2.25h1.031L12 10.594l-2.204 2.205a1.125 1.125 0 0 1-1.594 0l-4.077-4.08v9.656H21a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "ChartLineDown";
export {
  v as ChartLineDown
};
//# sourceMappingURL=ChartLineDown.js.map
