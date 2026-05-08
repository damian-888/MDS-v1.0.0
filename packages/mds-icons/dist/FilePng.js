import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = t(), l = a ? i ?? h : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.25 13.125h-1.5a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 2.25 0v-.375h.375a3 3 0 0 0 0-6m0 3.75h-.375v-1.5h.375a.75.75 0 1 1 0 1.5m16.5 1.957c0 .29-.112.568-.312.778a3.19 3.19 0 0 1-2.313 1.015c-1.86 0-3.375-1.683-3.375-3.75s1.514-3.75 3.375-3.75a3.13 3.13 0 0 1 1.754.544 1.124 1.124 0 1 1-1.258 1.864.9.9 0 0 0-.496-.158c-.61 0-1.125.687-1.125 1.5s.516 1.5 1.125 1.5a.8.8 0 0 0 .253-.04 1.125 1.125 0 0 1 .872-1.835h.375a1.125 1.125 0 0 1 1.125 1.125zM15 14.25v5.25a1.126 1.126 0 0 1-2.04.656l-1.71-2.396v1.74a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.04-.656l1.71 2.395V14.25a1.125 1.125 0 1 1 2.25 0m-10.5-3a1.125 1.125 0 0 0 1.125-1.125v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v.375a1.125 1.125 0 1 0 2.25 0V8.25a1.13 1.13 0 0 0-.33-.796l-5.25-5.25a1.12 1.12 0 0 0-.795-.329h-9A1.875 1.875 0 0 0 3.375 3.75v6.375A1.125 1.125 0 0 0 4.5 11.25M15 5.344 17.156 7.5H15z" })
  ] });
});
s.displayName = "FilePng";
export {
  s as FilePng
};
//# sourceMappingURL=FilePng.js.map
