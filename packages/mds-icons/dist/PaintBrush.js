import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, t) => {
  const l = s(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.125 3A1.125 1.125 0 0 0 21 1.875c-4.198 0-8.437 4.55-10.865 7.688a6 6 0 0 0-7.5 5.812c0 1.125-.291 2.13-.866 2.977a4 4 0 0 1-.888.965 1.114 1.114 0 0 0-.049 1.837c.197.145.435.222.678.221h7.125a6 6 0 0 0 5.803-7.5C17.578 11.442 22.125 7.2 22.125 3m-2.473 1.35c-.375 1.21-1.233 2.576-2.524 4.022-.281.318-.577.628-.876.927a9.8 9.8 0 0 0-1.547-1.548q.449-.45.926-.876c1.446-1.292 2.81-2.147 4.021-2.526M8.632 19.124H3.938a7.5 7.5 0 0 0 .95-3.75 3.75 3.75 0 1 1 3.75 3.75zm3.579-8.561c.293-.369.614-.759.96-1.158.537.41 1.017.89 1.427 1.429-.4.345-.79.666-1.158.959a6 6 0 0 0-1.229-1.23" })
  ] });
});
h.displayName = "PaintBrush";
export {
  h as PaintBrush
};
//# sourceMappingURL=PaintBrush.js.map
