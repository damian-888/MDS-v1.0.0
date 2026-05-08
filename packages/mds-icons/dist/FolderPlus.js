import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...e
}, i) => {
  const h = s(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 6.375h-7.745l-2.437-2.746A1.88 1.88 0 0 0 8.662 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.933a1.82 1.82 0 0 0 1.817 1.817h16.641a1.793 1.793 0 0 0 1.792-1.792V8.25a1.875 1.875 0 0 0-1.875-1.875M8.495 5.25l1 1.125h-5.37V5.25zm11.38 13.125H4.125v-9.75h15.75zm-6.75-7.125v1.125h1.125a1.125 1.125 0 1 1 0 2.25h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a1.125 1.125 0 1 1 0-2.25h1.125V11.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
v.displayName = "FolderPlus";
export {
  v as FolderPlus
};
//# sourceMappingURL=FolderPlus.js.map
