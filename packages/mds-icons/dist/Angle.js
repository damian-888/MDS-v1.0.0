import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = s(), o = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.625 18.75a1.125 1.125 0 0 1-1.125 1.125H6.75a1.125 1.125 0 0 1-1.125-1.125V7.875H3a1.125 1.125 0 0 1 0-2.25h2.625V3a1.125 1.125 0 0 1 2.25 0v14.625H22.5a1.125 1.125 0 0 1 1.125 1.125M10.406 7.902a7.875 7.875 0 0 1 7.19 7.19 1.125 1.125 0 0 0 1.121 1.032h.094a1.124 1.124 0 0 0 1.031-1.219 10.125 10.125 0 0 0-9.248-9.245 1.126 1.126 0 0 0-.188 2.242" })
  ] });
});
m.displayName = "Angle";
export {
  m as Angle
};
//# sourceMappingURL=Angle.js.map
