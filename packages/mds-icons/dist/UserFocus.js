import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as t } from "react";
const n = v(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...i
}, h) => {
  const l = t(), o = a ? d ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 3.75v3.375a1.125 1.125 0 1 1-2.25 0v-2.25h-2.25a1.125 1.125 0 0 1 0-2.25h3.375a1.125 1.125 0 0 1 1.125 1.125m-1.125 12a1.125 1.125 0 0 0-1.125 1.125v2.25h-2.25a1.125 1.125 0 1 0 0 2.25h3.375a1.125 1.125 0 0 0 1.125-1.125v-3.375a1.125 1.125 0 0 0-1.125-1.125M7.125 19.125h-2.25v-2.25a1.125 1.125 0 0 0-2.25 0v3.375a1.125 1.125 0 0 0 1.125 1.125h3.375a1.125 1.125 0 1 0 0-2.25M3.75 8.25a1.125 1.125 0 0 0 1.125-1.125v-2.25h2.25a1.125 1.125 0 0 0 0-2.25H3.75A1.125 1.125 0 0 0 2.625 3.75v3.375A1.125 1.125 0 0 0 3.75 8.25m12.75 8.625a1.12 1.12 0 0 1-.9-.45 4.5 4.5 0 0 0-7.202 0 1.125 1.125 0 0 1-1.798-1.35 6.8 6.8 0 0 1 2.242-1.923 4.125 4.125 0 1 1 6.314 0 6.76 6.76 0 0 1 2.242 1.922 1.124 1.124 0 0 1-.898 1.801m-4.5-4.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75" })
  ] });
});
n.displayName = "UserFocus";
export {
  n as UserFocus
};
//# sourceMappingURL=UserFocus.js.map
