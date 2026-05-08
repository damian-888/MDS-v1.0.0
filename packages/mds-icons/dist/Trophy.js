import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...e
}, i) => {
  const l = s(), h = r ? a ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: h, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.75 5.625h-1.875V4.5a1.125 1.125 0 0 0-1.125-1.125H5.25A1.125 1.125 0 0 0 4.125 4.5v1.125H2.25A1.875 1.875 0 0 0 .375 7.5V9A4.13 4.13 0 0 0 4.5 13.125h.072a7.89 7.89 0 0 0 6.303 5.17v1.58H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25h-1.875v-1.583c2.9-.423 5.3-2.457 6.281-5.167h.094A4.13 4.13 0 0 0 23.625 9V7.5a1.875 1.875 0 0 0-1.875-1.875M2.625 9V7.875h1.5V10.5q-.002.17.008.338A1.875 1.875 0 0 1 2.625 9m15 1.416c0 3.124-2.504 5.686-5.582 5.709A5.625 5.625 0 0 1 6.375 10.5V5.625h11.25zM21.375 9a1.875 1.875 0 0 1-1.511 1.84 8 8 0 0 0 .011-.424V7.875h1.5z" })
  ] });
});
c.displayName = "Trophy";
export {
  c as Trophy
};
//# sourceMappingURL=Trophy.js.map
