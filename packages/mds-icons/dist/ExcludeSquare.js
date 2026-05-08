import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...h
}, i) => {
  const m = n(), e = r ? o ?? m : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...h, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 15V9a1.125 1.125 0 0 0-1.125-1.125h-4.125V3.75A1.125 1.125 0 0 0 15 2.625H3.75A1.125 1.125 0 0 0 2.625 3.75V15a1.125 1.125 0 0 0 1.125 1.125h4.125v4.125A1.125 1.125 0 0 0 9 21.375h11.25a1.125 1.125 0 0 0 1.125-1.125zm-5.906 4.125-3-3h2.062l3 3zM4.875 6.469l3 3v2.062l-3-3zm3.656-1.594 3 3H9.47l-3-3zm1.594 9v-3.75h3.75v3.75zm6 .656V12.47l3 3v2.062zm3-2.25-2.156-2.156h2.156zm-5.25-5.25-2.156-2.156h2.156zm-9 4.688 2.156 2.156H4.875zm5.25 5.25 2.156 2.156h-2.156z" })
  ] });
});
v.displayName = "ExcludeSquare";
export {
  v as ExcludeSquare
};
//# sourceMappingURL=ExcludeSquare.js.map
