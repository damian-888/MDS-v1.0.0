import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as f } from "react";
const h = m(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = f(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M10.5 13.875A1.125 1.125 0 0 0 9.375 15v1.781l-2.89-2.887a.38.38 0 0 1-.11-.265V9.182a3.375 3.375 0 1 0-2.25 0v4.447a2.6 2.6 0 0 0 .769 1.856l2.887 2.89H6a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 0 0 1.125-1.125V15a1.125 1.125 0 0 0-1.125-1.125m-5.25-9a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m14.625 9.943v-4.446a2.6 2.6 0 0 0-.769-1.857l-2.887-2.89H18a1.125 1.125 0 1 0 0-2.25h-4.5A1.125 1.125 0 0 0 12.375 4.5V9a1.125 1.125 0 1 0 2.25 0V7.22l2.89 2.89a.38.38 0 0 1 .11.265v4.447a3.375 3.375 0 1 0 2.25 0zm-1.125 4.307a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
h.displayName = "GitDiff";
export {
  h as GitDiff
};
//# sourceMappingURL=GitDiff.js.map
