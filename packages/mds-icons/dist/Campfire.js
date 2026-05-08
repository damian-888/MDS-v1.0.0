import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const c = m(), e = a ? l ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.33 21.32a1.125 1.125 0 0 1-1.399.76l-7.93-2.344-7.932 2.343q-.157.046-.319.046a1.125 1.125 0 0 1-.319-2.204l4.599-1.358-4.599-1.358a1.125 1.125 0 0 1 .638-2.157L12 17.392l7.931-2.344a1.125 1.125 0 1 1 .638 2.156l-4.599 1.359 4.599 1.358a1.124 1.124 0 0 1 .76 1.398M6 9.75c0-4.742 5.243-7.62 5.467-7.74a1.13 1.13 0 0 1 1.066 0C12.758 2.13 18 5.008 18 9.75a6 6 0 0 1-12 0m6 3.75a1.125 1.125 0 0 0 1.125-1.125c0-.606-.254-1.176-.75-1.694a4 4 0 0 0-.375-.334 4 4 0 0 0-.375.334c-.5.518-.75 1.088-.75 1.694A1.125 1.125 0 0 0 12 13.5M8.25 9.75c0 .625.156 1.24.455 1.79.45-2.345 2.687-3.493 2.792-3.545a1.13 1.13 0 0 1 1.007 0c.104.052 2.343 1.198 2.791 3.544a3.7 3.7 0 0 0 .455-1.789c0-2.656-2.6-4.67-3.75-5.43-1.148.76-3.75 2.774-3.75 5.43" })
  ] });
});
s.displayName = "Campfire";
export {
  s as Campfire
};
//# sourceMappingURL=Campfire.js.map
