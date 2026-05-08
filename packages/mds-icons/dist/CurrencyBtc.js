import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const c = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = v(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.351 10.73A4.5 4.5 0 0 0 15 3.519V2.25a1.125 1.125 0 1 0-2.25 0v1.125h-1.5V2.25a1.125 1.125 0 1 0-2.25 0v1.125H6.75a1.125 1.125 0 0 0 0 2.25h.375v12H6.75a1.125 1.125 0 1 0 0 2.25H9V21a1.125 1.125 0 0 0 2.25 0v-1.125h1.5V21A1.125 1.125 0 1 0 15 21v-1.125a4.875 4.875 0 0 0 2.351-9.144m-1.226-2.855a2.25 2.25 0 0 1-2.25 2.25h-4.5v-4.5h4.5a2.25 2.25 0 0 1 2.25 2.25M15 17.625H9.375v-5.25H15a2.625 2.625 0 0 1 0 5.25" })
  ] });
});
c.displayName = "CurrencyBtc";
export {
  c as CurrencyBtc
};
//# sourceMappingURL=CurrencyBtc.js.map
