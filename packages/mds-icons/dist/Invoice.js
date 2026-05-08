import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...d
}, v) => {
  const h = t(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: v, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M2.625 12.376a1.125 1.125 0 0 1 0-2.25H5.25a.375.375 0 0 0 0-.75h-1.5a2.625 2.625 0 0 1-.317-5.23 1.125 1.125 0 0 1 2.126-.02H6a1.125 1.125 0 1 1 0 2.25H3.75a.375.375 0 1 0 0 .75h1.5a2.625 2.625 0 0 1 .318 5.23 1.125 1.125 0 0 1-2.126.02zm19.5-7.125v12.75a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875v-2.625a1.125 1.125 0 1 1 2.25 0v2.25h10.5v-2.25H8.25a1.125 1.125 0 0 1 0-2.25h6.375v-2.25H10.5a1.125 1.125 0 0 1 0-2.25h9.375v-2.25H9.75a1.125 1.125 0 0 1 0-2.25H21a1.125 1.125 0 0 1 1.125 1.125m-5.25 7.875h3v-2.25h-3zm3 4.5v-2.25h-3v2.25z" })
  ] });
});
m.displayName = "Invoice";
export {
  m as Invoice
};
//# sourceMappingURL=Invoice.js.map
