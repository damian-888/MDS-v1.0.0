import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...e
}, i) => {
  const t = m(), o = a ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.875 15.375v-2.812a1.86 1.86 0 0 0-1.336-1.796l-.029-.008-3.135-.854v-2.78a1.125 1.125 0 1 0-2.25 0v2.17l-1.5-.406V5.625H15a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25h.375v2.25H3.75a1.125 1.125 0 0 0 0 2.25h2.625a6.006 6.006 0 0 1 6 6v1.125a1.125 1.125 0 0 0 1.125 1.125h2.7a3.75 3.75 0 1 0 6.675-3m-10.5-4.906a8.23 8.23 0 0 0-6-2.594v-2.25h6zm4.064 5.656h-1.814V11.22l6 1.624v1.106a3.756 3.756 0 0 0-4.186 2.175m3.436 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M6 11.625a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75m0 7.5a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25M7.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
n.displayName = "Tractor";
export {
  n as Tractor
};
//# sourceMappingURL=Tractor.js.map
