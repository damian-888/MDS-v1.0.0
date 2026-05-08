import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, i) => {
  const t = n(), a = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.375 22.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M24 3.75a1.125 1.125 0 0 1-1.125 1.125h-2.156l-2.42 2.418-2.01 11.77a1.875 1.875 0 0 1-3.175 1.012l-9.188-9.188a1.875 1.875 0 0 1 1.016-3.176L16.709 5.7l2.746-2.747a1.12 1.12 0 0 1 .796-.329h2.625A1.125 1.125 0 0 1 24 3.75m-8.126 4.376L6.03 9.808l8.163 8.163z" })
  ] });
});
s.displayName = "Shower";
export {
  s as Shower
};
//# sourceMappingURL=Shower.js.map
