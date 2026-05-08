import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const A = l(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const v = n(), h = r ? d ?? v : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15 10.875h4.5A1.875 1.875 0 0 0 21.375 9V4.5A1.875 1.875 0 0 0 19.5 2.625H15A1.875 1.875 0 0 0 13.125 4.5v1.125H12A2.625 2.625 0 0 0 9.375 8.25v2.625h-2.25V10.5A1.875 1.875 0 0 0 5.25 8.625h-3A1.875 1.875 0 0 0 .375 10.5v3a1.875 1.875 0 0 0 1.875 1.875h3A1.875 1.875 0 0 0 7.125 13.5v-.375h2.25v2.625A2.625 2.625 0 0 0 12 18.375h1.125V19.5A1.875 1.875 0 0 0 15 21.375h4.5a1.875 1.875 0 0 0 1.875-1.875V15a1.875 1.875 0 0 0-1.875-1.875H15A1.875 1.875 0 0 0 13.125 15v1.125H12a.375.375 0 0 1-.375-.375v-7.5A.375.375 0 0 1 12 7.875h1.125V9A1.875 1.875 0 0 0 15 10.875m-10.125 2.25h-2.25v-2.25h2.25zm10.5 2.25h3.75v3.75h-3.75zm0-10.5h3.75v3.75h-3.75z" })
  ] });
});
A.displayName = "TreeStructure";
export {
  A as TreeStructure
};
//# sourceMappingURL=TreeStructure.js.map
