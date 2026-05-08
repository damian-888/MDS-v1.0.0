import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const l = h(), a = r ? d ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...t, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.125 9q0-.158-.041-.31l-1.346-4.705a1.88 1.88 0 0 0-1.8-1.36H5.063a1.88 1.88 0 0 0-1.8 1.36L1.918 8.691q-.043.15-.043.309v1.5a4.12 4.12 0 0 0 1.5 3.18v6.57A1.125 1.125 0 0 0 4.5 21.375h15a1.125 1.125 0 0 0 1.125-1.125v-6.57a4.12 4.12 0 0 0 1.5-3.18zM5.348 4.875h13.308l.857 3H4.492zm8.532 5.25v.375a1.875 1.875 0 0 1-3.75 0v-.375zm-8.911 1.942a1.88 1.88 0 0 1-.844-1.567v-.375h3.75v.375a1.875 1.875 0 0 1-2.725 1.669 1 1 0 0 0-.181-.102m13.406 7.058H5.625v-4.518q.185.017.375.018a4.11 4.11 0 0 0 3-1.298 4.114 4.114 0 0 0 6 0 4.11 4.11 0 0 0 3.375 1.28zm1.5-8.625a1.87 1.87 0 0 1-.844 1.567 1 1 0 0 0-.176.102 1.875 1.875 0 0 1-2.73-1.669v-.375h3.75z" })
  ] });
});
m.displayName = "Storefront";
export {
  m as Storefront
};
//# sourceMappingURL=Storefront.js.map
