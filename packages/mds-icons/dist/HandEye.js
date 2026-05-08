import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const s = v(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...i
}, l) => {
  const n = m(), d = a ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 17.249a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.125-6.75v3.75a8.625 8.625 0 1 1-17.25 0V7.124a3 3 0 0 1 3.75-2.906v-.094a3 3 0 0 1 5.7-1.312 3 3 0 0 1 4.05 2.812v1.969a3 3 0 0 1 3.75 2.906m-2.25 0a.75.75 0 1 0-1.5 0 1.125 1.125 0 1 1-2.25 0V5.624a.75.75 0 1 0-1.5 0v4.125a1.125 1.125 0 1 1-2.25 0V4.124a.75.75 0 1 0-1.5 0v6.375a1.125 1.125 0 0 1-2.25 0V7.124a.75.75 0 1 0-1.5 0v7.125a6.375 6.375 0 1 0 12.75 0zM12 11.999a5.23 5.23 0 0 0-4.677 2.863 1.125 1.125 0 0 0 2.003 1.024 3 3 0 0 1 5.344 0 1.124 1.124 0 0 0 1.517.49 1.125 1.125 0 0 0 .49-1.514A5.23 5.23 0 0 0 12 12" })
  ] });
});
s.displayName = "HandEye";
export {
  s as HandEye
};
//# sourceMappingURL=HandEye.js.map
