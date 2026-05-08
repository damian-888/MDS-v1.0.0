import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const m = l(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...t
}, e) => {
  const i = n(), h = a ? d ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": h, ...t, children: [
    a ? /* @__PURE__ */ o("title", { id: h, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.5 8.626h-2.69a1.125 1.125 0 0 0-1.06-.75h-6a1.125 1.125 0 0 0-1.06.75H6.376v-3.75a.75.75 0 0 1 .75-.75.8.8 0 0 1 .773.599 1.125 1.125 0 1 0 2.204-.448 3.02 3.02 0 0 0-5.977.599v3.75H1.5A1.125 1.125 0 0 0 .375 9.75v3.75a5.63 5.63 0 0 0 5.25 5.61v1.14a1.125 1.125 0 0 0 2.25 0v-1.125h8.25v1.125a1.125 1.125 0 1 0 2.25 0v-1.14a5.63 5.63 0 0 0 5.25-5.61V9.75A1.125 1.125 0 0 0 22.5 8.626m-8.625 1.5h3.75v2.25h-3.75zm7.5 3.375A3.375 3.375 0 0 1 18 16.876H6A3.375 3.375 0 0 1 2.625 13.5v-2.625h9V13.5a1.125 1.125 0 0 0 1.125 1.125h6a1.125 1.125 0 0 0 1.125-1.125v-2.625h1.5z" })
  ] });
});
m.displayName = "Bathtub";
export {
  m as Bathtub
};
//# sourceMappingURL=Bathtub.js.map
