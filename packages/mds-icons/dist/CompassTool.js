import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const c = m(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const s = n(), l = o ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    o ? /* @__PURE__ */ r("title", { id: l, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M20.501 11.762a1.125 1.125 0 1 0-2.003-1.024 7.05 7.05 0 0 1-2.593 2.779l-1.266-2.85a4.125 4.125 0 0 0-1.514-7.134V2.25a1.125 1.125 0 1 0-2.25 0v1.283a4.125 4.125 0 0 0-1.514 7.135L4.97 20.543A1.125 1.125 0 0 0 6 22.125a1.13 1.13 0 0 0 1.031-.668l2.22-4.994c.89.274 1.817.413 2.75.412.932 0 1.86-.137 2.755-.405l2.213 4.987a1.12 1.12 0 0 0 1.031.668 1.1 1.1 0 0 0 .817-.346 1.12 1.12 0 0 0 .214-1.236l-2.204-4.96a9.3 9.3 0 0 0 3.674-3.821m-8.5-6.137a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75m0 9a7 7 0 0 1-1.83-.237l1.246-2.805c.387.056.78.056 1.166 0l1.25 2.812a7.4 7.4 0 0 1-1.833.23" })
  ] });
});
c.displayName = "CompassTool";
export {
  c as CompassTool
};
//# sourceMappingURL=CompassTool.js.map
