import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const t = c(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.117 14.13a1.126 1.126 0 0 1-.149 1.585c-1.703 1.413-3.243 1.91-4.641 1.91-1.853 0-3.456-.871-4.864-1.635-2.35-1.277-4.206-2.285-6.995.028a1.125 1.125 0 1 1-1.436-1.733c3.961-3.28 7.031-1.615 9.505-.273 2.35 1.275 4.206 2.284 6.995-.03a1.125 1.125 0 0 1 1.584.149M4.467 10.018c2.79-2.314 4.646-1.305 6.995-.03 1.406.766 3.011 1.637 4.864 1.637 1.398 0 2.938-.497 4.641-1.91a1.125 1.125 0 1 0-1.436-1.732c-2.789 2.312-4.645 1.305-6.995.028-2.47-1.34-5.544-3.01-9.505.274a1.125 1.125 0 1 0 1.436 1.733" })
  ] });
});
m.displayName = "ApproximateEquals";
export {
  m as ApproximateEquals
};
//# sourceMappingURL=ApproximateEquals.js.map
