import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = n(), r = a ? d ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.125 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-3.75-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11.25 6.75c0 .651-.073 1.3-.22 1.935l1.796.784a1.126 1.126 0 1 1-.902 2.062l-1.687-.736a8.625 8.625 0 0 1-15.231 0l-1.688.736a1.126 1.126 0 0 1-.901-2.062l1.795-.784a8.6 8.6 0 0 1-.212-1.935v-.375H1.5a1.125 1.125 0 1 1 0-2.25h1.875V10.5c0-.651.073-1.3.22-1.935L1.798 7.78a1.126 1.126 0 1 1 .902-2.062l1.687.736a8.625 8.625 0 0 1 15.231 0l1.688-.736a1.125 1.125 0 1 1 .901 2.062l-1.795.784a8.6 8.6 0 0 1 .212 1.935v.375H22.5a1.125 1.125 0 1 1 0 2.25h-1.875zm-15-2.625h12.75V10.5a6.375 6.375 0 1 0-12.75 0zm5.25 8.899v-6.65h-5.25v.376a6.384 6.384 0 0 0 5.25 6.274m7.5-6.274v-.375h-5.25v6.649a6.385 6.385 0 0 0 5.25-6.274" })
  ] });
});
v.displayName = "Bug";
export {
  v as Bug
};
//# sourceMappingURL=Bug.js.map
