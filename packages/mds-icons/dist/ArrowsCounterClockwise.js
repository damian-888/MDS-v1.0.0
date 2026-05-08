import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const w = n(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...i
}, d) => {
  const t = s(), a = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.25 10.125h-4.5A1.125 1.125 0 0 1 2.625 9V4.5a1.125 1.125 0 0 1 2.25 0V6.28l.731-.731a9.32 9.32 0 0 1 6.582-2.743h.052a9.32 9.32 0 0 1 6.55 2.669 1.126 1.126 0 0 1-1.573 1.608 7.125 7.125 0 0 0-10.016.06l-.732.73H8.25a1.125 1.125 0 0 1 0 2.25m12 3.75h-4.5a1.125 1.125 0 1 0 0 2.25h1.781l-.731.731a7.08 7.08 0 0 1-4.999 2.087h-.04a7.08 7.08 0 0 1-4.977-2.028 1.125 1.125 0 0 0-1.573 1.609 9.32 9.32 0 0 0 6.55 2.669h.052a9.32 9.32 0 0 0 6.577-2.746l.735-.729V19.5a1.125 1.125 0 1 0 2.25 0V15a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
w.displayName = "ArrowsCounterClockwise";
export {
  w as ArrowsCounterClockwise
};
//# sourceMappingURL=ArrowsCounterClockwise.js.map
