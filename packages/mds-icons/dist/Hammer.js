import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const c = h(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, o) => {
  const t = m(), d = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: d, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "m23.454 9.86-5.95-5.993a9.385 9.385 0 0 0-13.259 0l-.012.013L2.94 5.213A1.125 1.125 0 1 0 4.557 6.78l1.286-1.327a7 7 0 0 1 1.422-1.1l3.891 3.898-8.733 8.734a1.874 1.874 0 0 0 0 2.652l1.94 1.94a1.875 1.875 0 0 0 2.651 0l8.736-8.732.142.141 2.217 2.218a1.874 1.874 0 0 0 2.652 0l2.69-2.69a1.876 1.876 0 0 0 .003-2.653M5.69 19.72l-1.406-1.407 5.842-5.844 1.406 1.406zm7.436-7.439-1.406-1.406 1.829-1.83a1.125 1.125 0 0 0 0-1.593l-3.963-3.96a7.12 7.12 0 0 1 6.325 1.963l2.948 2.97-2.17 2.169-.142-.142a1.126 1.126 0 0 0-1.594 0zm6.311 1.06-1.155-1.154 2.165-2.164 1.153 1.161z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
c.displayName = "Hammer";
export {
  c as Hammer
};
//# sourceMappingURL=Hammer.js.map
