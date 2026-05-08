import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const s = m(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...l
}, d) => {
  const t = c(), r = a ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...l, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.718 4.669a1.855 1.855 0 0 0-3.056.675L2.74 18.882a1.858 1.858 0 0 0 1.737 2.493c.219 0 .436-.04.641-.114l13.539-4.922a1.854 1.854 0 0 0 .678-3.056zm-.95 12.507-2.944-2.944.952-2.616 4.609 4.608zm-3.79-.61 1.457 1.458-2.292.834zm8.741-1.191L8.625 9.281l.938-2.585 7.74 7.742zM12 3.75V1.5a1.125 1.125 0 1 1 2.25 0v2.25a1.125 1.125 0 1 1-2.25 0m10.92 7.83a1.127 1.127 0 1 1-1.593 1.593l-1.5-1.5a1.127 1.127 0 1 1 1.593-1.594zm-.064-3.763-2.25.75a1.125 1.125 0 1 1-.712-2.135l2.25-.75a1.125 1.125 0 1 1 .712 2.135M14.682 6.18c.302-1.73 1.574-2.806 3.318-2.806.605 0 .815-.233.938-.461.11-.21.173-.44.187-.677v.013a1.125 1.125 0 1 1 2.25 0c0 1.357-.899 3.375-3.375 3.375-.463 0-.957.112-1.102.943a1.124 1.124 0 1 1-2.216-.387" })
  ] });
});
s.displayName = "Confetti";
export {
  s as Confetti
};
//# sourceMappingURL=Confetti.js.map
