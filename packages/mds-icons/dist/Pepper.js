import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as p } from "react";
const s = c(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const t = p(), l = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15.99 3.452A4.13 4.13 0 0 0 12 .375a1.125 1.125 0 1 0 0 2.25 1.88 1.88 0 0 1 1.602.906A6.385 6.385 0 0 0 8.625 9.75c0 2.038-.547 3.763-1.624 5.127-1.145 1.45-2.923 2.539-5.282 3.234a1.876 1.876 0 0 0 .207 3.647c1.427.247 2.873.37 4.321.367 3.901 0 8.25-.88 11.27-3.41 2.56-2.148 3.858-5.163 3.858-8.965a6.386 6.386 0 0 0-5.385-6.298M15 5.625a4.13 4.13 0 0 1 3.78 2.476l-.78.39-2.497-1.248a1.13 1.13 0 0 0-1.006 0L12 8.492l-.78-.391A4.13 4.13 0 0 1 15 5.625m1.072 11.365c-1.632 1.368-3.969 2.294-6.76 2.68-1.81.239-3.64.267-5.457.083 4.376-1.735 6.776-4.925 7.001-9.318l.64.32a1.13 1.13 0 0 0 1.007 0L15 9.508l2.497 1.249a1.13 1.13 0 0 0 1.006 0l.603-.302c-.146 2.771-1.164 4.968-3.034 6.536" })
  ] });
});
s.displayName = "Pepper";
export {
  s as Pepper
};
//# sourceMappingURL=Pepper.js.map
