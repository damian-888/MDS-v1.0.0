import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...n
}, d) => {
  const e = m(), l = a ? i ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...n, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M10.875 12.375V7.5a1.125 1.125 0 1 1 2.25 0v4.875a1.125 1.125 0 1 1-2.25 0m11.25-3.792v6.834a1.86 1.86 0 0 1-.55 1.326l-4.832 4.833a1.86 1.86 0 0 1-1.326.549H8.583a1.86 1.86 0 0 1-1.326-.55l-4.833-4.832a1.86 1.86 0 0 1-.549-1.326V8.583a1.86 1.86 0 0 1 .55-1.326l4.832-4.833a1.86 1.86 0 0 1 1.326-.549h6.834a1.86 1.86 0 0 1 1.326.55l4.833 4.832a1.86 1.86 0 0 1 .549 1.326m-2.25.155-4.613-4.613H8.738L4.125 8.738v6.524l4.613 4.613h6.524l4.613-4.613zM12 14.625a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
s.displayName = "WarningOctagon";
export {
  s as WarningOctagon
};
//# sourceMappingURL=WarningOctagon.js.map
