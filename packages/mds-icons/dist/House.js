import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const h = s(), a = o ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.826 9.924-7.5-7.5a1.875 1.875 0 0 0-2.652 0l-7.5 7.5a1.86 1.86 0 0 0-.549 1.327v9a1.125 1.125 0 0 0 1.125 1.124h6a1.125 1.125 0 0 0 1.125-1.125v-4.874h2.25v4.874a1.125 1.125 0 0 0 1.125 1.125h6a1.125 1.125 0 0 0 1.125-1.125v-9a1.86 1.86 0 0 0-.55-1.326m-1.701 9.202h-3.75V14.25a1.125 1.125 0 0 0-1.125-1.124h-4.5a1.125 1.125 0 0 0-1.125 1.125v4.874h-3.75v-7.72L12 4.28l7.125 7.125z" })
  ] });
});
v.displayName = "House";
export {
  v as House
};
//# sourceMappingURL=House.js.map
