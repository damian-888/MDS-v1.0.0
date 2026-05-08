import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, h) => {
  const l = n(), e = r ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 15H4.125V5.625h15.75zm-13.5-9.75A1.125 1.125 0 0 1 7.5 7.5h9a1.125 1.125 0 0 1 0 2.25h-9a1.125 1.125 0 0 1-1.125-1.125m0 3.375A1.125 1.125 0 0 1 7.5 10.875h9a1.125 1.125 0 1 1 0 2.25h-9A1.125 1.125 0 0 1 6.375 12m0 3.375A1.125 1.125 0 0 1 7.5 14.25h9a1.125 1.125 0 1 1 0 2.25h-9a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
s.displayName = "Article";
export {
  s as Article
};
//# sourceMappingURL=Article.js.map
