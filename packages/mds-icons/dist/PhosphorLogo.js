import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, h) => {
  const l = n(), d = o ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 9.75a7.13 7.13 0 0 0-7.125-7.125h-7.5A1.125 1.125 0 0 0 5.625 3.75v12a7.883 7.883 0 0 0 7.875 7.875 1.125 1.125 0 0 0 1.125-1.125v-5.635a7.134 7.134 0 0 0 6.75-7.115m-13.5-1.705 3.701 6.58H7.875zm4.5 3.41-3.701-6.58h3.701zm-4.386 5.42h4.386v4.387a5.64 5.64 0 0 1-4.386-4.387m6.636-2.266V4.891a4.875 4.875 0 0 1 0 9.718" })
  ] });
});
s.displayName = "PhosphorLogo";
export {
  s as PhosphorLogo
};
//# sourceMappingURL=PhosphorLogo.js.map
