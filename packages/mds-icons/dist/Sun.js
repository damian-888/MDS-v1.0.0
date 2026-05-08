import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const c = t(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...e
}, o) => {
  const h = m(), d = l ? i ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": d, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.875 3.375v-1.5a1.125 1.125 0 1 1 2.25 0v1.5a1.125 1.125 0 1 1-2.25 0m7.5 8.625A6.375 6.375 0 1 1 12 5.625 6.38 6.38 0 0 1 18.375 12m-2.25 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0M4.829 6.42a1.127 1.127 0 0 0 1.594-1.593L5.298 3.702a1.127 1.127 0 1 0-1.594 1.594zm0 11.157-1.125 1.125a1.127 1.127 0 1 0 1.594 1.594l1.125-1.125a1.127 1.127 0 1 0-1.594-1.594M18.375 6.75a1.13 1.13 0 0 0 .796-.33l1.125-1.124a1.126 1.126 0 0 0-1.228-1.838q-.207.087-.366.244l-1.125 1.125a1.125 1.125 0 0 0 .798 1.923m.796 10.83a1.127 1.127 0 1 0-1.594 1.593l1.125 1.125a1.127 1.127 0 1 0 1.594-1.594zM4.5 12a1.125 1.125 0 0 0-1.125-1.125h-1.5a1.125 1.125 0 1 0 0 2.25h1.5A1.125 1.125 0 0 0 4.5 12m7.5 7.5a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 19.5m10.125-8.625h-1.5a1.125 1.125 0 1 0 0 2.25h1.5a1.125 1.125 0 1 0 0-2.25" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "Sun";
export {
  c as Sun
};
//# sourceMappingURL=Sun.js.map
