import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: i = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = s(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 20.25a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125M7.5 16.875a1.13 1.13 0 0 0 .796-.33l8.579-8.576v6.281a1.125 1.125 0 1 0 2.25 0v-9A1.125 1.125 0 0 0 18 4.125H9a1.125 1.125 0 0 0 0 2.25h6.281l-8.577 8.58a1.125 1.125 0 0 0 .796 1.92" })
  ] });
});
w.displayName = "ArrowLineUpRight";
export {
  w as ArrowLineUpRight
};
//# sourceMappingURL=ArrowLineUpRight.js.map
