import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...l
}, t) => {
  const a = s(), r = e ? d ?? a : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": r, ...l, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125M17.625 7.5v1.875h-4.5v-6h.375A4.13 4.13 0 0 1 17.625 7.5m-11.25 0c0-.413.064-.824.188-1.219l3.093 3.094H6.375zm4.5-4.125v4.031L7.827 4.361a4.1 4.1 0 0 1 2.673-.986zm2.625 17.25h-3A4.13 4.13 0 0 1 6.375 16.5v-4.875h11.25V16.5a4.13 4.13 0 0 1-4.125 4.125" })
  ] });
});
v.displayName = "MouseLeftClick";
export {
  v as MouseLeftClick
};
//# sourceMappingURL=MouseLeftClick.js.map
