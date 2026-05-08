import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: e = "1em",
  title: a,
  titleId: l,
  ...o
}, i) => {
  const h = n(), r = a ? l ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M1.875 7.5V6A1.875 1.875 0 0 1 3.75 4.125h5c.405 0 .8.132 1.125.375l2.8 2.1a1.124 1.124 0 0 1-.954 1.99 1.1 1.1 0 0 1-.396-.19l-2.7-2.025h-4.5V7.5a1.125 1.125 0 0 1-2.25 0M8.25 18.375H4.125V18a1.125 1.125 0 0 0-2.25 0v.808a1.82 1.82 0 0 0 1.817 1.817H8.25a1.125 1.125 0 1 0 0-2.25m6.75 0h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m6-5.25a1.125 1.125 0 0 0-1.125 1.125v4.125H18.75a1.125 1.125 0 1 0 0 2.25h1.583a1.793 1.793 0 0 0 1.792-1.792V14.25A1.125 1.125 0 0 0 21 13.125m-.75-6.75h-4.5a1.125 1.125 0 0 0 0 2.25h4.125V10.5a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875m-17.25 9a1.125 1.125 0 0 0 1.125-1.125v-3a1.125 1.125 0 0 0-2.25 0v3A1.125 1.125 0 0 0 3 15.375" })
  ] });
});
s.displayName = "FolderSimpleDashed";
export {
  s as FolderSimpleDashed
};
//# sourceMappingURL=FolderSimpleDashed.js.map
