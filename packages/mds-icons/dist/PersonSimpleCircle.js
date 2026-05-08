import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const n = s(), l = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: l, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M10.125 7.5a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0m7.125 3.75a1.125 1.125 0 0 1-1.125 1.125h-3v.048l2.449 3.848a1.125 1.125 0 0 1-1.899 1.208L12 14.845l-1.676 2.634a1.125 1.125 0 0 1-1.898-1.208l2.449-3.848v-.048h-3a1.125 1.125 0 1 1 0-2.25h8.25a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
h.displayName = "PersonSimpleCircle";
export {
  h as PersonSimpleCircle
};
//# sourceMappingURL=PersonSimpleCircle.js.map
