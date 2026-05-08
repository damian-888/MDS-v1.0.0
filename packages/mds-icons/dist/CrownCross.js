import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const t = s(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, c) => {
  const l = h(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: c, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.875 5.25c-1.444 0-2.737.432-3.75 1.172V4.125h1.125a1.125 1.125 0 0 0 0-2.25h-1.125v-.75a1.125 1.125 0 1 0-2.25 0v.75H9.75a1.125 1.125 0 0 0 0 2.25h1.125v2.297c-1.013-.74-2.306-1.172-3.75-1.172a6.007 6.007 0 0 0-6 6c0 2.968 1.456 4.744 2.677 5.71a8 8 0 0 0 1.823 1.082V19.5A1.875 1.875 0 0 0 7.5 21.375h9a1.875 1.875 0 0 0 1.875-1.875v-1.458a8 8 0 0 0 1.823-1.082c1.221-.966 2.677-2.742 2.677-5.71a6.006 6.006 0 0 0-6-6m.102 10.909a1.125 1.125 0 0 0-.852 1.091v1.875h-8.25V17.25a1.125 1.125 0 0 0-.852-1.091 5.6 5.6 0 0 1-1.825-.963c-1.21-.958-1.823-2.286-1.823-3.946a3.75 3.75 0 0 1 3.75-3.75c2.173 0 3.75 1.42 3.75 3.375V16.5a1.125 1.125 0 1 0 2.25 0v-5.625c0-1.956 1.577-3.375 3.75-3.375a3.75 3.75 0 0 1 3.75 3.75c0 3.908-3.504 4.875-3.648 4.909" })
  ] });
});
t.displayName = "CrownCross";
export {
  t as CrownCross
};
//# sourceMappingURL=CrownCross.js.map
