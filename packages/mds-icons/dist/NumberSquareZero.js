import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const m = s(), o = r ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 17.625c2.65 0 4.5-2.313 4.5-5.625S14.65 6.375 12 6.375 7.5 8.688 7.5 12s1.85 5.625 4.5 5.625m0-9c2.187 0 2.25 3.03 2.25 3.375s-.063 3.375-2.25 3.375S9.75 12.345 9.75 12 9.813 8.625 12 8.625m7.5-6h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25z" })
  ] });
});
h.displayName = "NumberSquareZero";
export {
  h as NumberSquareZero
};
//# sourceMappingURL=NumberSquareZero.js.map
