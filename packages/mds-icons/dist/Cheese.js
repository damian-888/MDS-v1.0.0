import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const v = n(), r = a ? d ?? v : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.25 2.625q-.166 0-.323.048l-15 4.5a1.125 1.125 0 0 0-.802 1.077v2.25a1.125 1.125 0 0 0 1.125 1.125H3a1.13 1.13 0 0 1 1.125 1.102 1.09 1.09 0 0 1-.322.786 1.2 1.2 0 0 1-.854.362H2.25A1.125 1.125 0 0 0 1.125 15v3a1.125 1.125 0 0 0 1.125 1.125H21a1.875 1.875 0 0 0 1.875-1.875v-9a5.63 5.63 0 0 0-5.625-5.625m.154 2.25a3.38 3.38 0 0 1 3.028 2.25H9.915zm-3.154 4.5h3v.375a1.5 1.5 0 1 1-3 0zM9 16.875a1.5 1.5 0 0 1 3 0zm11.625 0H14.25a3.75 3.75 0 0 0-7.5 0H3.375v-.777a3.48 3.48 0 0 0 2.034-1.004 3.32 3.32 0 0 0 .966-2.409 3.394 3.394 0 0 0-3-3.29v-.02H12v.375a3.75 3.75 0 0 0 7.5 0v-.375h1.125z" })
  ] });
});
s.displayName = "Cheese";
export {
  s as Cheese
};
//# sourceMappingURL=Cheese.js.map
