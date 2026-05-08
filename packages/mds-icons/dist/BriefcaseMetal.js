import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, l) => {
  const h = s(), a = e ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 4.875h-3.375V3.75a2.625 2.625 0 0 0-2.625-2.625h-4.5A2.625 2.625 0 0 0 7.125 3.75v1.125H3.75A1.875 1.875 0 0 0 1.875 6.75v12a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.875 1.875 0 0 0-1.875-1.875M4.125 11.25h15.75v3H4.125zm5.25-7.5a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v1.125h-5.25zm10.5 3.375V9H4.125V7.125zm-15.75 11.25V16.5h15.75v1.875z" })
  ] });
});
v.displayName = "BriefcaseMetal";
export {
  v as BriefcaseMetal
};
//# sourceMappingURL=BriefcaseMetal.js.map
