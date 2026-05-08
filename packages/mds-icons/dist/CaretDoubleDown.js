import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...d
}, i) => {
  const t = m(), e = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.296 11.953a1.124 1.124 0 0 1 0 1.594l-7.5 7.5a1.124 1.124 0 0 1-1.594 0l-7.5-7.5a1.128 1.128 0 0 1 1.594-1.594L12 18.655l6.704-6.705a1.124 1.124 0 0 1 1.592.003m-9.094 1.594a1.127 1.127 0 0 0 1.594 0l7.5-7.5a1.127 1.127 0 1 0-1.594-1.594L12 11.155 5.296 4.453a1.127 1.127 0 0 0-1.594 1.594z" })
  ] });
});
w.displayName = "CaretDoubleDown";
export {
  w as CaretDoubleDown
};
//# sourceMappingURL=CaretDoubleDown.js.map
