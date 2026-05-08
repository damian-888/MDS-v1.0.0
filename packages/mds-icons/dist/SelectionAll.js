import { jsxs as v, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const n = m(({
  size: e = "1em",
  title: a,
  titleId: o,
  ...r
}, i) => {
  const d = t(), h = a ? o ?? d : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": h, ...r, children: [
    a ? /* @__PURE__ */ l("title", { id: h, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M9.375 3.75A1.125 1.125 0 0 1 10.5 2.625h3a1.125 1.125 0 0 1 0 2.25h-3A1.125 1.125 0 0 1 9.375 3.75M13.5 19.125h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m6-16.5h-2.25a1.125 1.125 0 0 0 0 2.25h1.875V6.75a1.125 1.125 0 1 0 2.25 0V4.5A1.875 1.875 0 0 0 19.5 2.625m.75 6.75a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 1 0 2.25 0v-3a1.125 1.125 0 0 0-1.125-1.125m0 6.75a1.125 1.125 0 0 0-1.125 1.125v1.875H17.25a1.125 1.125 0 1 0 0 2.25h2.25a1.875 1.875 0 0 0 1.875-1.875v-2.25a1.125 1.125 0 0 0-1.125-1.125m-16.5-1.5A1.125 1.125 0 0 0 4.875 13.5v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 0 0 1.125 1.125m3 4.5H4.875V17.25a1.125 1.125 0 0 0-2.25 0v2.25A1.875 1.875 0 0 0 4.5 21.375h2.25a1.125 1.125 0 1 0 0-2.25m-3-11.25A1.125 1.125 0 0 0 4.875 6.75V4.875H6.75a1.125 1.125 0 0 0 0-2.25H4.5A1.875 1.875 0 0 0 2.625 4.5v2.25A1.125 1.125 0 0 0 3.75 7.875m3.75-1.5h9A1.125 1.125 0 0 1 17.625 7.5v9a1.125 1.125 0 0 1-1.125 1.125h-9A1.125 1.125 0 0 1 6.375 16.5v-9A1.125 1.125 0 0 1 7.5 6.375m1.125 9h6.75v-6.75h-6.75z" })
  ] });
});
n.displayName = "SelectionAll";
export {
  n as SelectionAll
};
//# sourceMappingURL=SelectionAll.js.map
