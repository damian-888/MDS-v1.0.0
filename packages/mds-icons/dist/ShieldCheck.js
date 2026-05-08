import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: e,
  titleId: l,
  ...o
}, a) => {
  const h = n(), d = e ? l ?? h : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": d, ...o, children: [
    e ? /* @__PURE__ */ i("title", { id: d, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25v5.25c0 5.09 2.468 8.177 4.538 9.87 2.222 1.819 4.447 2.438 4.54 2.466.195.052.4.052.593 0 .094-.027 2.319-.647 4.541-2.465 2.07-1.694 4.538-4.781 4.538-9.871V5.25A1.875 1.875 0 0 0 19.5 3.375m-.375 7.125c0 3.348-1.227 6.065-3.648 8.077A11.8 11.8 0 0 1 12 20.567a11.8 11.8 0 0 1-3.477-1.99c-2.42-2.012-3.648-4.73-3.648-8.077V5.625h14.25zm-11.67 3.046a1.126 1.126 0 0 1 1.227-1.838c.137.056.261.14.366.244l1.452 1.454 4.454-4.455a1.127 1.127 0 1 1 1.594 1.594l-5.25 5.25a1.125 1.125 0 0 1-1.594 0z" })
  ] });
});
m.displayName = "ShieldCheck";
export {
  m as ShieldCheck
};
//# sourceMappingURL=ShieldCheck.js.map
