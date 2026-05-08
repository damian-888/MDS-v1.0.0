import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const c = s(), o = r ? d ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.305 5.502c-.591-1.02-2.156-1.975-6.202-.91A8.995 8.995 0 0 0 3.024 12.67C.052 15.645.103 17.477.697 18.5c.56.964 1.675 1.375 3.117 1.375.917 0 1.968-.166 3.089-.46a8.995 8.995 0 0 0 14.072-8.086c1.341-1.348 2.236-2.644 2.53-3.75.265-.977.037-1.672-.2-2.078M12 5.252a6.76 6.76 0 0 1 6.58 5.25c-1.33 1.193-3.111 2.492-5.275 3.736-2.038 1.171-4.083 2.097-5.915 2.686A6.75 6.75 0 0 1 12 5.252m-9.357 12.12c-.058-.1-.016-.77 1-2.035a9 9 0 0 0 1.265 2.196c-1.616.244-2.203-.056-2.265-.16M12 18.752a6.7 6.7 0 0 1-2.115-.342 37 37 0 0 0 4.54-2.22 36 36 0 0 0 4.178-2.782A6.76 6.76 0 0 1 12 18.752M21.335 7c-.12.448-.451 1.019-.975 1.669a9 9 0 0 0-1.265-2.199c1.484-.222 2.172 0 2.264.16.016.028.036.148-.024.37" })
  ] });
});
m.displayName = "Planet";
export {
  m as Planet
};
//# sourceMappingURL=Planet.js.map
