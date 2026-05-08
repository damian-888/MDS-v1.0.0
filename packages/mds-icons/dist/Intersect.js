import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const l = m(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.688 7.314a7.875 7.875 0 1 0-9.376 9.375 7.875 7.875 0 1 0 9.375-9.375m-2.08 2.08a5.6 5.6 0 0 1-.92 2.71l-1.787-1.79a5.6 5.6 0 0 1 2.709-.922zm-7.454 4.924a5.625 5.625 0 1 1 7.156-7.156 7.885 7.885 0 0 0-7.153 7.153zm2.233.297a5.6 5.6 0 0 1 .92-2.71l1.792 1.784a5.6 5.6 0 0 1-2.709.923zM15 20.627a5.63 5.63 0 0 1-5.313-3.782 7.886 7.886 0 0 0 7.156-7.156A5.625 5.625 0 0 1 15 20.627" })
  ] });
});
c.displayName = "Intersect";
export {
  c as Intersect
};
//# sourceMappingURL=Intersect.js.map
