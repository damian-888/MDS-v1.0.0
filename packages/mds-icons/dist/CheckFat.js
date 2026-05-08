import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = s(), a = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.077 6.137-.007-.007-2.243-2.206a1.875 1.875 0 0 0-2.647-.005l-8.437 8.328-3.175-3.08a1.875 1.875 0 0 0-2.644.008l-2.25 2.25a1.875 1.875 0 0 0 0 2.65l6.714 6.75a1.873 1.873 0 0 0 2.652 0L23.077 8.788a1.875 1.875 0 0 0 0-2.652M9.714 18.97 3.529 12.75l1.721-1.723 3.717 3.599a1.125 1.125 0 0 0 1.573-.008l8.96-8.842 1.718 1.688z" })
  ] });
});
c.displayName = "CheckFat";
export {
  c as CheckFat
};
//# sourceMappingURL=CheckFat.js.map
