import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const a = h(), e = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.796 18.796a1.125 1.125 0 0 1-1.594 0L7.125 8.719v7.031a1.125 1.125 0 0 1-2.25 0V6A1.125 1.125 0 0 1 6 4.875h9.75a1.125 1.125 0 0 1 0 2.25H8.719l10.077 10.08a1.123 1.123 0 0 1 0 1.59" })
  ] });
});
w.displayName = "ArrowUpLeft";
export {
  w as ArrowUpLeft
};
//# sourceMappingURL=ArrowUpLeft.js.map
