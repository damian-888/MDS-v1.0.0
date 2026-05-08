import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = m(), o = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M10.875 10.875a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.75-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.75 1.875v9a1.125 1.125 0 0 1-1.837.87L17.5 19.454l-2.038 1.668a1.125 1.125 0 0 1-1.425 0L12 19.453l-2.037 1.668a1.125 1.125 0 0 1-1.425 0L6.5 19.453l-2.037 1.668a1.125 1.125 0 0 1-1.838-.871v-9a9.375 9.375 0 0 1 18.75 0m-2.25 0a7.125 7.125 0 0 0-14.25 0v6.626l.912-.75a1.124 1.124 0 0 1 1.425 0l2.038 1.67 2.037-1.667a1.125 1.125 0 0 1 1.425 0l2.038 1.668 2.038-1.668a1.125 1.125 0 0 1 1.425 0l.912.75z" })
  ] });
});
h.displayName = "Ghost";
export {
  h as Ghost
};
//# sourceMappingURL=Ghost.js.map
