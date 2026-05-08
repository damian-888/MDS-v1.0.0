import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const t = m(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-11.67-6.33a1.125 1.125 0 0 1 0-1.593l3-3a1.127 1.127 0 1 1 1.593 1.594l-1.08 1.079h4.782a1.125 1.125 0 1 1 0 2.25h-4.781l1.08 1.08a1.127 1.127 0 1 1-1.594 1.593z" })
  ] });
});
s.displayName = "ArrowSquareLeft";
export {
  s as ArrowSquareLeft
};
//# sourceMappingURL=ArrowSquareLeft.js.map
