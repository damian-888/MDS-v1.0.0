import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const w = t(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const n = m(), a = r ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 2.25V13.5H16.81a1.86 1.86 0 0 0-1.325.55l-1.704 1.7H10.22l-1.704-1.7a1.86 1.86 0 0 0-1.325-.55H4.875V4.875zm-14.25 14.25V15.75h2.156l1.7 1.7a1.86 1.86 0 0 0 1.33.55h3.879a1.86 1.86 0 0 0 1.325-.55l1.704-1.7h2.156v3.375zm3.33-8.204a1.127 1.127 0 1 1 1.593-1.594l1.077 1.08V7.124a1.125 1.125 0 1 1 2.25 0v3.281l1.08-1.08a1.127 1.127 0 1 1 1.593 1.594l-3 3a1.125 1.125 0 0 1-1.594 0z" })
  ] });
});
w.displayName = "TrayArrowDown";
export {
  w as TrayArrowDown
};
//# sourceMappingURL=TrayArrowDown.js.map
