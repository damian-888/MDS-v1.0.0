import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const v = h(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, e) => {
  const t = c(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.79 8.719a1.125 1.125 0 0 0-1.571-.259l-.844.604V7.5a1.125 1.125 0 0 0-1.125-1.125H3.75A1.125 1.125 0 0 0 2.625 7.5v1.564l-.844-.604A1.126 1.126 0 0 0 .47 10.29l2.156 1.54v5.42A3.375 3.375 0 0 0 6 20.625h12a3.375 3.375 0 0 0 3.375-3.375v-5.42l2.156-1.54a1.126 1.126 0 0 0 .259-1.571m-4.665 8.531A1.125 1.125 0 0 1 18 18.375H6a1.125 1.125 0 0 1-1.125-1.125V8.625h14.25zm-12-13.5V1.5a1.125 1.125 0 0 1 2.25 0v2.25a1.125 1.125 0 0 1-2.25 0m3.75 0V1.5a1.125 1.125 0 0 1 2.25 0v2.25a1.125 1.125 0 1 1-2.25 0m3.75 0V1.5a1.125 1.125 0 0 1 2.25 0v2.25a1.125 1.125 0 1 1-2.25 0" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "CookingPot";
export {
  v as CookingPot
};
//# sourceMappingURL=CookingPot.js.map
