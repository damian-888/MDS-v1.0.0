import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: d = "1em",
  title: l,
  titleId: i,
  ...o
}, a) => {
  const t = c(), e = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "m23.906 17.543-6-13.5a1.13 1.13 0 0 0-1.03-.668h-9.75a1.13 1.13 0 0 0-1.03.668l-.002.016-6 13.484a1.125 1.125 0 0 0 1.031 1.582h21.75a1.125 1.125 0 0 0 1.031-1.582M6 9.802v7.073H2.856zm2.25 7.073V9.802l3.145 7.073zm5.606 0-5-11.25h7.288l5 11.25z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "Tent";
export {
  m as Tent
};
//# sourceMappingURL=Tent.js.map
