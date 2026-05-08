import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const n = v(), o = r ? a ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 10.875h-1.125V4.313a1.125 1.125 0 1 0-2.25 0v6.562h-4.326L6.887 3.621a1.125 1.125 0 0 0-2.012.692v6.562H3.75a1.125 1.125 0 1 0 0 2.25h1.125v6.563a1.125 1.125 0 0 0 2.25 0v-6.563h4.326l5.662 7.254a1.125 1.125 0 0 0 2.012-.692v-6.562h1.125a1.125 1.125 0 1 0 0-2.25m-13.125 0V7.582l2.57 3.293zm9.75 5.543-2.57-3.293h2.57z" })
  ] });
});
m.displayName = "CurrencyNgn";
export {
  m as CurrencyNgn
};
//# sourceMappingURL=CurrencyNgn.js.map
