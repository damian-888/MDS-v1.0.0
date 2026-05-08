import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: r,
  titleId: a,
  ...i
}, d) => {
  const n = s(), e = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M14.25 7.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m6.375 10.5A1.125 1.125 0 0 1 19.5 15c-3.469 0-5.182-1.732-6.563-3.122q-.24-.243-.468-.469l-.81 1.861 3.247 2.314a1.12 1.12 0 0 1 .469.916v5.25a1.125 1.125 0 0 1-2.25 0v-4.672l-2.379-1.698-2.965 6.818a1.124 1.124 0 1 1-2.062-.897l4.693-10.793q-.998.07-2.344.787a15 15 0 0 0-2.797 1.99 1.125 1.125 0 1 1-1.54-1.64c.245-.23 6.034-5.594 9.758-2.36.37.32.717.67 1.052 1.01 1.25 1.262 2.427 2.455 4.959 2.455a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
c.displayName = "PersonSimpleWalk";
export {
  c as PersonSimpleWalk
};
//# sourceMappingURL=PersonSimpleWalk.js.map
