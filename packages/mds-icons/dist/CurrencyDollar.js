import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...d
}, h) => {
  const i = v(), o = r ? l ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.25 10.875h-1.125v-5.25h.375a2.625 2.625 0 0 1 2.625 2.625 1.125 1.125 0 1 0 2.25 0A4.88 4.88 0 0 0 13.5 3.375h-.375V2.25a1.125 1.125 0 1 0-2.25 0v1.125H10.5a4.875 4.875 0 1 0 0 9.75h.375v5.25H9.75a2.625 2.625 0 0 1-2.625-2.625 1.125 1.125 0 0 0-2.25 0 4.88 4.88 0 0 0 4.875 4.875h1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h1.125a4.875 4.875 0 1 0 0-9.75m-3.75 0a2.625 2.625 0 0 1 0-5.25h.375v5.25zm3.75 7.5h-1.125v-5.25h1.125a2.625 2.625 0 0 1 0 5.25" })
  ] });
});
m.displayName = "CurrencyDollar";
export {
  m as CurrencyDollar
};
//# sourceMappingURL=CurrencyDollar.js.map
