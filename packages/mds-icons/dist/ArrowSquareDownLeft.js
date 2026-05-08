import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const t = w(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM7.875 15v-4.5a1.125 1.125 0 1 1 2.25 0v1.781l4.08-4.08a1.127 1.127 0 1 1 1.593 1.594l-4.08 4.08H13.5a1.125 1.125 0 1 1 0 2.25H9A1.125 1.125 0 0 1 7.875 15" })
  ] });
});
s.displayName = "ArrowSquareDownLeft";
export {
  s as ArrowSquareDownLeft
};
//# sourceMappingURL=ArrowSquareDownLeft.js.map
