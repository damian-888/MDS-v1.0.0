import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const m = s(), i = r ? d ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.625 14.625a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m6.75-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.75.375A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12M8.001 9.563l3.375 2.25a1.13 1.13 0 0 0 1.248 0L16 9.563a1.126 1.126 0 0 0-1.248-1.876L12 9.524 9.25 7.688A1.126 1.126 0 0 0 8 9.563m6.437 6.105a4.79 4.79 0 0 0-4.876 0 1.124 1.124 0 1 0 1.126 1.946 2.54 2.54 0 0 1 2.624 0 1.125 1.125 0 1 0 1.126-1.947" })
  ] });
});
h.displayName = "SmileyAngry";
export {
  h as SmileyAngry
};
//# sourceMappingURL=SmileyAngry.js.map
