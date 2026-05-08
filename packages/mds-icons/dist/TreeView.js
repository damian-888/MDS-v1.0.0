import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: h = "1em",
  title: e,
  titleId: o,
  ...d
}, v) => {
  const a = n(), r = e ? o ?? a : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: v, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.5 14.625h3a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 19.5 7.875h-3a1.875 1.875 0 0 0-1.875 1.875v.375h-6v-2.25H9A1.875 1.875 0 0 0 10.875 6V3A1.875 1.875 0 0 0 9 1.125H6A1.875 1.875 0 0 0 4.125 3v3A1.875 1.875 0 0 0 6 7.875h.375V18A2.625 2.625 0 0 0 9 20.625h5.625V21a1.875 1.875 0 0 0 1.875 1.875h3A1.875 1.875 0 0 0 21.375 21v-3a1.875 1.875 0 0 0-1.875-1.875h-3A1.875 1.875 0 0 0 14.625 18v.375H9A.375.375 0 0 1 8.625 18v-5.625h6v.375a1.875 1.875 0 0 0 1.875 1.875M6.375 3.375h2.25v2.25h-2.25zm10.5 15h2.25v2.25h-2.25zm0-8.25h2.25v2.25h-2.25z" })
  ] });
});
m.displayName = "TreeView";
export {
  m as TreeView
};
//# sourceMappingURL=TreeView.js.map
