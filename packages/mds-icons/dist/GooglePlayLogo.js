import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const g = m(({
  size: l = "1em",
  title: o,
  titleId: d,
  ...i
}, a) => {
  const t = s(), r = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.668 10.378 6.938 1.373a1.9 1.9 0 0 0-1.887.006 1.84 1.84 0 0 0-.926 1.606v18.03a1.84 1.84 0 0 0 .93 1.606 1.9 1.9 0 0 0 1.885.005l15.728-9a1.853 1.853 0 0 0 0-3.243zM6.375 19.03V4.968L13.406 12zM15 13.594l1.163 1.162-5.438 3.113zm-4.274-7.46 5.437 3.112L15 10.406zm7.461 7.46L16.595 12l1.593-1.594L20.975 12z" })
  ] });
});
g.displayName = "GooglePlayLogo";
export {
  g as GooglePlayLogo
};
//# sourceMappingURL=GooglePlayLogo.js.map
