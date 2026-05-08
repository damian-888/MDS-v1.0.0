import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...i
}, o) => {
  const h = n(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M9.375 14.25v5.25a1.125 1.125 0 0 1-2.25 0v-1.68l-.578.825a1.124 1.124 0 0 1-1.844 0l-.578-.826V19.5a1.125 1.125 0 0 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.047-.645l1.703 2.433 1.703-2.433a1.125 1.125 0 0 1 2.047.645m7.875 2.625a3.75 3.75 0 0 1-3.75 3.75H12a1.125 1.125 0 0 1-1.125-1.125v-5.25A1.125 1.125 0 0 1 12 13.125h1.5a3.75 3.75 0 0 1 3.75 3.75m-2.25 0a1.5 1.5 0 0 0-1.5-1.5h-.375v3h.375a1.5 1.5 0 0 0 1.5-1.5m5.625-8.625V21a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25c.21.21.329.497.329.795M15 7.5h2.156L15 5.344z" })
  ] });
});
m.displayName = "FileMd";
export {
  m as FileMd
};
//# sourceMappingURL=FileMd.js.map
