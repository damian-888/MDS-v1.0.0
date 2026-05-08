import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = c(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.333 2.994a1.125 1.125 0 1 0-1.665 1.513l1.927 2.12c-1.47 2.3-2.22 4.609-2.22 6.874a8.625 8.625 0 0 0 14.344 6.46l.953 1.046a1.125 1.125 0 0 0 1.665-1.513zM12 19.876A6.38 6.38 0 0 1 5.625 13.5c0-1.663.52-3.387 1.546-5.14l9.03 9.938a6.36 6.36 0 0 1-4.2 1.577M8.682 4.448a1.125 1.125 0 0 1 .012-1.594A23 23 0 0 1 11.355.576a1.125 1.125 0 0 1 1.29 0c.327.23 7.98 5.672 7.98 12.925a9 9 0 0 1-.093 1.25 1.125 1.125 0 1 1-2.227-.323 6.5 6.5 0 0 0 .07-.927c0-4.962-4.64-9.18-6.375-10.583-.435.35-1.05.875-1.726 1.541a1.124 1.124 0 0 1-1.592-.01" })
  ] });
});
h.displayName = "DropSlash";
export {
  h as DropSlash
};
//# sourceMappingURL=DropSlash.js.map
