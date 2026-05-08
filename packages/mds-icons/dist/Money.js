import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const n = h(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.5 4.875h-21A1.125 1.125 0 0 0 .375 6v12A1.125 1.125 0 0 0 1.5 19.125h21A1.125 1.125 0 0 0 23.625 18V6A1.125 1.125 0 0 0 22.5 4.875m-5.512 12H7.012a5.64 5.64 0 0 0-4.387-4.387v-.976a5.64 5.64 0 0 0 4.387-4.387h9.976a5.64 5.64 0 0 0 4.387 4.387v.976a5.64 5.64 0 0 0-4.387 4.387m4.387-7.693a3.4 3.4 0 0 1-2.057-2.057h2.057zM4.682 7.125a3.4 3.4 0 0 1-2.057 2.057V7.125zm-2.057 7.693a3.4 3.4 0 0 1 2.057 2.057H2.625zm16.693 2.057a3.4 3.4 0 0 1 2.057-2.057v2.057zM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "Money";
export {
  s as Money
};
//# sourceMappingURL=Money.js.map
