import { jsxs as i, jsx as v } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...d
}, l) => {
  const h = t(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ v("title", { id: r, children: a }) : null,
    /* @__PURE__ */ v("path", { fill: "currentColor", d: "M19.5 5.094V3a1.125 1.125 0 1 0-2.25 0v2.094a3.01 3.01 0 0 0-1.875 2.781v2.508l-2.25-1.29V6.75a1.125 1.125 0 1 0-2.25 0v2.344l-2.25 1.289V7.875a3.01 3.01 0 0 0-1.875-2.78V3A1.125 1.125 0 0 0 4.5 3v2.094a3.01 3.01 0 0 0-1.875 2.781V20.25a1.125 1.125 0 0 0 1.125 1.125h16.5a1.125 1.125 0 0 0 1.125-1.125V7.875a3.01 3.01 0 0 0-1.875-2.78M12 15a1.125 1.125 0 0 0-1.125 1.125v3h-2.25v-6.15L12 11.044l3.375 1.93v6.15h-2.25v-3A1.125 1.125 0 0 0 12 15M4.875 7.875a.75.75 0 0 1 1.5 0v1.5h-1.5zm12.75 0a.75.75 0 1 1 1.5 0v1.5h-1.5zm-12.75 3.75h1.5v7.5h-1.5zm12.75 7.5v-7.5h1.5v7.5z" })
  ] });
});
m.displayName = "Synagogue";
export {
  m as Synagogue
};
//# sourceMappingURL=Synagogue.js.map
