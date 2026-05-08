import { jsxs as l, jsx as h } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const v = m(), r = a ? i ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ h("title", { id: r, children: a }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M12.75 10.125H4.5a1.125 1.125 0 0 0-1.125 1.125v8.25A1.125 1.125 0 0 0 4.5 20.625h8.25a1.125 1.125 0 0 0 1.125-1.125v-8.25a1.125 1.125 0 0 0-1.125-1.125m-1.125 8.25h-6v-6h6zm9-.75v1.125a1.875 1.875 0 0 1-1.875 1.875h-1.875a1.125 1.125 0 1 1 0-2.25h1.5v-.75a1.125 1.125 0 1 1 2.25 0m0-6.75v2.25a1.125 1.125 0 1 1-2.25 0v-2.25a1.125 1.125 0 1 1 2.25 0m0-5.625v1.5a1.125 1.125 0 1 1-2.25 0V5.625H17.25a1.125 1.125 0 0 1 0-2.25h1.5a1.875 1.875 0 0 1 1.875 1.875M14.25 4.5a1.125 1.125 0 0 1-1.125 1.125h-2.25a1.125 1.125 0 0 1 0-2.25h2.25A1.125 1.125 0 0 1 14.25 4.5M3.375 7.125V5.25A1.875 1.875 0 0 1 5.25 3.375h1.125a1.125 1.125 0 0 1 0 2.25h-.75v1.5a1.125 1.125 0 0 1-2.25 0" })
  ] });
});
n.displayName = "Resize";
export {
  n as Resize
};
//# sourceMappingURL=Resize.js.map
