import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...i
}, n) => {
  const t = s(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.125 5.25A10.137 10.137 0 0 1 12 15.375H5.719l2.58 2.58a1.127 1.127 0 1 1-1.594 1.593l-4.5-4.5a1.125 1.125 0 0 1 0-1.594l4.5-4.5a1.127 1.127 0 0 1 1.594 1.594l-2.58 2.577h6.28a7.883 7.883 0 0 0 7.876-7.875 1.125 1.125 0 1 1 2.25 0" })
  ] });
});
h.displayName = "ArrowBendDownLeft";
export {
  h as ArrowBendDownLeft
};
//# sourceMappingURL=ArrowBendDownLeft.js.map
