import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const g = t(({
  size: l = "1em",
  title: i,
  titleId: d,
  ...a
}, e) => {
  const h = s(), o = i ? d ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: e, "aria-labelledby": o, ...a, children: [
    i ? /* @__PURE__ */ r("title", { id: o, children: i }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.625 1.125a7.52 7.52 0 0 0-6.9 4.534 5.25 5.25 0 1 0-.6 10.466h2.888l-1.228 2.046a1.125 1.125 0 0 0 .965 1.704h1.763l-1.228 2.046a1.125 1.125 0 0 0 1.93 1.157l2.25-3.75a1.126 1.126 0 0 0-.965-1.703h-1.763l.9-1.5h1.988a7.5 7.5 0 0 0 0-15m0 12.75h-7.5a3 3 0 0 1 0-6h.026q-.015.154-.024.31a1.127 1.127 0 0 0 2.25.13 5.256 5.256 0 1 1 5.248 5.56" })
  ] });
});
g.displayName = "CloudLightning";
export {
  g as CloudLightning
};
//# sourceMappingURL=CloudLightning.js.map
