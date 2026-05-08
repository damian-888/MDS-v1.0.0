import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...l
}, n) => {
  const t = h(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.875 12a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5A1.125 1.125 0 0 1 16.875 12m5.25 0A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12m-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12" })
  ] });
});
m.displayName = "MinusCircle";
export {
  m as MinusCircle
};
//# sourceMappingURL=MinusCircle.js.map
