import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: i = "1em",
  title: e,
  titleId: d,
  ...a
}, l) => {
  const t = h(), r = e ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: r, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18 2.625H6A3.375 3.375 0 0 0 2.625 6v12A3.375 3.375 0 0 0 6 21.375h12A3.375 3.375 0 0 0 21.375 18V6A3.375 3.375 0 0 0 18 2.625M19.125 18A1.125 1.125 0 0 1 18 19.125H6A1.125 1.125 0 0 1 4.875 18V6A1.125 1.125 0 0 1 6 4.875h12A1.125 1.125 0 0 1 19.125 6zM9.75 8.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-7.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "DiceFive";
export {
  s as DiceFive
};
//# sourceMappingURL=DiceFive.js.map
