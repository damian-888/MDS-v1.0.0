import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const v = h(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...i
}, o) => {
  const t = c(), d = l ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M24 5.251a1.125 1.125 0 0 1-1.125 1.125h-4.031l1.079 1.08a1.13 1.13 0 0 1-.366 1.837 1.13 1.13 0 0 1-1.228-.244l-3-3a1.125 1.125 0 0 1 0-1.594l3-3a1.128 1.128 0 0 1 1.594 1.594l-1.08 1.077h4.032A1.125 1.125 0 0 1 24 5.251m-6.375 5.625a3 3 0 0 0-1.052.188 3 3 0 0 0-3.448-1.594V7.126a3 3 0 0 0-6 0v6.265a3 3 0 0 0-4.849 3.485l.012.019 2.372 3.937a1.125 1.125 0 1 0 1.928-1.162l-2.37-3.927a.75.75 0 1 1 1.306-.742l.02.032 1.75 2.812a1.125 1.125 0 0 0 2.081-.594V7.126a.75.75 0 1 1 1.5 0v6.375a1.125 1.125 0 1 0 2.25 0v-1.125a.75.75 0 1 1 1.5 0v1.875a1.125 1.125 0 1 0 2.25 0v-.375a.75.75 0 1 1 1.5 0v3.375c0 1.039-.12 2.032-.32 2.655a1.127 1.127 0 0 0 1.16 1.484 1.125 1.125 0 0 0 .98-.794c.282-.859.43-2.047.43-3.345v-3.375a3 3 0 0 0-3-3" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "HandSwipeLeft";
export {
  v as HandSwipeLeft
};
//# sourceMappingURL=HandSwipeLeft.js.map
