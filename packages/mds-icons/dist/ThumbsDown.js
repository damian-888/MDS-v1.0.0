import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, h) => {
  const i = t(), a = o ? l ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m22.854 14.675-1.125-9a2.625 2.625 0 0 0-2.604-2.3H3A1.875 1.875 0 0 0 1.125 5.25v8.25A1.875 1.875 0 0 0 3 15.375h3.804l3.44 6.878a1.12 1.12 0 0 0 1.006.622 4.13 4.13 0 0 0 4.125-4.125v-1.125h4.875a2.625 2.625 0 0 0 2.604-2.95m-16.479-1.55h-3v-7.5h3zm14.156 2.123a.37.37 0 0 1-.281.127h-6a1.125 1.125 0 0 0-1.125 1.125v2.25a1.87 1.87 0 0 1-1.236 1.762l-3.264-6.527v-8.36h10.5a.375.375 0 0 1 .375.328l1.125 9a.38.38 0 0 1-.094.295" })
  ] });
});
s.displayName = "ThumbsDown";
export {
  s as ThumbsDown
};
//# sourceMappingURL=ThumbsDown.js.map
