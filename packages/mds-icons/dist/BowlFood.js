import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const h = m(), r = o ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21 9.375h-.448a8.625 8.625 0 0 0-17.104 0H3A1.125 1.125 0 0 0 1.875 10.5a10.16 10.16 0 0 0 5.25 8.877v.123A1.875 1.875 0 0 0 9 21.375h6a1.875 1.875 0 0 0 1.875-1.875v-.123a10.16 10.16 0 0 0 5.25-8.877A1.125 1.125 0 0 0 21 9.375m-5.035-3.744a8.63 8.63 0 0 0-4.04 3.744H9.936a6.4 6.4 0 0 1 5.813-3.75q.107-.002.215.006m1.614 1.789c.337.609.572 1.27.695 1.955h-3.637A6.37 6.37 0 0 1 17.58 7.42M12 4.125q.117-.002.232.006a8.65 8.65 0 0 0-4.697 5.244H5.726A6.384 6.384 0 0 1 12 4.125m3.281 13.537a1.13 1.13 0 0 0-.656 1.023v.44h-5.25v-.44a1.13 1.13 0 0 0-.656-1.023 7.9 7.9 0 0 1-4.512-6.037h15.586a7.9 7.9 0 0 1-4.512 6.037" })
  ] });
});
s.displayName = "BowlFood";
export {
  s as BowlFood
};
//# sourceMappingURL=BowlFood.js.map
