import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: d = "1em",
  title: a,
  titleId: l,
  ...o
}, e) => {
  const h = c(), i = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": i, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: i, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.875 2.625A1.125 1.125 0 0 0 21.75 3.75a4.6 4.6 0 0 1-.312 1.5c-.416.997-1.054 1.125-1.563 1.125-.826 0-1.398-.797-2.241-2.108-.9-1.4-2.02-3.142-4.134-3.142-1.7 0-3 .917-3.67 2.582a6.4 6.4 0 0 0-.336 1.168H8.25A1.875 1.875 0 0 0 6.375 6.75v.673A8.625 8.625 0 0 0 10.5 23.625h.156a8.624 8.624 0 0 0 3.97-16.202V6.75a1.875 1.875 0 0 0-1.876-1.875h-.944q.056-.19.131-.375c.417-.996 1.054-1.125 1.563-1.125.826 0 1.398.797 2.242 2.108.899 1.4 2.02 3.142 4.133 3.142 1.7 0 3-.917 3.67-2.582A6.7 6.7 0 0 0 24 3.75a1.125 1.125 0 0 0-1.125-1.125m-9.825 6.53a6.375 6.375 0 1 1-5.1 0 1.13 1.13 0 0 0 .675-1.032v-.998h3.75v1a1.13 1.13 0 0 0 .675 1.03m-2.601 9.76a1.125 1.125 0 0 1-1.411.737A4.86 4.86 0 0 1 5.625 15a1.125 1.125 0 1 1 2.25 0 2.615 2.615 0 0 0 1.838 2.505 1.125 1.125 0 0 1 .736 1.41" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "Bomb";
export {
  m as Bomb
};
//# sourceMappingURL=Bomb.js.map
