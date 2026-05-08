import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...o
}, i) => {
  const t = s(), r = a ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.688 7.312a7.875 7.875 0 1 0-9.376 9.375 7.875 7.875 0 1 0 9.375-9.375M20.625 15q0 .312-.036.623l-4.125-4.125a7.8 7.8 0 0 0 .375-1.813A5.63 5.63 0 0 1 20.625 15M9.39 14.61a5.63 5.63 0 0 1 5.22-5.22 5.63 5.63 0 0 1-5.22 5.22m4.923-7.453a7.8 7.8 0 0 0-1.813.375L8.375 3.407q.311-.033.625-.032a5.63 5.63 0 0 1 5.313 3.782M6.018 4.234l4.38 4.38a8 8 0 0 0-1.78 1.782L4.233 6.018a5.7 5.7 0 0 1 1.784-1.784M3.375 9q0-.312.036-.623l4.125 4.125a7.8 7.8 0 0 0-.375 1.813A5.63 5.63 0 0 1 3.375 9m6.312 7.843a7.8 7.8 0 0 0 1.813-.375l4.125 4.125a5.634 5.634 0 0 1-5.938-3.75m8.295 2.923-4.38-4.38a8 8 0 0 0 1.78-1.782l4.381 4.381a5.7 5.7 0 0 1-1.78 1.781" })
  ] });
});
c.displayName = "Exclude";
export {
  c as Exclude
};
//# sourceMappingURL=Exclude.js.map
