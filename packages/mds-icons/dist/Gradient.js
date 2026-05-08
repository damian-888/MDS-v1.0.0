import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, o) => {
  const t = m(), h = a ? e ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": h, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: h, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M1.875 10.125A1.125 1.125 0 0 1 3 9h7.125a1.125 1.125 0 0 1 0 2.25H3a1.125 1.125 0 0 1-1.125-1.125M21 9h-7.125a1.125 1.125 0 0 0 0 2.25H21A1.125 1.125 0 1 0 21 9M6.375 12.75H3A1.125 1.125 0 1 0 3 15h3.375a1.125 1.125 0 1 0 0-2.25m14.625 0h-3.375a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25M9 13.875A1.125 1.125 0 0 0 10.125 15h3.75a1.125 1.125 0 1 0 0-2.25h-3.75A1.125 1.125 0 0 0 9 13.875M4.875 16.5H3a1.125 1.125 0 1 0 0 2.25h1.875a1.125 1.125 0 1 0 0-2.25m5.25 0h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25m5.25 0h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25m5.625 0h-1.875a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25m-18-9h18a1.125 1.125 0 0 0 0-2.25H3A1.125 1.125 0 0 0 3 7.5" })
  ] });
});
s.displayName = "Gradient";
export {
  s as Gradient
};
//# sourceMappingURL=Gradient.js.map
