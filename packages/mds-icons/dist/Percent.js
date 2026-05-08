import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const t = s(), o = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m19.546 6.044-13.5 13.5a1.13 1.13 0 0 1-1.838-.366 1.13 1.13 0 0 1 .244-1.228l13.5-13.5a1.127 1.127 0 0 1 1.594 1.594M4.474 9.775a3.75 3.75 0 1 1 5.306-5.3 3.75 3.75 0 0 1-5.306 5.3m1.151-2.65a1.5 1.5 0 1 0 3 .001 1.5 1.5 0 0 0-3-.001m15 9.75a3.75 3.75 0 1 1-7.499 0 3.75 3.75 0 0 1 7.5 0m-2.25 0a1.5 1.5 0 0 0-.44-1.061 1.5 1.5 0 1 0 .44 1.061" })
  ] });
});
c.displayName = "Percent";
export {
  c as Percent
};
//# sourceMappingURL=Percent.js.map
