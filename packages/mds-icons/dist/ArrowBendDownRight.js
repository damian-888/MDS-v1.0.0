import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, n) => {
  const t = w(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.796 15.046-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l2.58-2.577H12A10.137 10.137 0 0 1 1.875 5.25a1.125 1.125 0 0 1 2.25 0A7.883 7.883 0 0 0 12 13.125h6.281l-2.58-2.58a1.127 1.127 0 1 1 1.594-1.593l4.5 4.5a1.126 1.126 0 0 1 0 1.594" })
  ] });
});
s.displayName = "ArrowBendDownRight";
export {
  s as ArrowBendDownRight
};
//# sourceMappingURL=ArrowBendDownRight.js.map
