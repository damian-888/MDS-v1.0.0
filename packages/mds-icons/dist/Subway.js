import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = m(), l = a ? d ?? h : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 9v10.5a1.125 1.125 0 1 1-2.25 0V9a4.88 4.88 0 0 0-4.875-4.875h-4.5A4.88 4.88 0 0 0 4.875 9v10.5a1.125 1.125 0 0 1-2.25 0V9A7.13 7.13 0 0 1 9.75 1.875h4.5A7.13 7.13 0 0 1 21.375 9m-3.75 0v6.75a2.62 2.62 0 0 1-1.77 2.482l.187.475a1.125 1.125 0 0 1-1.673 1.35 1.13 1.13 0 0 1-.413-.514l-.47-1.168h-2.975l-.468 1.168a1.124 1.124 0 1 1-2.087-.836l.187-.475a2.625 2.625 0 0 1-1.768-2.482V9A2.625 2.625 0 0 1 9 6.375h6A2.625 2.625 0 0 1 17.625 9m-9 0v3.375h6.75V9A.375.375 0 0 0 15 8.625H9A.375.375 0 0 0 8.625 9m6.75 6.75v-1.125h-2.25v1.5H15a.375.375 0 0 0 .375-.375m-4.5.375v-1.5h-2.25v1.125a.375.375 0 0 0 .375.375z" })
  ] });
});
n.displayName = "Subway";
export {
  n as Subway
};
//# sourceMappingURL=Subway.js.map
