import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as c } from "react";
const m = v(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const n = c(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M23.096 5.302a1.13 1.13 0 0 0-1.09-.057c-3.889 1.903-6.694 1.004-9.663.053-3.11-.996-6.635-2.124-11.337.174a1.13 1.13 0 0 0-.631 1.012v11.26a1.125 1.125 0 0 0 1.62 1.01c3.888-1.901 6.693-1.003 9.662-.052 1.765.563 3.664 1.173 5.835 1.173 1.656 0 3.469-.353 5.502-1.347a1.13 1.13 0 0 0 .631-1.012V6.257a1.13 1.13 0 0 0-.529-.955m-1.721 11.49c-3.562 1.516-6.226.663-9.032-.235-1.765-.562-3.664-1.173-5.835-1.173-1.323.002-2.636.229-3.883.67V7.208c3.563-1.515 6.226-.664 9.032.235 2.743.878 5.808 1.86 9.718.503zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M6 9.375v3.75a1.125 1.125 0 0 1-2.25 0v-3.75a1.125 1.125 0 0 1 2.25 0m12 5.25v-3.75a1.125 1.125 0 1 1 2.25 0v3.75a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
m.displayName = "MoneyWavy";
export {
  m as MoneyWavy
};
//# sourceMappingURL=MoneyWavy.js.map
