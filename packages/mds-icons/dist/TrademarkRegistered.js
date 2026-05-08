import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...o
}, l) => {
  const t = n(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...o, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m2.69-6.617a3.375 3.375 0 0 0-1.94-6.133h-3A1.125 1.125 0 0 0 8.625 8.25v7.5a1.125 1.125 0 1 0 2.25 0v-1.875h1.523l1.665 2.5a1.126 1.126 0 0 0 1.874-1.25zm-3.815-3.883h1.875a1.125 1.125 0 0 1 0 2.25h-1.875z" })
  ] });
});
s.displayName = "TrademarkRegistered";
export {
  s as TrademarkRegistered
};
//# sourceMappingURL=TrademarkRegistered.js.map
