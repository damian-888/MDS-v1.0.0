import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = h(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M3.375 12.002A1.125 1.125 0 0 1 4.5 10.877h6.375a1.125 1.125 0 0 1 0 2.25H4.5a1.125 1.125 0 0 1-1.125-1.125M4.5 7.127h4.875a1.125 1.125 0 1 0 0-2.25H4.5a1.125 1.125 0 0 0 0 2.25m12.375 9.75H4.5a1.125 1.125 0 0 0 0 2.25h12.375a1.125 1.125 0 1 0 0-2.25m4.92-9.421-3.75-3.75a1.125 1.125 0 0 0-1.593 0l-3.75 3.75a1.127 1.127 0 1 0 1.594 1.594l1.829-1.83v6.282a1.125 1.125 0 1 0 2.25 0V7.22l1.83 1.83a1.126 1.126 0 1 0 1.593-1.594z" })
  ] });
});
m.displayName = "SortDescending";
export {
  m as SortDescending
};
//# sourceMappingURL=SortDescending.js.map
