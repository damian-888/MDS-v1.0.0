import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...v
}, e) => {
  const i = n(), l = a ? d ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...v, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 1.125a1.125 1.125 0 0 0-1.125 1.125v1.125h-2.25V2.25a1.125 1.125 0 1 0-2.25 0v1.125h-2.25V2.25a1.125 1.125 0 1 0-2.25 0v1.125h-2.25V2.25a1.125 1.125 0 0 0-2.25 0v19.5a1.125 1.125 0 0 0 2.25 0v-1.125h2.25v1.125a1.125 1.125 0 0 0 2.25 0v-1.125h2.25v1.125a1.125 1.125 0 1 0 2.25 0v-1.125h2.25v1.125a1.125 1.125 0 1 0 2.25 0V2.25a1.125 1.125 0 0 0-1.125-1.125m-12.375 4.5h11.25v12.75H6.375zM12 16.875a1.13 1.13 0 0 0 .965-.547l2.25-3.75a1.13 1.13 0 0 0 0-1.156l-2.25-3.75a1.126 1.126 0 0 0-1.93 0l-2.25 3.75a1.13 1.13 0 0 0 0 1.156l2.25 3.75a1.13 1.13 0 0 0 .965.547m0-6.439L12.938 12 12 13.564 11.063 12z" })
  ] });
});
m.displayName = "Rug";
export {
  m as Rug
};
//# sourceMappingURL=Rug.js.map
