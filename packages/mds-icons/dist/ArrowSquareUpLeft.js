import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const t = s(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM7.875 13.5V9A1.125 1.125 0 0 1 9 7.875h4.5a1.125 1.125 0 0 1 0 2.25h-1.781l4.08 4.08a1.127 1.127 0 1 1-1.594 1.593l-4.08-4.08V13.5a1.125 1.125 0 1 1-2.25 0" })
  ] });
});
m.displayName = "ArrowSquareUpLeft";
export {
  m as ArrowSquareUpLeft
};
//# sourceMappingURL=ArrowSquareUpLeft.js.map
