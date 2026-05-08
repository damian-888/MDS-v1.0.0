import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, i) => {
  const n = h(), e = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.875 5.25v6a1.125 1.125 0 0 1-2.25 0V7.969l-7.08 7.08a1.124 1.124 0 0 1-1.593 0L9 12.094l-5.954 5.952a1.127 1.127 0 1 1-1.594-1.594l6.75-6.75a1.125 1.125 0 0 1 1.594 0l2.954 2.954 6.281-6.281H15.75a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "TrendUp";
export {
  m as TrendUp
};
//# sourceMappingURL=TrendUp.js.map
