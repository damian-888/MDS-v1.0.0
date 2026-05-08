import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...d
}, i) => {
  const h = n(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 10.875h-2.25a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 0 2.25m-6.75-2.25h-.375V8.25a1.125 1.125 0 0 0-2.25 0v.375H6.75a1.125 1.125 0 0 0 0 2.25h.375v.375a1.125 1.125 0 0 0 2.25 0v-.375h.375a1.125 1.125 0 0 0 0-2.25m13.196 10.4a3.748 3.748 0 0 1-5.768.45l-3.615-4.1h-3.126l-3.61 4.1-.05.052a3.75 3.75 0 0 1-6.344-3.304v-.018l1.536-7.88a5.99 5.99 0 0 1 5.895-4.95h8.261a6.01 6.01 0 0 1 5.9 4.92v.018l1.534 7.89v.02a3.73 3.73 0 0 1-.613 2.803m-6.82-5.9a3.75 3.75 0 0 0 0-7.5H7.864a3.74 3.74 0 0 0-3.682 3.1v.02l-1.532 7.874a1.5 1.5 0 0 0 2.519 1.334l3.915-4.446a1.12 1.12 0 0 1 .843-.382zm5.227 3.498-.657-3.37a5.99 5.99 0 0 1-4.15 2.105l2.289 2.599a1.5 1.5 0 0 0 2.517-1.334" })
  ] });
});
v.displayName = "GameController";
export {
  v as GameController
};
//# sourceMappingURL=GameController.js.map
