import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, d) => {
  const t = s(), l = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: l, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.125 15.375v6.375a1.125 1.125 0 1 1-2.25 0v-6.375a1.125 1.125 0 1 1 2.25 0m6.375-6.75h-4.781l3.33-3.33a1.127 1.127 0 1 0-1.594-1.593l-3.33 3.33V2.25a1.125 1.125 0 1 0-2.25 0v4.781l-3.33-3.327a1.127 1.127 0 0 0-1.593 1.594l3.33 3.327H4.5a1.125 1.125 0 0 0 0 2.25h4.781l-3.327 3.33a1.126 1.126 0 0 0 .797 1.923c.299 0 .585-.119.797-.33L12 11.344l4.454 4.455a1.127 1.127 0 1 0 1.594-1.594l-3.33-3.33H19.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "LinktreeLogo";
export {
  m as LinktreeLogo
};
//# sourceMappingURL=LinktreeLogo.js.map
