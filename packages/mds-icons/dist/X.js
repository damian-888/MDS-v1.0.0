import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = h(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.546 17.954a1.127 1.127 0 0 1-1.594 1.594L12 13.594l-5.954 5.952a1.127 1.127 0 0 1-1.594-1.594L10.406 12 4.454 6.046a1.127 1.127 0 0 1 1.594-1.594L12 10.406l5.954-5.955a1.127 1.127 0 0 1 1.594 1.594L13.594 12z" })
  ] });
});
m.displayName = "X";
export {
  m as X
};
//# sourceMappingURL=X.js.map
