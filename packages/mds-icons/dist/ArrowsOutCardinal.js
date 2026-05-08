import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...i
}, e) => {
  const t = m(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.204 6.046a1.125 1.125 0 0 1 0-1.594l3-3a1.125 1.125 0 0 1 1.594 0l3 3a1.127 1.127 0 1 1-1.594 1.594l-1.08-1.077v4.03a1.125 1.125 0 1 1-2.25 0V4.97L9.797 6.046a1.125 1.125 0 0 1-1.592 0m6 11.906-1.08 1.079V15a1.125 1.125 0 1 0-2.25 0v4.031l-1.078-1.08a1.127 1.127 0 0 0-1.594 1.594l3 3a1.124 1.124 0 0 0 1.594 0l3-3a1.127 1.127 0 1 0-1.594-1.594zm8.344-6.75-3-3a1.127 1.127 0 1 0-1.594 1.594l1.077 1.079H15a1.125 1.125 0 1 0 0 2.25h4.031l-1.08 1.079a1.126 1.126 0 1 0 1.594 1.594l3-3a1.125 1.125 0 0 0 0-1.594zm-17.58 1.923H9a1.125 1.125 0 1 0 0-2.25H4.969l1.08-1.08a1.127 1.127 0 0 0-1.594-1.593l-3 3a1.125 1.125 0 0 0 0 1.594l3 3a1.126 1.126 0 0 0 1.838-1.228 1.1 1.1 0 0 0-.244-.366z" })
  ] });
});
h.displayName = "ArrowsOutCardinal";
export {
  h as ArrowsOutCardinal
};
//# sourceMappingURL=ArrowsOutCardinal.js.map
