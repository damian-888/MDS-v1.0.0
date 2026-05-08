import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = s(), r = l ? i ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m.942 10.352 10.5 6a1.13 1.13 0 0 0 1.116 0l10.5-6a1.125 1.125 0 0 0 0-1.954l-10.5-6a1.13 1.13 0 0 0-1.115 0l-10.5 6a1.125 1.125 0 0 0 0 1.954M12.005 4.67l8.228 4.704L12 14.079 3.768 9.375zm11.477 8.646a1.125 1.125 0 0 1-.42 1.535l-10.5 6a1.13 1.13 0 0 1-1.115 0l-10.5-6a1.126 1.126 0 0 1 .256-2.07 1.13 1.13 0 0 1 .86.116L12 18.579l9.938-5.681a1.127 1.127 0 0 1 1.54.42z" })
  ] });
});
c.displayName = "StackSimple";
export {
  c as StackSimple
};
//# sourceMappingURL=StackSimple.js.map
