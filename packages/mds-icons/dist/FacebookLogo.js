import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const t = s(), a = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m1.125 17.918v-5.168H15a1.125 1.125 0 1 0 0-2.25h-1.875V10.5a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 0 0-2.25h-1.5a3.375 3.375 0 0 0-3.375 3.375v1.875H9a1.125 1.125 0 1 0 0 2.25h1.875v5.168a7.875 7.875 0 1 1 2.25 0" })
  ] });
});
c.displayName = "FacebookLogo";
export {
  c as FacebookLogo
};
//# sourceMappingURL=FacebookLogo.js.map
