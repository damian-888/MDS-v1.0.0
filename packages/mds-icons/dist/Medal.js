import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...l
}, i) => {
  const t = s(), d = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...l, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.625 9.001a8.625 8.625 0 1 0-14.25 6.533v6.967a1.125 1.125 0 0 0 1.628 1.006L12 21.509l3.998 1.998a1.126 1.126 0 0 0 1.627-1.006v-6.967a8.61 8.61 0 0 0 3-6.533m-15 0A6.375 6.375 0 1 1 12 15.376a6.38 6.38 0 0 1-6.375-6.375m9.75 11.68-2.873-1.436a1.13 1.13 0 0 0-1.006 0L8.625 20.68v-3.742a8.63 8.63 0 0 0 6.75 0zM12 13.876a4.875 4.875 0 1 0 0-9.75 4.875 4.875 0 0 0 0 9.75m0-7.5a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25" })
  ] });
});
v.displayName = "Medal";
export {
  v as Medal
};
//# sourceMappingURL=Medal.js.map
