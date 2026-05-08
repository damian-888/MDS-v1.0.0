import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...e
}, h) => {
  const i = s(), o = r ? l ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.219 7.263a2.63 2.63 0 0 0-1.969-.888h-4.875V5.25a4.13 4.13 0 0 0-4.125-4.125 1.13 1.13 0 0 0-1.006.622l-3.44 6.878H3A1.875 1.875 0 0 0 1.125 10.5v8.25A1.875 1.875 0 0 0 3 20.625h16.125a2.625 2.625 0 0 0 2.604-2.3l1.125-9a2.62 2.62 0 0 0-.635-2.062M3.375 10.875h3v7.5h-3zm17.25-1.828-1.125 9a.375.375 0 0 1-.375.328h-10.5v-8.36l3.264-6.528a1.875 1.875 0 0 1 1.236 1.763V7.5a1.125 1.125 0 0 0 1.125 1.125h6a.375.375 0 0 1 .375.422" })
  ] });
});
m.displayName = "ThumbsUp";
export {
  m as ThumbsUp
};
//# sourceMappingURL=ThumbsUp.js.map
