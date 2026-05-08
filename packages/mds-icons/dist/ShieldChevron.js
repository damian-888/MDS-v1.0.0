import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const h = s(), o = r ? i ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 3.375h-15A1.875 1.875 0 0 0 2.625 5.25v5.25c0 5.09 2.468 8.177 4.538 9.87 2.222 1.819 4.447 2.438 4.54 2.466.195.052.4.052.593 0 .094-.027 2.319-.647 4.541-2.465 2.07-1.694 4.538-4.781 4.538-9.871V5.25A1.875 1.875 0 0 0 19.5 3.375M4.875 5.625h14.25V10.5a11.2 11.2 0 0 1-.656 3.904l-5.823-4.076a1.125 1.125 0 0 0-1.29 0L5.53 14.404a11.2 11.2 0 0 1-.656-3.904zm10.602 12.952A11.8 11.8 0 0 1 12 20.567a11.8 11.8 0 0 1-3.477-1.99 10.2 10.2 0 0 1-1.96-2.15L12 12.624l5.438 3.805a10.2 10.2 0 0 1-1.96 2.149" })
  ] });
});
m.displayName = "ShieldChevron";
export {
  m as ShieldChevron
};
//# sourceMappingURL=ShieldChevron.js.map
