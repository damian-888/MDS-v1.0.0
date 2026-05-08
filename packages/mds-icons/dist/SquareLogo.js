import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...h
}, l) => {
  const a = m(), e = o ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...h, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM9 16.125h6A1.125 1.125 0 0 0 16.125 15V9A1.125 1.125 0 0 0 15 7.875H9A1.125 1.125 0 0 0 7.875 9v6A1.125 1.125 0 0 0 9 16.125m1.125-6h3.75v3.75h-3.75z" })
  ] });
});
s.displayName = "SquareLogo";
export {
  s as SquareLogo
};
//# sourceMappingURL=SquareLogo.js.map
