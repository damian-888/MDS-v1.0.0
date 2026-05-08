import { jsxs as v, jsx as d } from "react/jsx-runtime";
import { forwardRef as a, useId as t } from "react";
const n = a(({
  size: e = "1em",
  title: r,
  titleId: h,
  ...i
}, l) => {
  const m = t(), o = r ? h ?? m : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 4.5A1.875 1.875 0 0 0 19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875zm-3.281 6.375-4.969-4.969V4.875h1.031l4.969 4.969v1.031zm-4.969-1.781 1.781 1.781h-1.781zm6-2.438-1.781-1.781h1.781zm-8.25-1.781v6h-6v-6zm-1.031 14.25-4.969-4.969v-1.031h1.031l4.969 4.969v1.031zm1.031-4.219-1.781-1.781h1.781zm-6 2.438 1.781 1.781H4.875zm8.25 1.781v-6h6v6z" })
  ] });
});
n.displayName = "Checkerboard";
export {
  n as Checkerboard
};
//# sourceMappingURL=Checkerboard.js.map
