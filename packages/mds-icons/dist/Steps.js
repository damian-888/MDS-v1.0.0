import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, t) => {
  const h = s(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.625 5.25A1.125 1.125 0 0 1 22.5 6.375h-4.125V9.75a1.125 1.125 0 0 1-1.125 1.125h-4.125v3.375A1.125 1.125 0 0 1 12 15.375H7.875v3.375a1.125 1.125 0 0 1-1.125 1.125H1.5a1.125 1.125 0 1 1 0-2.25h4.125V14.25a1.125 1.125 0 0 1 1.125-1.125h4.125V9.75A1.125 1.125 0 0 1 12 8.625h4.125V5.25a1.125 1.125 0 0 1 1.125-1.125h5.25a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "Steps";
export {
  m as Steps
};
//# sourceMappingURL=Steps.js.map
