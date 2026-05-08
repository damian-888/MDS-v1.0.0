import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const m = s(), i = r ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.724 14.813c-1.031 1.786-2.755 2.812-4.724 2.812S8.31 16.6 7.276 14.813a1.125 1.125 0 0 1 1.948-1.126c.365.631 1.21 1.688 2.776 1.688s2.411-1.057 2.776-1.687a1.126 1.126 0 1 1 1.948 1.124M22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12m-11.25-.375a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.75-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
c.displayName = "Smiley";
export {
  c as Smiley
};
//# sourceMappingURL=Smiley.js.map
