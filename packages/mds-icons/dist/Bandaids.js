import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: d = "1em",
  title: a,
  titleId: i,
  ...o
}, e) => {
  const n = s(), l = a ? i ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m17.834 12 2.333-2.334a4.127 4.127 0 0 0-1.312-6.771 4.125 4.125 0 0 0-4.521.938L12 6.165 9.667 3.833a4.125 4.125 0 1 0-5.833 5.833l2.332 2.333-2.332 2.334a4.124 4.124 0 1 0 5.833 5.833L12 17.833l2.334 2.333a4.124 4.124 0 1 0 5.833-5.833zm-1.91-6.576a1.876 1.876 0 1 1 2.652 2.651l-2.334 2.33-2.648-2.648zm-1.272 6.575L12 14.651l-2.65-2.652L12 9.35zM5.425 8.075a1.875 1.875 0 1 1 2.651-2.651l2.33 2.333-2.648 2.649zm2.651 10.5a1.875 1.875 0 1 1-2.651-2.651l2.333-2.33 2.649 2.647zm10.5 0a1.875 1.875 0 0 1-2.651 0l-2.33-2.334 2.647-2.648 2.334 2.334a1.875 1.875 0 0 1 0 2.65z" })
  ] });
});
h.displayName = "Bandaids";
export {
  h as Bandaids
};
//# sourceMappingURL=Bandaids.js.map
