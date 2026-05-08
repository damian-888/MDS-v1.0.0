import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const t = m(), l = a ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 21.751a1.125 1.125 0 0 1-1.125 1.125H10.5a1.125 1.125 0 0 1 0-2.25h9.75a1.125 1.125 0 0 1 1.125 1.125m0-6.75v2.625a1.875 1.875 0 0 1-1.875 1.875h-8.99a1.87 1.87 0 0 1-1.678-1.037L3.572 7.97a1.89 1.89 0 0 1 0-1.678l2.074-4.134a1.875 1.875 0 0 1 2.505-.844l2.794 1.338.017.008a1.875 1.875 0 0 1 .84 2.515l-.017.031-1.238 2.303 2.789 5.617H19.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375h-6.021a1.87 1.87 0 0 1-1.678-1.037l-2.98-6a1.88 1.88 0 0 1 0-1.674l.016-.03 1.144-2.122-2.114-1.015-1.823 3.628 5.072 10.125h8.384z" })
  ] });
});
s.displayName = "Seat";
export {
  s as Seat
};
//# sourceMappingURL=Seat.js.map
