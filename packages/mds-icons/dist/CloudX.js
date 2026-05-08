import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const t = s(), d = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M15 3.375a8.63 8.63 0 0 0-7.594 4.534 6.375 6.375 0 1 0-.656 12.716H15a8.625 8.625 0 1 0 0-17.25m0 15H6.75a4.126 4.126 0 0 1-.17-8.25A8.6 8.6 0 0 0 6.374 12a1.125 1.125 0 0 0 2.25 0A6.375 6.375 0 1 1 15 18.375m3.046-7.454-1.452 1.454 1.455 1.454a1.127 1.127 0 1 1-1.594 1.594L15 13.969l-1.454 1.455a1.126 1.126 0 1 1-1.594-1.594l1.454-1.455-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594L15 10.781l1.454-1.455a1.127 1.127 0 0 1 1.594 1.594z" })
  ] });
});
h.displayName = "CloudX";
export {
  h as CloudX
};
//# sourceMappingURL=CloudX.js.map
