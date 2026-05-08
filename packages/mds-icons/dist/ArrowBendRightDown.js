import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as w, useId as h } from "react";
const s = w(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, n) => {
  const t = h(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m19.546 17.296-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.127 1.127 0 1 1 1.594-1.594l2.579 2.58V12A7.883 7.883 0 0 0 5.25 4.125a1.125 1.125 0 0 1 0-2.25A10.136 10.136 0 0 1 15.375 12v6.281l2.58-2.58a1.127 1.127 0 1 1 1.593 1.594z" })
  ] });
});
s.displayName = "ArrowBendRightDown";
export {
  s as ArrowBendRightDown
};
//# sourceMappingURL=ArrowBendRightDown.js.map
