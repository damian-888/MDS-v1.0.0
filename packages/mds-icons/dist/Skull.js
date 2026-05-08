import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as c } from "react";
const h = v(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...e
}, i) => {
  const t = c(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M10.875 12.375a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m4.5-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m6.75.75c0 2.798-1.223 5.417-3.375 7.267v2.108a1.875 1.875 0 0 1-1.875 1.875h-9.75A1.875 1.875 0 0 1 5.25 20.25v-2.108c-2.156-1.85-3.375-4.469-3.375-7.267 0-5.377 4.542-9.75 10.125-9.75s10.125 4.373 10.125 9.75m-2.25 0c0-4.135-3.532-7.5-7.875-7.5-4.342 0-7.875 3.365-7.875 7.5 0 2.28 1.07 4.406 2.935 5.84a1.13 1.13 0 0 1 .44.893v2.267H9V18a1.125 1.125 0 0 1 2.25 0v1.875h1.5V18A1.125 1.125 0 1 1 15 18v1.875h1.5v-2.267a1.13 1.13 0 0 1 .44-.891c1.865-1.436 2.935-3.563 2.935-5.842" })
  ] });
});
h.displayName = "Skull";
export {
  h as Skull
};
//# sourceMappingURL=Skull.js.map
