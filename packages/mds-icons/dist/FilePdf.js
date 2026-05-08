import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const n = m(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, h) => {
  const l = t(), d = a ? i ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 15.375v.75h1.125a1.125 1.125 0 1 1 0 2.25H18.75V19.5a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h3a1.125 1.125 0 1 1 0 2.25zm-10.125.75a3 3 0 0 1-3 3H5.25v.375a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h1.5a3 3 0 0 1 3 3m-2.25 0a.75.75 0 0 0-.75-.75H5.25v1.5h.375a.75.75 0 0 0 .75-.75m9.375.75a3.75 3.75 0 0 1-3.75 3.75h-1.5A1.125 1.125 0 0 1 9.375 19.5v-5.25a1.125 1.125 0 0 1 1.125-1.125H12a3.75 3.75 0 0 1 3.75 3.75m-2.25 0a1.5 1.5 0 0 0-1.5-1.5h-.375v3H12a1.5 1.5 0 0 0 1.5-1.5m-10.125-6.75V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795v1.875a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0M15 5.344V7.5h2.156z" })
  ] });
});
n.displayName = "FilePdf";
export {
  n as FilePdf
};
//# sourceMappingURL=FilePdf.js.map
