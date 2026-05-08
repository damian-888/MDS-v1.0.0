import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...i
}, e) => {
  const n = m(), a = o ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M14.625 1.125a7.52 7.52 0 0 0-6.9 4.534 5.25 5.25 0 1 0-.6 10.466h2.773l-1.835 2.75a1.126 1.126 0 0 0 1.874 1.25l2.665-4h2.023a7.5 7.5 0 0 0 0-15m0 12.75h-7.5a3 3 0 0 1 0-6h.026q-.015.154-.024.31a1.127 1.127 0 0 0 2.25.13 5.256 5.256 0 1 1 5.248 5.56m.06 5.5-2.5 3.75a1.125 1.125 0 1 1-1.874-1.25l2.499-3.75a1.127 1.127 0 0 1 1.875 1.25" })
  ] });
});
s.displayName = "CloudRain";
export {
  s as CloudRain
};
//# sourceMappingURL=CloudRain.js.map
