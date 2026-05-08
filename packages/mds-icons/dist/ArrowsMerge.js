import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const w = s(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = v(), e = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.375 3.75v6a1.13 1.13 0 0 1-.33.796l-4.92 4.923v3.562l1.08-1.08a1.127 1.127 0 1 1 1.593 1.594l-3 3a1.125 1.125 0 0 1-1.594 0l-3-3a1.127 1.127 0 1 1 1.594-1.594l1.077 1.08V15.47l-4.92-4.923a1.12 1.12 0 0 1-.33-.796v-6a1.125 1.125 0 0 1 2.25 0v5.531L12 13.406l4.125-4.125V3.75a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
w.displayName = "ArrowsMerge";
export {
  w as ArrowsMerge
};
//# sourceMappingURL=ArrowsMerge.js.map
