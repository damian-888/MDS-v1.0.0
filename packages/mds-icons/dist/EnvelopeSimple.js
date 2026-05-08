import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as p } from "react";
const s = m(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...d
}, n) => {
  const t = p(), o = e ? i ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": o, ...d, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z" })
  ] });
});
s.displayName = "EnvelopeSimple";
export {
  s as EnvelopeSimple
};
//# sourceMappingURL=EnvelopeSimple.js.map
