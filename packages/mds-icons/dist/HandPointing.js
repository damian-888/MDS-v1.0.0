import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as s } from "react";
const c = v(({
  size: i = "1em",
  title: a,
  titleId: d,
  ...n
}, l) => {
  const e = s(), o = a ? d ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...n, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M18.375 7.875a3 3 0 0 0-1.052.188 3 3 0 0 0-3.448-1.594V4.125a3 3 0 1 0-6 0v6.265a3 3 0 0 0-4.851 3.485l.438.773c3.205 5.647 4.668 8.227 9.288 8.227a8.635 8.635 0 0 0 8.625-8.625v-3.375a3 3 0 0 0-3-3m.75 6.375a6.38 6.38 0 0 1-6.375 6.375c-3.187 0-4.077-1.355-7.331-7.092l-.44-.776v-.007a.75.75 0 1 1 1.3-.75l.018.033 1.752 2.812a1.125 1.125 0 0 0 2.076-.595V4.125a.75.75 0 1 1 1.5 0V10.5a1.125 1.125 0 0 0 2.25 0V9.375a.75.75 0 1 1 1.5 0v1.875a1.125 1.125 0 0 0 2.25 0v-.375a.75.75 0 1 1 1.5 0z" })
  ] });
});
c.displayName = "HandPointing";
export {
  c as HandPointing
};
//# sourceMappingURL=HandPointing.js.map
