import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = s(), a = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.5 8.625a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M2.67 7.56a1.125 1.125 0 0 1 1.395-.765l6.328 1.845.812-.81a1.125 1.125 0 0 1 1.594 0l2.67 2.67h3.281a1.125 1.125 0 1 1 0 2.25H15c-.298 0-.584-.118-.795-.33l-.458-.457L3.434 8.956A1.125 1.125 0 0 1 2.67 7.56m19.704 12.275a6.92 6.92 0 0 1-5.78.884L1.936 16.454a1.127 1.127 0 0 1-.615-1.814 1.125 1.125 0 0 1 1.244-.342l7.493 2.181 1.294-1.294-3.411-.98a1.124 1.124 0 1 1 .619-2.162l5.25 1.5a1.126 1.126 0 0 1 .486 1.875l-1.774 1.776 4.696 1.369a4.67 4.67 0 0 0 3.908-.6 1.126 1.126 0 0 1 1.248 1.875z" })
  ] });
});
h.displayName = "PersonSimpleSki";
export {
  h as PersonSimpleSki
};
//# sourceMappingURL=PersonSimpleSki.js.map
