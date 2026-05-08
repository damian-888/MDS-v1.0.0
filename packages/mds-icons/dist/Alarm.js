import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const m = s(), l = a ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 3.376a9.375 9.375 0 1 0 9.375 9.375A9.386 9.386 0 0 0 12 3.376m0 16.5a7.125 7.125 0 1 1 7.125-7.125A7.133 7.133 0 0 1 12 19.876M3.046 6.796a1.127 1.127 0 1 1-1.594-1.593l3-3a1.127 1.127 0 0 1 1.594 1.594zm19.5 0a1.124 1.124 0 0 1-1.594 0l-3-3a1.127 1.127 0 0 1 1.594-1.593l3 3a1.125 1.125 0 0 1 0 1.594m-6.046 4.83a1.125 1.125 0 0 1 0 2.25H12a1.125 1.125 0 0 1-1.125-1.125v-4.5a1.125 1.125 0 1 1 2.25 0v3.375z" })
  ] });
});
h.displayName = "Alarm";
export {
  h as Alarm
};
//# sourceMappingURL=Alarm.js.map
