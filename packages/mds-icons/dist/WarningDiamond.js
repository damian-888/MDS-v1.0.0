import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...l
}, n) => {
  const e = s(), i = r ? d ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 6.374A1.125 1.125 0 0 1 13.125 7.5v4.875a1.125 1.125 0 0 1-2.25 0V7.5A1.125 1.125 0 0 1 12 6.374m0 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M22.875 12a1.86 1.86 0 0 1-.547 1.323l-9 9.006a1.875 1.875 0 0 1-2.645 0l-9-9.006a1.875 1.875 0 0 1 0-2.646l9.005-9.005a1.875 1.875 0 0 1 2.644 0l9.006 9.005A1.86 1.86 0 0 1 22.875 12m-2.407 0L12 3.531l-8.467 8.468L12 20.468z" })
  ] });
});
h.displayName = "WarningDiamond";
export {
  h as WarningDiamond
};
//# sourceMappingURL=WarningDiamond.js.map
