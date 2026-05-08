import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as t } from "react";
const m = s(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const h = t(), i = l ? e ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": i, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m20.333 19.492-15-16.5a1.125 1.125 0 1 0-1.666 1.513L5.813 6.86l-1.507 8.513H3.75a1.125 1.125 0 1 0 0 2.25h7.125v4.875a1.125 1.125 0 0 0 2.25 0v-4.875h2.468l3.075 3.382a1.125 1.125 0 0 0 1.665-1.513M6.59 15.373l1.131-6.408 5.826 6.408zM8.443 3.748a1.125 1.125 0 0 1 1.125-1.125H18a1.125 1.125 0 1 1 0 2.25h-.16l1.438 8.142a1.124 1.124 0 1 1-2.215.39l-1.507-8.532H9.568a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
m.displayName = "PushPinSimpleSlash";
export {
  m as PushPinSimpleSlash
};
//# sourceMappingURL=PushPinSimpleSlash.js.map
