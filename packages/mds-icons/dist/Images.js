import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const h = n(), e = r ? d ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.125-3V15a1.875 1.875 0 0 1-1.875 1.875h-1.125v1.875a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V8.25A1.875 1.875 0 0 1 3.75 6.375h1.875V5.25A1.875 1.875 0 0 1 7.5 3.375h12.75a1.875 1.875 0 0 1 1.875 1.875m-5.25 11.625H7.5A1.875 1.875 0 0 1 5.625 15V8.625h-1.5v9.75h12.75zm-2.03-2.25-3.22-3.22-3.22 3.22zm5.03-9h-12v6.349l2.424-2.425a1.875 1.875 0 0 1 2.652 0l5.075 5.076h1.849z" })
  ] });
});
s.displayName = "Images";
export {
  s as Images
};
//# sourceMappingURL=Images.js.map
