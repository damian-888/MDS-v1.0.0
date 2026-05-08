import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...e
}, i) => {
  const n = v(), d = a ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: d, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 14.625V18c0 1.298-.153 2.486-.43 3.345a1.124 1.124 0 1 1-2.14-.69c.2-.623.32-1.616.32-2.655v-3.375a.75.75 0 1 0-1.5 0V15a1.125 1.125 0 1 1-2.25 0v-1.875a.75.75 0 1 0-1.5 0v1.125a1.125 1.125 0 1 1-2.25 0V7.875a.75.75 0 1 0-1.5 0V18a1.125 1.125 0 0 1-2.08.594l-1.75-2.812-.02-.032a.751.751 0 0 0-1.306.742l2.369 3.927A1.125 1.125 0 1 1 5.41 21.58l-2.372-3.937-.012-.019a3 3 0 0 1 4.849-3.484V7.875a3 3 0 1 1 6 0v2.344a3 3 0 0 1 3.448 1.594 3 3 0 0 1 4.052 2.812M5.25 9a1.125 1.125 0 0 0 1.125-1.125 4.5 4.5 0 0 1 9 0 1.125 1.125 0 0 0 2.25 0 6.75 6.75 0 1 0-13.5 0A1.125 1.125 0 0 0 5.25 9" })
  ] });
});
c.displayName = "HandTap";
export {
  c as HandTap
};
//# sourceMappingURL=HandTap.js.map
