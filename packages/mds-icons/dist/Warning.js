import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const n = s(), i = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.525 17.447 14.326 3.21a2.694 2.694 0 0 0-4.652 0L1.476 17.447a2.57 2.57 0 0 0 0 2.598 2.65 2.65 0 0 0 2.326 1.33h16.397a2.65 2.65 0 0 0 2.324-1.33 2.57 2.57 0 0 0 .002-2.598m-1.95 1.472a.42.42 0 0 1-.375.206H3.802a.42.42 0 0 1-.375-.206.33.33 0 0 1 0-.35l8.198-14.237a.447.447 0 0 1 .75 0l8.198 14.237a.34.34 0 0 1 .002.35m-9.7-6.169v-3a1.125 1.125 0 1 1 2.25 0v3a1.125 1.125 0 0 1-2.25 0M13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "Warning";
export {
  h as Warning
};
//# sourceMappingURL=Warning.js.map
