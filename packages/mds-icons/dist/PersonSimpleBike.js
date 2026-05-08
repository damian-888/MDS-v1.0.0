import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: r = "1em",
  title: e,
  titleId: l,
  ...o
}, d) => {
  const m = s(), a = e ? l ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.75 7.875a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3.375 9a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.063 12.75a3.937 3.937 0 1 0 0 7.874 3.937 3.937 0 0 0 0-7.874m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375M17.624 12H14.25a1.13 1.13 0 0 1-.796-.33L11.25 9.47l-1.406 1.406 2.955 2.954c.21.212.327.498.326.796v4.5a1.125 1.125 0 1 1-2.25 0v-4.031l-3.42-3.423a1.125 1.125 0 0 1 0-1.594l3-3a1.125 1.125 0 0 1 1.593 0l2.67 2.673h2.907a1.125 1.125 0 0 1 0 2.25" })
  ] });
});
h.displayName = "PersonSimpleBike";
export {
  h as PersonSimpleBike
};
//# sourceMappingURL=PersonSimpleBike.js.map
