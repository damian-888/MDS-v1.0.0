import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: o = "1em",
  title: l,
  titleId: e,
  ...d
}, i) => {
  const n = c(), r = l ? e ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.335 2.993A1.125 1.125 0 1 0 3.67 4.506l2.236 2.465A13.8 13.8 0 0 0 2.023 9.69c-2.011 2.011-2.205 4.978-.47 7.218a1.875 1.875 0 0 0 2.15.593l4.585-1.627.042-.016a1.87 1.87 0 0 0 1.14-1.374l.51-2.552q.171-.055.348-.094l8.335 9.172a1.125 1.125 0 1 0 1.664-1.513zm2.484 8.284-.506 2.557-4.14 1.467c-.859-1.297-.695-2.883.443-4.021a11.4 11.4 0 0 1 3.891-2.552l1.188 1.303a1.88 1.88 0 0 0-.876 1.246m14.625 5.625c-.263.339-.635.577-1.054.674a1.125 1.125 0 0 1-.651-2.149c.957-1.32.82-2.973-.355-4.148-2.124-2.125-5.009-3.333-8.11-3.404a1.125 1.125 0 1 1 .025-2.25h.025c3.687.081 7.115 1.523 9.65 4.06 2.011 2.015 2.206 4.982.471 7.218z" })
  ] });
});
s.displayName = "PhoneSlash";
export {
  s as PhoneSlash
};
//# sourceMappingURL=PhoneSlash.js.map
