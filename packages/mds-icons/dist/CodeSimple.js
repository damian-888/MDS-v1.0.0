import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: o = "1em",
  title: e,
  titleId: l,
  ...i
}, a) => {
  const t = s(), r = e ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...i, children: [
    e ? /* @__PURE__ */ d("title", { id: r, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M9 6.844 3.193 12 9 17.156a1.13 1.13 0 0 1-1.5 1.688l-6.75-6a1.125 1.125 0 0 1 0-1.688l6.75-6A1.129 1.129 0 1 1 9 6.844m14.25 4.312-6.75-6A1.128 1.128 0 1 0 15 6.844L20.804 12 15 17.156a1.13 1.13 0 0 0 1.5 1.688l6.75-6a1.125 1.125 0 0 0 0-1.688" })
  ] });
});
h.displayName = "CodeSimple";
export {
  h as CodeSimple
};
//# sourceMappingURL=CodeSimple.js.map
