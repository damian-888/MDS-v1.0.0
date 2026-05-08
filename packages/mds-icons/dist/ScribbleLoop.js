import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const p = n(({
  size: l = "1em",
  title: i,
  titleId: d,
  ...e
}, c) => {
  const a = h(), o = i ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: c, "aria-labelledby": o, ...e, children: [
    i ? /* @__PURE__ */ r("title", { id: o, children: i }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.71 14.25c-.125-.138-2.227-2.423-5.645-3.815-.202-1.713-.854-3.272-1.885-4.472-1.45-1.695-3.543-2.588-6.055-2.588-5.021 0-8.28 4.48-8.415 4.67a1.126 1.126 0 0 0 1.83 1.313c.027-.041 2.708-3.733 6.585-3.733 1.86 0 3.323.605 4.348 1.798.55.654.947 1.423 1.163 2.25a13.5 13.5 0 0 0-2.829-.298c-2.531 0-4.668.668-6.173 1.934C5.278 12.45 4.5 14.042 4.5 15.68c0 2.458 1.822 4.946 5.307 4.946 4.869 0 7.72-3.776 8.238-7.728a14.7 14.7 0 0 1 3.996 2.858 1.125 1.125 0 1 0 1.668-1.505m-9.425 2.038c-.777.953-2.183 2.087-4.478 2.087-2.112 0-3.057-1.354-3.057-2.695 0-1.953 1.896-4.055 6.057-4.055 1.035.003 2.065.149 3.06.433-.095 1.577-.66 3.098-1.582 4.23" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
p.displayName = "ScribbleLoop";
export {
  p as ScribbleLoop
};
//# sourceMappingURL=ScribbleLoop.js.map
