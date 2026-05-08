import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...d
}, i) => {
  const n = s(), e = o ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m21.375 7.91-8.24-6.401-.025-.019a1.87 1.87 0 0 0-2.218 0l-.025.019L2.625 7.91a1.875 1.875 0 0 0-.665 2.062l3 10.08.008.024a1.87 1.87 0 0 0 1.782 1.298h10.5a1.87 1.87 0 0 0 1.781-1.3l.008-.024 3-10.08a1.875 1.875 0 0 0-.664-2.06m-4.406 11.215H7.03L4.183 9.551 12 3.477l7.817 6.074z" })
  ] });
});
h.displayName = "Pentagon";
export {
  h as Pentagon
};
//# sourceMappingURL=Pentagon.js.map
