import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, e) => {
  const n = m(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.31 2.17a1.124 1.124 0 0 1 1.405-.75c1.01.31 1.934.851 2.698 1.581a1.125 1.125 0 0 1-1.555 1.627 4.5 4.5 0 0 0-1.8-1.05 1.125 1.125 0 0 1-.749-1.408m4.52 13.562a8.625 8.625 0 0 1-15.8 2.082l-3.75-6.5a3 3 0 0 1 1.802-4.389A3 3 0 0 1 8.31 3.043a3 3 0 0 1 4.969.333l1.362 2.36a3 3 0 0 1 4.703.64l1.623 2.813a8.57 8.57 0 0 1 .862 6.543m-2.813-5.42-1.62-2.811a.75.75 0 0 0-1.3.75l.627 1.085a1.125 1.125 0 0 1-.298 1.461 2.625 2.625 0 0 0-.601 3.572 1.125 1.125 0 1 1-1.862 1.262 4.88 4.88 0 0 1 .366-5.944l-2.995-5.186a.752.752 0 0 0-1.303.75l2.274 3.938a1.124 1.124 0 1 1-1.948 1.124l-2.92-5.062a.75.75 0 0 0-1.298.75l3.142 5.437a1.125 1.125 0 0 1-1.948 1.125L5.525 9.44a.75.75 0 1 0-1.299.75l3.752 6.5a6.375 6.375 0 1 0 11.042-6.376zM4.731 18.565a1.126 1.126 0 1 0-1.948 1.125c.519.899 1.149 1.73 1.874 2.473a1.125 1.125 0 1 0 1.61-1.572c-.594-.609-1.11-1.29-1.536-2.026" })
  ] });
});
s.displayName = "HandWaving";
export {
  s as HandWaving
};
//# sourceMappingURL=HandWaving.js.map
