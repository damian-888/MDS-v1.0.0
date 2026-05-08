import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const c = t(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const n = m(), d = r ? i ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.297 15.424a6.75 6.75 0 1 0-8.344 0 11.6 11.6 0 0 0-4.564 3.351 1.125 1.125 0 0 0 1.723 1.448c1.283-1.528 3.544-3.35 7.013-3.35s5.73 1.822 7.014 3.35a1.125 1.125 0 0 0 1.723-1.448 11.6 11.6 0 0 0-4.565-3.351m-8.672-5.3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m18 0a13.4 13.4 0 0 1-1.088 5.318 1.126 1.126 0 1 1-2.063-.886 11.3 11.3 0 0 0 0-8.864 1.124 1.124 0 1 1 2.063-.887 13.4 13.4 0 0 1 1.088 5.319M19.407 6.07a10.15 10.15 0 0 1 0 8.108 1.126 1.126 0 0 1-2.063-.902 7.9 7.9 0 0 0 0-6.304 1.125 1.125 0 1 1 2.063-.902" })
  ] });
});
c.displayName = "UserSound";
export {
  c as UserSound
};
//# sourceMappingURL=UserSound.js.map
