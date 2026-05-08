import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as t } from "react";
const n = s(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...c
}, d) => {
  const h = t(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...c, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.25 1.875h-4.5C6.175 1.875 3.375 6.323 3.375 12s2.8 10.125 6.375 10.125h4.5c3.575 0 6.375-4.448 6.375-10.125s-2.8-10.125-6.375-10.125m3.488 14.25h-2.146a15.3 15.3 0 0 0 .495-3h2.244a12.5 12.5 0 0 1-.593 3m-1.65-5.25a15.3 15.3 0 0 0-.496-3h2.146c.32.972.52 1.98.593 3zm.527-5.25H14.74a9 9 0 0 0-.937-1.5h.447c.503 0 1.43.21 2.365 1.5M7.01 17.798c-.894-1.531-1.385-3.59-1.385-5.798s.491-4.267 1.385-5.797c1.053-1.808 2.17-2.078 2.74-2.078s1.688.27 2.74 2.077c.894 1.531 1.385 3.59 1.385 5.798s-.491 4.267-1.385 5.797c-1.053 1.808-2.17 2.078-2.74 2.078s-1.687-.27-2.74-2.078m7.24 2.077h-.45a9 9 0 0 0 .938-1.5h1.875c-.933 1.29-1.86 1.5-2.363 1.5" })
  ] });
});
n.displayName = "CoinVertical";
export {
  n as CoinVertical
};
//# sourceMappingURL=CoinVertical.js.map
