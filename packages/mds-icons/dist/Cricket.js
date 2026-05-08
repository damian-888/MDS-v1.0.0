import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = s(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.077 7.364-4.94-4.94a1.875 1.875 0 0 0-2.651 0L5.424 12.485a1.875 1.875 0 0 0 0 2.652L7.1 16.81l-4.144 4.144a1.127 1.127 0 1 0 1.594 1.593l4.144-4.144 1.674 1.674a1.875 1.875 0 0 0 2.651 0l10.059-10.063a1.875 1.875 0 0 0 0-2.651M11.69 18.22l-1.406-1.406 2.515-2.516a1.126 1.126 0 1 0-1.594-1.593L8.69 15.22l-1.406-1.406 2.935-2.938h4.406v4.406zm5.185-5.188V9.75a1.125 1.125 0 0 0-1.125-1.125H12.47l4.344-4.345 4.406 4.406zM5.625 8.626a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" })
  ] });
});
c.displayName = "Cricket";
export {
  c as Cricket
};
//# sourceMappingURL=Cricket.js.map
