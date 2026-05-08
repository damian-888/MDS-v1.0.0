import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: h,
  ...i
}, l) => {
  const a = s(), e = o ? h ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125M17.625 7.5v1.875h-4.5v-6h.375A4.13 4.13 0 0 1 17.625 7.5M10.5 3.375h.375v6h-4.5V7.5A4.13 4.13 0 0 1 10.5 3.375m3 17.25h-3A4.13 4.13 0 0 1 6.375 16.5v-4.875h11.25V16.5a4.13 4.13 0 0 1-4.125 4.125" })
  ] });
});
v.displayName = "Mouse";
export {
  v as Mouse
};
//# sourceMappingURL=Mouse.js.map
