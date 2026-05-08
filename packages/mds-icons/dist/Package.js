import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const s = v(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = m(), r = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.15 5.872 12.9 1.356a1.87 1.87 0 0 0-1.8 0L2.85 5.872a1.88 1.88 0 0 0-.975 1.646v8.964a1.88 1.88 0 0 0 .975 1.645l8.25 4.516a1.87 1.87 0 0 0 1.8 0l8.25-4.516a1.87 1.87 0 0 0 .975-1.645V7.518a1.87 1.87 0 0 0-.975-1.646M12 3.428l6.75 3.697-2.01 1.1-6.75-3.696zm0 7.39L5.25 7.126l2.396-1.313 6.75 3.695zM4.125 9.075l6.75 3.694v7.187l-6.75-3.695zm9 10.881v-7.187l2.25-1.231v2.713a1.125 1.125 0 1 0 2.25 0v-3.945l2.25-1.231v7.186z" })
  ] });
});
s.displayName = "Package";
export {
  s as Package
};
//# sourceMappingURL=Package.js.map
