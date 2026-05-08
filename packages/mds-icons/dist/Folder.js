import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...i
}, a) => {
  const h = s(), d = r ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 6.375h-7.745l-2.437-2.746A1.88 1.88 0 0 0 8.662 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.933a1.82 1.82 0 0 0 1.817 1.817h16.641a1.793 1.793 0 0 0 1.792-1.792V8.25a1.875 1.875 0 0 0-1.875-1.875M4.125 5.25h4.37l1 1.125h-5.37zm15.75 13.125H4.125v-9.75h15.75z" })
  ] });
});
m.displayName = "Folder";
export {
  m as Folder
};
//# sourceMappingURL=Folder.js.map
