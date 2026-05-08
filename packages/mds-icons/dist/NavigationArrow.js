import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, e) => {
  const t = h(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: i, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.378 9.604 5.888 3.486l-.023-.008A1.875 1.875 0 0 0 3.48 5.863l.008.023 6.118 16.49a1.875 1.875 0 0 0 1.766 1.247h.033a1.875 1.875 0 0 0 1.76-1.324l.008-.027 1.99-7.11 7.111-1.991.027-.009a1.874 1.874 0 0 0 .077-3.562zm-8.43 3.562a1.13 1.13 0 0 0-.78.78l-1.846 6.59-5.434-14.65 14.649 5.437z" })
  ] });
});
m.displayName = "NavigationArrow";
export {
  m as NavigationArrow
};
//# sourceMappingURL=NavigationArrow.js.map
