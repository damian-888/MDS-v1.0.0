import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = c(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.796 9.796 13.594 12l2.205 2.204a1.127 1.127 0 0 1-1.594 1.594L12 13.594l-2.204 2.205a1.127 1.127 0 1 1-1.594-1.594L10.406 12 8.204 9.796a1.127 1.127 0 1 1 1.594-1.594L12 10.406l2.204-2.205a1.127 1.127 0 1 1 1.594 1.594zM22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
m.displayName = "XCircle";
export {
  m as XCircle
};
//# sourceMappingURL=XCircle.js.map
