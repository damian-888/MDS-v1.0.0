import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...e
}, n) => {
  const d = h(), l = r ? i ?? d : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.125 3.75v16.5a1.125 1.125 0 1 1-2.25 0V3.75a1.125 1.125 0 1 1 2.25 0m-7.08 4.454a1.127 1.127 0 0 0-1.593 1.594l1.08 1.077H1.5a1.125 1.125 0 1 0 0 2.25h4.031l-1.077 1.08a1.127 1.127 0 1 0 1.594 1.593l3-3a1.125 1.125 0 0 0 0-1.594zM22.5 10.875h-4.031l1.08-1.08a1.127 1.127 0 1 0-1.594-1.593l-3 3a1.125 1.125 0 0 0 0 1.594l3 3a1.127 1.127 0 1 0 1.594-1.594l-1.08-1.077H22.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "ArrowsInLineHorizontal";
export {
  m as ArrowsInLineHorizontal
};
//# sourceMappingURL=ArrowsInLineHorizontal.js.map
