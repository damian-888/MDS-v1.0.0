import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const n = s(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M14.25 7.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25M19.125 13.5v8.25a1.125 1.125 0 1 1-2.25 0v-7.196c-2.336-.316-3.182-1.621-3.88-2.697-.145-.224-.286-.441-.437-.644l-.895 2.062 3.243 2.31a1.12 1.12 0 0 1 .469.915v5.25a1.125 1.125 0 1 1-2.25 0v-4.672l-2.379-1.698-2.965 6.818a1.124 1.124 0 1 1-2.063-.897l5.393-12.404a1.124 1.124 0 0 1 1.545-.553q.447.232.829.562c.635.552 1.04 1.175 1.396 1.724.707 1.089 1.131 1.745 3.119 1.745a1.125 1.125 0 0 1 1.125 1.125m-13.069.926-2.375-1.02a1.126 1.126 0 0 1-.588-1.474l2.25-5.25a1.125 1.125 0 0 1 1.475-.588L9.22 7.125a1.125 1.125 0 1 1-.886 2.063l-1.368-.586-1.363 3.182 1.34.574a1.125 1.125 0 1 1-.886 2.068" })
  ] });
});
v.displayName = "PersonSimpleHike";
export {
  v as PersonSimpleHike
};
//# sourceMappingURL=PersonSimpleHike.js.map
