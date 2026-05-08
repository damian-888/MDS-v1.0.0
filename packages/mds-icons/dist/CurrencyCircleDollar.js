import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...i
}, d) => {
  const n = c(), e = r ? o ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m4.125-6a3 3 0 0 1-3 3v.375a1.125 1.125 0 1 1-2.25 0v-.375H9.75a1.125 1.125 0 1 1 0-2.25h3.375a.75.75 0 1 0 0-1.5h-2.25a3 3 0 0 1 0-6V6.75a1.125 1.125 0 1 1 2.25 0v.375h1.125a1.125 1.125 0 0 1 0 2.25h-3.375a.75.75 0 1 0 0 1.5h2.25a3 3 0 0 1 3 3" })
  ] });
});
m.displayName = "CurrencyCircleDollar";
export {
  m as CurrencyCircleDollar
};
//# sourceMappingURL=CurrencyCircleDollar.js.map
