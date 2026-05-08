import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const t = s(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.296 13.454a1.127 1.127 0 1 1-1.594 1.594l-4.5-4.5a1.125 1.125 0 0 1 0-1.594l4.5-4.5a1.127 1.127 0 0 1 1.594 1.594L4.594 9.75zM12 8.624h-1.031l2.58-2.58a1.126 1.126 0 0 0-.797-1.923c-.3 0-.586.119-.797.33l-4.5 4.5a1.125 1.125 0 0 0 0 1.594l4.5 4.5a1.127 1.127 0 1 0 1.594-1.594l-2.58-2.576h1.03a7.884 7.884 0 0 1 7.876 7.875 1.125 1.125 0 1 0 2.25 0A10.136 10.136 0 0 0 12 8.625" })
  ] });
});
w.displayName = "ArrowBendDoubleUpLeft";
export {
  w as ArrowBendDoubleUpLeft
};
//# sourceMappingURL=ArrowBendDoubleUpLeft.js.map
