import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18.375 12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.75-3.375v7.5a3 3 0 0 1-3 3h-13.5a3 3 0 0 1-3-3V5.711a3 3 0 0 1 3-3.086H18a1.125 1.125 0 0 1 0 2.25H5.625a.75.75 0 0 0-.75.774v.008a.78.78 0 0 0 .795.718h13.455a3 3 0 0 1 3 3m-2.25 0a.75.75 0 0 0-.75-.75H5.67q-.403 0-.795-.101v8.351a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75z" })
  ] });
});
s.displayName = "Wallet";
export {
  s as Wallet
};
//# sourceMappingURL=Wallet.js.map
