import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = s(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.125 8.25a1.125 1.125 0 0 1 1.125-1.125h3a1.125 1.125 0 0 1 1.125 1.125v3a1.125 1.125 0 1 1-2.25 0V9.375H14.25a1.125 1.125 0 0 1-1.125-1.125M6.75 16.875h3a1.125 1.125 0 1 0 0-2.25H7.875V12.75a1.125 1.125 0 0 0-2.25 0v3a1.125 1.125 0 0 0 1.125 1.125M22.125 5.25v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v12.75h15.75z" })
  ] });
});
m.displayName = "FrameCorners";
export {
  m as FrameCorners
};
//# sourceMappingURL=FrameCorners.js.map
