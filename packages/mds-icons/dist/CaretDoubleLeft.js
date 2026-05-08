import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as f } from "react";
const h = s(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, t) => {
  const i = f(), l = e ? a ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: l, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.546 18.705a1.127 1.127 0 1 1-1.594 1.594l-7.5-7.5a1.125 1.125 0 0 1 0-1.594l7.5-7.5a1.127 1.127 0 1 1 1.594 1.594L12.844 12zM5.344 12.001l6.705-6.704a1.127 1.127 0 0 0-1.594-1.594l-7.5 7.5a1.124 1.124 0 0 0 0 1.594l7.5 7.5a1.13 1.13 0 0 0 1.594 0 1.13 1.13 0 0 0 0-1.594z" })
  ] });
});
h.displayName = "CaretDoubleLeft";
export {
  h as CaretDoubleLeft
};
//# sourceMappingURL=CaretDoubleLeft.js.map
