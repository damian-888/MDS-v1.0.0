import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const h = m(), o = r ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM8.625 7.5A1.125 1.125 0 0 1 9.75 6.375h4.5a1.125 1.125 0 0 1 .922 1.77l-1.72 2.456A3.749 3.749 0 1 1 8.947 16.5a1.125 1.125 0 1 1 1.606-1.574 1.5 1.5 0 1 0 1.072-2.551 1.125 1.125 0 0 1-.922-1.77l1.39-1.98H9.75A1.125 1.125 0 0 1 8.625 7.5" })
  ] });
});
s.displayName = "NumberSquareThree";
export {
  s as NumberSquareThree
};
//# sourceMappingURL=NumberSquareThree.js.map
