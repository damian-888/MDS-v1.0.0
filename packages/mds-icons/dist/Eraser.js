import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = h(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 19.124H13.22l8.141-8.141a2.623 2.623 0 0 0 0-3.713l-3.882-3.878a2.625 2.625 0 0 0-3.713 0L2.643 14.514a2.626 2.626 0 0 0 0 3.712l2.818 2.82a1.12 1.12 0 0 0 .796.328H20.25a1.125 1.125 0 0 0 0-2.25M15.356 4.983a.375.375 0 0 1 .531 0l3.88 3.88a.375.375 0 0 1 0 .529L15 14.155 10.594 9.75zM6.723 19.124l-2.49-2.489a.375.375 0 0 1 0-.53L9 11.343l4.406 4.406-3.375 3.375z" })
  ] });
});
m.displayName = "Eraser";
export {
  m as Eraser
};
//# sourceMappingURL=Eraser.js.map
