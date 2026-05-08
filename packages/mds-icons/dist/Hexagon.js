import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, i) => {
  const n = h(), a = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.15 5.872 12.9 1.356a1.87 1.87 0 0 0-1.8 0L2.85 5.872a1.88 1.88 0 0 0-.975 1.646v8.964a1.88 1.88 0 0 0 .975 1.645l8.25 4.516a1.87 1.87 0 0 0 1.8 0l8.25-4.516a1.87 1.87 0 0 0 .975-1.645V7.518a1.87 1.87 0 0 0-.975-1.646M19.875 16.26 12 20.572 4.125 16.26V7.74L12 3.427l7.875 4.313z" })
  ] });
});
m.displayName = "Hexagon";
export {
  m as Hexagon
};
//# sourceMappingURL=Hexagon.js.map
