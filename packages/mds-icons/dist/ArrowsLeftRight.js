import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const t = h(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.296 17.297-3 3a1.127 1.127 0 0 1-1.594-1.594l1.079-1.077H4.5a1.125 1.125 0 1 1 0-2.25H16.78l-1.08-1.08a1.127 1.127 0 0 1 1.594-1.593l3 3a1.127 1.127 0 0 1 0 1.594m-13.594-6a1.127 1.127 0 0 0 1.594-1.594L7.219 8.626h12.28a1.125 1.125 0 1 0 0-2.25H7.22l1.077-1.08a1.127 1.127 0 0 0-1.594-1.593l-3 3a1.125 1.125 0 0 0 0 1.594z" })
  ] });
});
m.displayName = "ArrowsLeftRight";
export {
  m as ArrowsLeftRight
};
//# sourceMappingURL=ArrowsLeftRight.js.map
