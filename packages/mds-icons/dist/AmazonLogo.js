import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const n = h(), a = o ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.625 15.75v3a1.125 1.125 0 0 1-2.25 0v-.29C20.21 19.537 16.9 22.123 12 22.123c-6.056 0-9.684-3.954-9.836-4.125a1.125 1.125 0 1 1 1.672-1.5c.029.031 3.14 3.375 8.164 3.375 3.999 0 6.782-2.117 7.77-3h-.27a1.125 1.125 0 0 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125m-9-7.68v-.196A3 3 0 0 0 9.11 6.238 1.125 1.125 0 0 1 7.225 5.01a5.25 5.25 0 0 1 9.65 2.864V16.5a1.125 1.125 0 0 1-2.236.17 5.25 5.25 0 1 1-.014-8.6m0 4.304a3 3 0 1 0-5.998 0 3 3 0 0 0 5.998 0" })
  ] });
});
s.displayName = "AmazonLogo";
export {
  s as AmazonLogo
};
//# sourceMappingURL=AmazonLogo.js.map
