import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const t = s(), a = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 10.126a3.38 3.38 0 0 0-3.129 2.113l-3.656-.522a.38.38 0 0 1-.232-.127L9.427 8.02a3.375 3.375 0 1 0-3.052.413v7.136a3.375 3.375 0 1 0 2.25 0v-5.027l2.157 2.513c.415.483.99.8 1.622.89l3.875.553a3.376 3.376 0 1 0 3.221-4.372m-12-6a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m0 15.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m12-5.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
c.displayName = "GitMerge";
export {
  c as GitMerge
};
//# sourceMappingURL=GitMerge.js.map
