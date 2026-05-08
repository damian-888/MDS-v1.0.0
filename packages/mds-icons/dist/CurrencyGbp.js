import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, h) => {
  const l = c(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.375 19.5a1.125 1.125 0 0 1-1.125 1.126h-12a1.125 1.125 0 0 1 0-2.25h.375a2.25 2.25 0 0 0 2.25-2.25v-3H5.25a1.125 1.125 0 0 1 0-2.25h2.625v-3a5.25 5.25 0 0 1 8.59-4.051 1.125 1.125 0 1 1-1.432 1.735 3 3 0 0 0-4.908 2.316v3h2.625a1.125 1.125 0 1 1 0 2.25h-2.625v3c0 .79-.207 1.566-.604 2.25h7.729a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "CurrencyGbp";
export {
  s as CurrencyGbp
};
//# sourceMappingURL=CurrencyGbp.js.map
