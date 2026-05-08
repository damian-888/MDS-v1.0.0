import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const c = s(), l = a ? o ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.333 2.994a1.125 1.125 0 1 0-1.665 1.513l1.5 1.654c-3.23 2.151-4.632 5.237-4.7 5.383a1.13 1.13 0 0 0 0 .914c.036.077.857 1.9 2.672 3.713 2.426 2.424 5.485 3.704 8.86 3.704 1.64.01 3.266-.31 4.781-.937l1.884 2.072a1.125 1.125 0 0 0 1.665-1.514zM12 17.625c-2.774 0-5.2-1.006-7.21-2.988A12.3 12.3 0 0 1 2.768 12c.494-.873 1.761-2.803 3.937-4.152l8.446 9.292a10.3 10.3 0 0 1-3.15.485m11.531-5.167c-.033.076-.843 1.875-2.625 3.671a1.126 1.126 0 0 1-1.86-1.219c.063-.138.154-.263.267-.365A12.2 12.2 0 0 0 21.233 12a12.2 12.2 0 0 0-2.023-2.636C17.2 7.381 14.774 6.375 12 6.375q-.472 0-.937.04a1.125 1.125 0 1 1-.188-2.242c.369-.032.75-.048 1.125-.048 3.375 0 6.434 1.282 8.859 3.705 1.814 1.814 2.635 3.638 2.67 3.714a1.13 1.13 0 0 1 .002.914" })
  ] });
});
h.displayName = "EyeSlash";
export {
  h as EyeSlash
};
//# sourceMappingURL=EyeSlash.js.map
