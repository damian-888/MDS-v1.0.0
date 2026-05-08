import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...l
}, e) => {
  const n = h(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m19.546 6.046-13.5 13.5a1.127 1.127 0 1 1-1.594-1.594l13.5-13.5a1.127 1.127 0 1 1 1.594 1.594M5.625 10.5a1.125 1.125 0 0 0 2.25 0V7.875H10.5a1.125 1.125 0 0 0 0-2.25H7.875V3a1.125 1.125 0 0 0-2.25 0v2.625H3a1.125 1.125 0 0 0 0 2.25h2.625zM21 16.125h-7.5a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "PlusMinus";
export {
  m as PlusMinus
};
//# sourceMappingURL=PlusMinus.js.map
