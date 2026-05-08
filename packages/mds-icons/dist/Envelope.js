import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...i
}, n) => {
  const t = m(), r = e ? d ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": r, ...i, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-9 7.849L5.892 6.375h12.216zM8.7 12l-4.575 4.192V7.808zm1.664 1.526.876.804a1.125 1.125 0 0 0 1.52 0l.876-.804 4.472 4.099H5.892zM15.301 12l4.574-4.192v8.385z" })
  ] });
});
s.displayName = "Envelope";
export {
  s as Envelope
};
//# sourceMappingURL=Envelope.js.map
