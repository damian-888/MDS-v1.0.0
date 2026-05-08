import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const t = m(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-10.92-4.92L10.405 12 8.204 9.796a1.127 1.127 0 0 1 1.594-1.594L12 10.406l2.204-2.205a1.127 1.127 0 1 1 1.594 1.594L13.594 12l2.205 2.204a1.127 1.127 0 1 1-1.594 1.594L12 13.594l-2.204 2.205a1.127 1.127 0 1 1-1.594-1.594z" })
  ] });
});
s.displayName = "XSquare";
export {
  s as XSquare
};
//# sourceMappingURL=XSquare.js.map
