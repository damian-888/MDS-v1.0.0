import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const h = c(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.454 13.546a1.126 1.126 0 0 1 1.228-1.838c.137.056.261.14.366.244l1.452 1.454 4.454-4.455a1.127 1.127 0 1 1 1.594 1.594l-5.25 5.25a1.125 1.125 0 0 1-1.594 0zM21.375 4.5v15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-2.25.375H4.875v14.25h14.25z" })
  ] });
});
s.displayName = "CheckSquare";
export {
  s as CheckSquare
};
//# sourceMappingURL=CheckSquare.js.map
