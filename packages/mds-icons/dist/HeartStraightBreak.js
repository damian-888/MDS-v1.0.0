import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: t,
  ...i
}, o) => {
  const d = s(), l = r ? t ?? d : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.173 5.077a5.81 5.81 0 0 0-8.213-.007l-.96.924-.96-.924a5.812 5.812 0 0 0-8.218 8.222l8.377 8.497a1.125 1.125 0 0 0 1.603 0l8.37-8.492a5.81 5.81 0 0 0 0-8.22m-1.594 6.635L12.003 19.4l-7.581-7.688A3.563 3.563 0 1 1 9.46 6.674l.015.015.906.873-.656.634A1.125 1.125 0 0 0 9.709 9.8L11.907 12l-.705.704a1.126 1.126 0 1 0 1.593 1.594l1.5-1.5a1.124 1.124 0 0 0 0-1.594l-2.189-2.19 2.426-2.33.015-.016a3.563 3.563 0 1 1 5.032 5.044" })
  ] });
});
m.displayName = "HeartStraightBreak";
export {
  m as HeartStraightBreak
};
//# sourceMappingURL=HeartStraightBreak.js.map
