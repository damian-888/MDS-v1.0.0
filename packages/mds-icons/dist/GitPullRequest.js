import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const t = m(), l = a ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M10.125 6a3.375 3.375 0 1 0-4.5 3.182v5.636a3.375 3.375 0 1 0 2.25 0V9.182A3.38 3.38 0 0 0 10.125 6M6.75 4.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m0 14.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m13.125-4.307v-4.446a2.6 2.6 0 0 0-.769-1.857l-2.887-2.89H18a1.125 1.125 0 1 0 0-2.25h-4.5A1.125 1.125 0 0 0 12.375 4.5V9a1.125 1.125 0 1 0 2.25 0V7.22l2.89 2.89a.38.38 0 0 1 .11.265v4.447a3.375 3.375 0 1 0 2.25 0zm-1.125 4.307a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
h.displayName = "GitPullRequest";
export {
  h as GitPullRequest
};
//# sourceMappingURL=GitPullRequest.js.map
