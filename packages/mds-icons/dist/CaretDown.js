import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = m(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m20.296 9.796-7.5 7.5a1.124 1.124 0 0 1-1.594 0l-7.5-7.5a1.127 1.127 0 1 1 1.594-1.594L12 14.906l6.704-6.705a1.127 1.127 0 0 1 1.594 1.594z" })
  ] });
});
w.displayName = "CaretDown";
export {
  w as CaretDown
};
//# sourceMappingURL=CaretDown.js.map
