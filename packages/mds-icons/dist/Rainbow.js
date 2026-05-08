import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const n = m(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M24 16.125v.75a1.125 1.125 0 1 1-2.25 0v-.75a9.75 9.75 0 1 0-19.5 0v.75a1.125 1.125 0 0 1-2.25 0v-.75a12 12 0 1 1 24 0m-12-3A3.375 3.375 0 0 0 8.625 16.5v.375a1.125 1.125 0 0 0 2.25 0V16.5a1.125 1.125 0 1 1 2.25 0v.375a1.125 1.125 0 1 0 2.25 0V16.5A3.375 3.375 0 0 0 12 13.125m0-4.5A7.883 7.883 0 0 0 4.125 16.5v.375a1.125 1.125 0 0 0 2.25 0V16.5a5.625 5.625 0 0 1 11.25 0v.375a1.125 1.125 0 1 0 2.25 0V16.5A7.883 7.883 0 0 0 12 8.625" })
  ] });
});
s.displayName = "Rainbow";
export {
  s as Rainbow
};
//# sourceMappingURL=Rainbow.js.map
