import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...l
}, d) => {
  const n = m(), o = r ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M2.625 12A3.375 3.375 0 0 0 6 15.375h3.75a1.125 1.125 0 1 1 0 2.25H6a5.625 5.625 0 1 1 0-11.25h3.75a1.125 1.125 0 0 1 0 2.25H6A3.375 3.375 0 0 0 2.625 12M18 6.375h-3.75a1.125 1.125 0 0 0 0 2.25H18a3.375 3.375 0 0 1 0 6.75h-3.75a1.125 1.125 0 1 0 0 2.25H18a5.625 5.625 0 1 0 0-11.25" })
  ] });
});
s.displayName = "LinkSimpleHorizontalBreak";
export {
  s as LinkSimpleHorizontalBreak
};
//# sourceMappingURL=LinkSimpleHorizontalBreak.js.map
