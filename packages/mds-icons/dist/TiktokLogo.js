import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, t) => {
  const l = h(), a = o ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ i("title", { id: a, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 6.375a4.13 4.13 0 0 1-4.125-4.125 1.125 1.125 0 0 0-1.125-1.125H12a1.125 1.125 0 0 0-1.125 1.125v12.375a1.5 1.5 0 1 1-2.142-1.357 1.13 1.13 0 0 0 .642-1.016V8.25a1.125 1.125 0 0 0-1.322-1.107 7.44 7.44 0 0 0-4.414 2.6 7.67 7.67 0 0 0-1.764 4.882 7.5 7.5 0 0 0 15 0V11.5c1.298.58 2.704.878 4.125.875a1.125 1.125 0 0 0 1.125-1.125V7.5A1.125 1.125 0 0 0 21 6.375m-1.125 3.67a7.8 7.8 0 0 1-3.469-1.397 1.125 1.125 0 0 0-1.781.915v5.062a5.25 5.25 0 1 1-10.5 0 5.42 5.42 0 0 1 3-4.834v1.834a3.75 3.75 0 1 0 6 3V3.375h1.6a6.395 6.395 0 0 0 5.15 5.15z" })
  ] });
});
m.displayName = "TiktokLogo";
export {
  m as TiktokLogo
};
//# sourceMappingURL=TiktokLogo.js.map
