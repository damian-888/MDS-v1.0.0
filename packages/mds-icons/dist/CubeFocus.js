import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...d
}, i) => {
  const v = s(), r = a ? e ?? v : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 4.5v3.75a1.125 1.125 0 1 1-2.25 0V5.625H17.25a1.125 1.125 0 0 1 0-2.25H21A1.125 1.125 0 0 1 22.125 4.5M6.75 18.375H4.125V15.75a1.125 1.125 0 0 0-2.25 0v3.75A1.125 1.125 0 0 0 3 20.625h3.75a1.125 1.125 0 1 0 0-2.25M21 14.625a1.125 1.125 0 0 0-1.125 1.125v2.625H17.25a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 0 0 1.125-1.125v-3.75A1.125 1.125 0 0 0 21 14.625M3 9.375A1.125 1.125 0 0 0 4.125 8.25V5.625H6.75a1.125 1.125 0 0 0 0-2.25H3A1.125 1.125 0 0 0 1.875 4.5v3.75A1.125 1.125 0 0 0 3 9.375m14.813 6.602-5.25 3a1.13 1.13 0 0 1-1.116 0l-5.25-3A1.13 1.13 0 0 1 5.625 15V9a1.13 1.13 0 0 1 .563-.977l5.25-3a1.13 1.13 0 0 1 1.115 0l5.25 3a1.13 1.13 0 0 1 .572.977v6a1.12 1.12 0 0 1-.562.977M9.018 9 12 10.704 14.982 9 12 7.296zm-1.143 5.344 3 1.714v-3.402l-3-1.717zm8.25 0v-3.405l-3 1.717v3.409z" })
  ] });
});
m.displayName = "CubeFocus";
export {
  m as CubeFocus
};
//# sourceMappingURL=CubeFocus.js.map
