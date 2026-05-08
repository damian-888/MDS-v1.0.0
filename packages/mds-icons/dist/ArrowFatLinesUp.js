import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const h = m(), o = r ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.796 10.454-9-9a1.124 1.124 0 0 0-1.594 0l-9 9A1.125 1.125 0 0 0 3 12.374h3.375v.376A1.125 1.125 0 0 0 7.5 13.875h9a1.125 1.125 0 0 0 1.125-1.125v-.375H21a1.126 1.126 0 0 0 .796-1.921m-5.296-.33a1.125 1.125 0 0 0-1.125 1.126v.375h-6.75v-.375A1.125 1.125 0 0 0 7.5 10.125H5.719l6.28-6.281 6.282 6.28zm1.125 10.126a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 0 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125m0-3.75a1.125 1.125 0 0 1-1.125 1.125h-9a1.125 1.125 0 0 1 0-2.25h9a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "ArrowFatLinesUp";
export {
  s as ArrowFatLinesUp
};
//# sourceMappingURL=ArrowFatLinesUp.js.map
