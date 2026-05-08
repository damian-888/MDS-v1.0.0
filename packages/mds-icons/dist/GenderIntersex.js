import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...i
}, l) => {
  const n = s(), d = e ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    e ? /* @__PURE__ */ a("title", { id: d, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 1.875h-3.75a1.125 1.125 0 0 0 0 2.25h1.03l-1.465 1.47a6.375 6.375 0 1 0-5.19 11.179V18H8.25a1.125 1.125 0 1 0 0 2.25h1.875v1.5a1.125 1.125 0 1 0 2.25 0v-1.5h1.875a1.125 1.125 0 1 0 0-2.25h-1.875v-1.226a6.37 6.37 0 0 0 4.397-9.454l1.603-1.601V6.75a1.125 1.125 0 1 0 2.25 0V3A1.125 1.125 0 0 0 19.5 1.875m-8.25 12.75a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25" })
  ] });
});
m.displayName = "GenderIntersex";
export {
  m as GenderIntersex
};
//# sourceMappingURL=GenderIntersex.js.map
