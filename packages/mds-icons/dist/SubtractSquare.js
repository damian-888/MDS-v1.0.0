import { jsxs as l, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, h) => {
  const i = n(), o = r ? d ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.375 15V9a1.125 1.125 0 0 0-1.125-1.125h-4.125V3.75A1.125 1.125 0 0 0 15 2.625H3.75A1.125 1.125 0 0 0 2.625 3.75V15a1.125 1.125 0 0 0 1.125 1.125h4.125v4.125A1.125 1.125 0 0 0 9 21.375h11.25a1.125 1.125 0 0 0 1.125-1.125zm-5.906 4.125-3-3h2.062l3 3zm.656-4.594V12.47l3 3v2.062zm3-2.25-2.156-2.156h2.156zM4.875 4.875h9v9h-9zm5.25 12.094 2.156 2.156h-2.156z" })
  ] });
});
s.displayName = "SubtractSquare";
export {
  s as SubtractSquare
};
//# sourceMappingURL=SubtractSquare.js.map
