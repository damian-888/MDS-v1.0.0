import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const m = n(), o = a ? e ?? m : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m7.793 9h-1.52a6.39 6.39 0 0 0-5.148-5.149v-1.52a7.89 7.89 0 0 1 6.668 6.669m-8.918 0H8.033a4.14 4.14 0 0 1 2.842-2.842zm0 2.25v2.842a4.14 4.14 0 0 1-2.842-2.842zm2.25 0h2.842a4.14 4.14 0 0 1-2.842 2.842zm0-2.25V8.033a4.14 4.14 0 0 1 2.842 2.842zm-2.25-6.668v1.52a6.39 6.39 0 0 0-5.149 5.148h-1.52a7.89 7.89 0 0 1 6.669-6.668m-6.668 8.918h1.52a6.39 6.39 0 0 0 5.148 5.149v1.52a7.89 7.89 0 0 1-6.668-6.669m8.918 6.668v-1.52a6.39 6.39 0 0 0 5.149-5.148h1.52a7.89 7.89 0 0 1-6.669 6.668" })
  ] });
});
v.displayName = "ChartPolar";
export {
  v as ChartPolar
};
//# sourceMappingURL=ChartPolar.js.map
