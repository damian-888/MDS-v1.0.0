import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const l = h(), t = r ? o ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": t, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: t, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.125 19.5A1.125 1.125 0 0 1 21 20.625H3A1.125 1.125 0 0 1 1.875 19.5v-15a1.125 1.125 0 0 1 2.25 0v13.875H21a1.125 1.125 0 0 1 1.125 1.125m-11.25-5.625a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-.75-3.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3 6.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m2.25-3.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-2.25 6.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" })
  ] });
});
s.displayName = "ChartScatter";
export {
  s as ChartScatter
};
//# sourceMappingURL=ChartScatter.js.map
