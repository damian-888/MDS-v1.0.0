import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const c = n(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, o) => {
  const t = m(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M11.25 14.625a3 3 0 1 0-5.999 0 3 3 0 0 0 5.999 0m-3.75 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m15.375-3.75h-1.562A10.125 10.125 0 0 0 1.125 12v2.25a7.13 7.13 0 0 0 7.125 7.125H12a7.13 7.13 0 0 0 7.125-7.125v-1.125h3.75a1.125 1.125 0 0 0 0-2.25m-19.5 3.375V12a7.875 7.875 0 0 1 15.67-1.125H14.25A1.125 1.125 0 0 0 13.125 12v2.25a4.875 4.875 0 1 1-9.75 0m13.5 0a4.88 4.88 0 0 1-3.157 4.56 7.1 7.1 0 0 0 1.657-4.56v-1.125h1.5z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "BaseballHelmet";
export {
  c as BaseballHelmet
};
//# sourceMappingURL=BaseballHelmet.js.map
