import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, a) => {
  const t = m(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.625 4.5V9a1.125 1.125 0 1 1-2.25 0V7.219l-3.704 3.705a1.127 1.127 0 1 1-1.594-1.594l3.704-3.705H15a1.125 1.125 0 0 1 0-2.25h4.5A1.125 1.125 0 0 1 20.625 4.5M9.329 13.08 5.625 16.78V15a1.125 1.125 0 0 0-2.25 0v4.5A1.125 1.125 0 0 0 4.5 20.625H9a1.125 1.125 0 1 0 0-2.25H7.219l3.705-3.704a1.127 1.127 0 1 0-1.594-1.594z" })
  ] });
});
h.displayName = "ArrowsOutSimple";
export {
  h as ArrowsOutSimple
};
//# sourceMappingURL=ArrowsOutSimple.js.map
