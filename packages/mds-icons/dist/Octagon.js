import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = m(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.576 7.257-4.833-4.833a1.86 1.86 0 0 0-1.326-.549H8.583a1.86 1.86 0 0 0-1.326.55L2.424 7.256a1.86 1.86 0 0 0-.549 1.326v6.834a1.86 1.86 0 0 0 .55 1.326l4.832 4.833a1.86 1.86 0 0 0 1.326.549h6.834a1.86 1.86 0 0 0 1.326-.55l4.833-4.832a1.86 1.86 0 0 0 .549-1.326V8.583a1.86 1.86 0 0 0-.55-1.326m-1.701 8.005-4.613 4.613H8.738l-4.613-4.613V8.738l4.613-4.613h6.524l4.613 4.613z" })
  ] });
});
s.displayName = "Octagon";
export {
  s as Octagon
};
//# sourceMappingURL=Octagon.js.map
