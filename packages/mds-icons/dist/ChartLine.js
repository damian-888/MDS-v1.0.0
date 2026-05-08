import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = s(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 19.5A1.125 1.125 0 0 1 21 20.625H3A1.125 1.125 0 0 1 1.875 19.5v-15a1.125 1.125 0 0 1 2.25 0v8.02l4.134-3.614a1.125 1.125 0 0 1 1.416-.053l5.27 3.952 5.314-4.649a1.124 1.124 0 1 1 1.482 1.688l-6 5.25a1.125 1.125 0 0 1-1.416.053l-5.27-3.95-4.93 4.314v2.864H21a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "ChartLine";
export {
  v as ChartLine
};
//# sourceMappingURL=ChartLine.js.map
