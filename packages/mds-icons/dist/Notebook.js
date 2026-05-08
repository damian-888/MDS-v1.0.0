import { jsxs as l, jsx as h } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, a) => {
  const t = m(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ h("title", { id: e, children: o }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M10.125 10.125A1.125 1.125 0 0 1 11.25 9h5.25a1.125 1.125 0 0 1 0 2.25h-5.25a1.125 1.125 0 0 1-1.125-1.125M16.5 12.75h-5.25a1.125 1.125 0 1 0 0 2.25h5.25a1.125 1.125 0 1 0 0-2.25m4.875-8.25v15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 19.5v-15A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-16.5 14.625h1.5V4.875h-1.5zm14.25-14.25h-10.5v14.25h10.5z" })
  ] });
});
s.displayName = "Notebook";
export {
  s as Notebook
};
//# sourceMappingURL=Notebook.js.map
