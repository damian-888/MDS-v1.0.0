import { jsxs as v, jsx as h } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const l = m(), e = a ? i ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ h("title", { id: e, children: a }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M21.75 14.25a1.125 1.125 0 0 1-1.125 1.125h-.75V19.5a1.125 1.125 0 1 1-2.25 0v-4.125h-.75a1.125 1.125 0 1 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125M8.625 16.125a3 3 0 0 1-3 3H5.25v.375a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h1.5a3 3 0 0 1 3 3m-2.25 0a.75.75 0 0 0-.75-.75H5.25v1.5h.375a.75.75 0 0 0 .75-.75m9 0a3 3 0 0 1-3 3H12v.375a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 0 1 1.125-1.125h1.5a3 3 0 0 1 3 3m-2.25 0a.75.75 0 0 0-.75-.75H12v1.5h.375a.75.75 0 0 0 .75-.75m-9.75-6V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795v1.875a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0M15 7.5h2.156L15 5.344z" })
  ] });
});
n.displayName = "FilePpt";
export {
  n as FilePpt
};
//# sourceMappingURL=FilePpt.js.map
