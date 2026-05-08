import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, l) => {
  const h = n(), e = r ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 5.625H3A1.875 1.875 0 0 0 1.125 7.5v6.75A1.875 1.875 0 0 0 3 16.125h1.875v2.625a1.125 1.125 0 0 0 2.25 0v-2.625h9.75v2.625a1.125 1.125 0 1 0 2.25 0v-2.625H21a1.875 1.875 0 0 0 1.875-1.875V7.5A1.875 1.875 0 0 0 21 5.625m-.375 5.531-3.281-3.281h3.281zm-4.031 2.719-6-6h3.562l6 6zm-6.75 0-6-6h3.562l6 6zm-6.469-3.281 3.281 3.281H3.375z" })
  ] });
});
v.displayName = "Barricade";
export {
  v as Barricade
};
//# sourceMappingURL=Barricade.js.map
