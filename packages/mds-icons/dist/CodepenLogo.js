import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const v = t(({
  size: l = "1em",
  title: o,
  titleId: d,
  ...a
}, i) => {
  const m = s(), e = o ? d ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ r("title", { id: e, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m22.283 8.01-9.75-5.25a1.13 1.13 0 0 0-1.067 0l-9.75 5.25a1.13 1.13 0 0 0-.591.99v6a1.13 1.13 0 0 0 .593.991l9.75 5.25a1.13 1.13 0 0 0 1.066 0l9.75-5.25a1.13 1.13 0 0 0 .591-.99V9a1.13 1.13 0 0 0-.593-.991m-1.658 5.107L18.551 12l2.074-1.116zm-4.447-2.394-3.053-1.645V5.634L19.377 9zM12 12.973 10.194 12 12 11.028l1.806.972zm-1.125-7.34v3.445l-3.053 1.645L4.622 9zm-7.5 5.25L5.449 12l-2.074 1.117zm4.447 2.395 3.053 1.645v3.444L4.623 15zm5.303 5.089v-3.444l3.053-1.645 3.2 1.722z" })
  ] });
});
v.displayName = "CodepenLogo";
export {
  v as CodepenLogo
};
//# sourceMappingURL=CodepenLogo.js.map
