import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const n = m(), r = a ? e ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 8.25h-5.532L9.795 4.08A1.13 1.13 0 0 0 9 3.75h-.75a1.875 1.875 0 0 0-1.782 2.468L7.15 8.25H5.718L3.795 6.33A1.13 1.13 0 0 0 3 6h-.75A1.875 1.875 0 0 0 .455 8.414l1.32 4.396a4.1 4.1 0 0 0 3.95 2.94H22.5a1.125 1.125 0 0 0 1.125-1.125v-2.25A4.13 4.13 0 0 0 19.5 8.25m1.875 5.25H5.725a1.864 1.864 0 0 1-1.796-1.336l-1.08-3.599 1.606 1.606c.21.21.496.329.795.329h3.459a1.125 1.125 0 0 0 1.069-1.48L8.89 6.355l3.814 3.816c.211.21.497.329.795.329h6a1.875 1.875 0 0 1 1.876 1.875zm0 5.625a1.875 1.875 0 1 1-3.751 0 1.875 1.875 0 0 1 3.75 0m-9 0a1.875 1.875 0 1 1-3.751 0 1.875 1.875 0 0 1 3.75 0" })
  ] });
});
s.displayName = "AirplaneTaxiing";
export {
  s as AirplaneTaxiing
};
//# sourceMappingURL=AirplaneTaxiing.js.map
