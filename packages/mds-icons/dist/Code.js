import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = s(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.72 9.115 3.257 12l3.463 2.886a1.124 1.124 0 1 1-1.44 1.729l-4.5-3.75a1.125 1.125 0 0 1 0-1.73l4.5-3.75a1.125 1.125 0 0 1 1.44 1.73m16.5 2.02-4.5-3.75a1.125 1.125 0 1 0-1.44 1.73L20.743 12l-3.463 2.886a1.124 1.124 0 1 0 1.44 1.729l4.5-3.75a1.123 1.123 0 0 0 0-1.73m-7.836-8.442a1.125 1.125 0 0 0-1.442.673l-6 16.5a1.125 1.125 0 0 0 2.115.769l6-16.5a1.125 1.125 0 0 0-.673-1.442" })
  ] });
});
h.displayName = "Code";
export {
  h as Code
};
//# sourceMappingURL=Code.js.map
