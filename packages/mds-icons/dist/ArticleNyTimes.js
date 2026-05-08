import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, h) => {
  const l = n(), e = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M14.625 8.625A1.125 1.125 0 0 1 15.75 7.5h6a1.125 1.125 0 0 1 0 2.25h-6a1.125 1.125 0 0 1-1.125-1.125m7.125 2.625h-6a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m0 3.75H7.5a1.125 1.125 0 1 0 0 2.25h14.25a1.125 1.125 0 1 0 0-2.25m0 3.75H7.5a1.125 1.125 0 1 0 0 2.25h14.25a1.125 1.125 0 1 0 0-2.25M9 13.5a1.125 1.125 0 1 0 0-2.25h-.375V6.375h2.25v.375a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 4.125H3A1.125 1.125 0 0 0 1.875 5.25v1.5a1.125 1.125 0 0 0 2.25 0v-.375h2.25v4.875H6a1.125 1.125 0 1 0 0 2.25z" })
  ] });
});
s.displayName = "ArticleNyTimes";
export {
  s as ArticleNyTimes
};
//# sourceMappingURL=ArticleNyTimes.js.map
