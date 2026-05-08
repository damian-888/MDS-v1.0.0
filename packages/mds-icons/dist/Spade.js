import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, i) => {
  const t = h(), d = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12.503 1.244a1.13 1.13 0 0 0-1.006 0c-.393.196-9.622 4.887-9.622 11.506a5.626 5.626 0 0 0 6.517 5.555l-.495 2.475A1.125 1.125 0 0 0 9 22.125h6a1.126 1.126 0 0 0 1.103-1.345l-.495-2.475a5.626 5.626 0 0 0 6.517-5.555c0-6.619-9.229-11.31-9.622-11.506m3.997 14.88a3.36 3.36 0 0 1-1.79-.512 1.124 1.124 0 0 0-1.7 1.174l.617 3.089h-3.254l.617-3.09a1.125 1.125 0 0 0-1.7-1.173 3.376 3.376 0 0 1-5.165-2.862c0-2.652 2.21-5.058 4.063-6.609A26 26 0 0 1 12 3.528a25.7 25.7 0 0 1 3.812 2.613c1.853 1.551 4.063 3.957 4.063 6.609a3.375 3.375 0 0 1-3.375 3.375" })
  ] });
});
s.displayName = "Spade";
export {
  s as Spade
};
//# sourceMappingURL=Spade.js.map
