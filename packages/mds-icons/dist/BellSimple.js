import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: l = "1em",
  title: e,
  titleId: o,
  ...d
}, a) => {
  const t = n(), r = e ? o ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.121 15.556c-.813-1.4-1.246-3.409-1.246-5.806a7.875 7.875 0 0 0-15.75 0c0 2.398-.43 4.406-1.244 5.806a1.883 1.883 0 0 0 .679 2.571c.286.165.61.25.94.248h15a1.85 1.85 0 0 0 1.623-.937 1.88 1.88 0 0 0-.002-1.882m-15.996.569c.83-1.687 1.25-3.83 1.25-6.375a5.625 5.625 0 0 1 11.25 0c0 2.543.42 4.688 1.25 6.375zm11 4.875A1.125 1.125 0 0 1 15 22.125H9a1.125 1.125 0 1 1 0-2.25h6A1.125 1.125 0 0 1 16.125 21" })
  ] });
});
h.displayName = "BellSimple";
export {
  h as BellSimple
};
//# sourceMappingURL=BellSimple.js.map
