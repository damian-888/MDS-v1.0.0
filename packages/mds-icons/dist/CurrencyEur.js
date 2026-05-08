import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const n = s(), o = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.088 17.78A1.123 1.123 0 0 1 18 19.373 7.875 7.875 0 0 1 5.02 15H3.75a1.125 1.125 0 1 1 0-2.25h1.125v-1.5H3.75a1.125 1.125 0 1 1 0-2.25h1.27A7.875 7.875 0 0 1 18 4.63a1.125 1.125 0 1 1-1.5 1.678 5.625 5.625 0 0 0-9.17 2.692h5.42a1.125 1.125 0 1 1 0 2.25H7.125v1.5h4.125a1.125 1.125 0 0 1 0 2.25H7.33a5.625 5.625 0 0 0 9.17 2.693 1.125 1.125 0 0 1 1.588.088" })
  ] });
});
c.displayName = "CurrencyEur";
export {
  c as CurrencyEur
};
//# sourceMappingURL=CurrencyEur.js.map
