import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, t) => {
  const a = s(), e = o ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18 2.625H6A3.375 3.375 0 0 0 2.625 6v12A3.375 3.375 0 0 0 6 21.375h12A3.375 3.375 0 0 0 21.375 18V6A3.375 3.375 0 0 0 18 2.625M19.125 18A1.125 1.125 0 0 1 18 19.125H6A1.125 1.125 0 0 1 4.875 18V6A1.125 1.125 0 0 1 6 4.875h12A1.125 1.125 0 0 1 19.125 6zM11.25 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
c.displayName = "DiceTwo";
export {
  c as DiceTwo
};
//# sourceMappingURL=DiceTwo.js.map
