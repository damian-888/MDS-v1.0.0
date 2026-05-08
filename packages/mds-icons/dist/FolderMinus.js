import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const h = s(), d = r ? i ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.625 13.5a1.125 1.125 0 0 1 1.125-1.125h4.5a1.125 1.125 0 1 1 0 2.25h-4.5A1.125 1.125 0 0 1 8.625 13.5m13.5-5.25v10.583a1.793 1.793 0 0 1-1.792 1.792H3.692a1.82 1.82 0 0 1-1.817-1.817V4.875A1.875 1.875 0 0 1 3.75 3h4.913a1.88 1.88 0 0 1 1.407.63l2.437 2.745h7.743a1.875 1.875 0 0 1 1.875 1.875m-18-1.875h5.37l-1-1.125h-4.37zm15.75 2.25H4.125v9.75h15.75z" })
  ] });
});
m.displayName = "FolderMinus";
export {
  m as FolderMinus
};
//# sourceMappingURL=FolderMinus.js.map
