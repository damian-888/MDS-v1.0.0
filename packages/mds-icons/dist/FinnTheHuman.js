import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: n,
  ...o
}, d) => {
  const h = t(), e = a ? n ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15 9H9a4.875 4.875 0 1 0 0 9.75h6A4.875 4.875 0 1 0 15 9m0 7.5H9a2.625 2.625 0 0 1 0-5.25h6a2.625 2.625 0 0 1 0 5.25m-4.5-2.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.375-10.5a3.375 3.375 0 0 0-3.182 2.25H7.307A3.375 3.375 0 0 0 .75 6.75v7.125A8.26 8.26 0 0 0 9 22.125h6a8.26 8.26 0 0 0 8.25-8.25V6.75a3.375 3.375 0 0 0-3.375-3.375M21 13.875a6.006 6.006 0 0 1-6 6H9a6.006 6.006 0 0 1-6-6V6.75a1.125 1.125 0 0 1 2.25 0 1.125 1.125 0 0 0 1.125 1.125h11.25A1.125 1.125 0 0 0 18.75 6.75a1.125 1.125 0 1 1 2.25 0z" })
  ] });
});
s.displayName = "FinnTheHuman";
export {
  s as FinnTheHuman
};
//# sourceMappingURL=FinnTheHuman.js.map
