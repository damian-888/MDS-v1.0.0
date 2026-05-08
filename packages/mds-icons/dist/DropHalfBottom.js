import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const h = c(({
  size: r = "1em",
  title: o,
  titleId: t,
  ...e
}, i) => {
  const l = m(), a = o ? t ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12.645.578a1.125 1.125 0 0 0-1.29 0 24.3 24.3 0 0 0-3.954 3.657c-2.634 3.024-4.026 6.23-4.026 9.265a8.625 8.625 0 1 0 17.25 0c0-7.253-7.654-12.694-7.98-12.922m5.318 15.172H6.037a6.3 6.3 0 0 1-.366-1.5h12.656a6.3 6.3 0 0 1-.364 1.5M9.066 5.746A23.4 23.4 0 0 1 12 2.916a23.4 23.4 0 0 1 2.934 2.83c1.313 1.518 2.838 3.74 3.3 6.254H5.766c.462-2.515 1.986-4.736 3.3-6.254M12 19.875A6.35 6.35 0 0 1 7.489 18h9.022A6.35 6.35 0 0 1 12 19.875" })
  ] });
});
h.displayName = "DropHalfBottom";
export {
  h as DropHalfBottom
};
//# sourceMappingURL=DropHalfBottom.js.map
