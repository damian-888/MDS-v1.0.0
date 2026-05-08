import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const t = m(({
  size: h = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const i = n(), r = a ? l ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.5 11.25a1.125 1.125 0 0 1 1.125-1.125h.75v-.75a1.125 1.125 0 0 1 2.25 0v.75h.75a1.125 1.125 0 1 1 0 2.25h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75A1.125 1.125 0 0 1 7.5 11.25m16.5 0v6a1.875 1.875 0 0 1-1.875 1.875h-.943a3.375 3.375 0 0 1-6.364 0h-4.136a3.375 3.375 0 0 1-6.364 0H3a1.875 1.875 0 0 1-1.875-1.875V6.75A1.875 1.875 0 0 1 3 4.875h14.25A1.125 1.125 0 0 1 18.375 6v.375h2.492a1.865 1.865 0 0 1 1.74 1.178l1.313 3.282c.053.132.08.273.08.415m-5.625-2.625v1.5h2.839l-.6-1.5zm-15 8.25h.943a3.375 3.375 0 0 1 6.364 0h4.136a3.4 3.4 0 0 1 1.307-1.68v-8.07H3.375zM8.625 18a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0m10.5 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0m2.625-1.125v-4.5h-3.375v2.272a3.38 3.38 0 0 1 2.807 2.228z" })
  ] });
});
t.displayName = "Ambulance";
export {
  t as Ambulance
};
//# sourceMappingURL=Ambulance.js.map
