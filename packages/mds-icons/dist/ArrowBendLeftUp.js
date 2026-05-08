import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const f = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...i
}, a) => {
  const t = w(), o = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 21a1.125 1.125 0 0 1-1.125 1.125A10.137 10.137 0 0 1 8.625 12V5.719l-2.58 2.577a1.127 1.127 0 1 1-1.593-1.594l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.127 1.127 0 0 1-1.594 1.594l-2.577-2.577v6.28a7.883 7.883 0 0 0 7.875 7.876A1.125 1.125 0 0 1 19.875 21" })
  ] });
});
f.displayName = "ArrowBendLeftUp";
export {
  f as ArrowBendLeftUp
};
//# sourceMappingURL=ArrowBendLeftUp.js.map
