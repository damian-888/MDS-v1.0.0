import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = s(), r = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9 11.626a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75m0 4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m12.046-4.92a1.125 1.125 0 0 1 0 1.593l-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l4.5-4.5a1.125 1.125 0 0 1 1.594 0M17.67 9.33a1.125 1.125 0 0 1 0 1.594l-1.875 1.875a1.127 1.127 0 1 1-1.594-1.594l1.875-1.875a1.125 1.125 0 0 1 1.594 0M21.796 6.8l-1.5 1.5a1.127 1.127 0 1 1-1.594-1.594l1.5-1.5A1.127 1.127 0 1 1 21.796 6.8M11.202 8.205l6.75-6.75a1.127 1.127 0 1 1 1.594 1.594l-6.75 6.75a1.127 1.127 0 1 1-1.594-1.594m2.834 10.243a1.124 1.124 0 0 1 0 1.594 7.127 7.127 0 0 1-10.077-.002 7.125 7.125 0 0 1 .003-10.077l7.757-7.758A1.127 1.127 0 0 1 13.312 3.8l-7.76 7.755a4.875 4.875 0 0 0 6.895 6.894 1.125 1.125 0 0 1 1.59 0z" })
  ] });
});
h.displayName = "Meteor";
export {
  h as Meteor
};
//# sourceMappingURL=Meteor.js.map
