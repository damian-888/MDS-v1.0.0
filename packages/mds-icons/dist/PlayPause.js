import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const v = s(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M17.625 6v12a1.125 1.125 0 1 1-2.25 0V6a1.125 1.125 0 1 1 2.25 0M21 4.875A1.125 1.125 0 0 0 19.875 6v12a1.125 1.125 0 1 0 2.25 0V6A1.125 1.125 0 0 0 21 4.875M13.875 12a1.85 1.85 0 0 1-.862 1.567l-8.266 5.265a1.866 1.866 0 0 1-2.872-1.568V6.736A1.867 1.867 0 0 1 4.747 5.17l8.266 5.265A1.85 1.85 0 0 1 13.875 12m-2.59 0-7.16-4.559v9.118z" })
  ] });
});
v.displayName = "PlayPause";
export {
  v as PlayPause
};
//# sourceMappingURL=PlayPause.js.map
