import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const n = v(), o = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.875 14.625a6 6 0 1 0 0-12H8.25A1.125 1.125 0 0 0 7.125 3.75v8.625H5.25a1.125 1.125 0 1 0 0 2.25h1.875v1.5H5.25a1.125 1.125 0 1 0 0 2.25h1.875v1.875a1.125 1.125 0 0 0 2.25 0v-1.875H13.5a1.125 1.125 0 1 0 0-2.25H9.375v-1.5zm-4.5-9.75h4.5a3.75 3.75 0 0 1 0 7.5h-4.5z" })
  ] });
});
s.displayName = "CurrencyRub";
export {
  s as CurrencyRub
};
//# sourceMappingURL=CurrencyRub.js.map
