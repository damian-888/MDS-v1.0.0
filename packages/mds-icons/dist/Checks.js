import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = h(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m14.288 8.303-8.4 8.25a1.125 1.125 0 0 1-1.577 0l-3.6-3.536a1.125 1.125 0 1 1 1.577-1.605l2.813 2.761 7.611-7.475a1.125 1.125 0 1 1 1.577 1.605m9.014-1.594a1.126 1.126 0 0 0-1.593-.014l-7.61 7.478-.738-.725a1.125 1.125 0 1 0-1.577 1.605l1.527 1.5a1.125 1.125 0 0 0 1.577 0l8.4-8.25a1.126 1.126 0 0 0 .014-1.591z" })
  ] });
});
m.displayName = "Checks";
export {
  m as Checks
};
//# sourceMappingURL=Checks.js.map
