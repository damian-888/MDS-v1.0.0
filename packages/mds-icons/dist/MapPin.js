import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const s = m(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...e
}, l) => {
  const n = c(), o = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5.625a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25m0 6a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75m0-10.5A8.634 8.634 0 0 0 3.375 9.75c0 7.253 7.654 12.694 7.98 12.922a1.125 1.125 0 0 0 1.29 0 24.3 24.3 0 0 0 3.954-3.657c2.634-3.024 4.026-6.23 4.026-9.265A8.635 8.635 0 0 0 12 1.125m2.934 16.38A23.4 23.4 0 0 1 12 20.332a23.4 23.4 0 0 1-2.934-2.829C7.5 15.691 5.625 12.873 5.625 9.75a6.375 6.375 0 0 1 12.75 0c0 3.123-1.875 5.94-3.44 7.754" })
  ] });
});
s.displayName = "MapPin";
export {
  s as MapPin
};
//# sourceMappingURL=MapPin.js.map
