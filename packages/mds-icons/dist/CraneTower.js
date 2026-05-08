import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as v, useId as t } from "react";
const m = v(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...h
}, i) => {
  const l = t(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.5 7.125H10.446l-1.94-3.878A1.13 1.13 0 0 0 7.5 2.625h-3A1.125 1.125 0 0 0 3.375 3.75v3.375H2.25a1.125 1.125 0 0 0 0 2.25h1.125v9.75H2.25a1.125 1.125 0 1 0 0 2.25H12a1.125 1.125 0 1 0 0-2.25h-1.125v-9.75h8.25v7.5H18V16.5a1.125 1.125 0 1 0-2.25 0v.75a1.875 1.875 0 0 0 1.875 1.875H19.5a1.875 1.875 0 0 0 1.875-1.875V9.375H22.5a1.125 1.125 0 0 0 0-2.25M5.625 4.875h1.18l1.124 2.25H5.625zm0 14.25v-3.75h3v3.75zm3-6h-3v-3.75h3z" })
  ] });
});
m.displayName = "CraneTower";
export {
  m as CraneTower
};
//# sourceMappingURL=CraneTower.js.map
