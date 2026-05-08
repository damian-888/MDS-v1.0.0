import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const h = m(), e = r ? a ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.5 11.624h-1.516l1.808-4.451a1.125 1.125 0 0 0-2.085-.844l-2.156 5.298h-3.356l-2.156-5.298a1.125 1.125 0 0 0-2.085 0l-2.149 5.295h-3.36L3.289 6.326a1.125 1.125 0 0 0-2.085.844l1.812 4.454H1.5a1.125 1.125 0 1 0 0 2.25h2.43l2.156 5.299a1.125 1.125 0 0 0 2.085 0l2.157-5.299h3.36l2.156 5.299a1.125 1.125 0 0 0 2.085 0l2.156-5.299H22.5a1.125 1.125 0 1 0 0-2.25M7.125 15.76l-.766-1.886h1.532zm4.11-4.136L12 9.74l.766 1.885zm5.64 4.136-.766-1.886h1.532z" })
  ] });
});
s.displayName = "CurrencyKrw";
export {
  s as CurrencyKrw
};
//# sourceMappingURL=CurrencyKrw.js.map
