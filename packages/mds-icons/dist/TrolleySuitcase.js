import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...i
}, d) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M9 14.625h11.25a1.875 1.875 0 0 0 1.875-1.875V7.125A1.875 1.875 0 0 0 20.25 5.25H18v-1.5a1.875 1.875 0 0 0-1.875-1.875h-3A1.875 1.875 0 0 0 11.25 3.75v1.5H9a1.875 1.875 0 0 0-1.875 1.875v5.625A1.875 1.875 0 0 0 9 14.625m4.5-10.5h2.25V5.25H13.5zM9.375 7.5h10.5v4.875h-10.5zM8.625 21a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m13.5 0a1.874 1.874 0 1 1-3.749 0 1.874 1.874 0 0 1 3.749 0m1.5-4.125A1.125 1.125 0 0 1 22.5 18H3a1.125 1.125 0 1 1 0-2.25h.375V7.219l-1.92-1.923a1.127 1.127 0 0 1 1.593-1.594l2.028 2.033a1.86 1.86 0 0 1 .549 1.325v8.69H22.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "TrolleySuitcase";
export {
  m as TrolleySuitcase
};
//# sourceMappingURL=TrolleySuitcase.js.map
