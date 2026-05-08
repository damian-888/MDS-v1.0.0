import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, s) => {
  const l = n(), a = o ? e ?? l : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: s, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.484 5.3C17.467 4.058 14.812 3.375 12 3.375S6.533 4.058 4.516 5.3C2.33 6.646 1.125 8.494 1.125 10.5s1.205 3.857 3.39 5.203c1.733 1.066 3.938 1.72 6.31 1.883-.188 1.037-.853 1.664-1.427 2.019-1.264.78-3.07.86-4.394.197a1.125 1.125 0 1 0-1.008 2.014c.933.457 1.96.69 3 .684a6.86 6.86 0 0 0 3.579-.978c1.448-.894 2.344-2.304 2.515-3.928 2.4-.154 4.638-.81 6.39-1.889 2.19-1.346 3.395-3.194 3.395-5.205 0-2.01-1.205-3.854-3.39-5.2M6.88 14.393a1.97 1.97 0 0 1 1.89-.876c.972.13 1.55.884 1.85 1.793a12.7 12.7 0 0 1-3.74-.914zm6.082.951a5.8 5.8 0 0 0-1.009-2.327 4.32 4.32 0 0 0-2.883-1.73c-1.687-.226-3.236.552-4.134 1.968-.98-.786-1.561-1.739-1.561-2.755 0-2.643 3.95-4.875 8.625-4.875s8.625 2.233 8.625 4.875c0 2.462-3.42 4.567-7.663 4.847z" })
  ] });
});
m.displayName = "Lasso";
export {
  m as Lasso
};
//# sourceMappingURL=Lasso.js.map
