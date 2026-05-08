import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = s(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m22.761 13.998-1.79-4.895a1.875 1.875 0 0 0-2.398-1.116l-5.748 2.083 1.021-5.835a1.875 1.875 0 0 0-1.514-2.173l-5.126-.909A1.87 1.87 0 0 0 5.04 2.676L2.696 16.094a4.5 4.5 0 0 0 3.622 5.21q.406.07.816.07H21a1.875 1.875 0 0 0 1.875-1.875v-4.857a2 2 0 0 0-.114-.644m-13.48 3.268a2.24 2.24 0 0 1-1.711 1.807 2.2 2.2 0 0 1-.86.017 2.25 2.25 0 0 1-1.803-2.608L7.191 3.436l4.375.782zm2.216.387.88-5.028 6.609-2.395 1.528 4.18-9.022 3.27q.005-.013.007-.027zm9.128 1.471H14.11l6.514-2.36zM8.364 16.318l-.131.75a1.125 1.125 0 0 1-2.218-.388l.132-.75a1.125 1.125 0 0 1 2.216.388" })
  ] });
});
h.displayName = "Swatches";
export {
  h as Swatches
};
//# sourceMappingURL=Swatches.js.map
