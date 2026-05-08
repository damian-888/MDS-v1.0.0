import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const h = s(), e = r ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.92 17.582a1.125 1.125 0 0 0-1.463-.626l-.914.365-2.537-5.074A1.13 1.13 0 0 0 18 11.625h-7.125v-1.5h4.875a1.125 1.125 0 1 0 0-2.25h-4.875v-.58a3.187 3.187 0 1 0-2.25 0v.832a7.125 7.125 0 1 0 8.283 9.991 1.124 1.124 0 1 0-2.022-.986A4.874 4.874 0 1 1 8.625 10.5v2.25a1.125 1.125 0 0 0 1.125 1.125h7.554l2.69 5.379a1.125 1.125 0 0 0 1.423.54l1.875-.75a1.126 1.126 0 0 0 .627-1.462M9.75 3.375a.938.938 0 1 1 0 1.876.938.938 0 0 1 0-1.876" })
  ] });
});
v.displayName = "Wheelchair";
export {
  v as Wheelchair
};
//# sourceMappingURL=Wheelchair.js.map
