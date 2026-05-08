import { jsxs as v, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const l = n(), h = o ? d ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: h, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 6h-4.125v-.75a2.625 2.625 0 0 0-2.625-2.625h-4.5A2.625 2.625 0 0 0 7.125 5.25V6H3a1.875 1.875 0 0 0-1.875 1.875V18A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V7.875A1.875 1.875 0 0 0 21 6M9.375 5.25a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375V6h-5.25zm11.25 3v3h-2.25v-.375a1.125 1.125 0 1 0-2.25 0v.375h-8.25v-.375a1.125 1.125 0 0 0-2.25 0v.375h-2.25v-3zm-17.25 9.375V13.5h2.25v.375a1.125 1.125 0 0 0 2.25 0V13.5h8.25v.375a1.125 1.125 0 1 0 2.25 0V13.5h2.25v4.125z" })
  ] });
});
m.displayName = "Toolbox";
export {
  m as Toolbox
};
//# sourceMappingURL=Toolbox.js.map
