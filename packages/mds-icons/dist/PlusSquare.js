import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const h = s(), o = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM7.125 12a1.125 1.125 0 0 1 1.125-1.125h2.625V8.25a1.125 1.125 0 1 1 2.25 0v2.625h2.625a1.125 1.125 0 1 1 0 2.25h-2.625v2.625a1.125 1.125 0 1 1-2.25 0v-2.625H8.25A1.125 1.125 0 0 1 7.125 12" })
  ] });
});
v.displayName = "PlusSquare";
export {
  v as PlusSquare
};
//# sourceMappingURL=PlusSquare.js.map
