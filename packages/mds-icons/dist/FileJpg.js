import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const h = n(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M11.25 13.125h-1.5a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 2.25 0v-.375h.375a3 3 0 0 0 0-6m0 3.75h-.375v-1.5h.375a.75.75 0 1 1 0 1.5M21 18.832c0 .29-.112.568-.312.778a3.19 3.19 0 0 1-2.313 1.015c-1.86 0-3.375-1.682-3.375-3.75s1.514-3.75 3.375-3.75a3.13 3.13 0 0 1 1.754.544 1.124 1.124 0 1 1-1.258 1.864.9.9 0 0 0-.496-.158c-.61 0-1.125.687-1.125 1.5s.516 1.5 1.125 1.5a.8.8 0 0 0 .253-.04A1.125 1.125 0 0 1 19.5 16.5h.375A1.125 1.125 0 0 1 21 17.625zM7.5 14.25v3.563a2.812 2.812 0 1 1-5.625 0 1.125 1.125 0 0 1 2.25 0 .562.562 0 1 0 1.125 0V14.25a1.125 1.125 0 0 1 2.25 0m-3-3a1.125 1.125 0 0 0 1.125-1.125v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v.375a1.125 1.125 0 1 0 2.25 0V8.25c0-.298-.118-.584-.33-.795l-5.25-5.25a1.12 1.12 0 0 0-.795-.33h-9A1.875 1.875 0 0 0 3.375 3.75v6.375A1.125 1.125 0 0 0 4.5 11.25M15 5.344 17.156 7.5H15z" })
  ] });
});
s.displayName = "FileJpg";
export {
  s as FileJpg
};
//# sourceMappingURL=FileJpg.js.map
