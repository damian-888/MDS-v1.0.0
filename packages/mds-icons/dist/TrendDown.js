import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, i) => {
  const n = s(), d = r ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": d, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 12v6a1.125 1.125 0 0 1-1.125 1.125h-6a1.125 1.125 0 0 1 0-2.25h3.281l-6.281-6.281-2.954 2.955a1.125 1.125 0 0 1-1.594 0l-6.75-6.75a1.127 1.127 0 1 1 1.594-1.594L9 11.156l2.954-2.955a1.124 1.124 0 0 1 1.594 0l7.077 7.08v-3.28a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
w.displayName = "TrendDown";
export {
  w as TrendDown
};
//# sourceMappingURL=TrendDown.js.map
