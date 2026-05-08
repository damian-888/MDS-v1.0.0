import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = s(), d = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.875 18a1.125 1.125 0 0 1-1.125 1.125h-2.625v2.625a1.125 1.125 0 1 1-2.25 0v-2.625H6A1.125 1.125 0 0 1 4.875 18V7.125H2.25a1.125 1.125 0 0 1 0-2.25h2.625V2.25a1.125 1.125 0 0 1 2.25 0v14.625H21.75A1.125 1.125 0 0 1 22.875 18M9.75 7.125h7.125v7.125a1.125 1.125 0 1 0 2.25 0V6A1.125 1.125 0 0 0 18 4.875H9.75a1.125 1.125 0 0 0 0 2.25" })
  ] });
});
v.displayName = "Crop";
export {
  v as Crop
};
//# sourceMappingURL=Crop.js.map
