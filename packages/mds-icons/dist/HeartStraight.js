import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, o) => {
  const d = s(), l = r ? e ?? d : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ t("title", { id: l, children: r }) : null,
    /* @__PURE__ */ t("path", { fill: "currentColor", d: "M21.173 5.073a5.82 5.82 0 0 0-8.205-.012L12 5.959l-.967-.898a5.813 5.813 0 0 0-8.211 8.231l8.377 8.498a1.126 1.126 0 0 0 1.603 0l8.37-8.492a5.813 5.813 0 0 0 0-8.222zm-1.594 6.637L12 19.395 4.42 11.703a3.562 3.562 0 1 1 5.067-5.011l1.747 1.627a1.125 1.125 0 0 0 1.534 0l1.748-1.627.029-.027a3.562 3.562 0 1 1 5.032 5.045z" })
  ] });
});
m.displayName = "HeartStraight";
export {
  m as HeartStraight
};
//# sourceMappingURL=HeartStraight.js.map
