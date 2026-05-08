import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const h = m(), l = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 2.25V13.5H16.81a1.86 1.86 0 0 0-1.325.55l-1.704 1.7H10.22l-1.704-1.7a1.86 1.86 0 0 0-1.325-.55H4.875V4.875zm-14.25 14.25V15.75h2.156l1.7 1.7a1.86 1.86 0 0 0 1.33.55h3.879a1.86 1.86 0 0 0 1.325-.55l1.704-1.7h2.156v3.375zm3.33-8.204a1.125 1.125 0 0 1 0-1.594l3-3a1.125 1.125 0 0 1 1.593 0l3 3a1.127 1.127 0 1 1-1.594 1.594l-1.079-1.077v3.281a1.125 1.125 0 1 1-2.25 0V9.844l-1.08 1.08a1.124 1.124 0 0 1-1.59-.003" })
  ] });
});
s.displayName = "TrayArrowUp";
export {
  s as TrayArrowUp
};
//# sourceMappingURL=TrayArrowUp.js.map
