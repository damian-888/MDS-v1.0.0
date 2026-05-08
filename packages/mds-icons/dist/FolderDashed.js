import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...h
}, l) => {
  const i = n(), d = a ? o ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...h, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.375 19.5a1.125 1.125 0 0 1-1.125 1.125H3.692a1.82 1.82 0 0 1-1.817-1.817V18a1.125 1.125 0 0 1 2.25 0v.375H8.25A1.125 1.125 0 0 1 9.375 19.5M15 18.375h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m6-5.25a1.125 1.125 0 0 0-1.125 1.125v4.125H18.75a1.125 1.125 0 1 0 0 2.25h1.583a1.793 1.793 0 0 0 1.792-1.792V14.25A1.125 1.125 0 0 0 21 13.125m-.75-6.75h-4.5a1.125 1.125 0 0 0 0 2.25h4.125V10.5a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875m-17.25 9a1.125 1.125 0 0 0 1.125-1.125v-3a1.125 1.125 0 0 0-2.25 0v3A1.125 1.125 0 0 0 3 15.375M1.875 7.5V4.875A1.875 1.875 0 0 1 3.75 3h4.913a1.88 1.88 0 0 1 1.401.63l2.78 3.12A1.125 1.125 0 0 1 12 8.625H3A1.125 1.125 0 0 1 1.875 7.5m2.25-1.125h5.37l-1-1.125h-4.37z" })
  ] });
});
s.displayName = "FolderDashed";
export {
  s as FolderDashed
};
//# sourceMappingURL=FolderDashed.js.map
