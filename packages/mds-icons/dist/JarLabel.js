import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...h
}, i) => {
  const l = n(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...h, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.625 4.658V3a1.875 1.875 0 0 0-1.875-1.875h-7.5A1.875 1.875 0 0 0 6.375 3v1.657a4.13 4.13 0 0 0-3 3.968V18.75A4.13 4.13 0 0 0 7.5 22.875h9a4.13 4.13 0 0 0 4.125-4.125V8.625a4.13 4.13 0 0 0-3-3.968m-12 6.592h12.75v4.5H5.625zm9.75-6.75h-2.25V3.375h2.25zm-4.5-1.125V4.5h-2.25V3.375zM7.5 6.75h9a1.875 1.875 0 0 1 1.875 1.875V9H5.625v-.375A1.875 1.875 0 0 1 7.5 6.75m9 13.875h-9a1.875 1.875 0 0 1-1.875-1.875V18h12.75v.75a1.875 1.875 0 0 1-1.875 1.875" })
  ] });
});
s.displayName = "JarLabel";
export {
  s as JarLabel
};
//# sourceMappingURL=JarLabel.js.map
