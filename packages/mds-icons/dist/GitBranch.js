import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, t) => {
  const l = m(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.125 6a3.376 3.376 0 1 0-4.5 3.182V10.5a.375.375 0 0 1-.375.375H9a3 3 0 0 0-.375.027v-1.72a3.375 3.375 0 1 0-2.25 0v5.636a3.375 3.375 0 1 0 2.25 0V13.5A.375.375 0 0 1 9 13.125h8.25a2.625 2.625 0 0 0 2.625-2.625V9.182A3.38 3.38 0 0 0 22.125 6M7.5 4.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m0 14.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m11.25-12a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
s.displayName = "GitBranch";
export {
  s as GitBranch
};
//# sourceMappingURL=GitBranch.js.map
