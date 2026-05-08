import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const n = m(), h = a ? o ?? n : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": h, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: h, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.183 9.73a1.125 1.125 0 0 1 .712-1.422l1.125-.375A1.125 1.125 0 0 1 13.5 9v3.75a1.125 1.125 0 1 1-2.25 0V10.5a1.125 1.125 0 0 1-1.067-.77m13.442 9.77a1.125 1.125 0 0 1-1.125 1.125h-21a1.125 1.125 0 1 1 0-2.25h.375V9.75A1.875 1.875 0 0 1 3.75 7.875h3.375V5.25A1.875 1.875 0 0 1 9 3.375h6a1.875 1.875 0 0 1 1.875 1.875v6.375h3.375a1.875 1.875 0 0 1 1.875 1.875v4.875h.375a1.125 1.125 0 0 1 1.125 1.125m-6.75-5.625v4.5h3v-4.5zm-7.5 4.5h5.25V5.625h-5.25zm-5.25 0h3v-8.25h-3z" })
  ] });
});
v.displayName = "Ranking";
export {
  v as Ranking
};
//# sourceMappingURL=Ranking.js.map
