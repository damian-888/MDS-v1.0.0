import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, t) => {
  const o = h(), i = a ? d ?? o : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: i, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.106 13.396a1.125 1.125 0 0 0 .44-1.863L11.72.706a1.125 1.125 0 0 0-1.594 0l-3.539 3.54-2.04-2.04A1.127 1.127 0 1 0 2.95 3.8l2.044 2.038L1.144 9.69a2.625 2.625 0 0 0 0 3.712L9.1 21.358a2.626 2.626 0 0 0 3.712 0l7.296-7.295zm-2.961-1.385a1.1 1.1 0 0 0-.44.272l-7.484 7.484a.373.373 0 0 1-.53 0l-7.956-7.954a.375.375 0 0 1 0-.53L6.586 7.43l2.277 2.277a3 3 0 1 0 1.591-1.591L8.178 5.838l2.746-2.743 8.744 8.745zm-8.05-1.664a.75.75 0 1 1-.006.006zM24 19.501a2.25 2.25 0 0 1-4.5 0c0-1.823 1.212-3.49 1.35-3.675a1.125 1.125 0 0 1 1.8 0c.138.186 1.35 1.853 1.35 3.675" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "PaintBucket";
export {
  s as PaintBucket
};
//# sourceMappingURL=PaintBucket.js.map
