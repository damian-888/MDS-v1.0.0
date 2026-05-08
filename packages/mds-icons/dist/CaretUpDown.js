import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...d
}, i) => {
  const t = m(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.296 15.705a1.127 1.127 0 0 1 0 1.594l-4.5 4.5a1.124 1.124 0 0 1-1.594 0l-4.5-4.5a1.127 1.127 0 1 1 1.594-1.594L12 19.407l3.704-3.705a1.126 1.126 0 0 1 1.592.003m-9-7.406L12 4.595 15.704 8.3a1.127 1.127 0 0 0 1.594-1.594l-4.5-4.5a1.124 1.124 0 0 0-1.594 0l-4.5 4.5A1.127 1.127 0 0 0 8.298 8.3z" })
  ] });
});
w.displayName = "CaretUpDown";
export {
  w as CaretUpDown
};
//# sourceMappingURL=CaretUpDown.js.map
