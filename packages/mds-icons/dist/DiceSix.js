import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...a
}, l) => {
  const t = h(), e = i ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    i ? /* @__PURE__ */ o("title", { id: e, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18 2.625H6A3.375 3.375 0 0 0 2.625 6v12A3.375 3.375 0 0 0 6 21.375h12A3.375 3.375 0 0 0 21.375 18V6A3.375 3.375 0 0 0 18 2.625M19.125 18A1.125 1.125 0 0 1 18 19.125H6A1.125 1.125 0 0 1 4.875 18V6A1.125 1.125 0 0 1 6 4.875h12A1.125 1.125 0 0 1 19.125 6zM10.5 7.875a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6 4.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "DiceSix";
export {
  s as DiceSix
};
//# sourceMappingURL=DiceSix.js.map
