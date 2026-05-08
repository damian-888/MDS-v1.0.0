import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: o = "1em",
  title: a,
  titleId: l,
  ...d
}, h) => {
  const i = n(), r = a ? l ?? i : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21 13.873h-8.555L3.857 3.77a1.125 1.125 0 0 0-1.714 1.457l8.921 10.5.006.006 3.598 4.234a1.88 1.88 0 0 0 1.429.656H21a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 21 13.873m-6.642 2.25h2.517v2.25h-.605zm6.267 2.25h-1.5v-2.25h1.5zm-6.22-7.853 5.738-6.75a1.125 1.125 0 0 1 1.714 1.457l-5.738 6.75a1.126 1.126 0 1 1-1.713-1.457m-4.137 6.605a1.125 1.125 0 0 0-1.586.128l-.952 1.12h-.605v-2.256a1.125 1.125 0 0 0-.122-2.244H3a1.875 1.875 0 0 0-1.875 1.875v3A1.875 1.875 0 0 0 3 20.623h4.903a1.87 1.87 0 0 0 1.429-.656l1.064-1.252a1.125 1.125 0 0 0-.129-1.59m-6.893-1.002h1.5v2.25h-1.5z" })
  ] });
});
v.displayName = "Hockey";
export {
  v as Hockey
};
//# sourceMappingURL=Hockey.js.map
