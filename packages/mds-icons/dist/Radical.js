import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: d = "1em",
  title: r,
  titleId: i,
  ...o
}, e) => {
  const t = c(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": l, ...o, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.625 7.5v2.25a1.125 1.125 0 1 1-2.25 0V8.627H12.78l-4.227 11.27a1.125 1.125 0 0 1-2.106 0l-4.5-12a1.125 1.125 0 1 1 2.106-.79L7.5 16.292l3.447-9.188A1.125 1.125 0 0 1 12 6.375h10.5a1.125 1.125 0 0 1 1.125 1.126" })
  ] });
});
h.displayName = "Radical";
export {
  h as Radical
};
//# sourceMappingURL=Radical.js.map
