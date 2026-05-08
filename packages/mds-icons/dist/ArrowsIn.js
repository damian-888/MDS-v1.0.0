import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = s(), l = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.125 9.75V6a1.125 1.125 0 1 1 2.25 0V7.03l3.329-3.33a1.127 1.127 0 0 1 1.594 1.594l-3.33 3.33H18a1.125 1.125 0 0 1 0 2.25h-3.75a1.125 1.125 0 0 1-1.125-1.125M9.75 13.125H6a1.125 1.125 0 1 0 0 2.25h1.031l-3.327 3.329a1.127 1.127 0 1 0 1.594 1.594l3.327-3.33V18a1.125 1.125 0 0 0 2.25 0v-3.75a1.125 1.125 0 0 0-1.125-1.125m7.219 2.25H18a1.125 1.125 0 0 0 0-2.25h-3.75a1.125 1.125 0 0 0-1.125 1.125V18a1.125 1.125 0 1 0 2.25 0v-1.031l3.329 3.33a1.127 1.127 0 0 0 1.594-1.594zM9.75 4.875A1.125 1.125 0 0 0 8.625 6V7.03l-3.33-3.327a1.127 1.127 0 0 0-1.593 1.594l3.33 3.327H6a1.125 1.125 0 0 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125V6A1.125 1.125 0 0 0 9.75 4.875" })
  ] });
});
m.displayName = "ArrowsIn";
export {
  m as ArrowsIn
};
//# sourceMappingURL=ArrowsIn.js.map
