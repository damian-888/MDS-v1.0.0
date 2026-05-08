import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const h = n(), o = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 21a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 21m0-7.5v3a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 2.625 16.5v-3A1.875 1.875 0 0 1 4.5 11.625H9L7.833 5.093a3.375 3.375 0 0 1 3.323-3.968h1.688a3.375 3.375 0 0 1 3.322 3.968L15 11.625h4.5a1.875 1.875 0 0 1 1.875 1.875M10.047 4.698l1.238 6.927h1.43l1.238-6.927a1.124 1.124 0 0 0-1.11-1.323h-1.687a1.125 1.125 0 0 0-1.108 1.323m9.078 9.177H4.875v2.25h14.25z" })
  ] });
});
s.displayName = "Stamp";
export {
  s as Stamp
};
//# sourceMappingURL=Stamp.js.map
