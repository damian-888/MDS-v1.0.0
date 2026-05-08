import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...e
}, l) => {
  const t = m(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.875 6.75V5.625H8.344l4.538 5.672a1.125 1.125 0 0 1 0 1.406l-4.538 5.672h8.531V17.25a1.125 1.125 0 0 1 2.25 0v2.25A1.125 1.125 0 0 1 18 20.625H6a1.126 1.126 0 0 1-.878-1.828L10.559 12 5.122 5.203A1.125 1.125 0 0 1 6 3.375h12A1.125 1.125 0 0 1 19.125 4.5v2.25a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
s.displayName = "Sigma";
export {
  s as Sigma
};
//# sourceMappingURL=Sigma.js.map
