import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = h(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.625 4.5V9a1.125 1.125 0 1 1-2.25 0V7.219l-3.33 3.33a1.127 1.127 0 1 1-1.593-1.594l3.33-3.33H15a1.125 1.125 0 0 1 0-2.25h4.5A1.125 1.125 0 0 1 20.625 4.5m-11.67 8.954-3.33 3.327V15a1.125 1.125 0 0 0-2.25 0v4.5A1.125 1.125 0 0 0 4.5 20.625H9a1.125 1.125 0 1 0 0-2.25H7.219l3.33-3.33a1.127 1.127 0 1 0-1.594-1.593zm10.545.421A1.125 1.125 0 0 0 18.375 15v1.781l-3.33-3.33a1.127 1.127 0 1 0-1.593 1.594l3.33 3.33H15a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 0 0 1.125-1.125V15a1.125 1.125 0 0 0-1.125-1.125M7.219 5.625H9a1.125 1.125 0 0 0 0-2.25H4.5A1.125 1.125 0 0 0 3.375 4.5V9a1.125 1.125 0 0 0 2.25 0V7.219l3.33 3.33a1.127 1.127 0 1 0 1.593-1.594z" })
  ] });
});
m.displayName = "ArrowsOut";
export {
  m as ArrowsOut
};
//# sourceMappingURL=ArrowsOut.js.map
