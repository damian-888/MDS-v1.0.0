import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const h = s(), e = a ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.344 17.156 7.5H15zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.75-5.625a1.125 1.125 0 0 1-1.125 1.125h-1.125V16.5a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a1.125 1.125 0 1 1 0-2.25h1.125V12a1.125 1.125 0 1 1 2.25 0v1.125h1.125a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
v.displayName = "FilePlus";
export {
  v as FilePlus
};
//# sourceMappingURL=FilePlus.js.map
