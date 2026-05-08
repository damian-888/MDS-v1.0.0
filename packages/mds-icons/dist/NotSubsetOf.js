import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const f = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...t
}, a) => {
  const i = h(), e = o ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...t, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.257 2.917a1.125 1.125 0 0 0-1.59.076l-.346.382H12a8.62 8.62 0 0 0-6.582 14.193l-1.751 1.925a1.126 1.126 0 1 0 1.665 1.514l1.75-1.925A8.58 8.58 0 0 0 12 20.625h6.75a1.125 1.125 0 1 0 0-2.25H12a6.33 6.33 0 0 1-3.386-.978l11.719-12.89a1.125 1.125 0 0 0-.076-1.59M5.625 12A6.38 6.38 0 0 1 12 5.625h4.275L6.95 15.883A6.34 6.34 0 0 1 5.625 12" })
  ] });
});
f.displayName = "NotSubsetOf";
export {
  f as NotSubsetOf
};
//# sourceMappingURL=NotSubsetOf.js.map
