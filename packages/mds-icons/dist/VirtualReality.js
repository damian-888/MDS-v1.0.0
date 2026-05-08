import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const t = m(), r = a ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m11.906 9.818-2.25 5.25a1.125 1.125 0 0 1-2.068 0l-2.25-5.25a1.125 1.125 0 0 1 2.068-.886l1.219 2.837 1.219-2.837a1.125 1.125 0 0 1 2.062.886M24 12a7.883 7.883 0 0 1-7.875 7.875h-8.25a7.875 7.875 0 0 1 0-15.75h8.25A7.883 7.883 0 0 1 24 12m-2.25 0a5.63 5.63 0 0 0-5.625-5.625h-8.25a5.625 5.625 0 0 0 0 11.25h8.25A5.63 5.63 0 0 0 21.75 12m-3-.75c0 .726-.264 1.428-.743 1.973l.533.75a1.125 1.125 0 1 1-1.83 1.308l-.742-1.037a3 3 0 0 1-.218.009H15v.375a1.125 1.125 0 1 1-2.25 0V9.375a1.125 1.125 0 0 1 1.125-1.125h1.875a3 3 0 0 1 3 3M15 12h.75a.75.75 0 1 0 0-1.5H15z" })
  ] });
});
s.displayName = "VirtualReality";
export {
  s as VirtualReality
};
//# sourceMappingURL=VirtualReality.js.map
