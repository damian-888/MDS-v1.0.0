import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = m(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "m8.185 14.625-1.875 5.25a1.125 1.125 0 0 1-2.12 0l-1.874-5.25a1.125 1.125 0 0 1 2.119-.75l.815 2.28.816-2.28a1.125 1.125 0 0 1 2.119.75m11.69 3.75H18V18h1.125a1.125 1.125 0 0 0 0-2.25H18v-.375h1.875a1.125 1.125 0 0 0 0-2.25h-3a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 1.125 1.125h3a1.125 1.125 0 0 0 0-2.25m-6.375-5.25a1.125 1.125 0 0 0-1.125 1.125v3.563a.562.562 0 1 1-1.125 0V14.25a1.125 1.125 0 0 0-2.25 0v3.563a2.812 2.812 0 1 0 5.625 0V14.25a1.125 1.125 0 0 0-1.125-1.125m-10.125-3V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.33.497.33.795v1.875a1.125 1.125 0 0 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.126-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0M15 7.5h2.156L15 5.344z" })
  ] });
});
n.displayName = "FileVue";
export {
  n as FileVue
};
//# sourceMappingURL=FileVue.js.map
