import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as p } from "react";
const s = m(({
  size: o = "1em",
  title: l,
  titleId: a,
  ...e
}, i) => {
  const t = p(), r = l ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ d("title", { id: r, children: l }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 13.5v6a1.125 1.125 0 0 1-1.125 1.126H3.75A1.125 1.125 0 0 1 2.625 19.5v-6a1.125 1.125 0 0 1 2.25 0v4.875h14.25V13.5a1.125 1.125 0 1 1 2.25 0M9.045 7.548l1.83-1.827v7.78a1.125 1.125 0 1 0 2.25 0V5.72l1.83 1.83a1.126 1.126 0 1 0 1.593-1.594l-3.75-3.75a1.125 1.125 0 0 0-1.594 0l-3.75 3.75A1.127 1.127 0 1 0 9.048 7.55z" })
  ] });
});
s.displayName = "UploadSimple";
export {
  s as UploadSimple
};
//# sourceMappingURL=UploadSimple.js.map
