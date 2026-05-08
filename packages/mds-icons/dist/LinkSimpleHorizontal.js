import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...l
}, d) => {
  const n = m(), o = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M7.5 10.875h9a1.125 1.125 0 1 1 0 2.25h-9a1.125 1.125 0 1 1 0-2.25m2.25 4.5H6a3.375 3.375 0 0 1 0-6.75h3.75a1.125 1.125 0 0 0 0-2.25H6a5.625 5.625 0 0 0 0 11.25h3.75a1.125 1.125 0 1 0 0-2.25m8.25-9h-3.75a1.125 1.125 0 0 0 0 2.25H18a3.375 3.375 0 0 1 0 6.75h-3.75a1.125 1.125 0 1 0 0 2.25H18a5.625 5.625 0 1 0 0-11.25" })
  ] });
});
s.displayName = "LinkSimpleHorizontal";
export {
  s as LinkSimpleHorizontal
};
//# sourceMappingURL=LinkSimpleHorizontal.js.map
